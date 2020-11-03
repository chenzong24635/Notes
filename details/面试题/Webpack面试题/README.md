## webpack与grunt、gulp的不同？
都是前端构建工具

grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。

webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。

## 与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？
同样是基于入口的打包工具还有以下几个主流的：
* webpack
* rollup
* parcel

从应用场景上来看：
* webpack适用于大型复杂的前端站点构建
* rollup适用于基础库的打包，如vue、react
* parcel适用于简单的实验性项目，他可以满足低门槛的快速看到效果
由于parcel在打包过程中给出的调试信息十分有限，所以一旦打包出错难以调试，所以不建议复杂的项目使用parcel

## 有哪些常见的Loader？他们是解决什么问题的？
[常用的 loaders](/details/Webpack/loaders.md)


## 有哪些常见的Plugin？他们是解决什么问题的？
[常用的 plugins](/details/Webpack/plugins.md)

## Loader和Plugin的不同？
不同的作用

* Loader直译为"加载器"。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到loader。 所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。

* Plugin直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。


不同的用法
* Loader在module.rules中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数（options）

* Plugin在plugins中单独配置。 类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入。

## module、chunk、bundle区别
* module：js模块，webpack支持commonJS、ES6等模块,指import引入的模块
* chunck: 代码块，webpack根据功能拆分出来的
  分三种清空：
  * 项目入口（entery）
  * 通过import动态引入的代码
  * 通过splitChunks拆分的公共代码
* bundle: 打包后的资源文件，bundle是对chunk进行编译压缩打包等处理后产出的(一般一个chunk对应一个bundle)


## Webpack 中 hash、chunkhash 和 contenthash 的区别 

[参考](https://juejin.im/post/5d70aee4f265da03f12e7ab2)

在webpack中有三种hash可以配置:
* hash
* chunkhash
* contenthas

#### hash

每次构建webpack生成的唯一hash值 ，所有文件的 hash 都是相同,修改任何文件都会导致所有文件的 hash 发生改变(粒度整个项目)


```js
output: {
  filename: '[name].[hash].js',
  path: path.join(__dirname, 'dist')
}
```
所以使用 hash 无法实现前端静态资源在浏览器上长缓存，这时候应该使用 chunkhash。

#### chunkhash

当有多个chunk，形成多个bundle时，如果只有一个chunk和一个bundle内容变了，其他的bundle的hash都会发生变化，因为大家都是公用的一个hash，这个时候chunkhash的作用就出来了。  

它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的 chunk，生成对应的哈希值(粒度entry的每个入口文件)

所以每次编译之后，每个 chunk 的 hash 都是不同的。对于每个 chunk 来说，如果该 chunk 代码不变，那么 hash 也将保持不变，从而实现该资源在浏览器上长缓存。
```js
entry: {
    index: "./src/index.js",
    footer: "./src/footer.js"
  },
output: {
  filename: '[name].[chunkhash].js',
  path: path.join(__dirname, 'dist')
}
```

但是，使用 chunkhash 存在一个问题：当在一个 JS 文件中引入了 CSS 文件，编译后它们的 hash 是相同的。而且，只要 JS 文件内容发生改变，与其关联的 CSS 文件 hash 也会改变。

针对这种情况，可以把 CSS 从 JS 中抽离出来并使用 contenthash。

#### contenthash 
跟每个生成的文件有关，每个文件都有一个唯一的hash值。当要构建的文件内容发生改变时，就会生成新的hash值，且该文件的改变并不会影响和它同一个模块下的其它文件。(粒度每个文件的内容)


使用 mini-css-extract-plugin 或 extract-text-webpack-plugin 把 CSS 文件抽离出来：

```js
// mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
}
```

注意，当使用contenthash时，如果仅修改js文件，css文件的hash不会变化，但是仅修改css的文件，js文件的hash也会变化。



## webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全
* 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；

* 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；

* 确定入口：根据配置中的 entry 找出所有的入口文件；

* 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；

* 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；

* 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；

* 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。


在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

## 是否写过Loader和Plugin？描述一下编写loader或plugin的思路？

Loader像一个"翻译官"把读到的源文件内容转义成新的文件内容，并且每个Loader通过链式操作，将源文件一步步翻译成想要的样子。

编写Loader时要遵循单一原则，每个Loader只做一种"转义"工作。 每个Loader的拿到的是源文件内容（source），可以通过返回值的方式将处理后的内容输出，也可以调用this.callback()方法，将内容返回给webpack。 还可以通过 this.async()生成一个callback函数，再用这个callback将处理后的内容输出出去。 此外webpack还为开发者准备了开发loader的工具函数集——loader-utils。

相对于Loader而言，Plugin的编写就灵活了许多。 webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。


## webpack的热更新是如何做到的？说明其原理？




## [Webpack优化](/details/WEB性能优化/Webpack优化.md)