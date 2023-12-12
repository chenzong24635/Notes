
[深入剖析：Vue核心之虚拟DOM](https://juejin.im/post/5d36cc575188257aea108a74)


## 真实DOM
webkit 渲染引擎工作流程图

先看一个简单的 div 元素的属性
![](/img/Vue/divdom.png)

[浏览器页面渲染](/details/面试题/浏览器页面渲染.md)

## Virtual DOM

由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟Dom的产生原因。


Vue 使用了 Virtual DOM（虚拟 DOM）来更新 DOM 节点，提升渲染性能。借鉴了开源库snabbdom的实现。


Virtual DOM本质就是用JS对象去描述一个DOM节点,是对真实DOM的抽象。(也就是源码中的VNode类，它定义在src/core/vdom/vnode.js中。)，最终通过diff算法对比差异进行更新DOM（减少对真实DOM的操作）

Virtual DOM不依赖真实平台从而可以实现跨平台


Virtual DOM 结构类似 ast；
Virtual DOM是 dom解析， ast是语法解析


###  源码
Virtual DOM映射到真实DOM要经历VNode的create、diff、patch等阶段。
`src\core\vdom\vnode.js`
```js
export default class VNode {
  tag: string | void; // vnode的标签名
  data: VNodeData | void; // 标签属性 包括class，attribute，style，props，key绑定的事件等
  children: ?Array<VNode>; // vnode的子节点
  text: string | void; // vnode的文本内容
  elm: Node | void; // vnode的对应的真实dom节点
  ns: string | void;
  context: Component | void; // rendered in this component's scope // vnode上下文，为 Vue Component 的定义
  key: string | number | void; // vnode的标记，在diff过程中可以提高diff的效率
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ?ComponentOptions; // for SSR caching
  devtoolsMeta: ?Object; // used to store functional render context for devtools
  fnScopeId: ?string; // functional scope id support

  constructor (
    tag?: string,
    data?: VNodeData,
    children?: ?Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
    this.ns = undefined
    this.context = context
    this.fnContext = undefined
    this.fnOptions = undefined
    this.fnScopeId = undefined
    this.key = data && data.key
    this.componentOptions = componentOptions
    this.componentInstance = undefined
    this.parent = undefined
    this.raw = false
    this.isStatic = false
    this.isRootInsert = true
    this.isComment = false
    this.isCloned = false
    this.isOnce = false
    this.asyncFactory = asyncFactory
    this.asyncMeta = undefined
    this.isAsyncPlaceholder = false
  }

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  get child (): Component | void {
    return this.componentInstance
  }
}
```

## 源码创建 VNode 过程
### （1）初始化vue

实例化一个 vue 实例时调用原型方法，_init
`src\core\instance\index.js`
```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 在Vue.prototype上挂载方法
initMixin(Vue) // 实现上面的Vue函数的 _init 这个初始化方法
stateMixin(Vue) // 实现$data,$props,$set,$delete, $watch
eventsMixin(Vue) // 实现$on,$emit,$once,$off
lifecycleMixin(Vue) // 实现_update，$forceUpdate,$destroy
renderMixin(Vue) // 实现$nextTick，_render


// src\core\instance\init.js
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    // 声明常量 vm 为 this 即Vue实例
    const vm: Component = this

    ...

    // 挂载组件
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}  
```

### （2）Vue 实例挂载
Vue 通过 $mount 实例方法去挂载 dom
`src/platforms/web/entry-runtime-with-compiler.js`
```js
const mount = Vue.prototype.$mount // 缓存了原型上的 $mount 方法
//再重新定义 $mount 方法
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)
  
  // ....

  return mount.call(this, el, hydrating)
}
```

最终还是调用用原先原型上的 $mount 方法挂载 
`src\platforms\web\runtime\index.js`
```js
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}
```

$mount 方法实际上会去调用 mountComponent 方法
```js
// src\core\instance\lifecycle.js
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el

  ...
  callHook(vm, 'beforeMount') // 执行 beforeMount 钩子函数

  let updateComponent
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = () => {
      // 将虚拟 VNode 映射到真实 Dom
      // vm._render() 生成虚拟节点(VNode)
      // vm._update 将虚拟节点渲染成真正的 DOM
      const name = vm._name
      const id = vm._uid
      const startTag = `vue-perf-start:${id}`
      const endTag = `vue-perf-end:${id}`

      mark(startTag)
      const vnode = vm._render() // 生成虚拟节点 (在src/core/instance/render.js中定义)
      mark(endTag)
      measure(`vue ${name} render`, startTag, endTag)

      mark(startTag)
      vm._update(vnode, hydrating)
      mark(endTag)
      measure(`vue ${name} patch`, startTag, endTag)
    }
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating) // 渲染成真正的 DOM（_update在当前文件的 lifecycleMixin 函数中定义）
    }
  }
  // 实例化一个渲染Watcher，在它的回调函数中会调用 updateComponent 方法  
  new Watcher(vm, updateComponent, noop, {
    before () {
      // 先判断是否 mouted 完成 并且没有被 destroyed
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate') // 执行 beforeUpdate 钩子函数
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false

  // 为null时 表示是根实例
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted') // 执行 mounted 钩子函数
  }
  return vm
}
```

从上面的代码可以看到，mountComponent 核心就是先实例化一个渲染Watcher，在它的回调函数中会调用 updateComponent 方法，在此方法中调用 vm._render 方法先生成虚拟 Node，最终调用 vm._update 更新 DOM。

### （3）创建虚拟 Node
使用 _render 方法把实例渲染成一个虚拟 Node
`src\core\instance\render.js`

```js
// 初始化render属性方法
export function initRender (vm: Component) {
  ...
  // 模板编译成的 render 函数使用
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)

  // 用户手写 render 方法使用
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
  ...
}  

// 原型挂载 $nextTick，_render 方法
export function renderMixin (Vue: Class<Component>) {
  ...
  // 生成虚拟Dom
  Vue.prototype._render = function (): VNode {
    const vm: Component = this
    const { render, _parentVnode } = vm.$options
    let vnode
    try {
      // 省略一系列代码  
      currentRenderingInstance = vm
      // 调用 createElement 方法来返回 vnode
      vnode = render.call(vm._renderProxy, vm.$createElement)
    } catch (e) {
      handleError(e, vm, `render`){}
    }
    // set parent
    vnode.parent = _parentVnode
    return vnode
  }
}
```
利用 createElement(该方法是对 _createElement 二次封装) 方法创建 VNode，
`src/core/vdom/create-elemenet.js`

```js
// 创建VNode的函数
export function _createElement (
  context: Component,  // context 表示 VNode 的上下文环境
  tag?: string | Class<Component> | Function | Object,  // 表示标签，它可以是一个字符串，也可以是一个 Component
  data?: VNodeData, // 表示 VNode 的数据，它是一个 VNodeData 类型，可以在 flow/vnode.js 中找到它的定义
  children?: any, // 表示当前 VNode 的子节点，它是任意类型的，它接下来需要被规范为标准的 VNode 数组
  normalizationType?: number// 表示子节点规范的类型，类型不同规范的方法也就不一样，它主要是参考 render 函数是编译生成的还是用户手写的。
): VNode | Array<VNode> {
  if (isDef(data) && isDef((data: any).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      `Avoid using observed data object as vnode data: ${JSON.stringify(data)}\n` +
      'Always create fresh vnode data objects in each render!',
      context
    )
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    if (!__WEEX__ || !('@binding' in data.key)) {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      )
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {}
    data.scopedSlots = { default: children[0] }
    children.length = 0
  }
  if (normalizationType === ALWAYS_NORMALIZE) { // 用户手写 render 方法使用
    children = normalizeChildren(children)
  } else if (normalizationType === SIMPLE_NORMALIZE) { // 模板编译成的 render 函数使用
    children = simpleNormalizeChildren(children)
  }
  let vnode, ns
  // 如果是 string 类型，则接着判断如果是内置的一些节点，则直接创建一个普通 VNode，
  if (typeof tag === 'string') {
    let Ctor
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (process.env.NODE_ENV !== 'production' && isDef(data) && isDef(data.nativeOn)) {
        warn(
          `The .native modifier for v-on is only valid on components but it was used on <${tag}>.`,
          context
        )
      }
      // 创建一个 VNode 的实例
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      )
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      // 如果是为已注册的组件名，则通过 createComponent 创建一个组件类型的 VNode 节点
      vnode = createComponent(Ctor, data, context, children, tag)
    } else {
      // 否则创建一个未知的标签的 VNode。
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      )
    }
  } else {
    // direct component options / constructor
    // 如果是 tag 一个 Component 类型，则直接调用 createComponent 创建一个组件类型的 VNode 节点
    vnode = createComponent(tag, data, context, children)
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) applyNS(vnode, ns)
    if (isDef(data)) registerDeepBindings(data)
    return vnode
  } else {
    return createEmptyVNode()
  }
}
```

### 实例查看
```js
var app = new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement('div', {
      attrs: {
        id: 'app',
        class: "class_box"
      },
    }, this.message)
  },
  data: {
    message: 'Hello Vue!'
  }
})
```
![](/img/Vue/vnode.webp)


## [diff算法](./diff算法.md)