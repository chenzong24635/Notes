[](https://juejin.im/post/6844904146827476999#heading-12)

同步loader
```js
const loaderUtils = require('loader-utils')

module.exports = function (source,inputSourceMap,data) {
  // 获取 options 配置项内容
  const options = loaderUtils.getOptions(this)
  // console.log('source>>>>', inputSourceMap,data)
    console.log('source>>>>',options)
    // 可以传递更详细的信息
  return this.callback(null, source)
}

```

异步loader
```js
const loaderUtils = require('loader-utils')
module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  
  // this.async()让webpack知道这个loader是异步运行，返回的是和同步使用时一致的this.callback
  const asyncFunc = this.async()
  setTimeout(() => {
      source += '走上人生颠覆'
      asyncFunc(null, source)
  }, 200)
}

```


把es6转es5
```js
const babel = require("@babel/core");
function loader(source,inputSourceMap,data) {
  const options = {
    presets: ["@babel/preset-env"],
    inputSourceMap,
    sourceMaps: true, // 生成sourceMap
    filename: this.request.split("!")[1].split("/").pop()
  }
  // 通过babel把es6转es5
  /* 
   * @params{} code - 代码
   * @params{} map - sourceMap
   * @params{} ast - 语法树
   */
  let {code, map, ast} = babel.transform(source, options);
  return this.callback(null, code, map, ast);
}
module.exports = loader
```
