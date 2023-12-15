
柯里化，即Currying，可以是函数变得更加灵活,让函数功能更具体。

将一个多参数函数转换成多个单参数函数（每个函数只接受一个参数），也就是将一个 n 元函数转换成 n 个一元函数。


柯里化的三个作用
* 参数复用 
* 提前返回 
* 延迟计算



实现
```js
function curry(fn) {
  // 函数的参数长度
  let len = fn.length
  return function curried(...args) {
    // 参数是否收集完毕
    // 否：则返回一个函数，参数为之前所有传入的参数数组
    if(args.length < len) {
      return function(...args1) {
        return curried.apply(fn, [...args,...args1])
      }
    }
    // 是，则执行 fn 函数
    return fn.apply(fn, args)
  }
}

let f = function(a, b, c) {
 
  return a+b+c
};
let curried = curry(f)
curried(1)(2)(3) // => 6
curried(1, 2)(3) // => 6
curried(1, 2, 3) // => 6
```

终极简化版
```js
const curry = (fn,...args1) => args.length < fn.length ? (...args2) => curry(fn,...args1,...args2) : fn(...args1)
```

