https://zhuanlan.zhihu.com/p/51800345

## JavaScript中的错误类型
[Error类型--MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)

* Error
* EvalError
* RangeError
* ReferenceError
* SyntaxError
* TypeError
* URIError

### Error
通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象也可用于用户自定义的异常的基础对象

new Error([message[, fileName[,lineNumber]]])

### EvalError

关于 eval 函数的错误.  
此异常不再会被JavaScript抛出，但是EvalError对象仍然保持兼容性

### RangeError

在数值变量或参数超出其有效范围时抛出

比如使用new Array()的时候传递一个负数或者是超过数组最大长度的数。注意递归爆炸也有这个错误。

```js
new Array(-1)
new Array(Number.MAX_VALUE+1)
new Array(Number.MIN_VALUE-1)

// Uncaught RangeError: Invalid array length
```

### ReferenceError

在变量找不到的情况抛出

```js
console.log(num)
// Uncaught ReferenceError: num is not defined
```

### SyntaxError

当JS解析代码的过程中发生的语法错误时抛出
```js
let num = ;
// Uncaught SyntaxError: Unexpected token ';'
```

### TypeError

当JS解析代码的过程中发生的语法错误时抛出
```js
let num;
console.log(num.name);
// Uncaught TypeError: Cannot read property 'name' of undefined
```

### URIError

在使用encodeURI或者decodeURI等方法时，因为URL格式不正确时抛出

```js
decodeURIComponent('%')
// Uncaught URIError: URI malformed
```

## [10 个最常见的 JavaScript 错误](https://juejin.im/post/6844903872155090952)

![error](/img/javascript-error-graph.png)

## 
