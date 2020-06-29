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

打开 scripts/config.js 文件，发现三个构建配置的入口是相同的，即 web/entry-runtime.js 文件，但是输出的格式(format)是不同的，分别是 cjs、es 以及 umd。

每种模块形式又分别输出了 
* 运行时版：entry-runtime.js
* 完整版：entry-runtime-with-compiler.js

完整版比运行时多了 compiler，它的作用是：将 template 编译为 render 函数。

scripts/config.js里 build 构建生成 dist 目录对应的文件


# 
## cached 创建纯函数的缓存
```js
function cached (fn) {
  let cache = Object.create(null);
  return (function cachedFn (str) {
    let hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

在Vue中，需要转译很多相同的字符串，若每次都重新执行转译，会造成很多不必要的开销。
cache这个函数可以读取缓存，如果缓存中没有就存放到缓存中，最后再读。

Object.create(null)创建纯函数是为了防止变化（纯函数的特性：输入不变则输出不变）。
```
```js
function upcase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
var upcased = cached(upcase)
upcased('im a str')
upcased('im a str')

第一次执行upcased函数时，把字符串作为key, reault 作为value, 存入 cache对象 里，  
第二次再执行这个函数，结果直接取缓存 cache对象 key对应的value,而不必执行upcase函数
```

## camelize: 连字符转驼峰
```js
const camelizeRE = /-(\w)/g;
const camelize = cached(str => {
  return str.replace(camelizeRE,  (_, c) => c ? c.toUpperCase() : '')
});

// 第一个参数：_ 代表匹配到的字符
// 第二个参数：c 代表分组的第一个内容(camelizeRE里第一个括号匹配的内容)

camelize('a-b') // aB
```

## hyphenate：:驼峰转连字符
```js
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cached((str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})

hyphenate('aB') // a-b
```

## once：只调用一次的函数
```js
function once (fn: Function): Function {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

function out(str) {
  console.log(str)
}
let a = once(out)
a('我执行了')
a('我没执行')
```

```js
```