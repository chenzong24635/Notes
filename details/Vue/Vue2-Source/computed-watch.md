[](https://juejin.im/post/6844904120290131982)

## Watcher源码
```js
// src\core\observer\watcher.js

export default class Watcher {
  vm: Component;
  expression: string;
  cb: Function;
  id: number;
  deep: boolean;
  user: boolean;
  lazy: boolean;
  sync: boolean;
  dirty: boolean;
  active: boolean;
  deps: Array<Dep>;
  newDeps: Array<Dep>;
  depIds: SimpleSet;
  newDepIds: SimpleSet;
  before: ?Function;
  getter: Function;
  value: any;

  constructor (
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    this.vm = vm
    if (isRenderWatcher) {
      // 判断 isRenderWatcher，
      // 接着把当前 watcher 的实例赋值给 vm._watcher
      vm._watcher = this
    }
    // 把当前 wathcer 实例 push 到 vm._watchers 中，
    // vm._watcher 是专门用来监听 vm 上数据变化然后重新渲染的，
    // 所以它是一个渲染相关的 watcher，因此在 callUpdatedHooks 函数中，
    // 只有 vm._watcher 的回调执行完毕后，才会执行 updated 钩子函数
    vm._watchers.push(this)
    // options
    if (options) {
      this.deep = !!options.deep
      this.user = !!options.user // 用户创建的 Watcher 实例
      this.lazy = !!options.lazy
      this.sync = !!options.sync
      this.before = options.before
    } else {
      this.deep = this.user = this.lazy = this.sync = false
    }
    this.cb = cb
    this.id = ++uid // uid for batching
    this.active = true
    this.dirty = this.lazy // for lazy watchers 计算属性是惰性求值
    this.deps = []
    this.newDeps = []
    this.depIds = new Set()
    this.newDepIds = new Set()
    this.expression = process.env.NODE_ENV !== 'production'
      ? expOrFn.toString()
      : ''
    // parse expression for getter
    // 把表达式expOrFn解析成getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      // 自定义的 watch的expOrFn应该是个key 或者 'a.b.c'这样的访问路径
      this.getter = parsePath(expOrFn)
      if (!this.getter) {
        this.getter = noop
        process.env.NODE_ENV !== 'production' && warn(
          `Failed watching path: "${expOrFn}" ` +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        )
      }
    }
    // 惰性求值
    this.value = this.lazy
      ? undefined
      : this.get()
  }

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  // 依赖收集
  get () {
    // 将自身 watcher观察者实例 赋值给Dep.target，用以依赖收集
    pushTarget(this)
    let value
    const vm = this.vm
    try {
      /*
        执行了getter操作，看似执行了渲染操作，其实是执行了依赖收集。
        在将Dep.target设置为自生观察者实例以后，执行getter操作。
        譬如说现在的的data中可能有a、b、c三个数据，getter渲染需要依赖a跟c，
        那么在执行getter的时候就会触发a跟c两个数据的getter函数，
        在getter函数中即可判断Dep.target是否存在然后完成依赖收集，
        将该观察者对象放入闭包中的Dep的subs中去。
      */
      value = this.getter.call(vm, vm)
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`)
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value)
      }
      popTarget()
      // 清空 newDepIds 属性和 newDeps
      this.cleanupDeps()
    }
    return value
  }

  /**
   * Add a dependency to this directive.
   */
  // Dep 添加 watcher
  addDep (dep: Dep) {
    const id = dep.id
    // 防止重复收集依赖
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) { // 多次求值中避免收集重复依赖的
        dep.addSub(this) // 添加 watcher
      }
    }
  }

  /**
   * Clean up for dependency collection.
   */
  cleanupDeps () {
    let i = this.deps.length
    while (i--) {
      const dep = this.deps[i]
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this)
      }
    }
    let tmp = this.depIds
    this.depIds = this.newDepIds
    this.newDepIds = tmp
    this.newDepIds.clear()
    tmp = this.deps
    this.deps = this.newDeps
    this.newDeps = tmp
    this.newDeps.length = 0
  }

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  // 依赖发生改变的时候执行回调
  update () {
    /* istanbul ignore else */
    if (this.lazy) { // 是不是计算属性的观察者
      this.dirty = true // 代表着还没有求值
      // 后面 evaluate方法 对计算属性求值时，才会将 this.dirty 设置为 false，代表着已经求过值了。
    } else if (this.sync) { // 当变化发生时是否同步更新变化
      this.run() // 同步则执行run直接渲染视图
    } else {
      // 异步则 将当前观察者对象放到一个异步更新队列, 依旧是调用 run()
      queueWatcher(this)
    }
  }

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  run () {
    if (this.active) {
      const value = this.get()

      // 即便值相同，拥有Deep属性的观察者以及在对象／数组上的观察者应该被触发更新，因为它们的值可能发生改变。
      /* const data = {
        obj: {
          a: 1
        }
      }
      const obj1 = data.obj
      data.obj.a = 2
      const obj2 = data.obj
      console.log(obj1 === obj2) // true
      obj1，obj2 具有相同的引用，所以他们总是相等的，但数据改变了
      */
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        const oldValue = this.value
        this.value = value // 设置新的值
        // 触发回调
        if (this.user) { // 这个watch是用户定义的
          try {
            this.cb.call(this.vm, value, oldValue)
          } catch (e) {
            handleError(e, this.vm, `callback for watcher "${this.expression}"`)
          }
        } else {
          this.cb.call(this.vm, value, oldValue)
        }
      }
    }
  }

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  // 求值，然后把 dirty 置为 false。
  evaluate () {
    this.value = this.get()
    this.dirty = false
  }

  /**
   * Depend on all deps collected by this watcher.
   */
  depend () {
    let i = this.deps.length
    while (i--) {
      this.deps[i].depend()
    }
  }

  /**
   * Remove self from all dependencies' subscriber list.
   */
  // 解除当前观察者对属性的观察
  teardown () {
    if (this.active) { // 判断是否已经解除绑定
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) { // 该组件实例是否已经被销毁
        remove(this.vm._watchers, this)
      }
      let i = this.deps.length
      while (i--) {
        this.deps[i].removeSub(this)
      }
      this.active = false
    }
  }
}
```

## watcher 
watcher 的概念，它的核心概念是 get 求值，和 update 更新。
* 在 get 求值的时候，它会先把自身也就是 watcher 本身赋值给 Dep.target 这个全局变量。
* 然后 get 求值的过程中，会读取到响应式属性，由于Dep.target存在那么响应式属性的 dep 就会收集到这个 watcher 作为依赖（dep.depend()）。
* 下次响应式属性更新了，就会从 dep 中找出它收集到的 watcher，触发 watcher.update() 去更新。

watcher有三种类型
* 渲染watcher
* 用户定义的 watch（$watch）
* computed watcher


## 用户自定义 watch
相当于vm.$watch

```js
// src\core\instance\state.js
export function initState (vm: Component) {
  // 初始化 watch  选项
  // 判断 opts.watch 是否存在 且 是不是原生的 watch 对象（Firefox 中原生提供了 Object.prototype.watch 函数）
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}  
```

进入 initWatch
```js
// src\core\instance\state.js
function initWatch (vm: Component, watch: Object) {
  // 遍历用户定义的watch
  for (const key in watch) {
    const handler = watch[key]
    // 如果watch是数组(watch监听属性变化时，可以执行多个方法)
    if (Array.isArray(handler)) {
      /* 例
        watch: {
          name: [ // name改变时，执行了三个方法
            'sayName1',
            function(newVal, oldVal) {},
            {
              handler: 'sayName3',
              immediate: true
            }
          ]
        },
      */
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}

function createWatcher (
  vm: Component,
  expOrFn: string | Function,
  handler: any,
  options?: Object
) {
  // 为普通对象时
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  // 为字符串时,指向 methods 选项中同名函数作为回调函数
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}
```
可以看出， 用户定义的watch会调用 vm.$watch，其在 stateMixin中定义绑定到Vue.prototype

```js
// src\core\instance\state.js
export function stateMixin (Vue: Class<Component>) {
  Vue.prototype.$watch = function (
    expOrFn: string | Function,
    cb: any,
    options?: Object
  ): Function {
    const vm: Component = this
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true // 表示这观察者实例是用户创建的
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) { // 立即执行该watch
      try {
        cb.call(vm, watcher.value)
      } catch (error) {
        handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`)
      }
    }
    // 返回一个函数，执行后解除watch绑定
    return function unwatchFn () {
      watcher.teardown()
    }
  }
}
```
### immediate: true实现
```js
// src\core\instance\state.js
export function stateMixin (Vue: Class<Component>) {
    ... 
  Vue.prototype.$watch = function (){
    ... 
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) { // 立即执行该watch
      try {
        // handler函数
        cb.call(vm, watcher.value)
      } catch (error) {
        handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`)
      }
    }
    ...
  }
}
```

### deep:true实现
当用户指定了watch中的deep属性为true时，如果当前监控的值是对象类型，会对对象深层属性进行 递归收集依赖，这样对象深层属性发生变化时也会触发 watch 的回调函数，通知数据更新。

但对性能上有所损耗，因此对象不要做太深的嵌套

```js
export default class Watcher {
...
  get () {
    ...
    if (this.deep) {
        traverse(value)
    }
    ...  
  }
...
}

