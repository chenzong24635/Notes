[官网-指南](https://www.webpackjs.com/guides/)

https://juejin.im/post/5e116fce6fb9a047ea7472a6

https://github.com/LuckyWinty/fe-weekly-questions/issues/4

[从零开始的Webpack4教程](https://segmentfault.com/a/1190000018534625?share_user=1030000000178452#item-5)

[一看就懂之webpack高级配置与优化](https://segmentfault.com/a/1190000020320871)

[2020年了,再不会webpack敲得代码就不香了(近万字实战)](https://juejin.im/post/5de87444518825124c50cd36)

[webpack 原理分析与性能优化（2w字精华）](https://juejin.im/post/5e02c524f265da33e347fe61)

* <a href="打包图片资源">打包样式文件中的图片资源</a>
* <a href=""></a>

# 基本
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

webpack简单点来说就就是一个配置文件，所有的魔力都是在这一个文件中发生的。 这个配置文件主要分为三大块
* entry 入口文件 让webpack用哪个文件作为项目的入口
* output 出口 让webpack把处理完成的文件放在哪里
* module 模块 要用什么不同的模块来处理各种类型的文件

# 指南
https://www.webpackjs.com/guides/installation/

# 安装
* npm i -g webpack webpack-cli //全局安装webpack webpack-cli(使用 webpack 4+ 版本，你还需要安装 CLI)
* npm i -D webpack webpack-cli //安装到当前项目  
* npm i -D webpack@\<version> //安装特点版本到当前项目  
* npm i -D webpack@beta // 安装最新体验版本到当前项目  

# [建立项目](https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85)
建一个文件夹，然后新建一个package.json的文件在项目根目录下
```js
mkdir webpack-learn && cd webpack-learn
npm init -y
npm i webpack webpack-cli -D
```

# [核心概念](https://www.webpackjs.com/concepts/)
* entry：配置入口文件的地址，可以是单一入口，也可以是多入口。
* output：配置出口文件的地址，支持多出口配置。
* Loader：处理那些非 JS 文件（webpack 自身只能解析 JS)
* plugins：配置插件，根据你的需要配置不同功能的插件,用于生产模版和各项功能。
* mode：模式，none(默认) | production(生产模式) | development(开发模式)
  >mode: process.env.NODE_ENV

# [webpack.config.js配置](https://www.webpackjs.com/configuration/#%E9%80%89%E9%A1%B9)


# 常用loader,plugins

在webpack.config.js配置
```js
module.exports = {
  // 入口文件的配置项
  entry: {},
  // 出口文件的配置
  output: {},
  // 模块
  module: {},
  // 插件，用于生产模版和各项功能
  plugins: [],
  // 配置webpack开发服务功能
  devServer: {}
}
```

## <a name="Loaders">Loaders</a>
[所有loaders](https://www.webpackjs.com/loaders/)

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

## <a name="加载CSS">加载CSS: style-loader css-loader less-loader...</a>

npm install -D style-loader // 通过注入\<style\>标签将css添加到DOM
npm install -D css-loader // 解析 @import 和 url()的css文件
npm install -D less-loader less  // less

```js
// 注意顺序不能乱，加载顺序从下至上，从右到左，
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }
  ]
}
```

## <a name="自动添加CSS3前缀">自动添加CSS3前缀：postcss-loader autoprefixer</a>
npm i -D postcss-loader autoprefixer

postCSS推荐在项目根目录（和webpack.config.js同级），建立一个postcss.config.js文件。

* postcss.config.js
```js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

* webpack.config.js
```js
rules: [
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
      "postcss-loader"
    ]
  }  
]
```

## <a name="加载图片">加载图片、字体：file-loader url-loader</a>
npm install file-loader url-loader --save-dev

url-loader 依赖 file-loader。url-loader封装了file-loader

* file-loader：  

解决引用路径的问题，拿background样式用url引入背景图来说，我们都知道，webpack最终会将各个模块打包成一个文件，因此我们样式中的url路径是相对入口html页面的，而不是相对于原始css文件所在的路径的。这就会导致图片引入失败。  

这个问题是用file-loader解决的，file-loader可以解析项目中的url引入（不仅限于css），根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件。

* url-loader：  

url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。

url-loader 把资源文件转换为 URL，file-loader 也是一样的功能。不同之处在于 url-loader 更加灵活，它可以把小文件转换为 base64 格式的 URL，从而减少网络请求次数。


```js
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|gif)$/, //匹配图片文件后缀名称
      use: [{
        loader:'file-loader',
        options:{
          name: "[name]_[hash:6].[ext]", //文件名,hash（默认32位）值为6位，ext自动补全文件扩展名
          outputPath:'images/', //在output基础上，修改输出图片文件的位置
          publicPath: '../dist/images/'  //修改背景图引入url的路径
        }
      }]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader:'url-loader',
        options:{
          limit: 2 * 1024,
        }
      }]
    },
  ]
}
```

## <a name="加载数据">加载数据,如 CSV、TSV 和 XML：csv-loader xml-loader</a>
npm install --save-dev csv-loader xml-loader

JSON格式是内置的，无需配置

```js
module: {
  rules:[
    {
      test: /\.(csv|tsv)$/,
      use: [
        'csv-loader'
      ]
    },
    {
      test: /\.xml$/,
      use: [
        'xml-loader'
      ]
    }
  ]
}
```

## <a name="html的图片">html的图片: html-withimg-loader</a>
解决webpack不识别html中img标签src引入的图片

npm i -D html-withimg-loader

```js
rules: [
  {
    test: /\.(htm|html)$/i,
    use:[ 'html-withimg-loader'] 
  }
]
```



## <a name="JS语法转换babel-loader">JS语法转换babel-loader</a>
npm i -D babel-loader @babel/core @babel/preset-env webpack

```js
rules: [
  {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
]
```

## <a name="JS语法检查">JS语法检查eslint-loader</a>
npm install eslint-loader eslint --save-dev

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      use: ['babel-loader', 'eslint-loader'],
    },
  ],
},
```

## <a name="文件分离">文件分离：extract-text-webpack-plugin</a>
npm i -D extract-text-webpack-plugin

从一个或多个包中提取文本到单独的文件中。

`由于webpack v4 extract-text-webpack-plugin不能用于CSS`。请改用[mini-css-extract-plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)。

npm i -D mini-css-extract-plugin

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}
```

这里的/css/index.css是分离后的路径位置。这部配置完成后，包装代码：还要修改原来我们的style-loader和css-loader。

修改代码如下。
```js
rules: [
  {
    test: /\.css$/,
    use: extractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader"
    })
  },{
    test:/\.(png|jpg|gif)/ ,
    use:[{
      loader:'url-loader',
      options:{
          limit:500000
      }
    }]
  }
]
```

## <a name="打包生成index.html">打包生成index.html:  html-webpack-plugin</a>
npm i -D html-webpack-plugin 

生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    title: '标题',
    template:'./src/index.html'
  })
]
```

