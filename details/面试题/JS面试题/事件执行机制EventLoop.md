# 事件执行机制

[从一道题浅说 JavaScript 的事件循环](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)

[从 8 道面试题看浏览器渲染过程与性能优化](https://juejin.im/post/5e143104e51d45414a4715f7)


[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)


[Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)


## 堆（Head）、栈（Stack）、队列（Quene）
### Heap(堆)
`堆， 是一种动态存储结构`，是利用完全二叉树维护的一组数据，堆分为两种，一种为最大堆，一种为最小堆，将根节点最大的堆叫做最大堆或大根堆，根节点最小的堆叫做最小堆或小根堆。 堆是线性数据结构，相当于一维数组，有唯一后继。


### 栈（Stack）
栈在程序中的设定是限定仅在表尾进行插入或删除操作的线性表。 `栈是一种数据结构`，它按照`后进先出(LIFO: last-in-first-out)`的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据。

栈是只能在某一端插入和删除的特殊线性表。

![](/img/Stack.jpg)

### 队列（Queue）
队列特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。

进行插入操作的端称为队尾，进行删除操作的端称为队头。  队列中没有元素时，称为空队列。

队列的数据元素又称为队列元素。在队列中插入一个队列元素称为入队，从队列中删除一个队列元素称为出队。因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除，故队列又称为先进先出（FIFO: first-in-first-out）

![](/img/Queue.jpg)


## 进程（process）,线程（thead）

* 什么是进程：进程是cpu资源分配的最小单位；（是能拥有资源和独立运行的最小单位）
* 什么是线程：线程是cpu调度的最小单位；（线程是建立在进程的基础上的一次程序运行单位）

* 一个进程由一个或多个线程组成
* 进程之间相互独立
* 同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）
* 多个线程在进程中协作完成任务

```
比喻：进程 就是一个公司，每个公司都有自己的资源可以调度；公司之间是相互独立的；而 线程 就是公司中的每个员工，多个员工一起合作，完成任务，公司可以有一名员工或多个，员工之间共享公司的空间。
```


`对于操作系统来说,一个任务就是一个进程`,比如打开一个浏览器就是启动了一个浏览器进程,打开一个 Word 就启动了一个 Word 进程。

有些进程同时不止做一件事,比如 Word,它同时可以进行打字、拼写检查、打印等事情。`在一个进程内部,要同时做多件事,就需要同时运行多个“子任务”,我们把进程内的这些“子任务”称为线程。`



`浏览器是多进程的：`
在浏览器中，每打开一个tab页面，其实就是新开了一个进程，在这个进程中，还有ui渲染线程，js引擎线程，http请求线程等。所以，浏览器是一个多进程的。

`js是单线程的：`

JS的单线程指的是javaScript引擎只有一个线程

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。  
js 引擎执行异步代码而不用等待，是因有为有任务队列和事件轮询。
* 任务队列：任务队列是一个先进先出的队列，它里面存放着各种任务回调。
* 事件轮询：事件轮询是指主线程重复从任务队列中取任务、执行任务的过程。

js是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。 
举个例子：如果js被设计了多线程，如果有一个线程要修改一个dom元素，另一个线程要删除这个dom元素，此时浏览器就会一脸茫然，不知所措。所以，为了避免复杂性，从一诞生，JavaScript就是单线程。



## 多进程优缺点
多进程优点
* 由于默认 新开 一个 tab 页面 新建 一个进程,所以单个 tab 页面崩溃不会影响到整个浏览器。  
* 同样,第三方插件崩溃也不会影响到整个浏览器。  
* 多进程可以充分利用现代 CPU 多核的优势。  
* 方便使用沙盒模型隔离插件等进程,提高浏览器的稳定性  

多进程缺点
* 系统为浏览器新开的进程分配内存、CPU 等资源,所以内存和 CPU 的资源消耗也会更大。

## 浏览器的渲染进程是多线程的
![](/img/浏览量内核.jpg)

* GUI渲染线程
负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。
当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
注意，`GUI渲染线程与JS引擎线程是互斥的`，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。

* JS引擎线程  
JS引擎也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）  
JS引擎线程负责解析Javascript脚本，运行代码。  
JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序。  
`同样注意，GUI渲染线程与JS引擎线程是互斥的`，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。

*  事件触发线程  
归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）  
当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中  
当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理
注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）

* 定时触发器线程  
传说中的 setInternal与 setTimeout所在线程  
浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）  
因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）  
注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。

* 异步http请求线程  
在XMLHttpRequest在连接后是通过浏览器新开一个线程请求  
将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由JavaScript引擎执行。



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
  * requestAnimationFrame
  * I/O、UI交互事件
  * postMessage
  * MessageChannel

* micro-task(微任务)
  * Promise.then、catch、finally
  * MutationObserver (html5新特性, 浏览器环境)
  * process.nextTick(Node.js 环境)



 `macrotask（宏任务）`，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）  
每一个macrotask会从头到尾将这个任务执行完毕，不会执行其它；
浏览器为了能够使得JS内部macrotask与DOM任务能够有序的执行，会在一个macrotask执行结束后，在下一个 macrotask 执行开始前，对页面进行重新渲染

`microtask（微任务）`，可以理解是在当前 macrotask 执行结束后立即执行的任务  
也就是说，在当前macrotask任务后，下一个macrotask之前，在渲染之前。
所以它的响应速度相比setTimeout会更快，因为无需等渲染
也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）


## JS的执行机制是：
* 执行一个宏任务  
* 过程中如果遇到微任务，就将其放到微任务的“事件队列”里    
* 当前宏任务执行完成后，立即执行当前微任务队列中的所有微任务（依次执行）  
* 执行完毕后，开始检查渲染，然后GUI线程接管渲染  
* 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

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
宏任务执行优先级：setTimeout > setImmediate  
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