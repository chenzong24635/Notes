

```js
// src\core\global-api\use.js

export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)

    // 对传入的 plugin 兼容处理
    // plugin存在install属性且其为函数
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      // plugin本身就是个函数
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}

```