[filter-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

for
```js
Array.prototype.selfFilter = function(fn, content){
  // 不是函数时，报错
  if(!fn || typeof fn !== 'function') {
    throw  TypeError(`${fn} is not a function`)
  }

  let sourceArr = this
  let arr = []
  for(let i = 0, len = sourceArr.length; i < len; i++) {
    // 排除非自身属性 
    if(!sourceArr.hasOwnProperty(i))continue
    // fn 返回值为 true时
    fn.call(content, sourceArr[i], i, sourceArr) && arr.push(sourceArr[i])
  }
  return arr
}

let arr = [1,5,9,,0,[],{},false,NaN,undefined,null]

console.log(arr.filter(item=>item)); //[1, 5, 9, [], {}]
console.log(arr.selfFilter(item=>item)); //[1, 5, 9, [], {}]

console.log(arr.filter(item=>item>6)); // [9]
console.log(arr.selfFilter(item=>item>6));  // [9]
```


reduce
```js
Array.prototype.selfFilter1 = function(fn, content){
  // 不是函数时，报错
  if(!fn || typeof fn !== 'function') {
    throw  TypeError(`${fn} is not a function`)
  }

  let sourceArr = this
  let arr = []
  arr = sourceArr.reduce((prev, next, index) => {
    fn.call(content, next, index, sourceArr) && prev.push(sourceArr[index])
    return prev
  },[])
  return arr
}
```