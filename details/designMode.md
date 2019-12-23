[JavaScript设计模式笔记：3个设计原则、14个设计模式、10个技巧（干货）](https://juejin.im/post/5dfde295e51d45580359a663)

https://segmentfault.com/a/1190000014436817

https://segmentfault.com/a/1190000012422198

https://juejin.im/post/5df64726e51d455836159a5c

https://github.com/ziyi2/js/blob/master/JS%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.md

<details open>
  <summary>
    目录
  </summary>
</details>

* <a href="#"></a>
* <a href="#工厂模式">工厂模式</a>
* <a href="#构造函数模式">构造函数模式</a>
* <a href="#原型模式">原型模式</a>
* <a href="#混合模式">混合模式(原型模式+构造函数模式)</a>
* <a href="#单例模式">单例模式</a>
* <a href="#模块模式">模块模式</a>
* <a href="#观察者模式">观察者模式</a>
* <a href="#发布订阅模式">发布订阅模式</a>

#  <a name="工厂模式">工厂模式 Factory</a>

* 核心:
>
    return一个对象
    创建不同的引用类型
    
* 例子:
> 
    function People (name) {
      let person = {
        name: name,
        walk: function () {console.log('walk')}
      }
      return person // 返回一个对象
    }
    let p = People('Tom') // 工厂生产对象

* 说明：
>

    1.在函数中定义对象,并定义对象的各种属性，,虽然属性可以为方法，但是建议将属性为方法的属性定义到函数之外，这样可以避免重复创建该方法
    2.引用该对象的时候，这里使用的是 var x = Parent()而不是 var x = new Parent();因为后者会可能出现很多问题（前者也成为工厂经典方式,后者为构造函数模式）
    3.在函数的最后返回该对象
    4.不推荐



#  <a name="构造函数模式">构造函数模式 Constructor</a>
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

#  <a name="原型模式">原型模式 prototype</a>
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
    
#  <a name="混合模式">混合模式(原型模式+构造函数模式) Mixin </a>
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



#  <a name="单例模式">单例模式 Single</a>
* 核心
>
    保证一个特定类只有一个实例，第二次使用同一个类创建新对象的时候，应该得到与第一次创建对象完全相同的对象。

>

    let singleCase = function(name){
        this.name = name;
    };
    singleCase.prototype.getName = function(){
        return this.name;
    }
    // 获取实例对象
    let getInstance = (function() {
        var instance = null;
        return function(name) {
            if(!instance) {//相当于一个一次性阀门,只能实例化一次
                instance = new singleCase(name);
            }
            return instance;
        }
    })();
    // 测试单体模式的实例,所以one===two
    let one = getInstance("one");
    let two = getInstance("two");


#  <a name="模块模式">模块模式 Module</a>
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



#  <a name="观察者模式">[观察者模式 Observer-Subject](https://juejin.im/post/5cd81a20e51d453b4558d858)</a>


![observer](/img/observer.png)
![observer](/img/observer1.png)

观察者模式就是使用一个目标对象（subject）维持一系列依赖于它的观察者对象（observer），    
目标对象的状态发生改变时，会通知所有依赖它的观察者对象，这两者是直接关联的。

在观察者模式中，观察者(Observer)是知道被观察对象(subject)的，Subject一直保持对观察者进行记录;当Subject状态发生变化时，会给所有的observers发送一个通知函数，Observers接收到通知后通常会调用各自的更新函数。

观察者模式大多数时候是同步的，比如当事件触发，Subject就会去调用观察者的方法
>
    const Subject = (() => {
      const observers = [];
      const addOb = (ob) => {
        observers.push(ob);
      };
      const notify = () => {
        for (let ob of observers) {
          if (typeof ob.update === 'function') {
            ob.update();
          }
        }
      };
      return {addOb, notify};
    })();

    let subA = {
      update: () => {
        console.log('updateSubA');
      }
    },
    subB = {
      update: () => {
        console.log('updateSubB');
      }
    };
    Subject.addOb(subA);    //添加观察者subA
    Subject.addOb(subB);    //添加观察者subB
    Subject.notify();       //通知所有观察者


#  <a name="发布订阅模式">[发布订阅模式 Publisher-Subscriber](https://juejin.im/post/5cd81a20e51d453b4558d858)</a>
![publisher](/img/publisher.png)
![publisher](/img/publisher1.png)


在发布-订阅模式，消息的发送方，叫做发布者（publishers），消息不会直接发送给特定的接收者，叫做订阅者（Subscriber）。

发布者和订阅者不知道对方的存在。发布/订阅模式使用一个事件通道，这个通道介于订阅者和发布者之间，采用事件通道可以避免发布者和订阅者之间产生依赖关系。

发布-订阅模式大多数时候是异步的（使用消息队列）。

* 核心
>
    比如我【订阅者】现在订阅了一个公众号，公众号【发布者】向我发布消息

* 案例
>
    let Event = (function () {
      let events = {} //保存订阅主题
      function on(evt, handler) { //订阅
        // 使用'或'是为了可以对同一个事件多次进行回调
        events[evt] = events[evt] || []
        events[evt].push({
            handler
        })
      }

      function fire(evt, args) { // 发布
        if (!events[evt]) { 
          // 如果未监听任何事件，直接中断
          throw evt + '事件未监听'
          return
        }
        events[evt].map((item)=>{
           // 遍历，实现对同一个事件的多次回调
          item.handler(args) //通知订阅者
        })
      }

      function off(evt) { //取消订阅
        delete events[evt]
      }

      return {
        on,
        fire,
        off
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

#  <a name=""></a>
