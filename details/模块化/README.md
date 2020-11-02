[ECMAScript 6 入门-Module 的语法](https://es6.ruanyifeng.com/#docs/module)--阮一峰

[前端模块化详解(完整版)](https://juejin.im/post/5c17ad756fb9a049ff4e0a62)


# Module
什么是模块
* 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起
* 块的内部数据与实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信

模块化的好处
* 避免命名冲突(减少命名空间污染)
* 可复用性
* 可维护性
* 更好的分离, 按需加载


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
* 没有私有空间，所有模块内的成员都可以在模块外部被访问或者修改；
* 一旦模块增多，容易产生命名冲突；
* 无法管理模块与模块之间的依赖关系；

### namespace模式: 对象封装
```js
let module1 = {
  fn1(){},
  fn2(){},
}
let module2 = {
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
(function(window){
  function fn1() {}
  function fn2() {}

  function fn0() {} //内部私有方法,未对外暴露

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
在这几种方式中虽然都解决了模块代码的组织问题，但模块加载的问题却被忽略了，我们都是通过 script 标签的方式直接在页面中引入的这些模块，这意味着模块的加载并不受代码的控制，时间久了维护起来会十分麻烦。

更为理想的方式应该是在页面中引入一个 JS 入口文件，其余用到的模块可以通过代码控制，按需加载进来。

### CommonJS
[CommonJS规范](http://wiki.commonjs.org/wiki/CommonJS)  

主要用于服务端Nodejs 中, 每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。在服务器端，模块的加载是运行时同步加载的；在浏览器端，模块需要提前编译打包处理。

CommonJS的核心思想就是通过 require 方法来同步加载所要依赖的其他模块，然后通过exports 或者 module.exports 来导出需要暴露的接口;  

特点
* 一个文件就是一个模块，拥有单独的作用域  
* 普通方式定义的 变量、函数、对象都属于该模块内  
* 引入模块：require(xxx)
* 导出模块：module.exports = xxx 或 module.exports.xxx = xxx
>输出的是一个值的拷贝，输出之后就不能改变了，会缓存起来

```js
// module.exports.name = 'tom';
module.exports = {
  name:'tom'
};

var mod = require('./index');
```

所有代码都运行在模块作用域，不会污染全局作用域；

模块可以多次加载，但只会在第一次加载的时候运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果；

CommonJS 模块的加载顺序，按照代码的出现顺序是`同步加载`的,

所以只有加载完成才能执行后面的操作。像Node.js主要用于服务器的编程，加载的模块文件一般都已经存在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式，所以CommonJS规范比较适用。
但如果是浏览器环境，要从服务器加载模块，这是就必须采用异步模式。所以就有了 AMD CMD 解决方案。

### AMD（Asynchronous Module Definition）异步模块定义
[AMD规范](https://github.com/amdjs/amdjs-api/wiki/AMD)

[require.js](https://github.com/requirejs/requirejs)实现了 AMD 模块化规范，本身也是一个非常强大的模块加载器。

RequireJS的基本思想是，通过define方法，将代码定义为模块；通过require方法，实现代码的模块加载。

特点
* `异步加载`模块，允许指定回调函数
* 在使用 require.js 的时候，`必须提前加载所有模块`。

引入模块：require([moduleName], callback)
>
    moduleName,引入的模块数组
    callback，即为依赖模块加载成功之后执行的回调函数（前端异步的通用解决方案）

```js
require(['module1'], function(moduleA) {
  moduleA.showMsg()
})
```


导出模块：define(id?, [dependence]?, callback)
>
    id:可选参数，模块的唯一标识。如果没有提供则取脚本的文件名
    dependence:可选参数，当前模块依赖,数组形式
    callback，工厂方法，模块初始化的一些操作。如果是函数，应该只被执行一次。如果是对象，则为模块的输出值

```JS
define(['module2', 'jquery'], function(module2) {
  let name = 'Tom'
  console.log(module2);
  console.log($);
  function showMsg() {
    console.log(module2.getMsg() + ', ' + name)
  }
  // 暴露模块
  return { showMsg }
})

```

[代码路径：/details/模块化/AMD](/details/模块化/AMD)


### CMD (Common Module Definition)通用模块定义
[CMD规范](https://github.com/cmdjs/specification/blob/master/draft/module.md)

CMD整合了CommonJS和AMD规范的特点。
    
[sea.js](https://github.com/seajs/seajs)实现CMD规范

特点
* `异步加载`
* `按需加载`，而不是必须在模块开始就加载所有的依赖



```js
//定义没有依赖的模块
define(function(require, exports, module){
  // exports.name = 'Tom'
  module.exports = {
    name: 'Tom'
  }
})
```

```js
//定义有依赖的模块
define(function(require, exports, module){
  //引入依赖模块(同步)
  var module2 = require('./module2')
  //引入依赖模块(异步)
  require.async('./module3', function (module3) {
  })

  module2.fn1() //使用引入模块暴露的方法属性
  //暴露模块
  module.exports = {
    name: 'Tom'
  }
})
```

[代码路径：/details/模块化/CMD](/details/模块化/CMD)


### UMD(Universal Module Definition)通用模块定义
[UMD规范](https://github.com/umdjs/umd)

UMD主要用来解决CommonJS模式和AMD模式代码不能通用的问题，并同时还支持老式的全局变量规范。
```js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['b'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('b'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.b);
  }
}(this, function (b) {
  //use b in some fashion.

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {}
}));
```

* 判断define为函数，并且是否存在define.amd，来判断是否为AMD规范,
* 判断module是否为一个对象，并且是否存在module.exports来判断是否为CommonJS规范
* 如果以上两种都没有，设定为原始的代码规范。

### ES modules
ES Modules 是 ECMAScript 2015（ES6）中定义的模块系统
[代码路径：/details/模块化/ES6](/details/模块化/ES6)


#### exprot：导出模块  
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

```
上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。

