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
