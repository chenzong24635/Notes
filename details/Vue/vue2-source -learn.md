[Vue技术内幕](http://caibaojian.com/vue-design/art/1start-learn.html)


[Vue源码简析(版本vue-2.4.4)](https://juejin.im/post/5ab07a63f265da2389258b12)

https://github.com/qq281113270/vue

https://juejin.im/post/5e04411f6fb9a0166049a073#comment

http://mp.weixin.qq.com/mp/homepage?__biz=MzUxNjQ1NjMwNw==&hid=1&sn=77b9eca3d06307f14d8806231c395ed2&scene=18#wechat_redirect

[Vue.js 技术揭秘](https://github.com/ustbhuangyi/vue-analysis)-github  
[Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/v2/prepare/)-电子书


## 了解Vue

#### Vue.js 源码主要目录
```js
src
├── compiler        # 编译相关 
├── core            # 核心代码 
├── platforms       # 不同平台的支持
├── server          # 服务端渲染
├── sfc             # .vue 文件解析
├── shared          # 共享代码
```

* compiler 目录包含 Vue.js 所有编译相关的代码。它包括把模板解析成 ast 语法树，ast 语法树优化，代码生成等功能。
* core 目录包含了 Vue.js 的核心代码，包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数等等

![vue-source.jpg](../../img/Vue/vue-source.jpg)


#### 从 Vue 的构建配置了解其不同的构建输出

如果按照输出的模块形式分类，那么 Vue 有三种不同的构建输出，分别是：
* UMD
* CommonJS
* ES Module，

打开 scripts/config.js 文件，发现三个构建配置的入口是相同的，即 web/entry-runtime.js 文件（web指向src/platforms/web），但是输出的格式(format)是不同的，分别是 cjs、es 以及 umd。

每种模块形式又分别输出了 （区别：能否解析 template ）
* 运行时构建：entry-runtime.js
   打包生成到dist（不同模块情况, UMD, CommonJS 和 ES Module）
  * dist/vue.runtime.common.dev.js (CommonJS -- deveploment)
  * dist/vue.runtime.common.prod.js (CommonJS -- production)
  * dist/vue.runtime.esm.js (ES -- 预编译调试时， esm标准，支持import from 最新标准的)
  * dist/vue.runtime.js(UMD -- development)
  * dist/vue.runtime.min.js(UMD -- production)
* 完整构建：entry-runtime-with-compiler.js
   打包生成到dist（不同模块情况, UMD, CommonJS 和 ES Module）
  * dist/vue.common.dev.js (CommonJS -- deveploment)
  * dist/vue.common.prod.js (CommonJS -- production)
  * dist/vue.esm.js(ES -- esm标准)
  * dist/vue.esm.browser.js(ES -- development)
  * dist/vue.esm.browser.min.js(ES -- production)
  * dist/vue.js(UMD -- development)
  * dist/vue.min.js(UMD -- production)

完整版比运行时多了 compiler，它的作用是：将 template 编译为 render 函数。

scripts/config.js里 build 构建生成 dist 目录对应的文件

## Vue构造函数(src\core\instance\index.js)
