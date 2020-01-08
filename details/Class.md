
[ECMAScript 6 入门-Class 的基本语法](https://es6.ruanyifeng.com/#docs/class) --阮一峰  
[ECMAScript 6 入门-Class 的继承](https://es6.ruanyifeng.com/#docs/class-extends) --阮一峰


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


静态属性  
```js
class Foo {}
Foo.prop = 1;
```
目前只能这样写，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。

-----

```js
class Person {
  public name;
  constructor(name) {
    this.name = name;
  }
  static say1(){
    console.log('static');
  }
  private say2(){
    console.log('private');
  }
}
let p = new Person('aaa')
Person.say1(); // 'static'
```

# Class继承