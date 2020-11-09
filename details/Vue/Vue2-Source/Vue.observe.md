
就是调用出observe()方法，返回响应式后的数据
```js
// src\core\global-api\index.js

export function initGlobalAPI (Vue: GlobalAPI) {
  ...
// 2.6 explicit observable API
  Vue.observable = <T>(obj: T): T => {
    observe(obj)
    return obj
  }
  ...
}
```