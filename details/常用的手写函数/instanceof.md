```js
/**
 * @param   left  [左侧参数为一个实例对象]
 * @param   right [右侧为要判断的构造器函数]
 */
function selfInstanceof (left, right) {
  if(typeof right){
    throw TypeError("Right-hand side of 'instanceof' is not an object")
  }
  // 获取 left 原型
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