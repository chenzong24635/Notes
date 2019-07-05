https://blog.csdn.net/hhthwx/article/details/78095944
https://blog.csdn.net/caijixin/article/details/78295676


父类：
>
    function Super(){
      this.name = 'super'
    }
    Super.prototype.sayName = function(){
      console.log(this.name)
    }

    
# 原型链继承
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
      
# 构造继承
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

# 组合继承：构造继承+原型链继承
实现：
>
    function Sub(){
      Super.call(this)
      this.name = 'sub'
    }
    Sub.prototype = new Super()//创建父类实例作为子类的原型 ，此时这个父类实例就又有了一份实例属性，但这份会被第一次拷贝来的实例属性屏蔽掉
    Sub.prototype.constructor = Sub

    var sub = new Sub()  

优缺点
>
    优点
      解决了构造继承和原型链继承的问题
    缺点
      实际上子类上会拥有父类的两份属性，只是子类的属性覆盖了父类的属性

# 原型式继承
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

# 寄生式继承
原型式继承的优化

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

# 寄生组合式继承:寄生式继承+组合继承
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


# ES6 继承
>
    
    class F{
      constructor (name, age){
        this.name = name
        this.age = age
      }
      static walk(){
        console.log('F 的静态方法walk')
      }
      sayName(){
        console.log(this.name)
      }
    }
    class S extends F{
      constructor(name,age){ //这个方法会被默认添加,可省略
        super(name,age)//调用父类的constructor()
        //子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。
      }
    }
    s = new S('我是s', 22)
    console.log(S.walk()) //F 的静态方法walk
    console.log(s.sayName())//我是s      