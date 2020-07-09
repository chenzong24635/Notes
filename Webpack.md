[官网-指南](https://www.webpackjs.com/guides/)

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


# 安装命令
* npm i -g webpack webpack-cli //全局安装webpack webpack-cli(使用 webpack 4+ 版本，你还需要安装 CLI) --不推荐
* npm i -D webpack webpack-cli //安装到当前项目  
* npm i -D webpack@\<version> //安装特点版本到当前项目  
* npm i -D webpack@beta // 安装最新体验版本到当前项目  

* webpack -v  //版本


# [建立项目](https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85)
建一个文件夹，然后新建一个package.json的文件在项目根目录下
```js
mkdir webpack-learn && cd webpack-learn // 新建且切换文件夹
npm init -y // 生成package.json
npm i webpack webpack-cli -D // 安装webpack到当前项目
```

npx webpack 运行

# [核心概念](https://www.webpackjs.com/concepts/)
* entry：配置入口文件的地址，可以是单一入口，也可以是多入口。
* output：配置出口文件的地址，支持多出口配置。
* Loader：处理那些非 JS 文件（webpack 自身只能解析 JS)
* plugins：配置插件，根据你的需要配置不同功能的插件,用于生产模版和各项功能。
* mode：模式，none(默认) | production(生产模式) | development(开发模式)
  >mode: process.env.NODE_ENV

[webpack.config.js 所有配置](https://webpack.js.org/configuration/devtool/)

在webpack.config.js配置
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

### [resolve 配置如何解析模块](https://webpack.js.org/configuration/resolve/)
resolve.modules 的默认值是［'node_modules'］，含义是先去当前目录的 node_modules 目录下去找我们想找的模块，如果没找到就去上一级目录 ../node_modules 中找，再没有就去 ../../node_modules 中找，以此类推。 这和 Node.js 的模块寻找机制很相似。

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

在development模式中，默认开启，


* none
* eval:速度最快,使用eval包裹模块代码,
* source-map： 生成 .map 文件
* eval-cheap-source-map
* cheap-module-source-map
* ...

![soruce-map](/img/soruce-map.png)


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
* noParse 

如果一些第三方模块没有AMD/CommonJS规范版本，可以使用 noParse 来标识这个模块，这样 Webpack 会引入这些模块，但是不进行转化和解析，从而提升 Webpack 的构建性能 ，例如：jquery 、lodash。

```js
module:{
  noParse: /jquery|lodash/, // loaders解析时忽略 正则匹配的文件
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
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader:'url-loader',
        options:{
          limit: 2 * 1024, //如果文件小于限制的大小。则会返回 base64 编码，否则使用 file-loader 将文件移动到输出的目录中
          esModule: false, //启用CommonJS模块语法,否则图片路径会解析为 [object%20Module]
          fallback: {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:6].[ext]', //文件名,hash（默认32位）值为6位，ext自动补全文件扩展名
              // outputPath:'images/', //在output基础上，修改输出图片文件的位置
              // publicPath: './dist/images/',  //修改背景图引入url的路径
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

## <a name="babel">JS语法转换 babel-loader</a>

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
          loader:'babel-loader',// babel-loader只会将 ES6/7/8语法转换为ES5语法,需配合babel-polyfill
          // loader:'babel-loader?cacheDirectory=true', 
          //缓存中读取，以避免在每次运行时运行潜在昂贵的 Babel 重新编译
          // cacheDirectory=true将使用默认的缓存目录(node_modules/.cache/babel-loader)，如果在任何根目录下都没有找到 node_modules 目录，将会降级回退到操作系统默认的临时文件目录。

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


[不容错过的 Babel7 知识](https://juejin.im/post/5ddff3abe51d4502d56bd143)


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


## <a name="cache-loader">loader缓存 cache-loader</a>
在一些性能开销较大的 loader 之前添加 cache-loader，将结果缓存中磁盘中。默认保存在 node_modueles/.cache/cache-loader 目录下。

npm i cache-loader -D
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['cache-loader', ...loaders],
        include: path.resolve('src'),
      },
    ],
  },
};

```

## <a name="plugins">plugins</a>
[plugins-英文网站](https://webpack.js.org/plugins/)
[plugins-中文网站](https://www.webpackjs.com/plugins/)

## <a name="文件分离">文件分离：mini-css-extract-plugin</a>
npm i -D mini-css-extract-plugin

从一个或多个包中提取文本到单独的文件中。

`由于webpack v4 extract-text-webpack-plugin不能用于CSS`。

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
    template:'./public/index.html',
    minify: {
      // 压缩HTML文件
      removeComments: true, // 移除HTML中的注释
      collapseWhitespace: true, // 删除空白符与换行符
      minifyCSS: true, // 压缩内联css
    },
    // inject: true, //默认true
  })
]

