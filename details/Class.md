
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
* 在constructor构造函数中，this 值等于新创建的实例。用于实例化类的参数成为构造函数的参数
* static 静态方法，类自身的方法 (可继承)


## 静态属性  ,静态方法
```js
class Foo {}
Foo.prop = 1; //静态属性
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
    console.log('private');
  }
}
Person.age = 99; //静态属性
Person.say = ()=>console.log('static'); //静态方法

let p = new Person('aaa')
Person.say(); // 'static'
Person.say1(); // 'static'
p.say2(); // 'private'

// 实例不能继承类的静态方法、属性
console.log(Person.age, p.age);//99 undefined
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