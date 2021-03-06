bind 绑定后返回的是个函数，该函数使用有两种情况：
* 直接调用
* 当做构造函数使用

```js
Function.prototype.selfBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`)
  }
  context = context || window

  // 指向调用的方法
  let self = this

  // 绑定的函数
  function bound(...args2) {
    // this instanceof bound, 判断是否使用 new 来调用 bound
    // 如果是 new 来调用的话，绑定到this；否则是普通函数形式调用，绑定到 context
    return self.apply(
      this instanceof bound ? this : context,
      [...args, ...args2]
    );
  };

  // 继承原型上的属性和方法
  self.prototype && (bound.prototype = Object.create(self.prototype))

  return bound; // 返回拷贝的函数
}

```

```js
function A(...names){
  this.names = names
  // console.log(names);
  return names
}
let fn =  A.selfBind(null,'a')
let a1 = fn(1)
let a2 = new fn(2)
console.log(a1);
console.log(a2);
```