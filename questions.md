# 目录

<a href="#===">===运算符判断</a>

<a href="#==">==运算符判断</a>

<a href="#1">*HTML*</a>



<a href="#222">设计模式</a>


# ===、==、Object.is()判断
![===、==、Object.is()](/img/===.png)

# <a name="===">===运算符判断</a>
    如果两个值不是相同类型，它们不相等
    如果两个值都是null或者都是undefined，它们相等
    如果两个值都是布尔类型true或者都是false，它们相等
    如果其中有一个是NaN，它们不相等
    如果都是数值型并且数值相等，他们相等， -0等于0
    如果他们都是字符串并且在相同位置包含相同的16位值，他它们相等；如果在长度或者内容上不等，它们不相等；两个字符串显示结果相同但是编码不同==和===都认为他们不相等
    如果他们指向相同对象、数组、函数，它们相等；如果指向不同对象，他们不相等
    
# <a name="==">==运算符判断</a>
    如果两个值类型相同，按照===比较方法进行比较
    如果类型不同，使用如下规则进行比较
    如果其中一个值是null，另一个是undefined，它们相等
    如果一个值是数字另一个是字符串，将字符串转换为数字进行比较
    如果有布尔类型，将true转换为1，false转换为0，然后用==规则继续比较
    如果一个值是对象，另一个是数字或字符串，将对象转换为原始值然后用==规则继续比较
    其他所有情况都认为不相等

# <,>,<=,>=的比较规则
    所有比较运算符都支持任意类型，但是比较只支持数字和字符串，所以需要执行必要的转换然后进行比较，转换规则如下:
    如果操作数是对象，转换为原始值：如果valueOf方法返回原始值，则使用这个值，否则使用toString方法的结果，如果转换失败则报错
    经过必要的对象到原始值的转换后，如果两个操作数都是字符串，按照字母顺序进行比较（他们的16位unicode值的大小）
    否则，如果有一个操作数不是字符串，将两个操作数转换为数字进行比较

# +运算符工作流程
    如果有操作数是对象，转换为原始值
    此时如果有一个操作数是字符串，其他的操作数都转换为字符串并执行连接
    否则：所有操作数都转换为数字并执行加




前端页面由哪三层构成：结构层、表示层、行为层。
# <a name="1">*HTML*</a>



# <a name="222">设计模式</a>
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