```
inject:
* true：默认值，script 标签位于 html 文件的 body 底部
* body：script 标签位于 html 文件的 body 底部（同 true）
* head：script 标签位于 head 标签内
* false：不插入生成的 js 文件，只是单纯的生成一个 html 文件


多入口打包(必须配置 chunks)
```js
module.exports = {
  entry: {
      index: "./src/index.js", // 指定打包输出的chunk名为index
      foo: "./src/foo.js" // 指定打包输出的chunk名为foo
  },
  output: {
    filename: '[name].bundle.js' // [name] 是入口名称
  },
  optimization: {
    splitChunks: {
      // 自动提取所有公共模块到单独 bundle
      chunks: 'all'
    }
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
  new CleanWebpackPlugin({
    // cleanOnceBeforeBuildPatterns:['**/*', '!dll', '!dll/**'] //不删除dll目录下的文件
  })
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

Webpack4.0 默认是使用 terser-webpack-plugin 这个压缩插件，在此之前是使用 uglifyjs-webpack-plugin;  
因为最新版的uglifyjs-webpack-plugin插件已经不支持es6语法,用插件terser-webpack-plugin代替

```js
const TerserPlugin  = require('terser-webpack-plugin');

module.exports = {
  //optimization 告诉webpack使用TerserPlugin或Optimization.minimizer中指定的插件最小化捆绑包
  optimization: { 
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i, // 匹配文件
        include: /\/includes/, // 匹配文件夹
        exclude: /\/excludes/, // 排除文件夹
        cache: true, // 启用/禁用文件缓存
        cache: 'path/to/cache', // 启用文件缓存并设置缓存目录的路径
        parallel: true, // 启用/禁用多进程并行运行
        parallel: 4, // 启用多进程并行运行并设置并发运行次数,默认是 os.cpus().length - 1
        sourceMap: false, //启用/禁用映射
      })
    ],
  }
}
```
[optimization配置详情](https://webpack.js.org/configuration/optimization/)

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


## <a name="SplitChunksPlugin">提取公共代码 SplitChunksPlugin</a>
SplitChunksPlugin 是 webpack 4+ 版本内置的插件, 无需安装

[详情](https://webpack.js.org/plugins/split-chunks-plugin/)
```js
optimization: {
  usedExports: true, // 哪些导出的模块被使用了，再做打包
  // 提取公共部分
  splitChunks: {
    chunks: 'all', // 选择哪些块进行优化: "initial"（初始化） | "all"(默认就是all) | "async"（动态加载）
    minSize: 0, // 生成块的最小大小（以字节为单位）默认0
    minRemainingSize: 0,
    maxSize: 0,
    minChunks: 1, // 拆分前必须共享模块的最小块数，默认1
    maxAsyncRequests: 1, //  最大异步请求数， 默认1
    maxInitialRequests: 1, // // 最大初始化请求书，默认1
    automaticNameDelimiter: '~', // 为创建的块设置名称前缀
    cacheGroups: {
      commons: { // 将第三方模块提取出来
        name: 'commons', // 要缓存的 分隔出来的 chunk 名称
        priority: 1, //  缓存组优先级
        chunks: 'initial', //initial表示提取入口文件的公共部分
        minChunks: 2, // 重复2次使用的时候需要抽离出来
        minSize: 0 //表示提取公共部分最小的大小
      },
    }
  }
}
```

## <a name="tree shaking">tree shaking, CSS:purifycss-webpack</a>
#### CSS tree shaking  
[purifycss-webpack](https://www.npmjs.com/package/purifycss-webpack)

npm i  purifycss-webpack purify-css glob -D

```js
const glob = require('glob'); 
const PurifyCSSPlugin = require("purifycss-webpack");

plugins: [
  //这个插件 应当在 MiniCssExtractPlugin 之后使用; 否则，它不起作用：
  new PurifyCSS({
    paths: glob.sync([
      // 要做 CSS Tree Shaking 的路径文件
      resolve('./public/*.html'), // 请注意，我们同样需要对 html 文件进行tree shaking
      resolve('./src/*.js'),
    ]),
  }),
]
```

#### JS tree shaking  
只支持ES Modules 模块 （import方式引入），不支持commonjs的方式引入

只要mode是production就会默认生效，develpoment下 tree shaking 是不生效的

```js
//util.js
export const add = (a, b) => {
 return a + b;
};
export const minus = (a, b) => {
 return a - b;
};

//index.js
import { add } from "./util";
add(1, 2);

//webpack.config.js
optimization: {
  usedExports: true // 哪些导出的模块被使用了，再做打包
}

minus 方法未使用，会被摇掉
```

为什么很多资料都说 babel-loader 会导致 Tree-shaking 失效，但当我们实际尝试后又发现并没有失效？

其实，这是因为在最新版本（8.x）的 babel-loader 中，已经自动帮我们关闭了对 ES Modules 转换的插件

可以在 babel-loader 的配置中强制开启 ES Modules 转换插件
```js
module: {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              { 
                modules: 'commonjs', //开启 ES Modules 转换,默认auto
              } 
            ]
          ]
        }
      }
    }
  ]
},
optimization: {
  usedExports: true
}
```

Webpack 4 中新增了一个 sideEffects 特性，它允许我们通过配置标识我们的代码是否有副作用，从而提供更大的压缩空间。
>模块的副作用指的就是模块执行的时候除了导出成员，是否还做了其他的事情。

sideEffects: boolean | string[]


//package.json配置
```json
//如果所有代码都不包含 side effect，我们就可以简单地将该属性标记为 false
"sideEffects":false //正常对所有模块进行 tree shaking , 仅生产模式有效，需要配合usedExports

//数组形式
"sideEffects":['*.css','@babel/polyfill'] // 排除需要保留副作用的模块路径
```

因为官网把对 sideEffects 特性的介绍跟 Tree-shaking 混到了一起，所以很多人误认为它们之间是因果关系，其实它们没有什么太大的关系。


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

## <a name="拷贝静态资源">拷贝静态资源  copy-webpack-plugin</a>
有些不需要参与构建的静态文件，如 favicon 等。

一般我们建议，把这类文件统一放在项目根目录下的 static 目录中

npm i copy-webpack-plugin -D

```js
const CopyWebpackPlugin = require('copy-webpack-plugin');
plugins: [
  new CopyWebpackPlugin({
    patterns: [
      { 
        from: path.resolve(__dirname, 'static'), // 需要拷贝的目录
        to: 'static'
      },
    ],
  }),
]
```

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

## <a name="DllPlugin">DllPlugin 抽离第三方模块</a>
DllPlugin webpack内置

// webpack.dll.config.js
```js
const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: 'production',
  entry: {
    vendor: ['vue','element-ui'] 
  },
  output: {
    path: path.resolve(__dirname, 'public/dll'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library' 
     // 这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '[name]-manifest.json'),
      name: '[name]_library', 
      context: __dirname
    })
  ]
};
```

webpack.config.js
```js
module.exports = {
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor-manifest.json')
    }),
    new CopyWebpackPlugin({ // 拷贝生成的文件到dist目录 这样每次不必手动去cv
      patterns: [
        {
          from: 'public/dll', // 要拷贝的文件
          to:'dll', // 生成的文件夹
        },
      ],
    }),
  ]
};
```

package.json
```js
"dll": "webpack --config build/webpack.dll.config.js"
```

npm run dll后会在根目录生成 static/js/vendor.dll.js

在public/index.html引入
```js
<script src="dll/vendor.dll.js"></script>
```

这样如果我们没有更新第三方依赖包，打包的时候会发现我们的打包速度明显有所提升。因为我们已经通过 DllPlugin 将第三方依赖包抽离出来了。

更新依赖包后，需要再次 npm run dll

## <a name="IgnorePlugin">IgnorePlugin 忽略第三方包指定目录</a>
webpack 的内置插件，作用是忽略第三方包指定目录。

例如: moment (2.24.0版本) 会将所有本地化内容和核心功能一起打包，我们就可以使用 IgnorePlugin 在打包时忽略本地化内容。

```js
module.exports = {
  //...
  plugins: [
    //忽略 moment 下的 ./locale 目录
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}
```

在使用的时候，如果我们需要指定语言，那么需要我们手动的去引入语言包，例如，引入中文语言包:
```js
import moment from 'moment';
import 'moment/locale/zh-cn';// 手动引入
```

## <a name="HappyPack">HappyPack 开启多进程Loader转换</a>
在webpack构建过程中，实际上耗费时间大多数用在loader解析转换以及代码的压缩中。日常开发中我们需要使用Loader对js，css，图片，字体等文件做转换操作，并且转换的文件数据量也是非常大。由于js单线程的特性使得这些转换操作不能并发处理文件，而是需要一个个文件进行处理。

HappyPack的基本原理是将这部分任务分解到多个子进程中去并行处理，子进程处理完成后把结果发送到主进程中，从而减少总的构建时间

但当你的项目不是很复杂时，不需要配置 happypack，因为进程的分配和管理也需要时间，并不能有效提升构建速度，甚至会变慢。

npm i -D happypack
```js
const os = require('os'); // 系统操作函数
// 根据 当前电脑系统的内核数量 指定线程池个数 
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
// 也可以指定线程池个数
//const happyThreadPool = HappyPack.ThreadPool({ size: 2 })

rules: [
  {
    test: /\.css?$/,
    include: path.resolve(__dirname, "./src"),
    use: [
      {
      // 一个loader对应一个id，对应plugins设置的HappyPack的id
      loader: "happypack/loader?id=styles"
      }
    ]
  },
]
//在plugins中增加
plugins:[
  new HappyPack({
    // 唯一的标识符id，来代表当前的HappyPack是HappPack来处理一类特定的文件
    id: "css",
    // 用法和Loader配置中一样
    loaders: [
      "style-loader",
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        }
      },
      'postcss-loader',
      "less-loader",
    ]
  }),
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


# 魔法注释
```js
import(/* webpackChunkName: 'posts' */'./posts/posts')
```

# Webpack 中 hash、chunkhash 和 contenthash 的区别 

[参考](https://juejin.im/post/5d70aee4f265da03f12e7ab2)

在webpack中有三种hash可以配置:
* hash
* chunkhash
* contenthas

#### hash

只有一个 hash ，所有文件的 hash 都是相同,修改任何文件都会导致所有文件的 hash 发生改变(粒度整个项目)


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

