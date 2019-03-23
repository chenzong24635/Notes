<a href="#1">设计模式</a>

# <a name="1">设计模式</a>
## 创建对象的几种方式？
    对象字面量：person={firstname:"Mark",lastname:"Yun",age:25};
    Object.create（）//o=Object.create({},{name:{value:’joo’}});
    构造函数：p=new Object();

## 工厂模式 -- Factory
* 核心:
    1.return一个对象
    2.创建不同的引用类型
* 例子:    
    function People () {
      let person = {
        name: '人',
        walk: function () {console.log('walk')}
      }
      return person // 返回一个对象
    }
    let xiaoming = People() // 工厂生产对象

* 说明：
    1.在函数中定义对象,并定义对象的各种属性，,虽然属性可以为方法，但是建议将属性为方法的属性定义到函数之外，这样可以避免重复创建该方法
    2.引用该对象的时候，这里使用的是 var x = Parent()而不是 var x = new Parent();因为后者会可能出现很多问题（前者也成为工厂经典方式,后者称之为混合工厂方式），不推荐使用new的方式使用该对象
    3.在函数的最后返回该对象
    4.不推荐


## 构造函数模式 -- Constructor
* 核心：
    1.将属性绑定到this上
    2.将方法绑定到prototype上
    3.用new 创建实例
* 例:
    function People() {
      this.name = '人'
    }
    People.prototype.walk = function () {
      console.log('walk')
    }
    let xiaoming = new People()
* 说明：
  1.与工厂方式相比，使用构造函数方式创建对象，无需再函数内部重建创建对象，而使用this指代，并而函数无需明确return
  2.同工厂模式一样，虽然属性的值可以为方法，扔建议将该方法定义在函数之外
  3.不推荐

## 原型模式
* 例：
    function Parent(){};  
    Parent.prototype.name="john";  
    Parent.prototype.age="30";  
    Parent.prototype.lev=lev;  
    var x=new Parent();  
 * 说明：
    1.函数中不对属性进行定义
    2.利用prototype属性对属性进行定义
    3.同样的，不推荐使用这样方式创建对象

## 单例模式 —— Singleton
* 核心
    1.产生一个类的唯一实例
    2.好处就是节约内存

* 案例
    function createPeople() {
        let name
        return function (userName) {
            return name || (name = userName)
        }
    }

    let single = createPeople()
    console.log(single('人')) // '人'
    // 不管再传递任何值，也只会返回 '人'
    console.log(single('马')) // '马'


## 混合模式 —— Mixin
* 核心
    1.在JS中，一般我们实现继承的过程就是混合模式
    2.其概念就是提供能够被一个或者一组子类简单继承功能的类
* 例子
    function People(name, age) {
      this.name = name
      this.age = age
    }

    People.prototype.sayName = function () {
      console.log(this.name)
    }

    function Student(name, age, score) {
      People.call(this, name, age)
      this.score = score
    }

    function create(prototypeObj) {
      let empty = function () {}
      empty.prototype = prototypeObj
      return new empty()
      // return值如下
      // {
      //   __proto__:prototypeObj
      // }
    }
    Student.prototype = create(People.prototype)

    Student.prototype.work = function () {
      console.log('work')
    }

* 说明：
    1.该模式是指混合搭配使用构造函数方式和原型方式
    2.将所有属性不是方法的属性定义在函数中（构造函数方式）
    将所有属性值为方法的属性利用prototype在函数之外定义（原型方式）

## 模块模式 —— Module
* 核心
    在js中，常常使用闭包的形式来实现

* 案例
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


## 发布订阅模式 —— Publish/Subscribe
* 核心
    比如我【订阅者】现在订阅了一个公众号，公众号【发布者】向我发布消息

* 案例
    实现一个jQuery的发布订阅案例

    // 订阅者
    $('div').on('click',function () {})

    // 发布者
    $('header').on('click',function () {
        $('div').trigger('click')
    })

* 代码：
    let EventCenter = (function () {
      let events = {}
      function on(evt, handler) {
        // 实现监听效果
        // 使用'或'是为了可以对同一个事件多次进行回调
        events[evt] = events[evt] || []
        events[evt].push({
            handler: handler
        })
      }

      function fire(evt, args) {
        if (!events[evt]) {
          // 如果未监听任何事件，直接中断
          return
        }
        for (let i = 0; i < events[evt].length; i++) {
          // 遍历，实现对同一个事件的多次回调
          events[evt][i].handler(args)
        }
      }

      function off(name) {
        delete events[name]
      }

      return {
        on: on, // 订阅者
        fire: fire, // 发布者
        off: off // 取消订阅
      }
    })()

    EventCenter.on('hello', function (num) {
      console.log(num)
    })
    EventCenter.on('hello', function (num) {
      console.log(num)
    })

    EventCenter.fire('hello', 1) // 1[出现两次]

