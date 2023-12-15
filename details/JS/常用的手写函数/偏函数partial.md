# 偏函数
偏函数应用（Partial Application）：固定一个函数的一些参数，然后产生另一个更小元的函数;
很容易和函数柯里化混淆

例如
```js
function mul(a,b,c){
  return a+b+c
}
//生产偏函数的工厂
function partial(fn,a){
  return function(b,c){
    return fn(a,b,c);
  }
}

//变量parMulti接受返回的新函数
var parMulti = partial(mul,1);

//在调用的时候传入剩余的参数
parMulti(2,3); // 6
```

## 实现一个偏函数
```js
function partial(fn,...args) {
  return function (...args1) {
    return fn.apply(this,args.concat(args1));
  };
}

function mul(a,b,c){
  return a+b+c
}
console.log(partial(mul,1)(2,4));
```

## 用偏函数实现一个对象类型的函数
```js
function isType(type){
  return function(obj){
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}
let isArray = isType('Array')
let isNumber = isType('Number')
console.log(isArray([])); // true
console.log(isArray({})); // false
console.log(isNumber(12)); // true
```



## `柯里化和偏函数区别`
[柯里化](./函数柯里化curry.md)

柯里化和偏函数都是用于将多个参数函数，转化为接受更少参数函数的方法。传入部分参数后，处于中间状态的函数可以作为固定值进行复用。  
但是其中不同之处在于：
* 柯里化：将一个多参数函数转换成多个单参数函数（每个函数只接受一个参数），也就是将一个 n 元函数转换成 n 个一元函数。
* 偏函数：固定一个函数的一个或者多个参数，并返回一个可以接收剩余参数的函数；也就是将一个 n 元函数转换成一个 n - x 元函数。

