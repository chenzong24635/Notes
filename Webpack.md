[官网-指南](https://www.webpackjs.com/guides/)

[从零开始的Webpack4教程](https://segmentfault.com/a/1190000018534625?share_user=1030000000178452#item-5)

[一看就懂之webpack高级配置与优化](https://segmentfault.com/a/1190000020320871)

* <a href="打包图片资源">打包样式文件中的图片资源</a>
* <a href=""></a>

# 基本
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

webpack简单点来说就就是一个配置文件，所有的魔力都是在这一个文件中发生的。 这个配置文件主要分为三大块
* entry 入口文件 让webpack用哪个文件作为项目的入口
* output 出口 让webpack把处理完成的文件放在哪里
* module 模块 要用什么不同的模块来处理各种类型的文件

# 安装
npm i -g webpack  //全局安装
npm i -D webpack@\<version> //本地安装 特点版本

npm i -g webpack-cli // webpack 4+ 版本，你还需要安装 CLI。

npm i -D webpack@beta> // 安装最新体验版本到当前项目

# 建立项目
建一个文件夹，然后新建一个package.json的文件在项目根目录下
>
    mkdir webpack
    cd webpack
    npm init
    一直点回车

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

## <a name="加载CSS">加载CSS: [style-loader css-loader](https://webpack.js.org/loaders/style-loader)</a>
npm install --save-dev style-loader // 处理css文件中的url()等
npm install --save-dev css-loader // 将css插入到页面的style标签
npm install --save-dev less-loader less  // less

```js
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

## <a name="自动添加CSS3前缀">自动添加CSS3前缀： [postcss-loader autoprefixer](https://webpack.js.org/loaders/postcss-loader/) </a>
npm install --save-dev postcss-loader autoprefixer

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

## <a name="加载图片">加载图片、字体: [file-loader](https://www.webpackjs.com/loaders/file-loader/)  [url-loader](https://www.webpackjs.com/loaders/url-loader/)</a>
npm install file-loader url-loader --save-dev

* file-loader：  
解决引用路径的问题，拿background样式用url引入背景图来说，我们都知道，webpack最终会将各个模块打包成一个文件，因此我们样式中的url路径是相对入口html页面的，而不是相对于原始css文件所在的路径的。这就会导致图片引入失败。  
这个问题是用file-loader解决的，file-loader可以解析项目中的url引入（不仅限于css），根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件。

* url-loader：  
如果图片较多，会发很多http请求，会降低页面性能。这个问题可以通过url-loader解决。url-loader会将引入的图片编码，生成dataURl。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。  
当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。

url-loader封装了file-loader

```js
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader:'url-loader',
        options:{
          limit: 100*1024,
          outputPath:'images/',
        }
      }]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'url-loader'
      ]
    }
  ]
}
```
* test:/.(png|jpg|gif)/是匹配图片文件后缀名称。
* use：是指定使用的loader和loader的配置参数。
* limit：是把小于100*1024B的文件打成Base64的格式，写入JS。
* outputPath: 打包后的图片放到指定的文件夹下

## <a name="html的图片">html的图片: html-withimg-loader</a>
解决webpack不识别html中img标签src引入的图片

npm install --save-dev html-withimg-loader

```js
rules: [
  {
    test: /\.(htm|html)$/i,
    use:[ 'html-withimg-loader'] 
  }
]
```

## <a name="文件分离">[文件分离：extract-text-webpack-plugin](https://webpack.docschina.org/plugins/extract-text-webpack-plugin/)</a>
npm install --save-dev extract-text-webpack-plugin

从一个或多个包中提取文本到单独的文件中。

`由于webpack v4 extract-text-webpack-plugin不能用于CSS`。请改用[mini-css-extract-plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)。

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

## <a name="将单个文件或整个目录复制到构建目录">[将单个文件或整个目录复制到构建目录 copy-webpack-plugin](https://www.webpackjs.com/plugins/copy-webpack-plugin/)</a>
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

## <a name="加载数据">加载数据,如 CSV、TSV 和 XML</a>
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

## <a name="打包html文件">[打包html文件 html-webpack-plugin](https://www.webpackjs.com/plugins/html-webpack-plugin/)</a>
npm install --save-dev html-webpack-plugin 

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

## <a name="清理dist文件夹">[清理dist文件夹: clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) </a>
npm install --save-dev clean-webpack-plugin 

```js
const CleanWebpackPlugin = require('clean-webpack-plugin');

plugins: [
  new CleanWebpackPlugin(['dist'])
]
```

## <a name="JS语法转换babel-loader">[JS语法转换babel-loader](https://webpack.js.org/loaders/babel-loader)</a>
npm install -D babel-loader @babel/core @babel/preset-env webpack

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

## <a name="JS语法检查">[JS语法检查eslint-loader](https://webpack.js.org/loaders/eslint-loader)</a>
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

## <a name="JS压缩">[JS压缩terser-webpack-glugin](https://www.npmjs.com/package/terser-webpack-plugin)</a>
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

## <a name="webpack-dev-server">[热更新webpack-dev-server](https://www.webpackjs.com/configuration/dev-server/)</a>
npm install webpack-dev-server –save-dev

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

## <a name=""></a>
## <a name=""></a>




