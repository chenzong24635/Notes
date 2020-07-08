
```js
// 新建一个空的构造函数F，
// 然后让F.prototype属性指向参数对象obj，
// 最后返回一个F的实例，从而实现让该实例继承obj的属性。
const create = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};

create(null) // 创建的空对象 ，还是有 __proto__ 属性
```


```js
// 创建空对象
// 指定对象的原型
const create = function (obj) {
  let B = {};
  Object.setPrototypeOf(B,obj);
  return B;  
};

create(null) // 创建真正的空对象 ，此时没有 __proto__ 属性
```