[map-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)


```js
/**
 * @param {Function} fn - 回调函数,fn(currentValue,index,array)
 * @param {Any} currentValue - fn参数，正在处理的当前元素
 * @param {Number} index - fn参数，正在处理的当前元素的索引
 * @param {Array} array - fn参数，原数组
 * @param {Any} context - 上下文
*/
```

// for 循环实现
```js
Array.prototype.selfMap = function(fn, context){
  // 不是函数时，报错
  if(!fn || typeof fn !== 'function') {
    throw  TypeError(`${fn} is not a function`)
  }

  // 原数组
  // let sourceArr = Array.from(this)  // 1.
  // let sourceArr = [...this] // 2.
  // let sourceArr = Array.prototype.slice.call(this) // 3.
  let sourceArr = this // 4.

  // 执行回调函数后返回的新数组
  let arr = []
  for(let i = 0, len = sourceArr.length; i < len; i++) {
    // 判断原数组是否拥有该属性(索引)
    // 如果没有跳过,
    // 返回 empty 的关键
    if(!sourceArr.hasOwnProperty(i))continue 

    arr[i] = fn.call(context, sourceArr[i], i, sourceArr)
  }
  return arr
}

// [1,,2].map(item=>item) 返回值：[1, empty, 2]

// [1,,2].selfMap(item=>item)
// sourceArr 的1,2情况相同，返回值： [1, undefined, 2]
// sourceArr 的3,4情况相同，返回值： [1, empty, 2]
```


// reduce 实现
```js
Array.prototype.selfMap = function(fn, context){
  if(!fn || typeof fn !== 'function') {
    throw  TypeError(`${fn} is not a function`)
  }
  
  let sourceArr = this // 原数组
  let arr = [] // 执行回调函数后返回的新数组
  arr = sourceArr.reduce((prev,next,index) => {
    prev[index] = fn.call(context, next, index, sourceArr)
    // prev = [...prev, fn.call(context, next, index, sourceArr)] // 如此会忽略空数组
    return prev
  },[])
  return arr
}

// [1,,2].selfMap(item=>item) 
```
