
在函数内部用一个对象存储输入的参数，如果下次再输入相同的参数，那就比较一下对象的属性，把值从这个对象里面取出来。

```js
function cached(fn) {
  const cache = Object.create(null) 
  return (function cachedFn (str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  })
}
```

测试
```js
function fib(n){
  function _fib(n, a = 0, b = 1){
    // console.log(1);
    if(n == 0) return a
    else return _fib(n-1, b, a + b)
  }
  return _fib(n)
}

function cached(fn) {
  let cachedObj = Object.create(null)
  return function(str) {
    return cachedObj[str] || (cachedObj[str] = fn(str))
  }
}

fib = cached(fib)

console.time()
console.log(fib(110));
console.timeEnd()
// default: 0.5009765625ms


console.time()
console.log(fib(110));
console.timeEnd()
// default: 0.056884765625ms

// 可见第二次取相同值时，没有重新计算
```