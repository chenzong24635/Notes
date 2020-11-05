##  setInterval 实现 setTimout
[你会用 settimeout，setinterval 互相实现吗？](https://zhuanlan.zhihu.com/p/73204517)

[setTimeout 和 setInterval区别](https://juejin.im/post/5e621f5fe51d452700567c32#heading-11)



###  setInterval 实现 setTimeout
```js
const selfSetTimeout = function(cb, delay) {
  let timer = setInterval(()=>{
    // 清除定时器
    clearInterval(timer)
    timer = null
    // 执行传入的回调函数
    cb()
  }, delay)
}

selfSetTimeout(()=>{
  console.log(2);
},2000)

selfSetTimeout(()=>{
  console.log(1);

},1000)

selfSetTimeout(()=>{
  console.log(3);
  
},3000)
```



### setTimeout 实现 setInterval
```js
let selfSetInterval = (cb, delay) => {
  let fn = () =>{
    setTimeout(()=> {
      cb() // 执行传入的回调函数
      fn() // 调用自身
    },delay)
  }
  fn()
}

// 测试
selfSetInterval(() => {
  console.log(new Date())
}, 1000)
```