// src\core\observer\traverse.js
export function traverse (val: any) {
  _traverse(val, seenObjects)
  seenObjects.clear()
}

function _traverse (val: any, seen: SimpleSet) {
  let i, keys
  const isA = Array.isArray(val)
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id
    if (seen.has(depId)) {
      return
    }
    seen.add(depId)
  }
  if (isA) {
    i = val.length
    while (i--) _traverse(val[i], seen)
  } else {
    keys = Object.keys(val)
    i = keys.length
    while (i--) _traverse(val[keys[i]], seen)
  }
}
```


## computed的watcher
computed 内部实现了一个惰性(lazy: true)的 watcher,其内部通过 dirty（用于缓存） 属性标记计算属性是否需要重新求值（为true时，表示这个数据是脏数据，需要重新求值）。


* 响应式的值 更新
* 同时通知 `computed watcher` 和 `渲染 watcher` 更新
* `computed watcher` 把 dirty 设置为 true
* 视图渲染读取到 `computed` 的值，由于 dirty 为true 所以 `computed watcher` 重新求值。


Vue 会对 options 中的每个 computed 属性也用 watcher 去包装起来，它的 get 函数显然就是要执行用户定义的求值函数,可以称作 `计算 watcher`
```js
// src\core\instance\state.js
export function initState (vm: Component) {
  // 初始化 computed  选项
  if (opts.computed) initComputed(vm, opts.computed)
}
```

进入 initComputed 看看
```js
// src\core\instance\state.js
// 传入watcher的options，！！！，表示computed watcher
const computedWatcherOptions = { lazy: true }
/* 
  vm: vue实例
  computed： 用户定义的computed
 */
