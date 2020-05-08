[ECMAScript 6 入门-Module 的语法](https://es6.ruanyifeng.com/#docs/module)--阮一峰

[前端模块化详解(完整版)](https://juejin.im/post/5c17ad756fb9a049ff4e0a62)

[深入浅出 JavaScript 模块化](https://juejin.im/post/5e14193c5188253ab76cdcb3)

# Module
什么是模块
* 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起
* 块的内部数据与实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信

模块化的好处
* 可复用性
* 可维护性
* 避免命名冲突(减少命名空间污染)
* 更好的分离, 按需加载


| CommonJs | AMD | CMD | ES6 |
|:--|:--|:--|:--|
|1 |2|3|45|

### 全局function模式: 函数封装
```js
function fn1(){
  //do something
}
function fn2(){
  //do something
}
```

优点
  * 有一定的功能隔离和封装

缺点 
* 污染全局变量
* 模块之间的关系模糊

### namespace模式 : 对象封装
```js
let module1 = {
  fn1(){},
  fn2(){},
}
```

优点: 
 * 减少了全局变量，一定程度上优化了命名冲突  
 * 有一定的模块封装和隔离

缺点: 
  * 并没有实质上改变命名冲突的问题
  * 外部可以随意修改内部成员变量，还是容易产生意外风险

### IIFE: 自执行函数
在一个单独的函数作用域中执行代码，避免变量冲突。
```js
(function(){
  // do something
})()
```

引入依赖
```js
(function(window){
  function fn1() {}
  function fn2() {}

  function fn0() {} //内部私有方法

  //导出暴露的属性，方法
  window.module1 = { fn1, fn2 }
})(window)

console.log(module1) // {fn1: f fn1(), fn2: f fn2()}
```
或者
```js
let module1 = (function(){
  function fn1() {}
  function fn2() {}
  return { fn1, fn2 }
})()

console.log(module1) // {fn1: f fn1(), fn2: f fn2()}
```


优点
  * 实现了基本的封装
  * 只暴露对外的方法操作，有了 public 和 private 的概念
缺点
  * 模块依赖关系模糊

### 模块规范

### CommonJS
主要用于服务端Nodejs 中, 每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。在服务器端，模块的加载是运行时同步加载的；在浏览器端，模块需要提前编译打包处理。

CommonJS的核心思想就是通过 require 方法来同步加载所要依赖的其他模块，然后通过exports 或者 module.exports 来导出需要暴露的接口;  

特点
* 一个文件就是一个模块，拥有单独的作用域  
* 普通方式定义的 变量、函数、对象都属于该模块内  
* 引入模块：require(xxx)
* 导出模块：module.exports = xxx 或 module.exports.xxx = xxx

```js
// module.exports.name = 'tom';
module.exports = {
  name:'tom'
};

var mod = require('./index');
```

所有代码都运行在模块作用域，不会污染全局作用域；

模块可以多次加载，但只会在第一次加载的时候运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果；

模块的加载顺序，按照代码的出现顺序是`同步加载`的;


### AMD
[require.js](https://github.com/requirejs/requirejs)

RequireJS的基本思想是，通过define方法，将代码定义为模块；通过require方法，实现代码的模块加载。

特点
* `异步加载`模块，允许指定回调函数
* 在使用 require.js 的时候，必须提前加载所有模块。
* 引入模块：require([moduleName], callback)
  >
      moduleName,引入的模块数组
      callback，即为依赖模块加载成功之后执行的回调函数（前端异步的通用解决方案），

* 导出模块：define(id, [dependence], callback)
  >
      id,一个可选参数，说白了就是给模块取个名字，但是却是模块的唯一标识。如果没有提供则取脚本的文件名
      dependence，引入的模块数组
      callback，工厂方法，模块初始化的一些操作。如果是函数，应该只被执行一次。如果是对象，则为模块的输出值



### CMD 
模块的加载是异步的，通过按需加载的方式，而不是必须在模块开始就加载所有的依赖。  
CMD规范整合了CommonJS和AMD规范的特点。
    
[sea.js](https://github.com/seajs/seajs)

```js
//定义没有依赖的模块
define(function(require, exports, module){
  exports.xxx = value
  module.exports = value
})

```

### ES6modules

exprot 导出模块  
export 可以导出的是一个对象中包含的多个属性，方法。(在一个文件或模块中`可存在多个`)  
export default  只能导出一个可以不具名的对象。(在一个文件或模块中`仅可存在一个`)
* 默认导出：export default Person(导入时可指定模块任意名称，无需知晓内部真实名称)  
* 单独导出：export const name = "Bruce"  
* 按需导出：export { age, name, sex }  
* 改名导出：export { name as newName }  

`export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。`
```js
// 报错
export 1;

// 报错
var m = 1;
export m;

// 报错
function f() {}
export f;
```
上面代码，因为没有提供对外的接口。输出的都为值 1，不是接口

```js
// 正确写法一
export var m = 1;
export function f() {};

// 正确写法二
var m = 1;
function f() {};
export {m， f};

// 正确写法三
var m = 1;
function f() {};
export {m as M, f};
```


import：导入模块 //动态加载只有在用到的时候才会去加载 
>import命令输入的变量都是只读的，因为它的本质是输入接口。
* 默认导入：import Person from "person.js"  
* 整体导入：import * as Person from "person.js"  
* 按需导入：import { age, name, sex } from "person.js"  
* 改名导入：import { name as newName } from "person.js"  
* 自执导入：import "person.js"  
* 复合导入：import Person, { name } from "person.js"  


使用export default时，对应的import语句不需要使用大括号；  
使用export时，对应的import语句需要使用大括号。
```js
// 第一组
export default function P() { // 输出
}

import P from 'person'; // 输入

// 第二组
export function P() { // 输出
};

import {P} from 'person'; // 输入
```

import、export时可以使用as关键字重命名
```js
export {
  a,
  b as bbb
}
export default a

import {a, b} from './index.js'

//除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
import  * as name  from './index.js'
```

复合模式：export命令和import命令结合在一起写成一行，变量实质没有被导入当前模块，相当于对外转发接口，导致当前模块无法直接使用其导入变量
* 默认导入导出：export { default } from "person"
* 整体导入导出：export * from "person"
* 按需导入导出：export { age, name, sex } from "person"
* 改名导入导出：export { name as newName } from "person"
* 具名改默认导入导出：export { name as default } from "person"
* 默认改具名导入导出：export { default as name } from "person"

```js
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
```
当前模块不能直接使用foo和bar。


ES6 模块与 CommonJS 模块的差异
* CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。  
* CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

# Module加载
`<script src="index.js" defer async></script>`  
defer是“渲染完再执行”，多个defer脚本 按顺序加载  
async是“下载完就执行”，多个async脚本 不能保证按顺序加载


浏览器加载：加入type="module"属性 ;是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于defer属性。
`<script type="module" src="./index.js"></script>`




