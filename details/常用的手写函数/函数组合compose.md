能够将函数进行组合，而组合的函数只接受一个参数，

```js
function compose(...args) {
  // 要组合的函数个数
  let start = args.length - 1;
  return function(...args1) {
    let i = start;
    // 从后往前调用
    // 先调用最后一个方法
    let result = args[start].call(this, args1);
    // 依次调用函数（从后往前调用），并将返回结果，作为参数调用下一个函数
    while (i--) result = args[i].call(this, result);
    return result;
  };
};
```
