[异步更新队列](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)

[](https://github.com/Ma63d/vue-analysis/issues/6)

### 前置
[事件执行机制EventLoop](/details\面试题\JS面试题\事件执行机制EventLoop.md)

### 参数：
* {Function} [callback]
* {Object} [context]

### 用法

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。然后，在下一个事件循环tick中，Vue刷新队列并执行实际(已去重的) 工作。

`nextTick作用`是在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，可获取更新后的 DOM。

nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用
* Promise.then
* [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
* [setImmediate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate) (只有最新版本的 Internet Explorer 和Node.js 0.10+实现了该方法)
* 以上都不支持，最后再使用 setTimeout 


### 源码
源码路径：src\core\util\next-tick.js
```js
const callbacks = [] //存放需要异步执行的函数队列
let pending = false // 标记是否已经命令callbacks在下个tick全部执行，防止多次调用。

function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0) //一层深拷贝
  callbacks.length = 0 // 清空数组
  // 以上代码是为了在nextTick的方法里再次调用nextTick，能够新开一个异步队列

  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}


let timerFunc
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  // 如果支持Promise(最优的选择)
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // 如果支持MutationObserver，则实例化一个观察者对象，观察文本节点发生变化时，触发执行所有回调函数。
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => {
    // setImmediate 从技术上讲，它利用了（宏）任务队列，
    // 但它仍然是比setTimeout更好的选择。
    // 因为setTimeout 在将回调注册为 (macro)task 之前要不停的做超时检测，而 setImmediate 则不需要
    // 仅IE支持
    setImmediate(flushCallbacks)
  }
} else {
  // 都不支持使用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

// -------------------------

// cb回调函数
// ctx回调函数的执行上下文
export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      // 执行回调函数
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      //触发promise的then回调
      _resolve(ctx)
    }
  })
  if (!pending) { // 回调队列是否空闲
    pending = true
    timerFunc()  // 执行时会调用flushCallbacks， 将pending设为false
  }
  // $flow-disable-line
  //如果没有传递回调函数,并且当前浏览器支持promise,使用promise实现
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```

###
src\core\observer\scheduler.js
```js
export function queueWatcher (watcher: Watcher) {
  const id = watcher.id // 观察者对象的唯一标识
  if (has[id] == null) { // 防止重复推送
    has[id] = true
     // 在push到 queue 之前有一个对变量 flushing 的判断
     // 更新开始时会将 flushing 变量的值设置为 true，代表着此时正在执行更新
    if (!flushing) {
      // 如果队列还未执行更新，直接push到队列中即可
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      //如果队列正在执行更新，则根据其ID拼接观察者到队列,保证观察者的执行顺序
      let i = queue.length - 1
      while (i > index && queue[i].id > watcher.id) {
        i--
      }
      queue.splice(i + 1, 0, watcher)
    }
    // queue the flush
    // 无论调用多少次 queueWatcher 函数，该 if 语句块的代码只会执行一次
    if (!waiting) {
      waiting = true

      if (process.env.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue()
        return
      }
      nextTick(flushSchedulerQueue)
    }
  }
}

```

### 使用场景：
* 在修改数据之后立即使用这个方法，可获取更新后的 DOM数据

* 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中  
  >
      在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。
      与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。

```js
created(){
  console.log('created',this.$el);
  this.$nextTick(()=>{
    console.log('created-nextTick', this.$el);
  })
}
mounted(){
  console.log('mounted',this.$el);
}

// 输出
//created undefined
//mounted <div></div>
//created-nextTick <div></div>
```

### 访问DOM节点更新后的数据,
```html
<div ref="msgDiv">{{msg}}</div>
<button @click="changeMsg">点击我</button>

<script>
data(){
  return {
    msg: "a"
  }
},     
methods: {
  changeMsg() {
    this.msg = "b"
    console.log(this.$refs.msgDiv.textContent) //'a' 
    this.$nextTick(function(){
      console.log(this.$refs.msgDiv.textContent) // 'b'
    })
  }
}
</script>
```

因为 $nextTick() 返回一个 Promise 对象，所以可以使用async/await：

```js
async changeMsg() {
  this.msg = "b"
  console.log(this.$refs.msgDiv.textContent) //'a' 
  await this.$nextTick();
  console.log(this.$refs.msgDiv.textContent) // 'b'
}
```


`总之，在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。`


### [为什么要优先使用microtask？](https://www.zhihu.com/question/55364497/answer/144215284)

任务队列总体可分为 宏任务 (macro)task，微任务 microtask  

当调用栈空闲后每次事件循环只会从 (macro)task 中读取一个任务并执行， 

而在同一次事件循环内会将 microtask 队列中所有的任务全部执行完毕，且要先于下一个 (macro)task。  

另外 (macro)task 中两个不同的任务之间可能穿插着UI的重渲染，  

(macro)task -> microtask -> UI重新渲染 -> 下一个(macro)task  

那么我们`只需要在 microtask 中把所有在 UI重新渲染 之前需要更新的数据全部更新，这样只需要一次重渲染就能得到最新的DOM了 `

所以要优先选用 microtask 去更新数据状态而不是 (macro)task  


### 简化实现一个异步合并任务队列
```js

let callbacks = []
let pending = false
function flushCallbacks() {
  pending = false
  let copies = callbacks.slice(0)
  callbacks.length = 0
  copies.forEach(fn => fn())
}


function nextTick(fn){
  callbacks.push(fn) //添加事件
  if(!pending) { // 回调队列是否空闲
    // 执行时会调用flushCallbacks， 将pending设为false
    pending = true
    Promise.resolve().then(flushCallbacks)
  }
}

// 第一次调用 then方法已经被调用了 但是 flushCallbacks 还没执行
nextTick(() => console.log(1))
// callbacks里push这个函数
nextTick(() => {
  console.log(2)
  nextTick(() => console.log(0))

})
// callbacks里push这个函数
nextTick(() => console.log(3))

// 同步函数优先执行
console.log(4)

// 此时调用栈清空了，浏览器开始检查微任务队列，发现了 flushCallbacks 方法，执行。
// 此时 callbacks 里的 3 个函数被依次执行。

// 4
// 1
// 2
// 3
```