打包多页面(必须配置 chunks)
```js
module.exports = {
  entry: {
      index: "./src/index.js", // 指定打包输出的chunk名为index
      foo: "./src/foo.js" // 指定打包输出的chunk名为foo
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 要打包输出哪个文件，可以使用相对路径
      filename: "index.html", // 打包输出后该html文件的名称
      chunks: ["index"] // 数组元素为chunk名称，即entry属性值为对象的时候指定的名称，index页面只引入index.js
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 要打包输出哪个文件，可以使用相对路径
      filename: "foo.html", // 打包输出后该html文件的名称
      chunks: ["foo"] // 数组元素为chunk名称，即entry属性值为对象的时候指定的名称，foo页面只引入foo.js
    }),
  ]
}
```

## <a name="清理dist文件夹">清理dist文件夹: clean-webpack-plugin </a>
npm i -D clean-webpack-plugin 

```js
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

plugins: [
  new CleanWebpackPlugin()
]
```


## <a name="JS压缩">JS压缩terser-webpack-glugin</a>
因为最新版的uglifyjs-webpack-plugin插件已经不支持es6语法,用插件terser-webpack-plugin代替

npm install terser-webpack-plugin --save-dev


```js
const TerserPlugin  = require('terser-webpack-plugin');

module.exports = {
   optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  }
}
```

## <a name="webpack-dev-server">热更新webpack-dev-server</a>
npm i -D webpack-dev-server 

```js
devServer:{
  //设置基本目录结构
  contentBase: path.join(__dirname, "dist"),
  //服务器的IP地址，可以使用IP也可以使用localhost
  host:'localhost',
  //服务端压缩是否开启
  compress:true,
  //配置服务端口号
  port: 9000
}
```

package.json添加
```js
"scripts": {
    "server":"webpack-dev-server --open"
 },
```
终端输入 npm run server

## <a name="将单个文件或整个目录复制到构建目录">将单个文件或整个目录复制到构建目录 copy-webpack-plugin</a>
适合用于拷贝一些静态资源，如图片等
npm install --save-dev copy-webpack-plugin

```js
const CopyWebpackPlugin = require('copy-webpack-plugin');
plugins: [
  new CopyWebpackPlugin([
    { from: path.resolve(__dirname, 'public'), to: '../dist/public' }
  ])
]
```

## <a name="">分析依赖体积：webpack-bundle-analyzer</a>

```js
npm i webpack-bundle-analyzer -D
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
plugins:[
  new BundleAnalyzerPlugin(),
]

npm run build --report
```


