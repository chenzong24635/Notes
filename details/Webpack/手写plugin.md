
```js
module.exports = class MyPlugin{
  apply(compiler) {
    compiler.hooks.tap("MyPlugin", () => {
      console.log('my plugin exec')
    })
  }
}
```