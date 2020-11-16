
### 了解 new 的实现原理
使用 new 操作符，实际上会经历以下 4个步骤：
* 创建一个空对象，并将这个空对象的 \__proto__，指向构造函数的原型(prototype)对象 ，使其继承构造函数原型上的属性  

* 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）  

* 执行构造函数中的代码（为这个新对象添加属性）  

* 返回新对象  
  >如果构造函数中 return 一个值， 且其类型是一个对象（注意排除null）或者函数，则返回该值
  >否则，返回创建的新对象

new 操作返回的实例对象具有两个特征：
* 具有构造函数中定义的 this 指针的属性和方法  
* 具有构造函数原型上的属性和方法

### 实现 new
```js
const isObjFn = obj => (typeof obj === 'object' && obj !== null) || typeof obj === 'function'

const selfNew = function (fn, ...args) {
  let instance = Object.create(fn.prototype) // 创建一个新对象，继承fn函数原型
  let res = fn.apply(instance, args) // 执行构造方法,并将构造函数中的this指向这个对象，并传递参数
  return isObjFn(res) ? res : instance // 判断 fn函数返回结果：是对象或函数则返回此该结果res，否则返回创建的新对象instance
}
```

```js
function A(name) {
  this.name = name
  // return {}
  // return ()=>{}
  // return ''
}
let a = new A('tom')
let b = selfNew (A,'tom1')
console.log(a);
console.log(b);
```