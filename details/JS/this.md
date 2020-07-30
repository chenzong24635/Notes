

[彻底理解js中的this](https://juejin.im/post/5c049e6de51d45471745eb98)

[5种this绑定全面解析](https://github.com/yygmind/blog/issues/20)

https://mp.weixin.qq.com/s/1iw1MBfitockO5U0ZJIeXQ

## 了解
this的值是在执行的时候才能确认，定义的时候不能确认—— 因为this是执行上下文环境的一部分，而执行上下文需要在代码执行之前确定，而不是定义的时候

this永远指向的是最后调用它的对象


在ES2019中添加了globalThis对象，从现在开始应该在任何平台上访问全局作用域：
```js
let num = 1
globalThis.num  // 1

globalThis.v = { flag: true };
console.log(globalThis.v);//{ flag: true }
``` 


## this指向
![this](/img/this.png)

this的绑定规则共以下5种
*  默认绑定（严格/非严格模式）
*  隐式绑定
*  显式绑定
*  new绑定
*  箭头函数绑定

`this优先级：new绑定 > 显示绑定 > 隐式绑定`


#### 默认绑定
对于普通函数，this始终指向全局对象window；严格模式下为undefined (`默认绑定`)
```js
function foo() {
  console.log(this); ;// Window
}
foo();

function foo() { // 运行在严格模式下，this会绑定到undefined
  "use strict";
  console.log(this); ;// undefined
}
foo();
```

```js
function A(){
  //在A函数中定义一个B函数
  function B(){
    console.log(this); //Window
    console.log(this === window); //true
  }
  //在A函数内部调用B函数
  B();
}
//调用A函数
A();
```

#### 隐式绑定
对于对象方法，this指向调用该方法的对象（`隐式绑定`）//当函数是否在某个上下文对象中调用，函数的this被隐式绑定到该对象: obj.func()

```js
var name = 'window.name'
var obj = {
  name: 'obj.name',
  func: function(){
    console.log(this); // {name: "obj.name", func: ƒ}
    console.log(this === window); //false
    console.log(this.name); // "obj.name"
  }
};
 
obj.func(); //this 绑定到当前对象，也就是obj对象
```

在对象方法内部再次定义一个方法，该方法的this关键字又会重新指向全局对象(`隐式丢失`)
```js
var name = 'window.name'
var obj = {
  name: 'obj.name',
  func: function(){
    console.log(this); // Window
    console.log(this === window); //true
    console.log(this.name); //'window.name'
  }
};
 
var fn = obj.func; //
fn() //此时调用函数绑定this到window
```

```js
var name = 'window.name'
var obj = {
  name: 'obj.name',
  func: function(){
    console.log(this); // Window
    console.log(this === window); //true
    console.log(this.name); //'window.name'
  }
};

function foo(fn){
  fn() //  调用位置！ this指向 Window
}
foo(obj.func)
```

#### 显式绑定
通过call、apply和 bind 等方法来改变函数的 this 指向(`显式绑定`)  

* call 和 apply 主动执行函数，bind一般在事件回调中使用，call和apply的区别只是参数的传递方式不同：func.call(obj, arg1,arg2);func.apply(obj, [arg1,arg2]);  

* 如果把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind, 这些值在调用时会被忽略，为`默认绑定`。

```js
var name = 'window.name'
var obj = {
  name: 'obj.name',
  func: function(){
    console.log(this); // {name: "obj.name", func: ƒ}
    console.log(this === window); //false
    console.log(this.name); // "obj.name"
  }
};

var fn = obj.func; //
fn.call(obj) // call改变this指向，绑定到obj
```

#### new绑定
对于构造函数，this则指向新创建的对象；(`new绑定`)
```js
function Foo(name){
  this.name = name
  console.log(this); // Foo {name: "foo"}
  return '' // 或其他基本类型
  // return {name: 'coo'} 
  // return []
  // return function(){}
}
var foo = new Foo('foo')
// 如果返回值不是一个对象那么this还是指向函数的实例
console.log(foo); //  Foo {name: "foo"}
// 如果函数返回值是一个对象，那么this指向的就是那个返回的对象
// console.log(foo); // {name: 'coo'}
// console.log(foo); // []
// console.log(foo); // function(){} 
```

new如果函数返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。


#### 箭头函数
箭头函数的this，总是指向定义时所在的对象，而不是运行时所在的对象。

```js
var name = 'window.name'
var obj = {
  name: 'obj.name',
  func: ()=>{
    console.log(this); // Window
    console.log(this === window); //true
    console.log(this.name); //'window.name'
  }
};

obj.func();
```

```js
function foo(){
  return function(a) {
    console.log(this.a);
  }
}
var obj1 = {
  a:'obj1'
};
var obj2 = {
  a:'obj2'
};
foo.call(obj1).call(obj2); //输出obj2
```


```js
function foo(){
  return (a) => {
    console.log(this.a);
  }
}
var obj1 = {
  a:'obj1'
};
var obj2 = {
  a:'obj2'
};
foo.call(obj1).call(obj2); //输出obj1
//foo绑定obj1的this,call未改变外层作用域
```

## 总结
* 本质上，this 均指向触发函数运行时的那个对象。而在函数运行时，this 的值是不能被改变的。

* 常规函数的this 始终指向最后调用它的对象  

* 箭头函数的this，总是指向定义时所在的对象，而不是运行时所在的对象。（箭头函数this的作用域继承自执行上下文，自身不绑定 this，因此 this 的值将在调用堆栈中查找） 
* 箭头函数的绑定无法被修改(new也不行)。


___

this 指针存在于函数中，用以标识函数运行时所处的上下文。

1. 如果一个函数中有this，这个函数未被上一级的对象所调用，那么this指向的就是window，(在js的严格模式中this指向undefined,不是window)
2. 如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
3. 如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象


## `箭头函数的this`
[深入之重新认识箭头函数的this](https://github.com/yygmind/blog/issues/21)

[箭头函数与普通函数区别](https://juejin.im/post/5c76972af265da2dc4538b64)

**特点**
* 箭头函数不支持重复的命名参数

* 箭头函数不支持argument对象：必须使用命名参数或者不定参数这两种形式访问参数。

* 箭头函数没有constructor,所以不能用new调用箭头函数；

* 箭头函数没有prototype(原型)，所以箭头函数本身没有this;

* 箭头函数没有 this/super/arguments/new.target 的绑定，这些值继承自外层第一个普通函数；

* 箭头函数绑定中，this指向外层作用域，根据作用域链往上层查找，直到找到一个绑定了this的函数作用域，并指向调用该普通函数的对象, 直至最终指向window(全局对象)

* 箭头函数不能直接通过call、aaply、bind、new等修改其this指向(可间接改变：修改被继承的对象的this指向)

```js
function bar() {
  let a = () => {
    // this指向定义的时候外层第一个普通函数
    console.log(this) // Window
  }; // 在bar中定义 this继承于bar函数的this指向
  a()
}
bar()
```

```js
var name = 'window'

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => console.log(this.name)
  }
}
var person2 = { name: 'person2' }

person1.show1()// person1
person1.show1.call(person2)// person2

person1.show2()// window
person1.show2.call(person2)// window

person1.show3()()// window
person1.show3().call(person2)// person2
person1.show3.call(person2)()// window

person1.show4()()// person1
person1.show4().call(person2)// person1  
  //先执行show4() 绑定this指向person1
  //call并没有改变外层作用域
person1.show4.call(person2)()// person2
  //call改变其指向
```

箭头函数不用function（function有自己的函数作用域）将其包裹起来，那么默认绑定的父级作用域就是window。（如show2）

用function包裹的目的就是将箭头函数绑定到当前的对象上。 匿名函数的作用域是当前这个对象，所以之后箭头函数会自动绑定到此函数所在作用域的this，。（如show4）
