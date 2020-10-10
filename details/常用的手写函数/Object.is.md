Object.is解决的主要是这两个问题
* +0 === -0  // true
* NaN === NaN // false


```js
const is= (x, y) => {
  if (x === y) {
    // +0和-0应该不相等
    return x !== 0 || y !== 0 || 1/x === 1/y;
  } else {
    return x !== x && y !== y;
  }
}

```