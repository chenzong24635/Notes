# [WebWorker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
[Web Worker 使用教程](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)--阮一峰

## 概念
Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰


Web Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Web Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

## 特点
* 同源限制
  >分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

* DOM 限制 
  >无法访问DOM节点；子线程完全受主线程控制并且不能操作dom，只有主线程可以操作dom  
   无法访问window、document之类的浏览器全局变量  
   但是可以访问navigator、location对象。 

* 脚本限制
   >无法访问全局变量或是全局函数；  
    无法调用alert()或者confirm之类的函数,但可以使用 XMLHttpRequest 对象发出 AJAX 请求  

* 文件限制
  >Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

* 通信联系
  >Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。


## 使用

子线程与主线程之间提供了数据交互的接口postMessage和onmessage，来进行数据发送和接收;  
通过error捕捉错误信息；
使用terminate()可结束线程;


### 主线程
* worker = new Worker('js地址', { name : '指定 Worker 的名称' }); // 新建一个 Worker 线程
* worker.onerror：指定 error 事件的监听函数。
* worker.onmessage：指定 message 事件的监听函数，发送过来的数据在Event.data属性中。
* worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
* worker.postMessage()：向 Worker 线程发送消息。
* worker.terminate()：立即终止 Worker 线程。

### 子线程：(self.可省略)

* self.name： Worker 的名字。该属性只读，由构造函数指定。
* self.onmessage：指定message事件的监听函数。
* self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
* self.close()：关闭 Worker 线程。
* self.postMessage()：向产生这个 Worker 线程发送消息。
* self.importScripts()：加载 JS 脚本。


分类：专用线程 Dedicated Worker，一个是共享线程 Shared Worker


self 和 this 都代表子线程的全局对象。对于监听 message 事件，以下的四种写法是等同的。
```js
// 写法 1
self.addEventListener('message', function (e) {})

// 写法 2
this.addEventListener('message', function (e) {})

// 写法 3
addEventListener('message', function (e) {})

// 写法 4
onmessage = function (e) {}
```

```js
// 主线程 index.js
var worker = new Worker('/worker.js', {name: 'A'}); //创建一个子线程
worker.postMessage('Hello');
worker.onmessage = function (e) {
    console.log('接收自子线程的信息：',e.data); //Hi
    worker.terminate(); //结束线程
};
worker.onerror = function (err) {
  console.log('err:',err)
}

// 子线程worker.js
console.log(name) // A
onmessage = function (e) {
  console.log('接收自主线程的信息：',e.data); //Hello
  postMessage("Hi"); //向主进程发送消息
}
```