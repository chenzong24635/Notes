[官网-中](https://www.webpackjs.com/guides/)
[官网-英](https://webpack.js.org/guides/)

[深入浅出 Webpack](http://www.xbhub.com/wiki/webpack/)
[2020年了,再不会webpack敲得代码就不香了(近万字实战)](https://juejin.im/post/5de87444518825124c50cd36)

[带你深度解锁Webpack系列(基础篇)](https://juejin.im/post/6844904079219490830)
[带你深度解锁Webpack系列(优化篇)](https://juejin.im/post/5e6cfdc85188254913107c1f)

[一步步从零开始用 webpack 搭建一个大型项目](https://juejin.im/post/5de06aa851882572d672c1ad)

[webpack打包原理 ? 看完这篇你就懂了 !](https://juejin.im/post/5e116fce6fb9a047ea7472a6)

[「吐血整理」再来一打Webpack面试题](https://juejin.im/post/5e6f4b4e6fb9a07cd443d4a5)

* <a href=""></a>
# [Webpack面试题](/details/Webpack/README.md)
# [Webpack优化](/details/WEB性能优化/Webpack优化.md)

# 基本
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

webpack简单点来说就就是一个配置文件，所有的魔力都是在这一个文件中发生的。 这个配置文件主要分为三大块
* entry 入口文件 让webpack用哪个文件作为项目的入口
* output 出口 让webpack把处理完成的文件放在哪里
* module 模块 要用什么不同的模块来处理各种类型的文件

webpack默认支持JS模块和JSON模块  
支持CommonJS， ES moudule， AMD等模块类型


# 指令
* npm i -g webpack webpack-cli //全局安装webpack webpack-cli(使用 webpack 4+ 版本，你还需要安装 CLI) --`不推荐全局安装`
* npm i -D webpack webpack-cli //安装到当前项目  
* npm i -D webpack@\<version> //安装特点版本到当前项目  
* npm i -D webpack@beta // 安装最新体验版本到当前项目  

* npx webpack -v //查看版本
* webpack -v  //查看版本
* npm info webpack   // 查看webpack包版本


# [建立项目](https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85)
建一个文件夹，然后新建一个package.json的文件在项目根目录下
```js
mkdir webpack-learn && cd webpack-learn // 新建且切换文件夹
npm init -y // 生成package.json
npm i webpack webpack-cli -D // 安装webpack到当前项目
```

npx webpack 运行

# 核心概念
* entry：配置入口文件的地址，可以是单一入口，也可以是多入口。
* output：配置出口文件的地址，支持多出口配置。
* loader：处理那些非 JS 文件（webpack 自身只能解析 JS)
* plugins：配置插件，根据你的需要配置不同功能的插件,用于生产模版和各项功能。
* mode：模式，none(默认) | production(生产模式) | development(开发模式)

[webpack.config.js 所有配置](https://webpack.js.org/configuration/)

```js
module.exports = {
  entry: {},// 入口文件的配置项
  output: {}, // 出口文件的配置
  mode: '', // 当前构建环境
  module: {},// 模块，配置 loader
  plugins: [],// 插件，配置 plugin

  resolve: {}, // 配置如何解析模块
  devServer: {},// 配置webpack开发服务功能
  devtool: '',// 代码映射
}
```

占位符含义
|占位符|含义
|:--|:--|
|ext|文件后缀名
|name|文件名
|path|文件相对路径
|folder|文件所在的文件夹
|hash|每次构建webpack生成的唯一hash值
|chunkhash|根据chunk生成的hash，来源与同一chunk，则hash值相同
|contenthash|根据内容生成的hash，内容相同则hash相同

### [entry 入口文件](https://webpack.js.org/configuration/entry-context/#entry)

entry类型 string | object | array
```js
module.exports = {
  //单入口
  entry: "./app/entry",
  entry: {
    main: "./app/entry",
  }

  //多入口
  entry: ["./app/entry1", "./app/entry2"],
  entry: {
    a: "./app/entry-a",
    b: ["./app/entry-b1", "./app/entry-b2"]
  },
}
```

### [output 出口文件](https://webpack.js.org/configuration/output/)
```js
output: {
  filename: "bundle.js",//输出文件的名称
  // filename: 'js/[name].[hash:8].js',   //添加了hash值, 实现静态资源的长期缓存
  // filename: "js/[chunkhash].js", // chunkhash 用于长效缓存

  path: path.resolve(__dirname, "dist"), //输出文件目录，必须是绝对路径

  publicPath: "/assets/", // 输出解析文件的目录，url 相对于 HTML 页面
  // publicPath: "https://cdn.example.com/",

  // library: "MyLibrary", // 导出库(exported library)的名称
  // libraryTarget: "umd", // 导出库(exported library)的类型
},

//多出口的处理
output: {
  filename: "js/[name][chunkhash:8].js",//chunkhash，文件名称重复
  path: path.resolve(__dirname, "dist")
},
```

### [mode 当前的构建环境](https://webpack.js.org/configuration/mode/)
mode:选择模式告诉webpack相应地使用其内置优化
* production  生产环境 (默认值)--启动内置优化插件，自动优化打包结果，打包速度偏慢
* development 开发环境--自动优化打包速度，添加一些调试过程中的辅助插件
* none --运行最原始的打包，不做任何额外处理

```js
module.exports = {
  mode: 'production'
}
```
命令行终端使用mode模式
```js
npx webpack --mode=production
```

### [resolve 解析模块](https://webpack.js.org/configuration/resolve/)

```js
resolve: {
  //指明绝对路径，优化模块查找路径
  modules: [resolve("./node_modules")],
  //创建别名以更轻松地导入或需要某些模块
  alias: {
    'vue$':'vue/dist/vue.runtime.esm.js', // $表示精确匹配
    '@': path.resolve(__dirname,'./src'),
    'assets': path.resolve(__dirname,'./src/assets'),
  },
  
  // 如果多个文件共享相同的名称，但具有不同的扩展名，
  // webpack会根据此配置解析确定的文件后缀按顺序(由左到右)
  //如果你要对它进行配置，记住将频率最高的后缀放在第一位，并且控制列表的长度，以减少尝试次数。
  extensions:['*','.js','.json','.vue'] // 默认['.js', '.json']
}
```
resolve.modules 的默认值是［'node_modules'］，含义是先去当前目录的 node_modules 目录下去找我们想找的模块，如果没找到就去上一级目录 ../node_modules 中找，再没有就去 ../../node_modules 中找，以此类推。 这和 Node.js 的模块寻找机制很相似。


### [externals 外部扩展](https://www.webpackjs.com/configuration/externals/)

externals配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖

防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖

```js
externals: {
  'vue': 'Vue',
  'vuex': 'Vuex',
  'vue-router': 'VueRouter',
  'axios': 'axios',
  'iView': 'iview',
  // 'element-ui': 'ELEMENT',
  jquery: 'jQuery',
  // lodash: '_'
  lodash: {
    commonjs: "lodash",//如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
    commonjs2: "lodash",//同上
    amd: "lodash",//如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
    root: "_"//如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
  }
}
```


### [devtool 代码映射](https://webpack.js.org/configuration/devtool/)
源代码与打包后的代码的映射关系，通过sourceMap定位到源代码。

devtool类型:string | false // 在development模式中，默认开启，


![soruce-map](/img/soruce-map.png)
|关键字|含义|
|:--|:--
|eval|使用eval包裹的模块代码
|source-map|生成独立的 .map文件
|hidden|不在 JavaScript 文件中指出 Source Map 文件所在，这样浏览器就不会自动加载 Source Map；
|inline|将.mpa文件作为DataURI嵌入，不产生单独.map文件
|cheap|生成的sourceMap 中不会包含列信息，这样计算量更小，输出的 sourceMap 文件更小；同时 Loader 输出的 sourceMap 不会被采用；
|module|包含loader的 sourceMap（如：jsx to js，babel的sourceMap），否则无法定义源文件

Development推荐使用：
* eval-cheap-module-source-map

Production推荐使用：
* none
* cheap-module-source-map

注意：避免在生产中使用 inline- 和 eval-，因为它们会增加 bundle 体积大小，并降低整体性能。

### module 模块
模块，在 Webpack 一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。

当webpack处理到不认识的模块时，需要在webpack中的module处进行配置，当检测到是什么格式的模块，使用什么loader来处理

webpack默认支持JS模块和JSON模块  ,支持CommonJS， ES moudule， AMD等模块类型

Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。

use使用类型：String | Array | Object
```js
use: 'xxx-laoder'
use: {
  loader； 'xxx-laoder'
}
use: [
  'xxx-loader',
  {
    loader: 'xxx-loader'
  }
]
```


```js
module:{
  rules:[
    {
      test:/\.xxx$/,//指定匹配规则
      use:{
        loader: 'xxx-loadr'// 指定使用的loader
      } 
    }
  ]
}
```


* noParse 

如果一些第三方模块没有AMD/CommonJS规范版本，可以使用 noParse 来标识这个模块，这样 Webpack 会引入这些模块，但是不进行转化和解析，从而提升 Webpack 的构建性能 ，例如：jquery 、lodash。

```js
module:{
  noParse: /jquery|lodash/, // loaders解析时忽略 此正则匹配的文件
}  
```  



### plugin 插件

plugin 可以在webpack运行到某个阶段的时候，帮你做某些事情，类似于生命周期的概念

Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

作用于整个构建过程


# 常用loader,plugins

## <a name="loaders">loaders</a>
[loaders-英文网站](https://webpack.js.org/loaders/)
[loaders-中文网站](https://www.webpackjs.com/loaders/)

Loaders是Webpack最重要的功能之一，通过使用不同的Loader，Webpack可以的脚本和工具，从而对不同的文件格式进行特定处理。

简单的举几个Loaders使用例子：

* 可以把Scss，Less等文件的写法转换成CSS，而不在使用其他转换工具。
* 可以把ES6或者ES7的代码，转换成大多浏览器兼容的JS代码。
* 可以把React中的JSX转换成JavaScript代码。

注意：所有的Loaders都需要在npm中单独进行安装，并在webpack.config.js里进行配置。

处理一类源文件的时候，单一的 loader是不够用的；多个 loader 串联使用时，`loader解析顺序从右到左（从下至上）`

Loaders的配置:
```js
module.exports = {
  module: {
    rules: [
      {
        test:/\.vue$/,
        // 单个loader
        loader:'vue-loader',
        enforce:'pre'
      },
      {
        test: /\\.css$/,
        // 多个laoder
        use: [
          // 无参数配置
          'style-loader',
          // 有参数配置
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
```

* test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
* use：loader名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
  ```
* include/exclude:只匹配哪些文件或排除哪些的文件（可选）；
* query：为loaders提供额外的设置选项（可选）。
* enforce：
  * pre(前置)
  * normal(正常) 不写时的默认值
  * inline(内联)
  * post(后置)
  
  其执行顺序 pre -> normal -> inline ->post

`注意：loader解析顺序从右到左（从下至上）;可用enforce改变执行顺序`
如：以下执行顺序是 less-loader > css-loader > style-loader
```js
module: {
  rules: [
    {
        test: /\.less$/,
        loader:'style-loader',
    },
    {
        test: /\.less$/,
        loader:'css-loader',
    },
    {
        test:/\.less$/,
        loader:'less-loader'
    },
  ]
}
```


`exclude一般用于排除 /node_modules/ ，缩小文件匹配范围,提高编译效率`
>exclude: /node_modules/

[常用的 loaders](/details/Webpack/loaders.md)

## <a name="plugins">plugins</a>
[plugins-英文网站](https://webpack.js.org/plugins/)
[plugins-中文网站](https://www.webpackjs.com/plugins/)

[常用的 plugins](/details/Webpack/plugins.md)



# <a name="CDN资源引入">CDN资源引入</a>

国内的CDN服务推荐使用[BootCDN](https://www.bootcdn.cn/)

index.html
```html
<!-- CDN引入外部资源 -->
<script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.15/lodash.core.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="//cdn.bootcss.com/vue/2.6.11/vue.min.js"></script>
<script src="//cdn.bootcss.com/vuex/3.0.1/vuex.min.js"></script>
<script src="//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
<script src="//cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
<script src="//unpkg.com/iview@1.0.1/dist/iview.min.js"></script>
```

webpack.config.js
```js
externals: {
  'vue': 'Vue',
  'vuex': 'Vuex',
  'vue-router': 'VueRouter',
  'axios': 'axios',
  'iView': 'iview',
  // 'element-ui': 'ELEMENT',
  jquery: 'jQuery',
  // lodash: '_'
  lodash: {
    commonjs: "lodash",//如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
    commonjs2: "lodash",//同上
    amd: "lodash",//如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
    root: "_"//如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
  }
}
```

这样就剥离了那些不需要改动的依赖模块，换句话，下面展示的代码还可以正常运行：
```js
import $ from 'jquery';
console.log($);
```



# <a name="搭建vue开发环境">搭建vue开发环境</a>

### 解析.vue文件  

npm i -D vue-loader vue-template-compiler vue-style-loader  //解析.vue文件,编译模板  
npm i -S vue
npm i -D css-loader
npm i -D less-loader less
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    module:{
      rules:[
        { // .vue文件支持 <style lang="less">
          test: /\.(css|less)$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        {
          test:/\.vue$/,
          use:['vue-loader']
        },
      ]
     },
    resolve:{
      alias:{
        'vue$':'vue/dist/vue.runtime.esm.js',
        ' @': resolve('./src')
      },
      extensions:['*','.js','.json','.vue']
   },
   plugins:[
      new VueLoaderPlugin()
   ]
}
```

### 完整配置
```js
const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',  // 入口文件的配置项
  output: {  // 出口文件的配置
    // filename: 'js/bundle.js', // 输出文件名
    filename: 'js/[name].[hash:6].js',   //添加了hash值, 实现静态资源的长期缓存
    path: resolve('dist') //输出文件路径配置
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test:/\.vue$/, 
        use:['vue-loader'] // 解析.vue文件
      },
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.runtime.esm.js',
      ' @': resolve(__dirname,'./src')
    },
    extensions:['*','.js','.json','.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({ //输出html文件
      title: '标题',
      template: './public/index.html'
    }),
    new webpack.NamedModulesPlugin(), 
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
}
```

### 新建文件
* src下新建一个main.js  

```js
import Vue from 'vue'
import App from './app'

new Vue({
  render: h => h(App)
}).$mount('#app')
```

* src下新建一个App.vue  

```html
<template>
  <div class="container">
    {{name}}
    <ul>
      <li v-for="item in lists" :key="item">{{item}}</li>
    </ul>
    <button @click="add">add</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '34',
      lists: [1,2,3]
    }
  },
  methods: {
    add() {
      this.lists.push(this.lists.length+1)
    }
  }
}
</script>
<style >
.container{
  background: gold;
}
</style>

```

* 跟目录下新建 public/index.html  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html;" charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
  <style>

  </style>
</head>
<body>
  <div id="app"></div>
  <script>
  </script>
</body>
</html>
```

### 配置打包命令
package.json添加
```json
"scripts": {
  "dev": "webpack-dev-server --open"
}
```

npm run dev即可

# <a name="环境变量配置">.env.development和.env.production环境变量配置 cross-env， dotenv-webpack</a>

npm i cross-env dotenv-webpack -D
> cross-env 解决跨平台设置NODE_ENV的问题
> dotenv-webpack 根据当前环境(开发|生产)，读取相关 .env 文件的配置

新建 .env.development
```js
NODE_ENV = 'development'
BASE_URL = ''
```

新建 .env.production
```js
NODE_ENV = 'production'
BASE_URL = '/'
```

webpack.config.js配置
```js
plugins: [
  new Dotenv({ //装载对应环境变量
    path: resolve(`./.env.${process.env.NODE_ENV}`)
  })
],
```

获取环境变量：process.env.NODE_ENV 

package.json配置
```js
"scripts": {
	"serve": "cross-env NODE_ENV=development webpack-dev-server  --config ./webpack.config.js --open",
	"build": "cross-env NODE_ENV=production webpack-dev-server  --config ./webpack.config.js"
}
```


# <a name="配置合并">合并配置 webpack-merge</a>
npm i -D  webpack-merge // 合并配置

新增 webpack.dev.js -开发环境配置 文件
新增 webpack.prod.js -生产环境配置文件

```js
// webpack.dev.js
const baseConfig = require('./webpack.base.config.js') // 获取基本配置
const webpackMerge = require('webpack-merge')

// 合并
module.exports = webpackMerge(baseConfig,{
  mode: "development",
  ...
})
```


# 
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

## 魔法注释webpackChunkName、webpackPrefetch、webpackPreload、
[魔法注释](https://webpack.js.org/api/module-methods/#magic-comments)

添加webpackChunkName，分离路由模块
```js
import(
  /* webpackChunkName: 'posts' */
  './posts/posts'
)
```

同时，也要在 webpack.config.js 中做一些改动：
```js
// webpack.config.js
{
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].lazy-chunk.js"
  }
}
```

还有添加 webpackPrefetch， 魔术注释，Webpack 令我们可以使用与 \<link rel="prefetch"> 相同的特性;
webpackPreload 同 \<link rel="preload">
```js
import(
  /* webpackPrefetch: true */
  './posts/posts'
)
```

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

