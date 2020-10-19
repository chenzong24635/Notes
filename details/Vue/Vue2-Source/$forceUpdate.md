

```js
// src\core\instance\lifecycle.js
export function lifecycleMixin (Vue: Class<Component>) {

  Vue.prototype.$forceUpdate = function () {
    const vm: Component = this
    if (vm._watcher) {
      vm._watcher.update()
    }
  }
}
```