
### 了解 new 的实现原理
* 创建一个空对象，并将这个空对象的 __proto__，指向构造函数的原型(prototype)对象 ，使其继承构造函数原型上的属性。  

* 改变构造函数内部 this 指针为这个对象(如果有传参，需要将参数也导入构造函数)  

* 执行构造函数中的代码，使其具有构造函数 this 指针的属性。  

* 如果构造函数中没有返回其它对象(tips：不包括null)，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。

new 操作返回的实例对象具有两个特征：
>
    具有构造函数中定义的 this 指针的属性和方法  
    具有构造函数原型上的属性和方法

### 实现 new
```js
const isType = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null

const selfNew = function (fn, ...args) {
  let instance = Object.create(fn.prototype)
  let res = fn.call(instance, ...args)
  return isType(res) ? res : instance
}
```

```js
function A(name) {
  this.name = name
}
let a = new A('tom')
let b = selfNew (A,'tom1')
console.log(a);
console.log(b);
```