
```js
// vdom/create-component.js

// 渲染是先渲染父组件，再渲染子组件
// 因此子组件渲染时，可以拿到父组件实例
export function createComponentInstanceForVnode (
  vnode: any,
  parent: any,
): Component {
  const options: InternalComponentOptions = {
    _isComponent: true,
    _parentVnode: vnode,
    parent // 把父组件实例传入
  }
  ...
  return new vnode.componentOptions.Ctor(options)
}


//core/instance/lifecycle.js
export function initLifecycle (vm: Component) {
  const options = vm.$options

  // locate first non-abstract parent
  let parent = options.parent
  // 查找第一个非抽象的父组件(抽象组件如:keep-alive)
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent
    }
    // 将parent组件 作为当前实例的父级
    parent.$children.push(vm)
  }
  // 设置当前实例的 $parent 属性，指向父级
  vm.$parent = parent
  // 设置 $root 属性，有父级就是用父级的 $root，否则 $root 指向自身
  vm.$root = parent ? parent.$root : vm

  vm.$children = []
  vm.$refs = {}

  vm._watcher = null
  vm._inactive = null
  vm._directInactive = false
  vm._isMounted = false
  vm._isDestroyed = false
  vm._isBeingDestroyed = false
}
```