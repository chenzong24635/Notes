[官网-指南](https://www.webpackjs.com/guides/)

https://mp.weixin.qq.com/s?__biz=Mzg5ODA5NTM1Mw==&mid=2247485340&idx=1&sn=9b674f577c1f8e693caec2faf5ece19c&chksm=c066860af7110f1c6d6da987d0317115929b8bd43f3f063eb20c966f316adda8b85f4e8525be&scene=126&sessionid=1587000785&key=e49a71585c6776d7cdfb10639fffd83b1f7eef70e47e781bddcd006f6753f9e0e99cc8c7e715ff4e1d36ac2301befd444de4d8232ccb6f72f9888d1191fed5f04ad60d23fa672b32d650657aa6346e68&ascene=1&uin=MTIxNDM5MTUzOQ%3D%3D&devicetype=Windows+7&version=62080079&lang=zh_CN&exportkey=AyXmuUQO5Gf3QBrFEB%2BEz%2Bs%3D&pass_ticket=oN3yCLKmUuPsCBlHcAjaCwU3Tphw7q2Mnjc9%2FirUP7BOkfsyRFoDdeoUVOwzI8nu


[webpack打包原理 ? 看完这篇你就懂了 !](https://juejin.im/post/5e116fce6fb9a047ea7472a6)

[Webpack4+Babel7优化70%速度](https://juejin.im/post/5c763885e51d457380771ab0)

[](https://github.com/LuckyWinty/fe-weekly-questions/issues/4)

[从零开始的Webpack4教程](https://segmentfault.com/a/1190000018534625?share_user=1030000000178452#item-5)

[一看就懂之webpack高级配置与优化](https://segmentfault.com/a/1190000020320871)

[2020年了,再不会webpack敲得代码就不香了(近万字实战)](https://juejin.im/post/5de87444518825124c50cd36)

[webpack 原理分析与性能优化（2w字精华）](https://juejin.im/post/5e02c524f265da33e347fe61)

* <a href=""></a>

# 基本
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

webpack简单点来说就就是一个配置文件，所有的魔力都是在这一个文件中发生的。 这个配置文件主要分为三大块
* entry 入口文件 让webpack用哪个文件作为项目的入口
* output 出口 让webpack把处理完成的文件放在哪里
* module 模块 要用什么不同的模块来处理各种类型的文件

webpack默认支持JS模块和JSON模块  
支持CommonJS， ES moudule， AMD等模块类型


# 安装命令
* npm i -g webpack webpack-cli //全局安装webpack webpack-cli(使用 webpack 4+ 版本，你还需要安装 CLI) --不推荐
* npm i -D webpack webpack-cli //安装到当前项目  
* npm i -D webpack@\<version> //安装特点版本到当前项目  
* npm i -D webpack@beta // 安装最新体验版本到当前项目  

* webpack -v  //版本


# [建立项目](https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85)
建一个文件夹，然后新建一个package.json的文件在项目根目录下
```js
mkdir webpack-learn && cd webpack-learn
npm init -y
npm i webpack webpack-cli -D
```

npx webpack 运行

# [核心概念](https://www.webpackjs.com/concepts/)
* entry：配置入口文件的地址，可以是单一入口，也可以是多入口。
* output：配置出口文件的地址，支持多出口配置。
* Loader：处理那些非 JS 文件（webpack 自身只能解析 JS)
* plugins：配置插件，根据你的需要配置不同功能的插件,用于生产模版和各项功能。
* mode：模式，none(默认) | production(生产模式) | development(开发模式)
  >mode: process.env.NODE_ENV

# [webpack.config.js 所有配置](https://webpack.js.org/configuration/devtool/)

在webpack.config.js配置
```js
module.exports = {
  entry: {},// 入口文件的配置项
  output: {}, // 出口文件的配置
  mode: '', // 当前构建环境
  module: {},// 模块，配置 loader
  plugins: [],// 插件，配置 plugin
  devServer: {},// 配置webpack开发服务功能
}
```

### [entry 入口文件](https://webpack.js.org/configuration/entry-context/#entry)

//单入口
```js
entry: './src/main.js',
相当于
entry: {
  main: './src/main.js'
}
```
//多入口
```js

entry: {
  main: './src/main.js',
  login: './src/login.js',
}
```

### [output 出口文件](https://webpack.js.org/configuration/output/)
```js
output: {
  filename: "bundle.js",//输出文件的名称
  // filename: 'js/[name].[hash:8].js',   //添加了hash值, 实现静态资源的长期缓存
  path: path.resolve(__dirname, "dist")//输出文件目录，必须是绝对路径
},

//多入口的处理
output: {
  filename: "js/[name][chunkhash:8].js",//chunkhash，文件名称重复
  path: path.resolve(__dirname, "dist")
},
```

### [mode 当前的构建环境](https://webpack.js.org/configuration/mode/)
* production  生产环境 (默认值)
* development 开发环境
* none 

### [devtool 代码映射](https://webpack.js.org/configuration/devtool/)
源代码与打包后的代码的映射关系，通过sourceMap定位到源代码。

在development模式中，默认开启，


* none
* eval:速度最快,使用eval包裹模块代码,
* source-map： 生成 .map 文件
* eval-cheap-source-map
* cheap-module-source-map
* ...

推荐使用：
* devtool:"cheap-module-eval-source-map",// development 开发环境配置
* devtool:"cheap-module-source-map", // production 生产模式配置





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

### plugin 插件

plugin 可以在webpack运⾏到某个阶段的时候，帮你做⼀些事情，类似于生
命周期的概念

扩展插件，在 Webpack 构建流程中的特定时机注⼊扩展逻辑来改变构建结
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

## <a name="加载CSS">加载CSS: style-loader css-loader less-loader...</a>

npm install -D style-loader // 通过注入\<style\>标签将css添加到DOM
npm install -D css-loader // 解析 @import 和 url()的css文件
npm install -D less-loader less  // less

```js
// 注意顺序不能乱，解析顺序从右到左（从下至上）
module: {
  rules: [
    {
      test: /\.(css|less)$/,
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

[autoprefixer](https://github.com/postcss/autoprefixer)
[browserslist](https://www.npmjs.com/package/browserslist)

postCSS推荐在项目根目录，建立一个postcss.config.js文件。

* postcss.config.js
```js
module.exports = {
  plugins: [
    require('autoprefixer')({
      //必须设置支持的浏览器才会自动添加添加浏览器兼容
      overrideBrowserslist : [  
        'last 2 version',
        '> 0.2%',
        'maintained node versions',
        'not dead',
        '> 0.2% in CN'
      ],
      grid: 'autoplace' // 启用 grid 前缀
    })
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
      "postcss-loader", //注意顺序，必须在less-loader解析后
      'less-loader',
    ]
  }  
]
```

可以在 .browserslistrc 文件或者 package.json 的 browserslist 属性中配置 
```json
// package.json
{
  "browserslist": [
    "last 2 version",
    "> 0.2%",
    "maintained node versions",
    "not dead",
    "> 0.2% in CN"
  ]
}

// .browserslistrc
# Browsers that we support 

last 2 version
> 0.2%
maintained node versions
not dead
> 0.2% in CN
```

[部分css代码禁用 Autoprefixer](https://github.com/postcss/autoprefixer#control-comments)
```css
.a {
  transition: 1s; /* will be prefixed */
}

.b {
  /* autoprefixer: off */
  transition: 1s; /* will not be prefixed */
}

.c {
  /* autoprefixer: ignore next */
  transition: 1s; /* will not be prefixed */
  mask: url(image.png); /* will be prefixed */
}
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
          publicPath: './dist/images/'  //修改背景图引入url的路径
        }
      }]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader:'url-loader',
        options:{
          limit: 2 * 1024,
          fallback: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:6].[ext]'
            }
          }
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

## <a name="plugins">plugins</a>
[plugins-英文网站](https://webpack.js.org/plugins/)
[plugins-中文网站](https://www.webpackjs.com/plugins/)

## <a name="文件分离">文件分离：mini-css-extract-plugin</a>
npm i -D mini-css-extract-plugin

从一个或多个包中提取文本到单独的文件中。

`由于webpack v4 extract-text-webpack-plugin不能用于CSS`。请用[mini-css-extract-plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)。

最好将mini-css-extract-plugin用于生产模式，因为该插件使用目前会导致HMR功能缺失。因此在平常的开发模式中，我们还是使用style-loader。

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader, // 生产模式使用
          // 'style-loader', //开发使用
          // process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          MiniCssExtractPlugin.loader,
          "css-loader",
          'less-loader',
          'postcss-loader'
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
    　filename: "css/[name].[hash:8].css" // 提取出来的css文件路径以及命名
    }),
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

## <a name="打包生成index.html">打包自动生成index.html:  html-webpack-plugin</a>
生成一个 HTML5 文件， 其中包括使用 script 标签的 body 中的所有 webpack 包

npm i -D html-webpack-plugin 


新建跟目录文件夹public,里面新建一个index.html
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    title: '标题',
    template:'./public/index.html'
  })
]
```

多入口打包(必须配置 chunks)
```js
module.exports = {
  entry: {
      index: "./src/index.js", // 指定打包输出的chunk名为index
      foo: "./src/foo.js" // 指定打包输出的chunk名为foo
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 要打包输出哪个文件，可以使用相对路径
      filename: "index.html", // 打包输出后该html文件的名称
      chunks: ["index"] // 数组元素为chunk名称，即entry属性值为对象的时候指定的名称，index页面只引入index.js
    }),
    new HtmlWebpackPlugin({
      template: "./public/foo.html",
      filename: "foo.html", 
      chunks: ["foo"] 
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


## <a name="CSS压缩">CSS压缩optimize-css-assets-webpack-plugin</a>
npm i -D optimize-css-assets-webpack-plugin cssnano

它将在webpack构建期间搜索css资源，并将优化/最小化css（默认情况下，它使用cssnano，但可以指定自定义CSS处理器）

```js
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


plugins: [
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g, //应优化/最小化的资产的名称
    cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano
    cssProcessorOptions: {  //传递给cssProcessor的选项，默认为{}
      safe: true,
      discardComments: { removeAll: true }
    },
    canPrint: true //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
  }),
],


```

## <a name="JS压缩">JS压缩terser-webpack-glugin</a>
npm install terser-webpack-plugin --save-dev

因为最新版的uglifyjs-webpack-plugin插件已经不支持es6语法,用插件terser-webpack-plugin代替

```js
const TerserPlugin  = require('terser-webpack-plugin');

module.exports = {
   optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(
      {
        test: /\.js(\?.*)?$/i, // 匹配文件
        include: /\/includes/, // 匹配文件夹
        exclude: /\/excludes/, // 排除文件夹
        cache: true, // 启用/禁用文件缓存
        cache: 'path/to/cache', // 启用文件缓存并设置缓存目录的路径
        parallel: true, // 启用/禁用多进程并行运行
        parallel: 4, // 启用多进程并行运行并设置并发运行次数
        sourceMap: false, //启用/禁用映射
      }
    )],
  }
}
```

## <a name="生成gzip压缩的文件">生成gzip压缩的文件</a>
npm i compression-webpack-plugin -D

[前端文件设置gzip压缩](https://juejin.im/post/5eb2243e51882555d8457833#heading-9)

```js
const CompressionWebpackPlugin = require("compression-webpack-plugin");
// 可加入需要的其他文件类型，比如json
// 图片不要压缩，体积会比原来还大
const productionGzipExtensions = ["js", "css"];

module.exports = {
  plugins: [
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 匹配文件名
      threshold: 10240, // 对超过 10*1024 的数据进行压缩
      minRatio: 0.8, // 压缩比例，值为0 ~ 1
      deleteOriginalAssets: false // 是否删除原文件
    })
  ],
};

```
打包完的js/css文件，都会多一份对应的gzip文件，部署的时候需要配置一下，启用gzip，这样支持gzip压缩的浏览器请求的就是压缩文件，不支持的浏览器请求的就是源文件，gzip压缩文件体积会小很多。


网站中常见的图片的格式有jpg(jpeg)、png、gif、webp，这些格式的图片本身已经优化了，所以不再需要gzip。实际上对图片进行gzip压缩，反而可能使图片体积更大。

svg、eot 和 ttf 这三种格式的字体文件可以使用 CompressionWebpackPlugin 进行压缩，并且配合Nginx的gzip_types配置，woff和woff2格式的字体文件不需要gzip。


## <a name="webpack-dev-server">提取公共代码 splitChunks</a>
SplitChunksPlugin 是 webpack 4+ 版本内置的插件, 所以无需安装

```js
optimization: {
  // 提取公共部分
  splitChunks: { 
    cacheGroups: {
      commons: {
        name: 'commons', //提取出来的文件命名
        chunks: 'initial', //initial表示提取入口文件的公共部分
        minChunks: 2, //表示提取公共部分最少的文件数
        minSize: 0 //表示提取公共部分最小的大小
      },
      vendor: {
        priority: 1, //添加权重
        test: /node_modules/, //把这个目录下符合下面几个条件的库抽离出来
        chunks: 'initial', //刚开始就要抽离
        minChunks: 2//重复2次使用的时候需要抽离出来
      },
    }
  }
}
```


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
    port: 9000, // 服务端口号
    hotOnly: true, // true时即便HMR不生效，浏览器也不自动刷新
    proxy: { // 跨域代理
      "/api": {
        target: "http://xxx.com"
      }
    }
  }
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ]
}
```

package.json添加
```js
"scripts": {
    "server":"webpack-dev-server"
 },
