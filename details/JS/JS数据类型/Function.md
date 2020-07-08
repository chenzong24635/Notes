<details open>
  <summary>
    目录
  </summary>
</details>

* <a href="#"></a>

# 函数式编程
[简明 JavaScript 函数式编程——入门篇](https://segmentfault.com/a/1190000020302184)


#  

* 高阶函数： 一个函数就可以接收另一个函数作为参数或者返回值为一个函数，这种函数就称之为高阶函数。


* 所有函数的参数都是按值传递的
>
    把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。
    基本类型值的传递如同基本类型变量的复制一样，
    而引用类型值的传递，则如同引用类型变量的复制一样。

```js
var obj = { value : 1 }
function func(o) {
    o.value = 2 // 修改内部变量的值
    console.log(o)  // {value: 2}
}
func(obj) // {value: 2}
console.log(obj) // {value: 2}
```
解析：
由于变量obj是引用类型，通过函数内部参数的赋值复制，传递了引用地址值，那么 变量obj 和 函数参数o 会指向同一个内存对象。再执行func函数，修改 函数参数o 在堆内存中的值，并没有修改在栈中的引用地址的值。这样，由于 变量obj 和 函数参数o 使用的是同一个引用地址，也就是同一个堆内存中的值，那么 变量obj 的值，也就会随着 函数参数o 的变化而变化了。

```js
var obj = {value : 1 }
function func(o) {
  o.value = 2
  o = {}
  console.log(o)
}
func(obj) // {}
console.log(obj) // { value : 2}
```
解析： 
由于 变量obj 是引用类型，通过函数内部参数的赋值复制，传递了引用地址值，那么 变量obj 和 函数参数o 会指向同一个内存对象。再执行func函数时，重新定义了 函数参数o, 使其指向新地址。实际上当在函数内部重写obj时，这个变量引用的就是一个局部对象。

总结： 

在函数内部，因为传递的是地址，修改成员对象会直接影响原对象；但对变量重新赋值，不会影响原对象


* 函数自执行
>
    let func = function() {}(); // 常用

    (function() {})(); // 常用
    (function() {}()); // 常用
    [function() {}()];  

    + function() {}();  
    - function() {}();  
    ~ function() {}();    
    ! function() {}();    

    new function() {};    
    new function() {}();    
    void function() {}();    
    typeof function() {}();  
    delete function() {}();  

    1, function() {}();    
    1 ^ function() {}();    
    1 > function() {}();   

#  <a name=""></a>

构造函数的本质是一个普通函数，他的特点是需要通过new关键字来调用，用来创建对象的实例。所有的引用类型，如[],{},function等都是由构造函数实例化而来。一般约定首字母大写。


Function.prototype.toString()
之前执行这个方法时，得到的字符串是去空白符号的。而现在，得到的字符串呈现出原本源码的样子：


# 一道题 理解函数的prototype,静态方法，变量提升。。。
[](https://juejin.im/post/5e039d4c6fb9a016023e9283#heading-11)

```js
function Foo() {
  getName = function () { console.log(1);}
  return this;
}
Foo.getName = function () {console.log(2)}
Foo.prototype.getName = function () {console.log(3)}
var getName = function () {console.log(4)}
function getName() {console.log(5)}

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName()
```

上面的代码编译后如下(函数声明的优先级先于变量声明):
```js
function Foo(){
  getName = function () { console.log(1); };//赋值语句，全局方法
  return this;
}
function getName() {console.log(5)}; //全局函数(函数首先被提升)
var getName //变量重复声明， 忽略
Foo.getName = function () { console.log(2);};//静态方法
Foo.prototype.getName = function () { console.log(3);};//原型方法
getName = function () {console.log(4);};//getName重新赋值
```

解析：
```js
Foo.getName();  //2 
  //Foo函数上存储的静态方法 

getName();  //4   
  //函数声明会提升,函数表达式不提升，先声明getName()函数，然后getName再被重新赋值

Foo().getName(); // 1  
  //先执行了Foo函数，然后调用Foo函数的返回值对象的getName属性函数.Foo函数返回的是window对象，相当于执行 window.getName() ，而window中的getName已经被修改为console.log(1)，所以最终会输出1

getName();// 1
  //直接调用getName函数，相当于 window.getName() ,因为这个变量已经被Foo函数执行时修改了，遂结果与第三问相同，为1

new Foo.getName();//2  
  //等价于 new (Foo.getName)()
  //考察的是js的运算符优先级问题 ，new 无参数列表，对应的优先级是18；成员访问操作符(.) , 对应的优先级是19。.优先级大于new，相当于new (Foo.getName)();
  （https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence）

new Foo().getName();  //3 
  //等价于 (new Foo()).getName()
  //new 带参数列表，对应的优先级是19，和成员访问操作符.优先级相同。同级运算符，按照从左到右的顺序依次计算。new Foo()先初始化 Foo 的实例化对象，实例上没有getName方法，因此需要原型上去找，即找到了 Foo.prototype.getName，

new new Foo().getName();// 3  
  //new ((new Foo()).getName)()
  //new 带参数列表，优先级19，因此相当于是 new (new Foo()).getName()；先初始化 Foo 的实例化对象，然后将其原型上的 getName 函数作为构造函数再次 new ，相当于 new ((new Foo()).getName)();
```