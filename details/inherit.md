[JS继承的6种方式](https://blog.csdn.net/hhthwx/article/details/78095944)

[JS继承的六种方式](https://blog.csdn.net/caijixin/article/details/78295676)


# 目录
* <a href="原型链继承">原型链继承</a>
* <a href="构造继承">构造继承</a>
* <a href="组合继承">组合继承：构造继承+原型链继承</a>
* <a href="原型式继承">原型式继承</a>
* <a href="寄生式继承">寄生式继承</a>
* <a href="寄生组合式继承">寄生组合式继承:寄生式继承+组合继承</a>
* <a href="ES6 继承">ES6 继承</a>
* <a href=""></a>


父类：
>
    function Super(){
      this.name = 'super'
    }
    Super.prototype.sayName = function(){
      console.log(this.name)
    }

    
# <a name="原型链继承">原型链继承</a>
用父类实例充当子类的原型对象

实现：
>
    //子类
    function Sub(){
      this.name = 'sub'
    }
    Sub.prototype = new Super()
    // new Super()生成的父类对象并没有constructor属性,继承自父类,需手动改变
    Sub.prototype.constructor = Sub

    var sub = new Sub()  

优缺点
>
    优点
      简单明了，容易实现
      实例是子类的实例，实际上也是父类的一个实例
      父类新增原型方法/原型属性，子类都能访问到
    缺点
      所有子类的实例的原型都共享同一个父类实例的属性和方法
      创建子类实例时不能向构造函数传参
      无法实现多继承
      
# <a name="构造继承">构造继承</a>
通过使用call、apply方法可以在新创建的对象上执行构造函数,用父类的构造函数来增加子类的实例

实现：
> 
    //子类
    function Sub(){
      Super.call(this)//拷贝一份父类的实例属性作为子类的实例属性
      this.name = 'sub'
    }
    
    var sub = new Sub()  

优缺点
>
    优点:
      简单明了，直接继承父类构造函数的属性和方法
      创建子类实例时可向构造函数传参
      可实现多继承（call多个父类对象
    缺点:
      无法继承原型链上的属性和方法

# <a name="组合继承">组合继承：构造继承+原型链继承</a>

实现：
>
    function Sub(){
      Super.call(this)
      this.name = 'sub'
    }

    //Sub.prototype = new Super() 
    //创建父类实例作为子类的原型; 这样写 实例化时构造函数会执行2次，（其中改变this指向时执行了1次）;此时这个父类实例就又有了一份实例属性，但这份会被第一次拷贝来的实例属性屏蔽掉

    //优化：  
     Sub.prototype = Super.prototype
     Sub.prototype.constructor = Sub //手动改变constructor指向
    //优化后只执行1次，但改变了实例的constructor，即new Sub().constuctor 指向 Super;由此无法判断实例的构造函数(实例由谁直接实例化的)，需手动改变constructor

    var sub = new Sub()


优缺点
>
    优点
      解决了构造继承和原型链继承的问题
    缺点
      实际上子类上会拥有父类的两份属性，只是子类的属性覆盖了父类的属性

# <a name="原型式继承">原型式继承</a>
借助原型并基于已有的对象创建新对象，传入参数obj,生成一个继承obj对象的对象

实现：
>
    function create(obj){
      function F(){}
      F.prototype = obj
      return new F()
    }

    var sub = create(new Super())
    sub.name = 'sub'

优缺点:
>
    优点：
      直接通过对象生成一个继承该对象的对象
    缺点：
      不是类式继承，而是原型式基础，缺少了类的概念

# <a name="寄生式继承">寄生式继承:原型式继承的优化</a>


实现
>
    function create(obj){
      function F(){}
      F.prototype = obj
      return new F()
    }
    function createObj(obj){
      var clone = create(obj)
      clone.name = 'sub'
      return clone
    }

    var sub = createObj(new Super())

优缺点
>
    优点：
      原型式继承的一种拓展
    缺点：
      依旧没有类的概念

# <a name="寄生组合式继承">寄生组合式继承:寄生式继承+组合继承</a>
通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
即，不必为了指定子类型的原型而调用超类型的构造函数，我们需要的是超类型原型的一个副本而已。本质上就是，使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型

实现
>
    function inheritPrototype(Super,Sub){
      var superPrototype = Object.create(Super.prototype)//创建超类原型副本
      superPrototype.constructor = Sub //改变构造函数指向
      Sub.prototype = superPrototype 
    }
    function Sub(){
      Super.call(this)
      this.name = 'sub'
    }
    inheritPrototype(Super,Sub)

    var sub = new Sub()  


优缺点
>
    优点：
      完美实现继承，解决了组合式继承带两份属性的问题
    缺点：
      过于繁琐，故不如组合继承


# <a name="ES6 继承">ES6 继承</a>
>
    
    class F{
      constructor (myname, age){
        this.myname = myname
        this.age = age
      }
      static walk(){ //静态函数
        //this.name是函数名，不是参数name
        console.log('walk，','调用者:' + this.name)
      }
      sayName(){
        console.log(this.myname)
      }
    }

    class S extends F{
      constructor(myname,age){ //这个方法会被默认添加,可省略

        super(myname,age)//调用父类的constructor()
        //子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。

      }
    }

    let f = new F('我是f', 221)
    let s = new S('我是s', 22)
    S.walk() //walk，函数:S
    F.walk() //walk，函数:F
    f.sayName()//我是f   
    s.sayName()//我是s  


<a name=""></a>
<a name=""></a>