
[学会 JS 的 this 这一篇就够了，根本不用记 —— 慕课网](https://www.imooc.com/article/1758)
[彻底理解js中的this](https://juejin.im/post/5c049e6de51d45471745eb98)

[5种this绑定全面解析](https://github.com/yygmind/blog/issues/20)

[](https://juejin.im/post/6844904132201938957)

## 了解

this是在[执行上下文](/details\JS/其他/作用域-作用域链-执行上下文.md)创建时确定的一个在执行过程中不可更改的变量(而执行上下文需要在代码执行时确定)。

this永远指向的是最后调用它的对象


this 是和执行上下文绑定的，也就是说每个执行上下文中都有一个 this。

执行上下文分为 3 种：
* 全局执行上下文
* 函数执行上下文
* eval 执行上下文


当函数独立调用的时候，在严格模式下它的this指向undefined，
在非严格模式下，当this指向undefined的时候，自动指向全局对象(浏览器中就是window)
```js
function foo() {
  console.log(this); // Window
}
foo();

function foo1() {
  "use strict";
  console.log(this); // undefined
}
foo();
```


在ES2019中添加了globalThis对象，从现在开始应该在任何平台上访问全局作用域：
```js
var num = 1 // var定义的变量会绑定到window上
console.log(window.num)  // 1
console.log(globalThis.num)  // 1

globalThis.bool = { flag: true };
console.log(globalThis.bool);//{ flag: true }

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
    console.log(this === obj); // true
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
    console.log(this === obj); // false
    console.log(this === window); //true
    console.log(this.name); //'window.name'
  }
};


var fn = obj.func; //
fn() //此时调用函数绑定this到window，隐式丢失
```

```js
var name = 'window.name'
var obj = {
  name: 'obj.name',
  func: function(){
    console.log(this === obj); // false
    console.log(this === window); //true
    console.log(this.name); //'window.name'
  }
};

function foo(fn){
  fn() //  调用位置！ this指向 Window
}
foo(obj.func)
```


还有嵌套函数中的 this 不会从外层函数中继承
```js
var obj = {
  name: 'obj.name',
  func: function(){
    console.log(this); // 指向obj {name: "obj.name", func: ƒ}
    function foo() {
      console.log(this) 
    }
    foo()// 指向Window
    // foo.apply(this) // 除非显示绑定到 obj
  }
};
obj.func()
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
    console.log(this === obj); //true
    console.log(this === window); //false
    console.log(this.name); // "obj.name"
  }
};

var fn = obj.func; //
fn.call(obj) // call改变this指向，绑定到obj
```



先来看一下如何使用call方法:
```js
function say(content) {
    console.log("From " + this + ": Hello "+ content);
}
say.call("Bob", "World"); //==> From Bob: Hello World
```
接下来仔细分析一下call的用法：

Step1: 把第二个到最后一个参数作为函数执行时要传入的参数
Step2: 把函数执行时的this指向第一个参数
Step3: 在上面这个特殊的上下文中执行函数



上面例子中，我们通过call方法，让say函数执行时的this指向"Bob"，然后把"World"作为参数传进去，所以输出结果是可以预见的。
js执行函数时会默认完成以上的步骤，你可以把直接调用函数理解为一种语法糖
比如
```js
function say(word) {
    console.log(world);
}
say("Hello world");

say.call(window, "Hello world");
```
以上可以把say("Hello world")看做是say.call(window,"Hello world")的语法糖。

不过也有例外，在ES5的strict mode中call的第一个参数不是window而是

```js
var obj = {
    x: 20,
    f: function(){ console.log(this.x); }
};

obj.f(); // 可以看作  obj.f.call(obj)


obj.innerobj = {
    x: 30,
    f: function(){ console.log(this.x); }
}

obj.innerobj.f(); // obj.innerobj.f.call(obj.innerobj)
```

```js
var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x); //this equals obj
                // ==> 20
        var foo = function(){ console.log(this.x); }
        foo(); // foo.call(window)
                //foo中this被指定为window，所以==> 10
    }
};

obj.f();  // obj.f.call(obj)
// ==> 20 10
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
    console.log(this === obj); //false
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


## 更多实例
### 题1  
```js
var num = 1;
var obj = {
  num: 2,
  fn: function() {
    console.log(this);
    this.num = 3;
    (function() {
      console.log(this);
      this.num = 4;
      console.log(this.num);
    })();
    console.log(this.num);
  },
}

/* obj.fn();
console.log(obj,num); */

/* var fn = obj.fn;
fn()
console.log(obj,num); */
```

`解析:obj.fn()的情况`
```js
var num = 1;
var obj = {
  num: 2,
  fn: function() { 
    console.log(this); // 指向 obj
    this.num = 3;
    (function() {
      console.log(this); // 立即执行函数，因为没有手动去指定它的this指向，所以指向window
      this.num = 4;
      console.log(this.num);
    })();
    console.log(this.num);
  },
}
obj.fn();
console.log(obj,num);

// 输出结果：
// {num: 2, fn: ƒ}
// Window
// 4
// 3
// {num:3,fn: ƒ} 4
```

`解析：var fn = obj.fn; fn()的情况`
```js
var num = 1;
var obj = {
  num: 2,
  fn: function() {
    console.log(this); // 指向window
    this.num = 3;
    (function() {
      console.log(this); // 指向window
      this.num = 4;
      console.log(this.num);
    })();
    console.log(this.num);
  },
}

var fn = obj.fn; // this关键字会重新指向全局对象(`隐式丢失`)
fn()
console.log(obj,num);

// 输出结果：
// Window
// Window
// 4
// 4
// {num: 2, fn: ƒ} 4
```


### 题2 
```js
var num = 1
var obj = {num: 2}
obj.fn = (function (num) {
  console.log(this);
  this.num = num * 10
  num++
  return function (n) {
    console.log(this)
    this.num += n
    num++
    console.log(num)
  }
})(obj.num)

/* obj.fn(10)
console.log(obj,num) */

/* var fn = obj.fn
fn(10)
console.log(obj,num) */
```

`解析:obj.fn(10)的情况`
```js
var num = 1
var obj = {num: 2}
obj.fn = (function (num) { // 参数num = 2
  console.log(this); // 立即执行函数，因为没有手动去指定它的this指向，所以指向window
  this.num = num * 10 // window.num= 20
  num++ // 参数num = 3
  return function (n) {  // 参数n = 10
    console.log(this) // this指向obj
    this.num += n // obj.num = 12
    num++ // 参数num = 4
    console.log(num) // 4
  }
})(obj.num) // 值引用

obj.fn(10)
console.log(obj,num)

// 输出结果
// Window
// {num: 2, fn: f}
// 4
// {num: 12, fn: f} 20
```

`解析:var fn = obj.fn;fn(10)的情况`
```js
var num = 1
var obj = {num: 2}
obj.fn = (function (num) { // 参数num = 2
  console.log(this); // 立即执行函数，因为没有手动去指定它的this指向，所以指向window
  this.num = num * 10 // window.num= 20
  num++ // 参数num = 3
  return function (n) {  // 参数n = 10
    console.log(this) // 隐式丢失，this指向window
    this.num += n // window.num = 30
    num++ // 参数num = 4
    console.log(num) // 4
  }
})(obj.num) // 值引用

var fn = obj.fn
fn(10)
console.log(obj,num)

// 输出结果
// Window
// Window
// 4
// {num: 2, fn: f} 30
```


### 题3
改动题2的立即执行函数的 num 引入为 地址引入
```js
var num = 1
var obj = {num: 2}
obj.fn = (function (obj1) { // 参数 obj1 引用自 obj
  console.log(this); // 立即执行函数，因为没有手动去指定它的this指向，所以指向window
  this.num = obj1.num * 10 // window.num= 20
  obj1.num++ // obj.num = 3
  return function (n) {  // 参数n = 10
    console.log(this) // this指向obj
    this.num += n // obj.num = 13
    obj1.num++ // obj.num = 14
    console.log(obj1==obj) // true
  }
})(obj) // 地址引入

/* obj.fn(10)
console.log(obj) // {num: 14, fn: ƒ} */

// 输出结果
// Window
// {num: 3, fn: ƒ}
// true
// {num: 14, fn: ƒ}

var fn = obj.fn
fn(10)
console.log(obj,num) 
```

### 题4
改动题2的立即执行函数的 this指向
```js
var num = 1
var obj = {num: 2}
obj.fn = (function (num) {
  console.log(this);
  this.num = num * 10
  num++
  return function (n) {
    console.log(this)
    this.num += n
    num++
    console.log(num)
  }
// })(obj.num)
}).call(obj,obj.num)  // 改变this指向为obj

obj.fn(10)
console.log(obj,num)
```

解析
```js
var num = 1
var obj = {num: 2}
obj.fn = (function (num) { //参数num=2
  console.log(this); // call绑定this指向obj
  this.num = num * 10 // obj.num = 20
  num++ //参数num=3
  return function (n) { //参数n=10
    console.log(this) // this指向 obj
    this.num += n // obj.num = 30
    num++ // 参数num = 4
    console.log(num) // 4
  }
// })(obj.num)
}).call(obj,obj.num)  // 改变this指向为obj

obj.fn(10)
console.log(obj,num)

// 输出结果
// {num: 2, fn: ƒ}
// {num: 20, fn: ƒ}
// 4
// {num: 30, fn: ƒ}
```