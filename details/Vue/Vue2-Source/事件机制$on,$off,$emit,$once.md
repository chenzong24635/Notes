## Vue事件机制 \$on, \$off,\$emit,\$once
Vue 事件机制 本质上就是 一个 发布-订阅 模式的实现

源码路径：src\core\instance\events.js

```js
function Vue() {
  this._events = Object.create(null)
}

eventsMixin(Vue)
function eventsMixin(Vue) {
  // 绑定事件
  Vue.prototype.$on = function (event, fn) {
    const vm = this
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn)
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn)

    }
    return vm
  }

  // 绑定事件只触发一次，触发后立即销毁
  Vue.prototype.$once = function (event, fn) {
    const vm = this

    function on() {
      vm.$off(event, on)
      fn.apply(vm, arguments)
    }
    on.fn = fn
    vm.$on(event, on)
    return vm
  }

  // 解除事件的绑定
  Vue.prototype.$off = function (event, fn) {
    const vm = this
    // all
    // 如果没有传入参数，
    // 解除所有绑定事件
    if (!arguments.length) {
      vm._events = Object.create(null)
      return vm
    }
    // array of events
    // 解除指定的绑定事件
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn)
      }
      return vm
    }
    // specific event
    const cbs = vm._events[event]
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null
      return vm
    }
    // specific handler
    let cb
    let i = cbs.length
    while (i--) {
      cb = cbs[i]
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1)
        break
      }
    }
    return vm
  }

  Vue.prototype.$emit = function (event) {
    const vm = this
    let cbs = this._events[event];
    if (cbs) {
      const args = [].slice.call(arguments, 1);
      cbs.map(item => {
        args ? item.apply(this, args) : item.call(this);
      });
    }
    return vm
  }
}
```

```js
let vm = new Vue();
vm.$on('a',()=>{
  console.log('a');
})
vm.$on('a',()=>{
  console.log('a1');
})
vm.$once('b',()=>{
  console.log('b');
})
// vm.$emit('a')
// vm.$emit('b')
console.log(vm);
```