[every-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


for循环
```js
Array.prototype.selfEvery = function(fn, context){
  // 不是函数时，报错
  if(!fn || typeof fn !== 'function') {
    throw  TypeError(`${fn} is not a function`)
  }

  let sourceArr = this
  for(let i = 0, len = sourceArr.length; i < len; i++) {
    let bool = fn.call(context,sourceArr[i],i,sourceArr)
    // 有一个为 false 则返回 false
    if(!bool) return false
  }
  // 否则 true
  return true
}
```