```js
// 正确写法一
export var m = 1;

// 正确写法二
var m = 1;
export {m};

// 正确写法三, 改名导出
var m = 1;
export {m as M};
```


#### import：导入模块 //动态加载只有在用到的时候才会去加载 
`import命令输入的变量都是只读的，因为它的本质是输入接口。`也就是说，不允许在加载模块的脚本里面，改写接口。

* 默认引入：import Person from "person.js"  
* 整体引入：import * as Person from "person.js"  
* 按需引入：import { age, name, sex } from "person.js"  
* 改名引入：import { name as newName } from "person.js"  
* 自执引入：import "person.js"  
* 复合引入：import Person, { name } from "person.js"  


使用export default时，默认导出，对应的import 默认引入（不需要使用大括号）；  
使用export时，按需导出，对应的import 按需引入（需要使用大括号）。
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
//name.a, name.b
```

#### 复合模式：
export命令和import命令结合在一起写成一行，变量实质没有被导入当前模块，相当于对外转发接口，导致当前模块无法直接使用其导入变量

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


#### 使用
使用1  type="module"
```js
 <script type="module">
```

使用2
```js
1. 安装依赖
npm init
npm install babel-cli browserify -g 
npm install babel-preset-es2015 --save-dev

2. 定义.babelrc文件
{
  "presets": ["es2015"]
}

3. 编译并在index.html中引入
babel src -d lib  // 使用Babel将ES6编译为ES5代码(但包含CommonJS语法)
browserify lib/app.js -o lib/bundle.js // 使用Browserify编译js
<script src="js/lib/bundle.js"></script> //在index.html文件中引入
```



### 总结

* CommonJS规范主要用于服务端编程，加载模块是同步的，这并不适合在浏览器环境，因为同步意味着阻塞加载，浏览器资源是异步加载的，因此有了AMD CMD解决方案。

* AMD规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。不过，AMD规范开发成本高，代码的阅读和书写比较困难，模块定 义方式的语义不顺畅。

* CMD规范与AMD规范很相似，都用于浏览器编程，依赖就近，延迟执行，可以很容易在Node.js中运行。不过，依赖SPM 打包，模块的加载逻辑偏重

* ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

```ES6模块与CommonJS模块的差异```
[参考](https://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82)

* CommonJs模块输出的是一个值的拷贝（浅拷贝），也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。ES6 模块输出的是值的引用，是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

* CommonJs模块是运行时加载，ES6模块是编译时输出接口。
  >
      是因为 CommonJS 加载的是一个对象（即module.exports属性），在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。

      ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。


# async defer
`<script src="index.js" defer async></script>`  
defer是“渲染完再执行”(要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成）)，多个defer脚本 按顺序加载  

async是“下载完就执行”(一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。)，多个async脚本 不能保证按顺序加载


浏览器加载 ES6 模块：加入type="module"属性 ;是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于defer属性。 
`<script type="module" src="./index.js"></script>`




