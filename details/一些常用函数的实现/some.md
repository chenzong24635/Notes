[some-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)


for循环
```js
Array.prototype.selfSome = function(fn, content){
  // 不是函数时，报错
  if(!fn || typeof fn !== 'function') {
    throw  TypeError(`${fn} is not a function`)
  }

  let sourceArr = this
  for(let i = 0, len = sourceArr.length; i < len; i++) {
    let bool = fn.call(content,sourceArr[i],i,sourceArr)
    // 有一个为 true 则返回true
    if(bool) return true
  }
  // 否则false
  return false
}
```