```
终端输入 npm run server

## <a name="拷贝静态资源">拷贝静态资源  copy-webpack-plugin</a>
将单个文件或整个目录复制到构建目录  
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

## <a name="分析打包依赖体积">分析打包依赖体积：webpack-bundle-analyzer</a>

```js
npm i webpack-bundle-analyzer -D

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
plugins:[
  new BundleAnalyzerPlugin(),
]

npm run build --report
```

## <a name="测量打包构建时间">测量打包构建时间：speed-measure-webpack-plugin</a>
结合 webpack-bundle-analyzer 测量你的 webpack 构建期间各个阶段花费的时间。

[speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin)

```js
npm i speed-measure-webpack-plugin -D


const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap({
  plugins: [
    new xxx(),
    new xxx()
  ]
})
```

## <a name="babel">babel</a>
npm i babel-loader @babel/preset-env @babel/core -D 

npm i @babel/polyfill -S // 安装到生产模式

babel-loader 是webpack 与 babel的通信桥梁  
@babel/preset-env 只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换 例如(promise、Generator、Set、Maps、Proxy等)

babel-polyfill 转换es的新特性

webpack.config.js
```js
const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  module:{
    entry: ["@babel/polyfill",path.resolve(__dirname,'./src/index.js')], // 入口文件
    rules:[
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        },
        exclude:/node_modules/
      },
    ]
  }
}
```

babel.config.js
```js
module.exports = {
  //语法转换插件 preset-env
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        },
        corejs: 2, //新版本需要指定核心库版本
        useBuiltIns: "usage", //按需注入
      },
    ],
  ],
};
```
useBuiltIns 选项是 babel 7 的新功能,这个选项告诉 babel 如何配
置 @babel/polyfill
* entry: 需要在 webpack 的入口文件 import "@babel/polyfill" 一次。 babel
会根据你的使⽤情况导⼊垫⽚，没有使用的功能不会被导入相应的垫片。 
* usage: 不需要 import ，全自动检测，但是要安装@babel/polyfill 。（试验阶段）  
* false: 如果你 import "@babel/polyfill" ，它不会排除掉没有使用的垫片，程序体积会庞
大。(不推荐)


----
* @babel/cli: 为babel的脚手架工具
* @babel/core: babel-core是作为babel的核心存在，babel的核心api都在这个模块里面，比如：transform，用于字符串转码得到AST
* babel-loader: webpack 就是用于编译JavaScript代码 
* @babel/preset-env : 官方解释“用于编写下一代JavaScript的编译器”，编译成浏览器认识的JavaScript标准
* @babel/polyfill ES6语法转换
* @babel/preset-react: 用于编译react的jsx，开发react应用必备
* @babel/plugin-proposal-class-properties: 解析class类的属性
* @babel/plugin-proposal-decorators: 解析装饰器模式语法，如使用react-redux的@connect
* @babel/plugin-proposal-export-default-from: 解析export xxx from 'xxx'语法


## <a name="eslint">eslint</a>
npm i eslint eslint-loader -D

.eslintrc是ESlint的配置文件，我们需要在项目的根目录下增加.eslintrc文件。
```js
{
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "globals" : {
    "Action"       : false,
    "__DEV__"      : false,
    "__PROD__"     : false,
    "__DEBUG__"    : false,
    "__DEBUG_NEW_WINDOW__" : false,
    "__BASENAME__" : false
  },
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
  },
  "extends": "airbnb",
  "rules": {
      "semi": [0],
      "react/jsx-filename-extension": [0]
  }}

```

webpack.config.js
```js
```

packack.json
```json
{
    "scripts": {
        "eslint": "eslint --ext .js --ext .jsx src/"
    }
}
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



## <a name="externals">externals</a>
[externals外部扩展](https://www.webpackjs.com/configuration/externals/)

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