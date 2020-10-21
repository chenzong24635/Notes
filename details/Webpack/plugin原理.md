## plugin是什么
在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。plugin是一个扩展器，在webpack打包的过程中，基于事件驱动的机制，监听webpack打包过程中的某些节点，从而执行广泛的任务。


## plugin基本架构
一个插件由以下构成：

* 一个具名 JavaScript 函数。
* 在它的原型上定义 apply 方法。
* 指定一个触及到 webpack 本身的 事件钩子。
* 操作 webpack 内部的实例特定数据。
* 在实现功能后调用 webpack 提供的 callback。



```js
class MyPlugin{
   // 在构造函数中获取用户给该插件传入的配置
  constructor(options){
    this.options = options || {}
  }
  // Webpack 会调用 Plugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler){
    compiler.plugin('compilation',function(compilation) {
    })
    compiler.hooks.compile.tap('MyPlugin', compilation => {
        console.log(compilation)
    })
    // 生成资源到 output 目录之前（异步）
    compiler.hooks.emit.tapAsync('MyPlugin', (compilation, fn) => {
        console.log(compilation)
        compilation.assets['index.md'] = {
            // 文件内容
            source: function () {
                return 'this is a demo for plugin'
            },
            // 文件尺寸
            size: function () {
                return 25
            }
        }
        fn()
    })

  }
}

// 导出 Plugin
module.exports = MyPlugin
```

```js
// 使用
const MyPlugin = require('./MyPlugin.js');
module.export = {
  plugins:[
    new MyPlugin({
      xxx: 'xxx'
    }),
  ]
}
```

## compiler 和 compilation
在开发 Plugin 时最常用的两个对象就是 compiler 和compilation，它们是 Plugin 和 Webpack 之间的桥梁。

[compiler](https://v4.webpack.js.org/api/compiler-hooks/) 和 compilation 的含义如下：
* compiler 可以简单地把它理解为 Webpack 实例；包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，

* compilation 代表每一次执行打包，独立的编译。包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 compilation 将被创建。

compiler 和 compilation 的区别在于：compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 compilation 只是代表了一次新的编译。

## 事件流

Webpack 的事件流机制应用了观察者模式，和 Node.js 中的 EventEmitter 非常相似。
compiler 和 compilation 都继承自 Tapable，可以直接在 compiler 和 compilation 对象上广播和监听事件，方法如下：

```js
/**
* 广播出事件
* event-name 为事件名称，注意不要和现有的事件重名
* params 为附带的参数
*/
compiler.apply('event-name',params);

/**
* 监听名称为 event-name 的事件，当 event-name 事件发生时，函数就会被执行。
* 同时函数中的 params 参数为广播事件时附带的参数。
*/
compiler.plugin('event-name',function(params) {
  
});

```