function initComputed (vm: Component, computed: Object) {
  // 定义了一个空的对象，用来存放所有计算属性相关的 watcher
  const watchers = vm._computedWatchers = Object.create(null)
  const isSSR = isServerRendering()
  // 依次为每个 computed 属性定义
  for (const key in computed) {
    const userDef = computed[key]
    // 计算属性有两种写法：函数，对象
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    ...

    if (!isSSR) {
      watchers[key] = new Watcher(
        vm,  
        getter || noop, // 用户传入的求值函数
        noop, // 回调函数
        computedWatcherOptions // 声明 lazy 属性 标记 computed watcher
      )
    }
    // 计算属性是否已定义则去定义
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    }
    ...

  }
}
```
首先定义了一个空的对象watchers，用来存放所有计算属性相关的 watcher，后文我们会把它叫做 `计算watcher`。



然后循环为每个 computed 属性生成了一个 计算watcher。

它的形态保留关键属性简化后是这样的：
```js
{
  deps: [],
  dirty: true,
  getter: 用户传入的求值函数,
  lazy: true,
  value: undefined
}
```

Watcher构造函数里有这么一段，
```js
// 惰性求值
this.value = this.lazy
  ? undefined
  : this.get()
```

可以看到它的 value 刚开始是 undefined，lazy 是 true，说明它的值是惰性计算的，只有到真正在模板里去读取它的值后才会计算

`而dirty 属性是缓存的关键`

新建一个新的computed时会触发defineComputed方法
```js
// src\core\instance\state.js
const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}


export function defineComputed (
  target: any,
  key: string,
  userDef: Object | Function
) {
  const shouldCache = !isServerRendering()
  // 用户定义的computed 
  // 是函数形式
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef)
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop
    sharedPropertyDefinition.set = userDef.set || noop
  }
  // 没有定义set函数时，却对其赋值 会报错
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        `Computed property "${key}" was assigned to but it has no setter.`,
        this
      )
    }
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

// computed的get
function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      // 数据是否需要更新
      if (watcher.dirty) {
        // 更新数据
        watcher.evaluate() // 专为计算watcher设计的求值函数
      }
      // 执行依赖收集
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
  }
}
```


## 