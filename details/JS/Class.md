
[ECMAScript 6 入门-Class 的基本语法](https://es6.ruanyifeng.com/#docs/class) --阮一峰  
[ECMAScript 6 入门-Class 的继承](https://es6.ruanyifeng.com/#docs/class-extends) --阮一峰

ES的Class

# 概述

在ES6之前，如果我们要生成一个实例对象，传统的方法就是写一个构造函数，例子如下：
```js
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.information = function () {
  return 'My name is ' + this.name + ', I am ' + this.age
}
```
复制代码但是在ES6之后，我们只需要写成以下形式：
```js
class Person {
  constructor(name, age) {
      this.name = name
      this.age = age
  }
  information() {
      return 'My name is ' + this.name + ', I am ' + this.age
  }
}
```

# Class

* class 关键字 定义一个类  
* constructor() 构造函数 初始化
  >没有定义constructor，也会隐式生成一个constructor方法
* 在constructor构造函数中，this 值等于新创建的实例。用于实例化类的参数成为构造函数的参数
* static 静态方法，类自身的方法 (可继承)
  

函数存在声明提示
类却不存在

```js
let a = new A()
function A () {}
console.log(a) // A {}

let b = new B()
class B {}
console.log(b) // Uncaught SyntaxError: Identifier 'B' has already been declared
```


## 静态属性  ,静态方法
```js
class Foo {}
Foo.age = 1; //静态属性
```
静态属性目前只能这样写，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  static say1(){ //静态方法
    console.log('static');
  }
  say2(){
    console.log('public');
  }
}
Person.age = 99; //静态属性
Person.say = ()=>console.log('static'); //静态方法

let p = new Person('aaa')
Person.say(); // 'static'
Person.say1(); // 'static'
p.say2(); // 'public'

// 实例不能继承类的静态方法、属性
console.log(Person.age, p.age);//99 undefined
```

## 在constructor里 this 绑定的属性方法与 class里直接定义的属性方法的区别
[](https://juejin.im/post/5e707417e51d45272054d5d3#heading-16)


* 在constructor中 var/let/const 一个变量，它只存在于constructor这个构造函数中
* 在constructor中 使用this定义的属性和方法会被定义到实例上
* 在class中使用 = 来定义一个属性和方法，也会被定义到实例上（若 constructor 定义了同名属性方法则忽略）
* 在class中直接定义一个方法，会被添加到原型对象prototype上

```js
class A{
  constructor(name) {
  // this 定义的属性方法都是实例自身的
    this.name = name
    this.age = 99 // 若注释此处，实例对象的 age 为 1
    this.sayAge = function() {
      console.log(this.age);
    }
    this.hello = function(){
      console.log('hello','1-----');
    }
  }
  // 通过 = 定义的属性方法也是是实例自身的（若 constructor 定义了同名属性方法则忽略）
  age = 1
  sex = 'men'
  hello = function(){
    console.log('hello','2-----');
  }

  // 这里定义的方法都是实例原型上的
  sayAge(){
    console.log(this.age,'---');
  }
  sayName(){
    console.log(this.name);
  }
}
let a = new A('i am a')  
a.sayName() // i am a
a.sayAge() // 99
a.hello() // hello 1-----
a.__proto__.sayAge() // undefined "---"
console.log(a);
/* 
{
  age: 99,
  sex: "men",
  name: "i am a",
  hello: ƒ (),
  sayAge: ƒ (),
  __proto__:{
    constructor: class A,
    sayAge: ƒ sayAge(),
    sayName: ƒ sayName(),
    __proto__: Object,
  }
}
*/
```

箭头函数
```js
class A{
  constructor(name){
    this.type = 'class'
    let type = 'constructor'
    this.sayType1 = function() {
      console.log(this.type,'-', type);
    }
    this.sayType2 = () => {
      console.log(this.type,'-', type);
    }
  }
  sayType3 = function() {
    console.log(this.type,'-', type);
  }
  sayType4 = () => {
    console.log(this.type,'-', type);
  }
}
var type = "window";
let a = new A()
a.sayType1() // class - constructor
a.sayType2() // class - constructor
a.sayType3() // class - window
a.sayType4() // class - window
```


## Class继承 extends
父类的静态方法，可以被子类继承

```js
class Person {
  constructor(name) {
    //通过new.target来确定类是如何被调用的，
    //一般而言new.target等于类的构造函数。
    console.log('new.target: ' + new.target);
    console.log('new.target.name: ' + new.target.name);
    this.name = name;
  }
  static say1(){ //静态方法
    console.log('static:' + this.name);
  }
  say2(){
    console.log('private:' + this.name);
  }
}
Person.age = 99; //静态属性
Person.say = ()=>console.log('static'); //静态方法

class A extends Person{
  constructor(name){
    // this.name = name + '1'; //ReferenceError
    // 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。
    super(name);
    this.name = name + '12';
  }
}

console.log(Person.name); // Person

A.say1();

let a= new A('Tom');
a.say2();
```