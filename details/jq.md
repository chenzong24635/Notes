
[jQueryAPI](https://www.html.cn/jqapi-1.9/)

[jq22-插件库](http://www.jq22.com/)

[jQuery之家-插件库](http://www.htmleaf.com/)


* <a href="#"></a>
* <a href="#jQuery获取的dom对象和原生的dom对象区别">jQuery获取的dom对象和原生的dom对象区别</a>
* <a href="#jQuery如何扩展自定义方法">jQuery如何扩展自定义方法</a>

## <a name=""></a>
## <a name="jQuery获取的dom对象和原生的dom对象区别">jQuery获取的dom对象和原生的dom对象区别</a>
>
    js原生获取的dom是一个对象，jQuery对象就是一个数组对象，其实就是选择出来的元素的数组集合，所以说他们两者是不同的对象类型不等价。
>
    原生DOM对象转jQuery对象：
    var box = document.getElementById('box');
    var $box = $(box);
    jQuery对象转原生DOM对象：
    var $box = $('#box');
    var box = $box[0];
## <a name="Jq中如何实现多库并存">Jq中如何实现多库并存</a>
>
    Noconfict 多库共存就是“$ ”符号的冲突。 

    方法一： 利用jQuery的实用函数$.noConflict();这个函数归还$的名称控制权给另一个库，因此可以在页面上使用其他库。这时，我们可以用"jQuery "这个名称调用jQuery的功能。 $.noConflict(); 
    jQuery('#id').hide(); 
    .....
    //或者给jQuery一个别名 
    var $j=jQuery 
    $j('#id').hide(); 
    .....

    方法二： (function($){})(jQuery) 

    方法三： jQuery(function($){}) 
    通过传递一个函数作为jQuery的参数，因此把这个函数声明为就绪函数。 我们声明$为就绪函数的参数，因为jQuery总是吧jQuery对象的引用作为第一个参数传递，所以就保证了函数的执行。

## <a name="jQuery如何扩展自定义方法">jQuery如何扩展自定义方法</a>
>
    (jQuery.fn.myMethod=function () {
      alert('myMethod');
    })
    // 或者：
    (function ($) {
      $.fn.extend({
          myMethod : function () {
                alert('myMethod');
          }
      })
    })(jQuery)

    使用：
    $("#div").myMethod();