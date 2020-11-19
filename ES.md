[ES6、ES7、ES8、ES9、ES10新特性一览](https://juejin.im/post/5ca2e1935188254416288eb2)

[从ES6到ES10的新特性万字大总结](https://juejin.im/post/5dfa5cb86fb9a0165721db1d)

[ES6 入门教程](https://es6.ruanyifeng.com/)--阮一峰
#

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

babel转义 ES

[Babel](https://www.babeljs.cn/repl/) 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。

Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

如果想使用这些新的对象和方法，必须使用 babel-polyfill，为当前环境提供一个垫片。

## [let-const](/details/ES/ES6/let-const.md)
## [解构赋值](/details/ES/ES6/解构.md)
## [字符串扩展](/details/ES/ES6/String扩展.md)

## Object
* Object.assign

## [Generators 生成器](/details/JS/Generator.md)

## [箭头函数](/details/JS/details/this.md)



## [Symbol](/details/JS数据类型/Symbol.md)

## [Set Map](/details/JS/Set、Map.md)

## [Proxy](/details/JS/proxy.md)

## [Promise](/details/JS/promise.md)

## [async await.md](/details/JS/async_await.md)

## [Class](/details/JS/Class.md)

## [Module](/details/JS/Module.md)


# ES+
[ES2018（ES9）的新特性](https://juejin.im/post/6844903622870827022)
[ES6/ES7/ES8/ES9资料整理(个人整理)](https://juejin.im/post/6844903728944775181)
[ES2019 / ES10有什么新功能?](https://juejin.im/post/6844903872469680141)
[ES11](https://juejin.im/post/6883306672064987149)

## ES11新增新特性
* String 的 matchAll 方法
* 动态导入语句 import()
* import.meta
* export * as ns from 'module'
* Promise.allSettled 返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise 
* 一种新的数据类型：BigInt
* GlobalThis
* Nullish coalescing Operator 新增了一个运算符 ??
* Optional Chaining 新增可选链操作符 ?.

## GlobalThis

JS 中存在一个顶层对象，但是，顶层对象在各种实现里是不统一的。
从不同的 JavaScript 环境中获取全局对象需要不同的语句。在 Web 中，可以通过 window、self 取到全局对象，但是在 Web Workers 中，只有 self 可以。在 Node.js 中，它们都无法获取，必须使用 global。

在 globalThis 之前，我们这样去获取全局对象：
```js
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

```