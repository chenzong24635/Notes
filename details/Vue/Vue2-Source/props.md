### 为什么给自定义组件绑定属性，组件就能获取数据
<my a=1 b=2 />


```js
// src\core\vdom\create-component.js

export function createComponent (
  Ctor: Class<Component> | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array<VNode>,
  tag?: string
){
  ...
  // 获取 props 数据
  const propsData = extractPropsFromVNodeData(data,Ctor,tag)
  ...

  const vnode =new VNode(
    ...
    {Ctor,propsData,listeners,tag,children}
  )
}

// src\core\instance\init.js
// 初始化内部组件

export function initInternalComponent (vm: Component, options: InternalComponentOptions) {
  const opts = vm.$options = Object.create(vm.constructor.options)
  ...
  const vnodeComponentOptions = parentVnode.componentOptions
  opts.propsData = vnodeComponentOptions.propsData //属性放在实例上
  ...
}

// src\core\instance\state.js
function initProps (vm: Component, propsOptions: Object) {
  const propsData = vm.$options.propsData || {} 
  const props = vm._props = {}
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  const keys = vm.$options._propKeys = []
  const isRoot = !vm.$parent
  // root instance props should be converted
  // 非根实例，属性无需响应式转换
  if (!isRoot) {
    toggleObserving(false)
  }
  // propsOptions是对传入props的校验,如：
  /* 
    props:{
      count: {
        type: Number,
        default: 1
      }
    }
  */
  for (const key in propsOptions) {
    keys.push(key)
    // 校验，获取
    const value = validateProp(key, propsOptions, propsData, vm)
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      ...
      defineReactive(props, key, value, () => {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            `Avoid mutating a prop directly since the value will be ` +
            `overwritten whenever the parent component re-renders. ` +
            `Instead, use a data or computed property based on the prop's ` +
            `value. Prop being mutated: "${key}"`,
            vm
          )
        }
      })
    } else {
      defineReactive(props, key, value)
    }
    if (!(key in vm)) {
      proxy(vm, `_props`, key)
    }
  }
  toggleObserving(true)
}
```

### 自定义组件绑定的方法
```js
<my @click="fn"  />
my.$on('click',fn)
my.$emit('click')
//src\core\vdom\create-component.js

export function createComponent (
  Ctor: Class<Component> | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array<VNode>,
  tag?: string
){
  const listeners = data.on // 事件相关

  const vnode =new VNode(
    ...
    {Ctor,propsData,listeners,tag,children}
  )
}


// core/instance/init.js
// 初始化内部组件
export function initInternalComponent (vm: Component, options: InternalComponentOptions) {
  const opts = vm.$options = Object.create(vm.constructor.options)
  ...
  const vnodeComponentOptions = parentVnode.componentOptions
  opts.parentListeners = vnodeComponentOptions.listeners //事件合并
  ...
}

// core/instance/events.js

export function initEvents (vm: Component) {
  vm._events = Object.create(null)

  // _hasHookEvent作用是判断是否存在生命周期钩子的事件侦听器
  // 当组件检测到存在对子组件生命周期钩子的事件侦听器时，会将 vm._hasHookEvent 设置为 true
  // 作用在 lifecycle,js 里callHook函数
  /*   <child
    @hook:created="handleChildCreated"
    @hook:mounted="handleChildMounted"
  /> */
  vm._hasHookEvent = false
  // init parent attached events
  const listeners = vm.$options._parentListeners
  if (listeners) {
    // 更新组件事件
    updateComponentListeners(vm, listeners)
  }
}
```
