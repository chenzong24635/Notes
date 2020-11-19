
# loaders
[](https://github.com/LinDaiDai/niubility-coding-js/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/webpack/%E9%9C%96%E5%91%86%E5%91%86%E7%9A%84webpack%E4%B9%8B%E8%B7%AF-loader%E7%AF%87.md#raw-loader)



## <a name="加载CSS">加载CSS: style-loader css-loader less-loader</a>

npm install -D style-loader // 通过注入\<style\>标签将css添加到DOM
npm install -D css-loader // 解析 @import 和 url()的css文件
npm install -D less-loader less  // less
npm install -D  sass-loader node-sass  // sass

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
    test: /\.(css|less)$/,
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
注意:
如果你是使用import引用的话得到的是图片的相对路径

如果是使用require引用的话得到的是一个模块对象, 这时候需要需要配置loader的一个参数options.esModule为false 才会得到相对路径.


## <a name="图片压缩">图片压缩:image-webpack-loader</a>
[image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader)

npm install image-webpack-loader --save-dev
```js
rules: [{
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        disable: true, // webpack@2.x and newer
        mozjpeg: {
          progressive: true,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75
        }
      },
    },
  ],
}]
```

## <a name="svg">将压缩后的 SVG 内容注入代码中:svg-inline-loader</a>

## <a name="加载Vue组件">加载Vue组件:vue-loader</a>
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

## <a name="raw-loader">加载文件原始内容（utf-8）: raw-loader</a>

npm i -D raw-loader
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  }
}
```
项目中引入txt文件
```js
import txt from './file.txt';
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
[Babel](/Babel.md)


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
  entry: [ // 入口文件
    "@babel/polyfill",
    path.resolve(__dirname,'./src/index.js')
  ],
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        use:{
          loader:'babel-loader',// babel-loader只会将 ES6/7/8语法转换为ES5语法,需配合babel-polyfill
          /* loader:'babel-loader?cacheDirectory=true', 
          //缓存中读取，以避免在每次运行时运行潜在昂贵的 Babel 重新编译
          // cacheDirectory=true将使用默认的缓存目录(node_modules/.cache/babel-loader)，如果在任何根目录下都没有找到 node_modules 目录，将会降级回退到操作系统默认的临时文件目录。 */

          options:{
            // Babel配置使用的是@babel/preset-env这个preset.
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
        corejs: 3, //新版本需要指定核心库版本，默认2
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


### 使用优化
在使用babel-loader是会有以下几个问题, 我们可以针对问题点做不同的优化
* babel-loader 使得编译缓慢

解决办法: 
  * 确保转译尽可能少的文件，用exclude选项来去除无需编译文件
  * 设置cacheDirectory选项为true, 开启缓存, 转译的结果将会缓存到文件系统中

* babel-loader 使得打包文件体积过大
Babel 对一些公共方法使用了非常小的辅助代码, 比如 _extend.默认情况下会被添加到每一个需要它的文件中,所以会导致打包文件体积过大.

解决办法: 
 * 引入babel runtime作为一个单独的模块, 来避免重复.

```js
// npm install @babel/plugin-transform-runtime -D 
// npm install babel-runtime -S 
rules: [
  // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    }
  }
]
```


## <a name="JS语法检查">JS,TS语法检查eslint-loader,tslint-loader</a>
npm install eslint-loader eslint --save-dev  // eslint 检查 JavaScript 代码
npm install tslint-loader tslint --save-dev // tslint 检查 TypeScript 代码

```js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      // loader: 'eslint-loader',
      use: ['babel-loader', 'eslint-loader'],
    },
    {
      test: /\.ts$/,
      enforce: 'pre',
      use: [
        {
          loader: 'tslint-loader',
          options: { /* Loader options go here */ }
        }
      ]
    }
  ],
},
```


## <a name="cache-loader">loader缓存 cache-loader</a>
在一些性能开销较大的 loader 之前添加 cache-loader，将结果缓存中磁盘中。默认保存在 node_modules/.cache/cache-loader 目录下。

npm i cache-loader -D
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['cache-loader', ...loaders],
        include: path.resolve(__dirname,'src'),
      },
    ],
  },
};

```
保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 loader 使用此 loader

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
    id: "styles",
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

## <a name="thread-loader">thread-loader 开启多进程Loader转换</a>
把这个 loader 放置在其他 loader 之前， 放置在这个 loader 之后的 loader 就会在一个单独的 worker 池(worker pool)中运行

较happyPack， thread-loader 配置起来为简单
```js
npm i thread-loader -D

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve("src"),
        use: [
          "thread-loader",
          // 把高开销的loader放置在此 
        ]
      }
    ]
  }
}
```
从实际使用的情况来看，thread-loader 和 happypack 对于小型项目来说打包速度几乎没有影响，是因为它本身的额外开销，例如I/O，建议只在大型项目中使用，可以先测试再投入生产环境。
