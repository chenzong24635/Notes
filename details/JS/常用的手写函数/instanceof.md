```js
/**
 * @param   left  [左侧参数为一个实例对象]
 * @param   right [右侧为要判断的构造器函数]
 */

// A instanceof B
// 在A的原型链中层层查找，是否有原型等于 B.prototype

function selfInstanceof (left, right) {
  if(typeof right !== 'function'){
    throw TypeError("second argument is not a function")
  }
  // 基本类型 返回 false
  if(typeof left !== 'object' || left === null) return false

  // 获取 left,right 原型
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (proto === null) {
      return false;
    } else if (proto === prototype) {
      return true;
    }
    // 获取left原型的原型，继续循环，直至 null 或找到right存在于left的原型链上
    proto = Object.getPrototypeOf(proto);
  }
};

```

```js
function A(){}
function B(){
  A.call()
}
// B.prototype = Object.create(A.prototype)
// B.prototype.constructor = B

let a = new A()
let b = new B()
console.log(a instanceof A) // true
console.log(b instanceof A) // false
console.log(b instanceof B) // true
```