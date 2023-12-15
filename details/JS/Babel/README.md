# [Babel](https://www.babeljs.cn/docs/)

[不容错过的 Babel7 知识](https://juejin.im/post/6844904008679686152)

Babel 是一个 JavaScript 编译器

主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：
* 语法转换
* 通过 Polyfill 方式在目标环境中添加缺失的特性 (通过 @babel/polyfill 模块)
* 源码转换 (codemods)


Babel 默认只转换新的 JavaScript 语法，而不转换新的 API。例如，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。如果想使用这些新的对象和方法，必须使用 @babel/polyfill，为当前环境提供一个垫片。

主要插件
* @babel/core: babel的核心存在，babel的核心api都在这个模块里面
* @babel/cli: babel的脚手架工具
  >babel-cli自带babel-node

* @babel/preset-env: 只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换 例如(promise、Generator、Set、Maps、Proxy等)

* @babel/polyfill: 包括 core-js 和一个自定义的 regenerator runtime 模块，可以模拟完整的 ES2015+ 环境
  >@babel/polyfill 已经被废弃，需单独安装 core-js 和 regenerator-runtime 模块。

* babel-loader: webpack 就是用于编译JavaScript代码 

* @babel/preset-react: 用于编译react的jsx，开发react应用必备
* @babel/plugin-proposal-class-properties: 解析class类的属性
* @babel/plugin-proposal-decorators: 解析装饰器模式语法，如使用react-redux的@connect
* @babel/plugin-proposal-export-default-from: 解析export xxx from 'xxx'语法


## 使用
```js
babel src/index.js
//编译后的文件输出在终端

babel src/index.js -o index-compiler.js
//编译后的文件输出在 index-compiler.js 文件中
```


使用 npm run compiler 来执行编译，
```js
npm i @babel/core @babel/cli -D


// package.json
// 编译src下文件 且将编译后生成的文件放入lib文件夹下
{
  "scripts": {
    "compiler": "babel src --out-dir lib --watch"
  }
}

// src/index.js
const fn = () => {console.log('a');};
```


### 使用单一插件

如果插件发布在 npm 上，可以直接填写插件的名称， Babel 会自动检查它是否已经被安装在 node_modules 目录下，在项目目录下新建 .babelrc或（babel.config.js） 文件 (下文会具体介绍配置文件)，配置如下：


npm i @babel/plugin-transform-arrow-functions -D
```js
//.babelrc
// 箭头函数转换的插件
{ 
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}

// babel.config.js
module.exports = {
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```
执行 npm run compiler，可以看到箭头函数已经被编译OK， lib/index.js 内容如下:

```js
// 箭头函数被转换为普通函数
const fn = function () {console.log('a');};
```

### @babel/preset-env 使用所有插件 
npm i @babel/preset-env -D
```js
module.exports = {
  "presets": ["@babel/preset-env"]
}
```

需要说明的是，@babel/preset-env 会根据你配置的目标环境，生成插件列表来编译。对于基于浏览器或 Electron 的项目，官方推荐使用 .browserslistrc 文件来指定目标环境。默认情况下，如果你没有在 Babel 配置文件中(如 .babelrc)设置 targets 或 ignoreBrowserslistConfig，@babel/preset-env 会使用 browserslist 配置源。

```js
//.browserslistrc

> 0.25%
last 2 Chrome versions
IE 10

```
查看[browserslist](https://github.com/browserslist/browserslist)所有配置


语法转换只是将高版本的语法转换成低版本的，但是新的内置函数、实例方法无法转换。这时，就需要使用 polyfill 

### @babel/polyfill

@babel/polyfill 模块包括 core-js 和一个自定义的 regenerator runtime 模块，可以模拟完整的 ES2015+ 环境（不包含第4阶段前的提议）。

这意味着可以使用诸如 Promise 和 WeakMap 之类的新的内置组件、 Array.from 或 Object.assign 之类的静态方法、Array.prototype.includes 之类的实例方法以及生成器函数(前提是使用了 @babel/plugin-transform-regenerator 插件)。为了添加这些功能，polyfill 将添加到全局范围和类似 String 这样的内置原型中(会对全局环境造成污染，后面我们会介绍不污染全局环境的方法)。

`V7.4.0 版本开始，@babel/polyfill 已经被废弃`，需单独安装 core-js 和 regenerator-runtime 模块。

但未必需要完整的 @babel/polyfill， @babel/preset-env 提供了一个 useBuiltIns 参数，设置值为 usage 时，就只会包含代码需要的 polyfill 。
配置此参数的值为 usage ，必须要同时设置 corejs (如果不设置，会给出警告，默认使用的是"corejs": 2) 

```js
npm i @babel/polyfill -S
npm i core-js@3 -S

// babel.config.js
module.exports = {
  //语法转换插件 preset-env
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: 3, //新版本需要指定核心库版本，默认2
        useBuiltIns: "usage", //按需注入
      },
    ],
  ],
};

// src/index.js
let fn = () => {}
let fn1 = () => {}

const isHas = [1, 2, 3].includes(2);
const p = new Promise((resolve, reject) => {
  resolve(100);
});
```

### @babel/plugin-transform-runtime、 @babel/runtime 重复使用 Babel 注入的帮助程序，以节省代码大小的插件。

所有帮助程序都将引用模块 @babel/runtime，这样就可以避免编译后的代码中出现重复的帮助程序，有效减少包体积。

```js
npm i @babel/plugin-transform-runtime -D
npm i @babel/runtime -S
npm i @babel/runtime-corejs3 -S // 希望 @babel/plugin-transform-runtime 不仅仅处理帮助函数，同时也能加载 polyfill 


// babel.config.js
module.exports = {
  //语法转换插件 preset-env
  presets: [
    [
      "@babel/preset-env",
      // {
      //   corejs: 3, //新版本需要指定核心库版本，默认2
      //   useBuiltIns: "usage", //按需注入
      // },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
};
```

## 插件/预设补充知识

* plugins 在 Presets 前运行。
* plugins 顺序从前往后。
* Preset  顺序从后往前。

```js
// 执行顺序A B  C D
{
  plugins: ['A','B'],
  presets: ['D','C']
}
```