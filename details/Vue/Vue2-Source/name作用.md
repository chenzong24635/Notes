
```js
// src\core\global-api\extend.js
Vue.extend = function (extendOptions: Object): Function {
  ...
  const name = extendOptions.name || Super.options.name
  ...
  if (name) {
    Sub.options.components[name] = Sub
  }
  ...
}
```

```js
// src\core\components\keep-alive.js

export default {
  name: 'keep-alive',
  ...
  // 组件名
  const name: ?string = getComponentName(componentOptions)
  ...
}  

function getComponentName (opts: ?VNodeComponentOptions): ?string {
  // 组件名称name，或者组件标签名称
  return opts && (opts.Ctor.options.name || opts.tag)
}
```