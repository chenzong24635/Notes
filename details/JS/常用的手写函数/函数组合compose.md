能够将函数进行组合，而组合的函数只接受一个参数，

```js
function compose(...fns) {
  // 要组合的函数个数
  let start = fns.length - 1;
  return function(...args) {
    let i = start;
    // 从后往前调用
    // 先调用最后一个方法
    let result = fns[start].apply(this, args);
    // 依次调用函数（从后往前调用），并将返回结果，作为参数调用下一个函数
    while (i--) result = fns[i].call(this, result);
    return result;
  };
};
```

使用
```js
function toArr(str) {
  return str.split('')
}
function reverse(arr) {
  return arr.reverse()
}
function toStr(str) {
  return str.join('')
}

console.log(compose(toStr,reverse,toArr)('abcd'));
```


或者
```js
function compose(...fns) {
  return function(...args) {
    // 先调用最后一个方法
    let fn = fns.pop()
    let res = fn.apply(this, args)
    // while循环调用最后方法
    while (fns.length) {
        let fn = fns.pop()
        res = fn.call(this, res)
    }
    return res
  }
}
```

精简
```js
function compose(...fns) {
  return fns.reduce((prev, cur) => (...args) => prev(cur(...args)))
}
```

上面的方法头一次看有点蒙蔽

相当于下面
```js
// 把comose传入的所有参数，解析为数组
function compose(...fns) {
  // prev,cur都是函数
  return fns.reduce((prev, cur) => {
    // 包装返回一个函数,作为下一个prev
    return function (...args) {
      // 将下一个函数作为参数传入上一个函数里
      return prev(cur(...args))
    }
  })
}

```
如：compose(c,b,a)
fns=[c,b,a]
第一次循环：
  >
    prev 为c, cur为 b
    return返回函数 `() => c(b())` 作为下一次循环的 prev

第二次循环：
  >
    prev 为 `() => c(b())`, cur为 a
    return返回函数  `() => c(b(a()))`;循环结束返回该函数


