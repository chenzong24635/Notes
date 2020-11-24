// 简单实现 events 模块
function EventEmitter() {
  this._events = {}
}
EventEmitter.prototype.on = function (eventName, callback) {
  
  // 给调用者添加属性
  if(!this._events) {
    this._events = {}
  }

  // 绑定事件不是 newListener时
  if(eventName !== 'newListener') {
    // 如果绑定过 newListener 事件 则
    // 先触发方法
    this._events['newListener'] ? this._events['newListener'].forEach(fn => fn(eventName)) : void 0
  }
  // 再添加回调
  this._events[eventName] = this._events[eventName] || []
  this._events[eventName].push(callback)
}

EventEmitter.prototype.once = function (eventName,callback) {
  function _once(...args) {
    callback(args)
    console.log(eventName,callback);
    this.off(eventName,_once)
  }

  // 
  // 避免调用once绑定某事件后,立即使用 off 解除该事件时,会解除失败
  // (因为使用 once 时绑定的是 _once事件,而非 callback )
  _once.l = callback
  this.on(eventName,_once)
}

EventEmitter.prototype.emit = function (eventName,...args) {
  if(!this._events[eventName])return
  this._events[eventName].forEach(fn => {
    fn.call(this,...args)
  })
}

EventEmitter.prototype.off = function (eventName,callback) {
  if(!this._events[eventName])return
  console.log('off');
  this._events[eventName] = this._events[eventName].filter(fn=>{
    return fn !== callback && fn.l !== callback
  })
}

module.exports = {
  EventEmitter
}