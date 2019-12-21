

[彻底理解JavaScript中的this](http://www.cnblogs.com/pssp/p/5216085.html?tdsourcetag=s_pctim_aiomsg)


[彻底理解js中的this](https://juejin.im/post/5c049e6de51d45471745eb98)

[5种this绑定全面解析](https://github.com/yygmind/blog/issues/20)


this的值是在执行的时候才能确认，定义的时候不能确认—— 因为this是执行上下文环境的一部分，而执行上下文需要在代码执行之前确定，而不是定义的时候

this永远指向的是最后调用它的对象


在ES2019中添加了globalThis对象，从现在开始应该在任何平台上访问全局作用域：
>   
    let num = 1
    globalThis.num  // 1

    globalThis.v = { flag: true };
    console.log(globalThis.v);//{ flag: true }

#### this理解
![this](/img/this.png)

* this的绑定规则总共有下面5种

  1. 默认绑定（严格/非严格模式）
  2. 隐式绑定
  3. 显式绑定
  4. new绑定
  5. 箭头函数绑定

* this优先级：new绑定 > 显示绑定 > 隐式绑定
___

对于普通函数，this始终指向全局对象window；严格模式下为undefined (`默认绑定`)

对于构造函数，this则指向新创建的对象；(`new绑定`)

对于对象方法，this指向调用该方法的对象（`隐式绑定`）//当函数是否在某个上下文对象中调用，函数的this被隐式绑定到该对象: obj.func()

在对象方法内部再次定义一个方法，该方法的this关键字又会重新指向全局对象(`隐式丢失`): var a = obj.func; a();

通过call、apply和 bind 等方法来改变函数的 this 指向(`显式绑定`).  
//call 和 apply 主动执行函数，bind一般在事件回调中使用，call和apply的区别只是参数的传递方式不同：func.call(obj, arg1,arg2);func.apply(obj, [arg1,arg2]);  
//如果把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind, 这些值在调用时会被忽略，为`默认绑定`。

箭头函数的this，总是指向定义时所在的对象，而不是运行时所在的对象。
>
    function foo(){
      return (a) => {
        console.log(this.a);
      }
    }
    var obj1 = {
      a:'obj1'
    };
    var obj2 = {
      a:'obj2'
    };
    foo.call(obj1).call(obj2); //输出obj1
    //foo绑定obj1的this,call未改变外层作用域
____

#### this指向

本质上，this 均指向触发函数运行时的那个对象。而在函数运行时，this 的值是不能被改变的。  
如果函数返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。

常规函数的this 始终指向最后调用它的对象  


箭头函数的this，总是指向定义时所在的对象，而不是运行时所在的对象。  
箭头函数this的作用域继承自执行上下文，自身不绑定 this，因此 this 的值将在调用堆栈中查找

___

this 指针存在于函数中，用以标识函数运行时所处的上下文。

1. 如果一个函数中有this，这个函数未被上一级的对象所调用，那么this指向的就是window，(在js的严格模式中this指向undefined,不是window)
2. 如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。
3. 如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象



#### `箭头函数的this`
[深入之重新认识箭头函数的this](https://github.com/yygmind/blog/issues/21)

[箭头函数与普通函数区别](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650589501&idx=1&sn=9b88f96265ce3fe5ebd9df9e11dba42d&chksm=8891d919bfe6500f8d128d9ac230911117bbb0021430f2385b0a769909fe643d415da0d9bb16&scene=0&xtrack=1#rd)

**特点**

* 箭头函数没有prototype(原型)，所以箭头函数本身没有this;

* 箭头函数没有constructor,所以不能用new调用箭头函数；

* 箭头函数没有 this/super/arguments/new.target 的绑定，这些值继承自外层第一个普通函数；

* 箭头函数的this，总是指向定义时所在的对象，而不是运行时所在的对象。

* 箭头函数不能直接通过call、aaply、bind、new等修改其this指向(可间接改变：修改被继承的对象的this指向)

* 箭头函数绑定中，this指向外层作用域，根据作用域链往上层查找，直到找到一个绑定了this的函数作用域，并指向调用该普通函数的对象, 否则this都会指向window(全局对象)


>
    function bar() {
      let a = () => {
        console.log(this, 'this指向定义的时候外层第一个普通函数')
      }; // 在bar中定义 this继承于bar函数的this指向
    }


>

    var name = 'window'

    var person1 = {
      name: 'person1',
      show1: function () {
        console.log(this.name)
      },
      show2: () => console.log(this.name),
      show3: function () {
        return function () {
          console.log(this.name)
        }
      },
      show4: function () {
        return () => console.log(this.name)
      }
    }
    var person2 = { name: 'person2' }

    person1.show1()// person1
    person1.show1.call(person2)// person2

    person1.show2()// window
    person1.show2.call(person2)// window

    person1.show3()()// window
    person1.show3().call(person2)// person2
    person1.show3.call(person2)()// window

    person1.show4()()// person1
    person1.show4().call(person2)// person1  
      //先执行show() 绑定this指向person1
      //call并没有改变外层作用域
    person1.show4.call(person2)()// person2
      //call改变其指向


    箭头函数不用function（function有自己的函数作用域）将其包裹起来，那么默认绑定的父级作用域就是window。（如show2）

    用function包裹的目的就是将箭头函数绑定到当前的对象上。 匿名函数的作用域是当前这个对象，所以之后箭头函数会自动绑定到此函数所在作用域的this，。（如show4）
