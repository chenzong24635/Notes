# plugins

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


## <a name="文件分离">文件分离：mini-css-extract-plugin</a>
npm i -D mini-css-extract-plugin

从一个或多个包中提取文本到单独的文件中。

`webpack4 extract-text-webpack-plugin不能用于CSS`。

最好将mini-css-extract-plugin用于生产模式，因为该插件使用目前会导致HMR功能缺失。因此在平常的开发模式中，我们还是使用style-loader。

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin 仅用于生产模式
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
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

## <a name="JS压缩">JS压缩terser-webpack-plugin</a>
npm install terser-webpack-plugin --save-dev

Webpack4.0 默认是使用 terser-webpack-plugin 这个压缩插件；默认就开启了多进程和缓存，构建时，你的项目中可以看到 terser 的缓存文件 node_modules/.cache/terser-webpack-plugin。
在此之前是使用 uglifyjs-webpack-plugin;  

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
        terserOptions: { compress: {  pure_funcs: ["console.log"] } }, //去除console.log
        // terserOptions: { compress: { drop_console: true } }, //去除console.log，请弃用
      })
    ],
  }
}
```
[optimization配置详情](https://webpack.js.org/configuration/optimization/)

## <a name="hard-source-webpack-plugin">hard-source-webpack-plugin为模块提供了中间缓存</a>
[HardSourceWebpackPlugin](https://www.npmjs.com/package/hard-source-webpack-plugin) 为模块提供了中间缓存，缓存默认的存放路径是: node_modules/.cache/hard-source。

```js
npm i hard-source-webpack-plugin -D

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
module.exports = {
  //...
  plugins: [
    new HardSourceWebpackPlugin()
  ]
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


## <a name="SplitChunksPlugin">提取公共代码 SplitChunksPlugin</a>
SplitChunksPlugin 是 webpack 4+ 版本内置的插件, 无需安装

[详情](https://webpack.js.org/plugins/split-chunks-plugin/)
```js
optimization: {
  usedExports: true, // 哪些导出的模块被使用了，再做打包
  // 提取公共部分
  splitChunks: {
    chunks: 'all', // 选择哪些块进行优化: "initial"（初始化） | "all"(默认就是all) | "async"（动态加载）
    minSize: 0, // 生成块的最小大小（以字节为单位）默认30kb
    minRemainingSize: 0,
    maxSize: 0,
    minChunks: 1, // 拆分前必须共享模块的最小块数，默认1
    maxAsyncRequests: 1, //  异步模块内部的并行最大请求数， 默认1
    maxInitialRequests: 1, // 最大入口拆分数，默认1
    automaticNameDelimiter: '~', // 为创建的块设置名称前缀
    // 设置缓存组满足不同规则的chunk
    cacheGroups: {
      vendors: {
        name: 'vendors', //命名,不写默认键名
        chunks: 'all',
        test: /node_modules/, //条件
        priority: -10, // 缓存组优先级,一个chunk可能符合多个缓存组，会辈抽取到优先级高的缓存组里
      },
      commons: { // 将第三方模块提取出来
        chunks: 'commons', // 要缓存的 分隔出来的 chunk 名称
        priority: -20,
        chunks: 'initial', //initial表示提取入口文件的公共部分
        minChunks: 2, // 重复2次使用的时候需要抽离出来
        minSize: 0, //表示提取公共部分最小的大小
        reuseExistingChunk: true, // 如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包
      },
    }
  }
}
```

## <a name="tree shaking">清除无用JS,CSS:tree shaking, CSS:purifycss-webpack</a>
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

只要mode是production就会默认生效，development 下 tree shaking 是不生效的

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



## <a name="作用域提升">Scope Hoisting 作用域提升</a>
webpack 会把引入的 js 文件“提升到”它的引入者顶部。

Scope Hoisting 可以让 Webpack 打包出来的代码文件更小、运行的更快。

Webpack 内置的功能

```js
plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
```



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

## <a name="预编译资源模块">预编译资源模块</a>

在使用webpack进行打包时候，对于依赖的第三方库，比如vue，vuex等这些不会修改的依赖，我们可以让它和我们自己编写的代码分开打包，这样做的好处是每次更改我本地代码的文件的时候，webpack只需要打包我项目本身的文件代码，而不会再去编译第三方库

那么第三方库在第一次打包的时候只打包一次，以后只要我们不升级第三方包的时候，那么webpack就不会对这些库去打包，这样的可以快速的提高打包的速度。其实也就是预编译资源模块。

webpack中，我们可以结合DllPlugin 和 DllReferencePlugin插件来实现。

## <a name="DllPlugin">DllPlugin 抽离第三方模块</a>

DllPlugin把第三方库代码分离开，并且每次文件更改的时候，它只会打包该项目自身的代码。所以打包速度会更快。 webpack内置

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

DllReferencePlugin 把刚刚在webpack.dll.config.js中打包生成的dll文件引用到需要的预编译的依赖上来。

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

npm run dll后会在public目录生成 dll/vendor.dll.js

在public/index.html引入
```js
<script src="dll/vendor.dll.js"></script>
```

这样如果我们没有更新第三方依赖包，打包的时候会发现我们的打包速度明显有所提升。因为我们已经通过 DllPlugin 将第三方依赖包抽离出来了。

更新依赖包后，需要再次 npm run dll

## <a name="definePlugin">definePlugin 定义环境变量 (Webpack4 之后指定 mode 会自动配置)</a>
```js
new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(true),
  VERSION: JSON.stringify("5fa3b9"),
  BROWSER_SUPPORTS_HTML5: true,
  TWO: "1+1",
  "typeof window": JSON.stringify("object")
})
```

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



## <a name="分析打包依赖体积">分析打包依赖体积：webpack-bundle-analyzer</a>

```js
npm i webpack-bundle-analyzer -D

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
plugins:[
  // new BundleAnalyzerPlugin()
  new BundleAnalyzerPlugin({
     //  可以是`server`，`static`或`disabled`。
    //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
    //  在“静态”模式下，会生成带有报告的单个HTML文件。
    //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
    analyzerMode: "server",
    //  将在“服务器”模式下使用的主机启动HTTP服务器。
    analyzerHost: "127.0.0.1",
    //  将在“服务器”模式下使用的端口启动HTTP服务器。
    analyzerPort: 8866,
    //  路径捆绑，将在`static`模式下生成的报告文件。
    //  相对于捆绑输出目录。
    reportFilename: "report.html",
    //  模块大小默认显示在报告中。
    //  应该是`stat`，`parsed`或者`gzip`中的一个。
    //  有关更多信息，请参见“定义”一节。
    defaultSizes: "parsed",
    //  在默认浏览器中自动打开报告
    openAnalyzer: true,
    //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
    generateStatsFile: false,
    //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
    //  相对于捆绑输出目录。
    statsFilename: "stats.json",
    //  stats.toJson（）方法的选项。
    //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
    //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
    statsOptions: null,
    logLevel: "info"
  }),
]

npm run build --report
```

## <a name="测量打包构建时间">测量打包构建时间：speed-measure-webpack-plugin</a>
结合 webpack-bundle-analyzer(分析打包文件的大小) 

[speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin)作用
* 计算整个打包总耗时
* 分析每个插件和 loader 的耗时情况

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


