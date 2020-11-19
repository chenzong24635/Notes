## let const
let声明变量 ,类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

const声明一个只读的常量, 一旦声明变量，就必须立即初始化，不能留到以后赋值。
>const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。



## 特点
* 使用let与const定义的变量为块级作用域,只在它所在的代码块有效
  >ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

  1. 导致内层变量可能会覆盖外层变量，
  ```js
  var tmp = 'window'

  function f() {
    console.log(tmp);
    if (false) {
      var tmp = 'hello world';
    }
  }
  f(); 
  function f1() {
    console.log(tmp);
    if (false) {
      let tmp = 'hello world';
    }
  }
  f1(); 

  // undefined
  // window
  ```

  2. 用来计数的循环变量泄露为全局变量。
  ```js
  var s = 'hello';
  // 变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。
  for (var i = 0; i < s.length; i++) {}
  console.log(i); // 5

  //而let定义的 j 则是局部变量，因此全局下访问不到
  for (let j = 0; j < s.length; j++) {}
  console.log(j); // ReferenceError: j is not defined
  ```

* 暂时性死区
  >只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。  
  >在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

  ```js
  console.log(a) // undefined
  var a = 1

  console.log(b) // ReferenceError: Cannot access 'b' before initialization
  let b = 2
  ```

* 不允许重复声明
  >不允许在相同作用域内，重复声明同一个变量。

  ```js
  let a = a; // 定义变量 a,我暂标识为 a1
  let a = a; // 定义变量 a,我暂标识为 a2

  //Uncaught SyntaxError: Identifier 'a' has already been declared
  ```
  预解析，将 a1 声明，然后准备将 a2 声明，这个时候，JS 引擎发现，声明 a2 的时候 ，变量已经声明过。
  于是违反了 “同一个作用域，同一个变量只能被声明一次” 的规定，直接报错。实际上代码中赋值的 a 变量还没读取（在读取变量的时候才可能抛变量未定义的错误）


全局下 var 定义的变量会绑定到 window 上,而let,const不会
```js
var a = 1
let b = 2
console.log(window.a) // 1
console.log(a) // 1
console.log(window.b) // undefined
console.log(b) // 2
```

||var |	let |	const|
|:--|:--|:--|:--|
|变量提升	| √	| × |	× |
|全局变量	| √	| × |	× |
|重复声明	| √	| × |	× |
|重新赋值	| √	| √ |	× |
|只声明不初始化 |	√	| √|	×|
|暂时死区	| ×	| √ |	√ |
|块作用域	| ×	| √ |	√ |

