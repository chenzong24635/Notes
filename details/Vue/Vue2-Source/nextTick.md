[异步更新队列](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)



### 前置
[EventLoop](/details/EventLoop.md)


### 参数：
* {Function} [callback]
* {Object} [context]

### 用法

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。然后，在下一个事件循环tick中，Vue刷新队列并执行实际(已去重的) 工作。

`nextTick作用`是在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。


### 源码
源码路径：src\core\util\next-tick.js
```js
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  // 如果支持Promise
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
    setImmediate(flushCallbacks)
  }
} else {
  // 都不支持使用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```

nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用
* Promise
* MutationObserver
* setImmediate
* 以上都不支持，最后再使用 setTimeout 


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

JS 的 event loop 执行时会区分 task 和 microtask，引擎在每个 task 执行完毕，从队列中取下一个 task 来执行之前，会先执行完所有 microtask 队列中的 microtask。


为啥要用 microtask？

根据 HTML Standard，在每个 task 运行完以后，UI 都会重渲染，那么在 microtask 中就完成数据更新，当前 task 结束就可以得到最新的 UI 了。
反之如果新建一个 task 来做数据更新，那么渲染就会进行两次。

