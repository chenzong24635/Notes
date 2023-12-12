# 事件执行机制
 [这一次，彻底弄懂 JavaScript 执行机制 —— 掘金](https://juejin.im/post/59e85eebf265da430d571f89)

[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

[从一道题浅说 JavaScript 的事件循环](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)

[从 8 道面试题看浏览器渲染过程与性能优化](https://juejin.im/post/5e143104e51d45414a4715f7)


[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)

[深入解析你不知道的 EventLoop 和浏览器渲染、帧动画、空闲回调](https://github.com/sl1673495/blogs/issues/47)

 [Call Stack — MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Call_stack)

[[译] JavaScript 如何工作：对引擎、运行时、调用堆栈的概述 —— 掘金](https://juejin.im/post/5a05b4576fb9a04519690d42)

[解读 JavaScript 之引擎、运行时和堆栈调用 —— 开源中国](https://www.oschina.net/translate/how-does-javascript-actually-work-part-1)

[Tasks, microtasks, queues and schedules（译） —— 掘金](https://juejin.im/entry/55dbd51a60b2f3a92a8f5bff)

## [堆-栈-队列](/details\算法\堆-栈-队列.md)

## [进程（process）,线程（thead）](/details\面试题\线程-进程.md)


## JS任务分类
JS里的一种分类方式，就是将任务分为：同步任务和异步任务。

按照这种分类方式 JS的执行机制是：
1. 首先判断JS是同步还是异步，同步就进入主进程，异步就进入event table
2. 异步任务在event table中注册函数，当满足触发条件后，被推入event queue
3. 同步任务进入主线程后一直执行，直到主线程空闲时，才会去event queue中查看是否有可执行的异步任务，如果有就推入主进程中
以上三步循环执行，这就是event loop。

<img src="/img/event.png" width="100%" />

更为准确的划分方式是：
* macro-task(宏任务)：
  * script(整体代码)
  * setTimeout
  * setInterval
  * setImmediate(IE10，Node.js 环境)
  * I/O
  * UI渲染
  * requestAnimationFrame
  * postMessage
  * MessageChannel

* micro-task(微任务)
  * promise.then
  * queueMicroTask(相当于promise.then)
  * MutationObserver (html5新特性, 浏览器环境)
  * process.nextTick(Node.js 环境)



`macrotask（宏任务）`，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）  
每一个 macrotask 会从头到尾将这个任务执行完毕，不会执行其它；
浏览器为了能够使得JS内部 macrotask 与DOM任务能够有序的执行，会在一个macrotask执行结束后，在下一个 macrotask 执行开始前，对页面进行重新渲染

`microtask（微任务）`，每次执行栈执行完所有的同步任务后，会在任务队列中取出异步任务，先将所有 microtask 执行完成后（再渲染），才会执行 macrotask。所以，微任务会在宏任务之前执行。
所以它的响应速度相比setTimeout（下一个宏任务）会更快，因为无需等渲染


微任务会在宏任务之前执行。
```js
let body = document.body;
body.addEventListener("click", () => {
  Promise.resolve().then(() => {
    console.log(1);
  });
  console.log(2);
});
body.addEventListener("click", () => {
  Promise.resolve().then(() => {
    console.log(3);
  });
  console.log(4);
});
```
```js
// 2 1 4 3
```

## JS的执行机制是：
* 执行主栈中代码（script）
* 执行当前微任务队列中的所有微任务（依次执行）
* 执行下一个宏任务  
* 过程中如果遇到微任务，就将其放到微任务的“事件队列”里    
* 当前宏任务执行完成后，立即执行当前微任务队列中的所有微任务（依次执行）  
* 执行完毕后，JS引擎线程挂起，GUI线程执行渲染  
* 渲染完毕后，JS引擎线程继续接管，开始下一个宏任务（从事件队列中获取）

![img](/img/JS的执行机制.jpg)


`Promise和async中的立即执行`
我们知道Promise中的异步体现在then和catch中，所以写在Promise中的代码是被当做同步任务立即执行的。而在async/await中，在出现await出现之前，其中的代码也是立即执行的。那么出现了await时候发生了什么呢？

`async await `
从字面意思上看await就是等待，await 等待的是一个表达式，这个表达式的返回值可以是一个promise对象也可以是其他值。

很多人以为await会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上await是一个让出线程的标志。await后面的表达式会先执行一遍，同时将await后面的代码加入到microtask中，然后就会跳出整个async函数来执行后面的代码。

`由于因为async await 本身就是promise+generator的语法糖。所以await之后的代码是microtask。` 

```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

等价于

async function async1() {
  console.log('async1 start');
  Promise.resolve(async2()).then(() => {
    console.log('async1 end');
  })
}
```


## 例子

```js
async function async1() {
  console.log('async1 start') 
  await async2() 
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start') 

setTimeout(function(){
  console.log('setTimeout') 
})  

async1() 

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
}) 

console.log('script end')
```

解析
```js
// 整体script作为第一个宏任务进入主线程，
// 遇到console.log，执行同步代码，输出
'script start'

// 遇到setTimeout，分发到宏任务队列中

// 遇到async1() 立即执行，输出
'async1 start'

// 遇到await，立即执行其后面表达式，执行async() 输出
'async2'

// await之后的代码是microtask，将其后代码console.log('async1 end')加到微任务队列

// 遇到promise,立即执行，将.then添加到微任务队列，输出
'promise1'


// 遇到console.log，执行同步代码，输出
'script end'

// 全局任务执行完毕

// 执行完一个宏任务之后，查看微任务队列，依次输出，
'async1 end'
'promise2'

// 第一轮事件循环正式结束,开始下一轮evenloop，执行宏任务队列中的任务，
// 执行setTimeout，输出
'settimeout'
```


稍微修改一下：
```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  return 'async1 return'; // + 改变的代码
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function(){
  console.log('setTimeout') 
})  

  

async1().then(function (message) { // +改变的代码
  console.log(message)
});

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end")
```

输出
```js
script start
async1 start
async2
promise1
script end
async1 end
promise2
async1 return
setTimeout
```

## 例子(node环境)
```js
setImmediate(function(){ // 添加的代码
  console.log('setImmediate');
})

process.nextTick(function(){  // 添加的代码
  console.log('process.nextTick');
})

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  return 'async1 return';
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function(){
  console.log('setTimeout') 
})  


async1().then(function (message) {
  console.log(message)
});

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end")
```

在nodejs中  
宏任务执行优先级：setTimeout，setImmediate 看进入事件循环的时间是否达到需要执行的事件

微任务执行优先级：process.nextTick > promise.then



输出
```js
script start
async1 start
async2
promise1
script end
process.nextTick
async1 end
promise2
async1 return
setTimeout
setImmediate
```