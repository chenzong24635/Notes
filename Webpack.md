[官网-中](https://www.webpackjs.com/guides/)
[官网-英](https://webpack.js.org/guides/)

[2020年了,再不会webpack敲得代码就不香了(近万字实战)](https://juejin.im/post/5de87444518825124c50cd36)

[带你深度解锁Webpack系列(优化篇)](https://juejin.im/post/5e6cfdc85188254913107c1f)

[一步步从零开始用 webpack 搭建一个大型项目](https://juejin.im/post/5de06aa851882572d672c1ad#comment)

[webpack打包原理 ? 看完这篇你就懂了 !](https://juejin.im/post/5e116fce6fb9a047ea7472a6)

[「吐血整理」再来一打Webpack面试题](https://juejin.im/post/5e6f4b4e6fb9a07cd443d4a5)

* <a href=""></a>

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

  path: path.resolve(__dirname, "dist"),//输出文件目录，必须是绝对路径

  publicPath: "/assets/", // 输出解析文件的目录，url 相对于 HTML 页面
  // publicPath: "https://cdn.example.com/",

  library: "MyLibrary", // 导出库(exported library)的名称
  libraryTarget: "umd", // 导出库(exported library)的类型
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

* CDN 引入

public/index.html
```html
<script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.15/lodash.core.min.js" ></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

webpack.config.js
```js
externals: {
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

### [devtool 代码映射](https://webpack.js.org/configuration/devtool/)
源代码与打包后的代码的映射关系，通过sourceMap定位到源代码。

devtool类型:string | false // 在development模式中，默认开启，


![soruce-map](/img/soruce-map.png)


Development推荐使用：
* eval
* eval-source-map
* eval-cheap-source-map
* eval-cheap-module-source-map


Production推荐使用：
* none
* source-map
* hidden-source-map
* nosources-source-map

### module 模块
模块，在 Webpack 一切皆模块，一个模块对应着一个文件。Webpack 会
从配置的 Entry 开始递归找出所有依赖的模块。

当webpack处理到不认识的模块时，需要在webpack中的module处进行配
置，当检测到是什么格式的模块，使用什么loader来处理

webpack默认支持JS模块和JSON模块  
支持CommonJS， ES moudule， AMD等模块类型

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

plugin 可以在webpack运行到某个阶段的时候，帮你做某些事情，类似于生
命周期的概念

扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结
果或做你想要的事情。

作用于整个构建过程


# 常用loader,plugins

## <a name="loaders">loaders</a>
[loaders-英文网站](https://webpack.js.org/loaders/)
[loaders-中文网站](https://www.webpackjs.com/loaders/)

Loaders是Webpack最重要的功能之一，通过使用不同的Loader，Webpack可以的脚本和工具，从而对不同的文件格式进行特定处理。

简单的举几个Loaders使用例子：

* 可以把SASS文件的写法转换成CSS，而不在使用其他转换工具。
* 可以把ES6或者ES7的代码，转换成大多浏览器兼容的JS代码。
* 可以把React中的JSX转换成JavaScript代码。

注意：所有的Loaders都需要在npm中单独进行安装，并在webpack.config.js里进行配置。

Loaders的配置:
* test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
* use：loader名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
* include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
* query：为loaders提供额外的设置选项（可选）。

`exclude一般用于排除 /node_modules/ ，缩小文件匹配范围,提高编译效率`
>exclude: /node_modules/

[常用的 loaders](/details/Webpack/loaders.md)

## <a name="plugins">plugins</a>
[plugins-英文网站](https://webpack.js.org/plugins/)
[plugins-中文网站](https://www.webpackjs.com/plugins/)

[常用的 plugins](/details/Webpack/plugins.md)

## <a name="webpack-dev-server">HMR 热模块替换 webpack-dev-server</a>
[devServer](https://webpack.js.org/configuration/dev-server/)

npm i -D webpack-dev-server 

模块热替换（HMR - hot module replacement）功能会在应用程序运行过程中，替换、添加或删除 模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：

* 保留在完全重新加载页面期间丢失的应用程序状态。
* 只更新变更内容，以节省宝贵的开发时间。
* 在源代码中对 CSS / JS 进行修改，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。

启动服务后，会发现dist目录没有了，这是因为 devServer 把打包后的模块不
会放在dist目录下，而是放到内存中，从而提升速度

注意启动HMR后，css抽离会不生效，还有不支持contenthash，chunkhash

```js
const Webpack = require('webpack')

module.exports = {
  devServer:{
    contentBase: path.join(__dirname, "dist"), // 基本目录结构
    open: true, // 在服务器启动后打开浏览器
    host:'localhost', // 服务器的IP地址，可以使用IP也可以使用localhost
    compress:true, // 服务端压缩是否开启
    port: 8080, // 服务端口号
    hot: true,// 开启 HMR 特性，如果资源不支持 HMR 会 fallback 到 live reloading
    hotOnly: true, // true时即便HMR不生效，浏览器也不自动刷新
    proxy: { // 跨域代理
      "/api": {
        target: "http://xxx.com", //请求地址
        // 因为默认代理服务器会以我们实际在浏览器中请求的主机名，也就是 localhost:8080 作为代理请求中的主机名。而一般服务器需要根据请求的主机名判断是哪个网站的请求
        changeOrigin: true // 以实际代理请求地址中的主机名去请求，也就是我们正常请求这个地址的主机名是什么，实际请求时就会设置成什么。
        pathRewrite: {
          '^/api' : 'newApi' // 替换掉代理地址中的 /api
        }
      }
    }
    // 代理后请求接口地址：
    // http://localhost:8080/api/xxxx --> http://xxx.com/newApi/xxxx  
  }
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ]
}
```
在入口文件中新增:
```js
// 修改代码，不会造成整个页面的刷新
if(module && module.hot) { 
    module.hot.accept()
}
```

package.json添加
```js
"scripts": {
    "server":"webpack-dev-server"
 },
```

终端输入 npm run server

## <a name="CDN资源引入">CDN资源引入</a>

国内的CDN服务推荐使用[BootCDN](https://www.bootcdn.cn/)

index.html
```html
<!-- CDN引入外部资源 -->
<script src="//cdn.bootcss.com/vue/2.6.11/vue.min.js"></script>
<script src="//cdn.bootcss.com/vuex/3.0.1/vuex.min.js"></script>
<script src="//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
<script src="//cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
<script src="//unpkg.com/iview@1.0.1/dist/iview.min.js"></script>
```

[vue.config.js配置externals](https://webpack.js.org/configuration/externals/)
```js
configureWebpack: {
  externals: {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'axios': 'axios',
    'iView': 'iview',
    // 'element-ui': 'ELEMENT',
  },
},
```

## <a name="Scope Hoisting">Scope Hoisting作用域提升</a>
webpack 会把引入的 js 文件“提升到”它的引入者顶部。

Scope Hoisting 可以让 Webpack 打包出来的代码文件更小、运行的更快。

Webpack 内置的功能

```js
plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
```

## <a name="搭建vue开发环境">搭建vue开发环境</a>

### 解析.vue文件  

npm i -D vue-loader vue-template-compiler vue-style-loader  //解析.vue文件,编译模板  
npm i -S vue  
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    module:{
      rules:[
        { // .vue文件支持 <style lang="less">
          test: /\.less$/,
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
        test: /\.(css | less)$/,
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

## <a name="环境变量配置">.env.development和.env.production环境变量配置 cross-env， dotenv-webpack</a>

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


## <a name="区分开发环境与生产环境">区分开发环境与生产环境 webpack-merge</a>
npm i -D  webpack-merge // 合并配置

新增 webpack.dev.js -开发环境配置 文件
新增 webpack.prod.js -生产环境配置文件


# [Webpack优化](/details/WEB性能优化/Webpack优化.md)
# [Webpack面试题](/details/面试题/Webpack面试题/README.md)


# 魔法注释
```js
import(/* webpackChunkName: 'posts' */'./posts/posts')
```

