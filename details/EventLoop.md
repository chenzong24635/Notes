# 事件执行机制


[从一道题浅说 JavaScript 的事件循环](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)

[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)

[微任务、宏任务与Event-Loop](https://juejin.im/post/5b73d7a6518825610072b42b)

#### 浏览器的渲染进程是多线程的

1. GUI渲染线程
>
    负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。
    当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
    注意，GUI渲染线程与JS引擎线程是互斥的，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。

2. JS引擎线程
>
    也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）
    JS引擎线程负责解析Javascript脚本，运行代码。
    JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行JS程序
    同样注意，GUI渲染线程与JS引擎线程是互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。

3. 事件触发线程
>
    归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）
    当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中
    当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理
    注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）

4. 定时触发器线程
>
    传说中的 setInternal与 setTimeout所在线程
    浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）
    因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）
    注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。

5. 异步http请求线程
>
    在XMLHttpRequest在连接后是通过浏览器新开一个线程请求
    将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由JavaScript引擎执行。

#### JS任务分类
JS里的一种分类方式，就是将任务分为：同步任务和异步任务。

按照这种分类方式 JS的执行机制是：
>
    1. 首先判断JS是同步还是异步，同步就进入主进程，异步就进入event table
    2. 异步任务在event table中注册函数，当满足触发条件后，被推入event queue
    3. 同步任务进入主线程后一直执行，直到主线程空闲时，才会去event queue中查看是否有可执行的异步任务，如果有就推入主进程中
    以上三步循环执行，这就是event loop。

<img src="./img/event.png" width="100%" />

而准确的划分方式是：
* macro-task(宏任务)：
  * script(整体代码)
  * setTimeout
  * setInterval
  * I/O、UI交互事件
  * postMessage
  * MessageChannel
  * setImmediate(Node.js 环境)

* micro-task(微任务)
  * Promise.then、catch、finally
  * MutaionObserver
  * process.nextTick(Node.js 环境)
>

    * macrotask（宏任务），可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）  
    每一个macrotask会从头到尾将这个任务执行完毕，不会执行其它；
    浏览器为了能够使得JS内部macrotask与DOM任务能够有序的执行，会在一个macrotask执行结束后，在下一个 macrotask 执行开始前，对页面进行重新渲染

    * microtask（微任务），可以理解是在当前 macrotask 执行结束后立即执行的任务  
    也就是说，在当前macrotask任务后，下一个macrotask之前，在渲染之前。

    所以它的响应速度相比setTimeout会更快，因为无需等渲染
    也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）


#### JS的执行机制是：
>
    执行一个宏任务
    过程中如果遇到微任务，就将其放到微任务的“事件队列”里  
    当前宏任务执行完成后，立即执行当前微任务队列中的所有微任务（依次执行）  
    执行完毕后，开始检查渲染，然后GUI线程接管渲染  
    渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

![img](/img/JS的执行机制.jpg)


* Promise和async中的立即执行
我们知道Promise中的异步体现在then和catch中，所以写在Promise中的代码是被当做同步任务立即执行的。而在async/await中，在出现await出现之前，其中的代码也是立即执行的。那么出现了await时候发生了什么呢？

* async await 
从字面意思上看await就是等待，await 等待的是一个表达式，这个表达式的返回值可以是一个promise对象也可以是其他值。

很多人以为await会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上await是一个让出线程的标志。await后面的表达式会先执行一遍，同时将await后面的代码加入到microtask中，然后就会跳出整个async函数来执行后面的代码。

`由于因为async await 本身就是promise+generator的语法糖。所以await后面的代码是microtask。` 

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

#### 进程、线程
>
    一个进程由一个或多个线程组成
    进程之间相互独立
    同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）
    多个线程在进程中协作完成任务

    进程是能拥有资源和独立运行的最小单位
    线程是建立在进程的基础上的一次程序运行单位

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
setTimeout(function () {
  console.log('settimeout')
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
______
>
    整体script作为第一个宏任务进入主线程，遇到console.log，输出'script start'

    遇到setTimeout，分发到宏任务中

    遇到async1() 立即执行，输出'async1 start'；遇到await，立即执行其后面表达式，执行async() 输出'async2'; 然后将其后代码console.log('async1 end')加到微任务队列

    遇到promise,立即执行，输出'promise1'；然后将.then添加到微任务队列

    遇到console.log，输出'script end'；全局任务执行完毕

    执行完一个宏任务之后，查看微任务队列，依次输出，'async1 end'，'promise2'

    第一轮事件循环正式结束,再次执行宏任务，执行setTimeout，输出'settimeout'

输出：
```js
script start
async1 start
async2
promise1
script end
async1 end
promise2
settimeout
```


