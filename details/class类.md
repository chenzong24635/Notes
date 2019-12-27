
* class 关键字 定义一个类  
* constructor() 构造函数 初始化
* 在constructor构造函数中，this 值等于新创建的实例。用于实例化类的参数成为构造函数的参数
* static 静态属性|方法，类自身的属性|方法
* public 公有属性|方法， 可以在任何地方访问
* private 私有属性|方法，只能在类的主体中访问

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