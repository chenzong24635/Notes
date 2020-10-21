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
