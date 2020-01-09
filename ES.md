[ES6、ES7、ES8、ES9、ES10新特性一览](https://juejin.im/post/5ca2e1935188254416288eb2)

[从ES6到ES10的新特性万字大总结](https://juejin.im/post/5dfa5cb86fb9a0165721db1d)

[ES6 入门教程](https://es6.ruanyifeng.com/)--阮一峰


## let const
let声明变量  
const声明一个只读的常量, 一旦声明变量，就必须立即初始化，不能留到以后赋值。
>const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。


||var |	let |	const|
|:--|:--|:--|:--|
|变量提升	| √	| × |	× |
|全局变量	| √	| × |	× |
|重复声明	| √	| × |	× |
|重新赋值	| √	| √ |	× |
|只声明不初始化 |	√	| √|	×|
|暂时死区	| ×	| √ |	√ |
|块作用域	| ×	| √ |	√ |

* 使用let与const定义的变量为块级作用域,只在它所在的代码块有效
* 暂时性死区
  >只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。  
  >在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

* 不允许重复声明
  >不允许在相同作用域内，重复声明同一个变量。


## 
解构赋值允许指定默认值  
ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，`只有当一个数组成员严格等于undefined，默认值才会生效。`

## [Symbol](./details/Symbol.md)

## [Set Map](./details/Set、Map.md)

## [Proxy](./details/proxy.md)

## [Promise](./details/promise.md)

## [async await.md](./details/async_await.md)

## [Class](./details/Class.md)

## [Module](./details/Module.md)


