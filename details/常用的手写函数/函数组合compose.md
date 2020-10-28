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