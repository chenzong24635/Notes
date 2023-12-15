Object.is解决的主要是这两个问题
* +0 === -0  // true
* NaN === NaN // false


```js
const is= (x, y) => {
  // +0和-0应该不相等，但 0 === -0为 true
  // 当x=0,y=-0时; x===y 为true
  if (x === y) {
    // console.log(x !== 0); // 0!==0 (false)
    // console.log(y !== 0); // -0!==0 (false)
    // console.log1/x === 1/y); 1/0(Infinity), 1/-0(-Infinity) 也为false
    // 因此比较-0，0 时返回false
    return x !== 0 || y !== 0 || 1/x === 1/y;
  } else {
    // 此处可判断NaN，（利用NaN不等于自身判断）
    return x !== x && y !== y;
  }
}
```
```js
is(0,-0) // false
is(NaN,NaN) // true
```