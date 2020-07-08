[flat-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)


## flat
flat(depth) 数组扁平化,
* depth 深度，默认值为 1
* 会移除数组中的空项

`arr = [null,undefined,0,,[1,[2,3]],10]`
原生 flat
```js
arr.flat(0)     // [null, undefined, 0, [1, [2, 3]], 10]  // 不扁平化
arr.flat()      // [null, undefined, 0, 1, [2, 3], 10]  // 1层扁平化

arr.flat(2)     // [null, undefined, 0, 1, 2, 3, 10] // 2层扁平化
arr.flat(2.2)   // [null, undefined, 0, 1, 2, 3, 10] // 2层扁平化
arr.flat(2.9)   // [null, undefined, 0, 1, 2, 3, 10] // 2层扁平化

arr.flat('')    // [null, undefined, 0, 1, 2, 3, 10] // 不扁平化 Math.floor('')--> 0
arr.flat('2.2') // [null, undefined, 0, 1, 2, 3, 10] // 2层扁平化 Math.floor('2.2')--> 2
arr.flat('2.2a')// [null, undefined, 0, [1, [2, 3]], 10] // 不扁平化 Math.floor('2.2a')--> NaN

arr.flat({})    // [null, undefined, 0, [1, [2, 3]], 10] // 不扁平化 Math.floor({}) --> NaN
arr.flat([])    // [null, undefined, 0, [1, [2, 3]], 10] // 不扁平化 Math.floor([]) --> 0
arr.flat([2])   // [null, undefined, 0, 1, 2, 3, 10]  // 2层扁平化 Math.floor([2]) --> 2
arr.flat([2, 3])// [null, undefined, 0, [1, [2, 3]], 10] // 不扁平化 Math.floor([2, 3]) --> NaN

arr.flat(null)     // [null, undefined, 0, [1, [2, 3]], 10]  // 不扁平化 Math.floor(null) --> 0
arr.flat(undefined)// [null, undefined, 0, 1, [2, 3], 10] // 1层扁平化 Math.floor(undefined) --> NaN ？？
```

由上可知 flat 函数对 depth 参数处理：
* 纯数字字符串转换会为 number 类型
* 其他字符串返回 NaN
* 数组会转换为字符串，再判断（再进行上面操作）
* 非整数时向下取整
* undefined 时默认为1
* 其他情况不进行扁平化，返回原数组（移除空项后的数组）

因此对 depth 处理 可用 Math.floor 处理 depth 参数

`注意：`
```js
由上可知 Math.floor(undefined) 返回 NaN，而 flat(undefined) 时会进行1层扁平化（取默认值）；

但是函数传参传入 undefined 时 有设置默认值时会取默认值，因此不必对参数为 undefined 特殊处理 
```

```js
const selfFlat = function (depth = 1) {
  // depth 传 undefined 时 depth 取默认值 1
  depth = Math.floor(depth)
  let sourceArr = this
  if(depth <= 0) {
    // 返回去除空值后的数组
    return sourceArr.filter((item,index,array)=>array.hasOwnProperty(index))
  }
  
  return sourceArr.reduce((prev, next) => {
    if (Array.isArray(next)) {
      // 需要用 call 绑定 this 值，否则会指向 window
      return [...prev, ...selfFlat.call(next, depth - 1)]
    } else {
      return [...prev, next]
    }
  }, [])
};
Array.prototype.selfFlat  = selfFlat


let arr = [null,undefined,0,,[1,[2,3]],10];

console.log(
  arr.flat(0),
);

console.log(
  arr.selfFlat(0)
);
```

## n 维数组展开成一维数组

* flat(Infinity)

- reduce + flatten

  >

      function flatten(arr){
        return arr.reduce((prev,now)=>{
          return prev.concat(Array.isArray(now) ? fun2(now) : now)
        },[])
      }
      // flatten = (ary) => ary.reduce((pre, now) => pre.concat(Array.isArray(now) ? flatten(now) : now), []);

- toString | join + split

  >

      arr.join().split(",")
      arr.toString().split(",")
      //返回的内容都是字符串，arr.toString().split(",").map(Number)
      // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

-

>

    flatten= (arr)=>Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
    flatten(foo); // [1, 2, 3, "4", 5, "6", 7, 8, 9, 10]

* 
```js
function flatten(arr) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      res = res.concat(flatted(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
```