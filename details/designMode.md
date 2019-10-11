https://segmentfault.com/a/1190000014436817

https://segmentfault.com/a/1190000012422198

<details open>
  <summary>
    伸/缩
  </summary>
</details>

* <a href="#"></a>
#  <a name=""></a>


#### 工厂模式 -- Factory
* 核心:
>
    return一个对象
    创建不同的引用类型
* 例子:
> 
    function People () {
      let person = {
        name: '人',
        walk: function () {console.log('walk')}
      }
      return person // 返回一个对象
    }
    let p = People() // 工厂生产对象

* 说明：
>

    1.在函数中定义对象,并定义对象的各种属性，,虽然属性可以为方法，但是建议将属性为方法的属性定义到函数之外，这样可以避免重复创建该方法
    2.引用该对象的时候，这里使用的是 var x = Parent()而不是 var x = new Parent();因为后者会可能出现很多问题（前者也成为工厂经典方式,后者为构造函数模式）
    3.在函数的最后返回该对象
    4.不推荐



#### 构造函数模式 -- Constructor
* 核心：
>
    将属性绑定到this上
    用new 创建实例

* 例:
>

    function People() {
      this.name = '人'
      this.getName=function(){
        return this.name
      }
    }

    let p = new People()
    console.log(p.getName())


* 说明：
>

    1.与工厂方式相比，使用构造函数方式创建对象，无需再函数内部重建创建对象，而使用this指代，并而函数无需明确return
    2.同工厂模式一样，虽然属性的值可以为方法，但建议将该方法定义在函数之外

#### 原型模式
* 例：
>
    function Parent(){};  
    Parent.prototype.name="john";  
    Parent.prototype.age="30";  
    Parent.prototype.lev=lev;  
    var p=new Parent(); 

 * 说明：
 >
    1.函数中不对属性进行定义
    2.利用prototype属性对属性进行定义
    3.不推荐

#### 混合模式 —— Mixin (原型模式+构造函数模式)
* 核心
>
    1.在JS中，一般我们实现继承的过程就是混合模式
    2.其概念就是提供能够被一个或者一组子类简单继承功能的类
* 例子
>
    function People(name, age) {
      this.name = name
      this.age = age
    }

    People.prototype.sayName = function () {
      console.log(this.name)
    }

    function Student(name, age, score) {
      People.call(this, name, age) //改变this指向,进行属性拷贝
      this.score = score
    }

    //Student.prototype = new People() // 这样写 实例化时构造函数会执行2次，（其中改变this指向时执行了1次）
    //优化：  
     Student.prototype = People.prototype
     Student.prototype.constructor = Student //手动改变constructor指向
    //优化后只执行1次，但改变了实例的constructor，即new Student().constuctor --> People；由此无法判断实例的构造函数(实例由谁直接实例化的)，需手动改变constructor

* 说明：
>
    将所有属性不是方法的属性定义在函数中（构造函数方式）
    将所有属性是方法的属性利用prototype在函数之外定义（原型方式）


#### 单例模式 —— Singleton
* 核心
>
    保证一个特定类只有一个实例，第二次使用同一个类创建新对象的时候，应该得到与第一次创建对象完全相同的对象。

>

    var Person1  = (function () {
      var _this = null;
      return function (name,age) {
        if(!_this){
          _this = this;
        }
        _this.name = name;
        _this.age = age;
        return _this
      }
    })();
    var person11 = new Person1("A",18);
    console.log("姓名:"+person11.name,"年龄:"+person11.age);
    var person22 = new Person1("B",19);
    console.log("姓名:"+person22.name,"年龄:"+person22.age);
    console.log(person11===person22); //==>true

#### 模块模式 —— Module
* 核心
>
    在js中，常常使用闭包的形式来实现

* 案例
>
    let Person = (function () {
      let name = '小明'
      function sayName() {
        console.log(name)
      }

      return {
        name: name,
        sayName: sayName
      }
    })()


#### 发布订阅模式 —— Publish/Subscribe
* 核心
>
    比如我【订阅者】现在订阅了一个公众号，公众号【发布者】向我发布消息

* 案例
>
    let Event = (function () {
      let events = {}
      function on(evt, handler) {
        // 实现监听效果
        // 使用'或'是为了可以对同一个事件多次进行回调
        events[evt] = events[evt] || []
        events[evt].push({
            handler
        })
      }

      function fire(evt, args) {
        if (!events[evt]) {
          // 如果未监听任何事件，直接中断
          throw evt + '事件未监听'
          return
        }
        events[evt].map((item)=>{
           // 遍历，实现对同一个事件的多次回调
          item.handler(args)
        })
      }

      function off(evt) {
        delete events[evt]
      }

      return {
        on, // 订阅者
        fire, // 发布者
        off // 取消订阅
      }
    })()

    var number = 1;
    Event.on('click', function (data) {
      console.log(data + number++ + '次');
    });
    // Event.off('click'); //  取消绑定
    Event.on('click', function (data) {
      console.log(data + number++ + '次');
    });
    Event.fire('click', 'click 事件绑定');

