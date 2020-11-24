# Events
[events-所有API-英](https://nodejs.org/api/events.html) 
[events-所有API-中](http://nodejs.cn/api/events.html)


Node 事件循环：
* Node 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
* Node 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
* Node 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件。


核心：发布订阅

EventEmitter 类
* emit(event, [arg1], [arg2], [...]) 触发事件,，如果事件有注册监听返回 true，否则返回 false
* on(event, listener) 为指定事件注册一个监听器（可对同一事件监听多次）
  >addListener 别名
* once(event, listener)为指定事件注册一个单次监听器（只触发一次，触发后立即解绑）
* off(event, listener) 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
  >removeListener 别名
* removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器
* listeners(event) 返回指定事件的监听器数组

* 'newListener' 事件// 每次调用on方法会执行,先触发该方法再添加on的回调函数
* ....

```js
let fs = require("fs");
let events = require("events");
let EventEmitter = new events.EventEmitter();// 实例化事件对象

let getTxt = () => {
  fs.readFile('test.txt', (err, res) => {
    // 触发事件
    EventEmitter.emit('mydata', res.toString());
  })  
};

getTxt();


EventEmitter.on('newListener',(type) => {
  console.log(type,'newListener触发');
})


// on 注册监听事件
EventEmitter.on('mydata', (res) => {
  console.log('on监听的数据：',res);
});

```