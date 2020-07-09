bind 绑定后返回的是个函数，该函数使用有两种情况：
* 直接调用
* 当做构造函数使用

```js
Function.prototype.selfBind = function(content, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`)
  }
  content = content || window

  // 指向调用的方法
  let self = this

  // 绑定的函数
  let bound = function(...args2) {
    // this instanceof bound, 判断是否使用 new 来调用 bound
    // 如果是 new 来调用的话，this的指向就是其实例，
    // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
    return self.apply(
      this instanceof bound ? this : content,
      [...args, ...args2]
    );
  };

  // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
  if (self.prototype) {
    bound.prototype = Object.create(self.prototype)
  }

  return bound; // 返回拷贝的函数
}

```