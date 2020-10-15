```js
// core/instance/inject.js
export function initProvide (vm: Component) {
  const provide = vm.$options.provide
  // 直接在实例上挂载 _provided 属性
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide
  }
}


export function initInjections (vm: Component) {
  // 获取子孙组件想要的 inject 属性
  // 通过 resolveInject 方法while循环查找属性
  const result = resolveInject(vm.$options.inject, vm)
  if (result) {
    // 该属性在父辈组件肯定是响应式的
    // 因此无需做响应式处理
    toggleObserving(false)
    Object.keys(result).forEach(key => {
      /* istanbul ignore else */
        ...

      } else {
        // 将找到的结果定义在当前实例上
        defineReactive(vm, key, result[key])
      }
    })
    toggleObserving(true)
  }
}

export function resolveInject (inject: any, vm: Component): ?Object {
  if (inject) {
    const result = Object.create(null)
    const keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      if (key === '__ob__') continue
      const provideKey = inject[key].from
      let source = vm
      while (source) {

        if (source._provided && hasOwn(source._provided, provideKey)) {
          // 找到,则赋值并break退出
          result[key] = source._provided[provideKey]
          break
        }
        // 循环向上查找(就像原型链)
        source = source.$parent
      }
      if (!source) {
        if ('default' in inject[key]) {
          const provideDefault = inject[key].default
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault
        } else if (process.env.NODE_ENV !== 'production') {
          warn(`Injection "${key}" not found`, vm)
        }
      }
    }
    return result
  }
}
```