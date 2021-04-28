# Node事件环 EventLoop
[Node.js 事件循环，定时器和 process.nextTick()](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)

```json
  本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
   ┌───────────────────────────┐
┌─>│           timers          │ 
│  └─────────────┬─────────────┘
|   执行延迟到下一个循环迭代的 I/O 回调。
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
|   仅系统内部使用。
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      
|  检索新的I/O事件;执行与 I/O相关的回调  ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  setImmediate() 回调函数在这里执行。  └───────────────┘
│  ┌─────────────┴─────────────┐      
│  │           check           │
│  └─────────────┬─────────────┘
|  一些关闭的回调函数
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

每一个阶段都对应一个事件队列,当event loop执行到某个阶段时会将当前阶段对应的队列依次执行。当该队列已用尽或达到回调限制，事件循环将移动到下一阶段

## 阶段概述
* timers(定时器)：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
* pending callbacks( 待定回调)：执行延迟到下一个循环迭代的 I/O 回调。
* idle, prepare：仅系统内部使用。
* poll(轮询)：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞。
  >注意：轮询阶段 控制何时定时器执行。
* check(检测)：setImmediate() 回调函数在这里执行。
* close callbacks(关闭的回调函数)：一些关闭的回调函数，如：socket.on('close', ...)。

## process.nextTick()

您可能已经注意到 process.nextTick() 在图示中没有显示，即使它是异步 API 的一部分。这是因为 process.nextTick() 从技术上讲不是事件循环的一部分。

`nextTick优先级高于 微任务 `
```js
console.log('start');
Promise.resolve().then(()=>{
  console.log('then');
})
process.nextTick(()=>{
  console.log('nexttick');
})

// start
// nexttick
// then
```

### process.nextTick()作用
* 允许用户处理错误，清理任何不需要的资源，或者在事件循环继续之前重试请求。
* 有时有让回调在栈展开后，但在事件循环继续之前运行的必要。

## unref()和ref() 取消和恢复setTimeout和setInterval函数的调用

```js
let test = function(){
  console.log('callback');
}
let timer = setInterval(test,1000);
timer.unref();
setTimeout(function(){
  timer.ref();
},3000)

```

## [setImmediate() 对比 setTimeout() ](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/#setimmediate-settimeout)
setImmediate() 和 setTimeout() 很类似，但是基于被调用的时机，他们也有不同表现。
* setImmediate() 设计为一旦在当前 轮询 阶段完成， 就执行脚本。
* setTimeout() 在最小阈值（ms 单位）过后运行脚本。


执行计时器的顺序将根据调用它们的上下文而异。如果二者都从主模块内调用，则计时器将受进程性能的约束（这可能会受到计算机上其他正在运行应用程序的影响）。

例如，如果运行以下`不在 I/O 周期（即主模块）内`的脚本，则执行两个计时器的顺序是`非确定性的`，因为它受进程性能的约束：
```js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
```
setTimeout的延迟时间 受性能影响，

可能主栈执行很快时，此时定时器还未放入 timers ，则setImmediate先执行

因此以上代码可能有两种结果，
```js
1.
// timeout
// immediate

2.
// immediate
// timeout
```

但是，如果你把这两个函数放入一个 `I/O 循环内调用，setImmediate 总是被优先调用`：
```js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

// immediate
// timeout
```


