
[jQueryAPI](https://www.html.cn/jqapi-1.9/)

[jq22-插件库](http://www.jq22.com/)

[jQuery之家-插件库](http://www.htmleaf.com/)


* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>
* <a href="#jQuery获取的dom对象和原生的dom对象区别">jQuery获取的dom对象和原生的dom对象区别</a>
* <a href="#jQuery如何扩展自定义方法">jQuery如何扩展自定义方法</a>

## <a name=""></a>
## <a name=""></a>
## <a name=""></a>
## <a name=""></a>
## <a name=""></a>
## <a name=""></a>
## <a name=""></a>
## <a name=""></a>
## <a name=""></a>
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