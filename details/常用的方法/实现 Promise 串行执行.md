# 
```js
function promise(n){
  return function(){
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        console.log(n);
        resolve(n)
      }, n*1000)
    })
  }
}
let arrFns = [
  promise(9),
  promise(1),
  promise(2),
  promise(3),
]
```

## reduce 实现
```js

function arrayFns(fns){
  fns = Array.isArray(fns) ? fns : [fns]
  // 使用reduce创建Promise回调链
  fns.reduce((prev, next) => {
    return prev.then(()=>next())
  } ,Promise.resolve())
}
arrayFns(arrFns)
```

## for await of 实现
```js
async function arrayFns(fns){
  fns = Array.isArray(fns) ? fns : [fns]
  for await(let fn of fns){
    fn()
  }
}
arrayFns(arrFns)
```