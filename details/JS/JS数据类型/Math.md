[Math - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)

* <a href="#概述">概述</a>
* <a href="#属性">属性</a>
* <a href="#方法">方法</a>

  * <a href="#"></a>

#  <a name="概述">概述</a>
Math 是一个内置对象， 它具有数学常数和函数的属性和方法。不是一个函数对象。

#  <a name="">属性</a>
|属性|描述|
|:-|:-|
| Math.E |欧拉常数，也是自然对数的底数, 约等于 2.718|
| Math.PI | 圆周率，一个圆的周长和直径之比，约等于 3.14159 |
| Math.LN2 | 2的自然对数, 约等于0.693 |
| Math.LN10 | 10的自然对数, 约等于 2.303 |
| Math.LOG2E | 以2为底E的对数, 约等于 1.443 |
| Math.LOG10E  | 以10为底E的对数, 约等于 0.434 |
| Math.SQRT1_2  | 1/2的平方根, 约等于 0.707 |
| Math.SQRT2  | 2的平方根,约等于 1.414  |


#  <a name="">方法</a>

* Math.max(x,y,z...)  
返回0个到多个数值中最大值  
如果任一参数不能转换为数值，则返回NaN  
如果没有参数，则结果为 - Infinity。

* Math.min(x,y,z...)  
返回0个到多个数值中最小值    
如果任一参数不能转换为数值，则返回NaN  
如果没有参数，结果为Infinity。

* [Math.random()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random)  
返回[0，1)间的伪随机数

* Math.round(x)  
返回四舍五入后的整数
>
    Math.ceil(4.50);    // 5
    Math.ceil(4.49);  // 4
    Math.round(-4.50) // -4
    Math.round(-4.51) // -5

* Math.ceil(x)  
返回大于或等于x的最小整数, 向上取整
>
    Math.ceil(4.95);    // 5
    Math.ceil(4.05);  // 5
    Math.ceil(4);      // 4
    Math.ceil(-4.95);  // -4
    Math.ceil(-4.05);     // -4

* Math.floor(x)  
返回小于或等于x的最大整数, 向下取整
>
    Math.floor( 45.95); // 45 
    Math.floor( 45.05); // 45 
    Math.floor( 45 ); / 45
    Math.floor(-45.95); // -46
    Math.floor(-45.05); // -46 

* Math.trunc  
去除一个数的小数部分，返回整数部分
>
    Math.trunc(4.23423423423) //4
    Math.trunc('4.23423423423') //4

* Math.pow(x,y)  指数运算符（**）  
返回x的y次幂

>
    Math.pow(2,3) //8
    2**3 //8

    多个指数运算符连用时，是从最右边开始计算的。
    2**3**2 // 512


* Math.sqrt(x)  
返回x的平方根

* Math.cbrt(x)  
返回x的立方根

* Math.abs(x)  
返回x的绝对值

* Math.hypot(x,y,z...)  
返回所有参数的平方和的平方根

* Math.imul(x,y)  
返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数

* Math.sign()  
用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

  它会返回五种值。
  >
      参数为正数，返回+1；
      参数为负数，返回-1；
      参数为 0，返回0；
      参数为-0，返回-0;
      其他值，返回NaN。

* Math.exp(x)  
返回 Ex, 当x为参数,  E 是欧拉常数 (2.718...), 自然对数的底.

* Math.log(x)  
返回一个数的自然对数（loge， 即ln）

* Math.sin(x) 、Math.asin(x)  
返回x的正弦值、x的反正弦值

* Math.cos(x) 、Math.acos(x)  
返回x的余弦值 、x的反余弦值

* Math.tan(x) 、Math.atan(x)  
返回x的正切值 、x的反正切值

