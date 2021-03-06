
```js
// src\core\observer\index.js

export function set(target: Array < any > | Object, key: any, val: any): any {
  // 判断target 为 undefined 或 null 或基本类型，报错
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  // target 为数组
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 修改数组的长度, 避免索引>数组长度导致splice()执行有误
    target.length = Math.max(target.length, key)
    // 利用数组的splice变异方法触发响应式
    target.splice(key, 1, val)
    return val
  }
  // target 为对象,且自身拥有该属性（排除Object.prototype属性constructor等）,直接赋值
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  // 以上都不成立, 即开始给target创建一个全新的属性
  // 获取Observer实例
  const ob = (target: any).__ob__
  
  // 如果是Vue实例或根数据data，报错
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return val
  }
  // target上不存在该属性
  // target 本身就不是响应式数据, 直接赋值
  if (!ob) {
    target[key] = val
    return val
  }
  // 进行响应式处理,并触发更新 重新渲染页面
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}
```


然后在 `src\core\instance\state.js`的 stateMixin 方法里挂载到原型上
```js
Vue.prototype.$set = set
```
