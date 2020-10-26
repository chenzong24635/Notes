
[Plugin API](https://www.webpackjs.com/api/plugins/#tapable)

```js
class MyPlugin {
  constructor (options) {
    this.options = options || {}
    console.log(this.options,'plugin init')
  }
  // compiler是webpack实例
  apply (compiler) {
    // 一个新的编译(compilation)创建之后（同步）
    // compilation代表每一次执行打包，独立的编译
    compiler.hooks.compile.tap('MyPlugin', compilation => {
      console.log(compilation)
    })
    // 生成资源到 output 目录之前（异步）
    compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
      console.log(compilation)
      compilation.assets['index.txt'] = {
        // 文件内容
        source: function () {
          return 'this is a demo for plugin'
        },
        // 文件尺寸
        size: function () {
          return 25
        }
      }
      callback()
    })
  }
}

module.exports = MyPlugin
```