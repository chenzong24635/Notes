* <a href="#预加载">预加载</a>
* <a href="#懒加载(延迟加载)">懒加载(延迟加载)</a>
* <a href="#"></a>
* <a href="#"></a>


# <a name=""></a>
# <a name=""></a>


# <a name="预加载">预加载</a>
 
[](http://web.jobbole.com/86785/)

定义：提前加载图片，当用户需要查看时可直接从本地缓存中渲染;只要浏览器把图片下载到本地，同样的src就会使用缓存

预加载的核心要点如下：
>

    1.图片等静态资源在使用之前的提前请求；

    2.资源后续使用时可以从缓存中加载，提升用户体验；

    3.页面展示的依赖关系维护（必需的资源加载完才可以展示页面，防止白屏等）；

实现预加载主要有三个方法：

### css实现预加载
>
    #preload { background: url(images/image1.png) no-repeat -9999px -9999px; }  
    <div id="preload"></div>

    为了隐藏这些图片, 将位置设置为极大的负值的方法. 还可以直接设置 { width: 0; height: 0; display: none};

    通过CSS的background属性将图片预加载到屏幕外的背景上。只要这些图片的路径保持不变，当它们在Web页面的其他地方被调用时，浏览器就会在渲染过程中使用预加载（缓存）的图片。简单、高效，不需要任何JavaScript。

### JS实现预加载
>
    <div class="hidden"> //display:none;隐藏该标签
      <script type="text/javascript">
      var images = []
      function preload(args) {
        args.map((item, index)=>{
          images[index] = new Image() // 创建img标签
          images[index].src = item // 赋予图片地址
        })
        console.log(images)
      }
      preload([
        "https://images.unsplash.com/photo-1556093181-b2f9e0b8b464?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60",
        "https://images.unsplash.com/photo-1556094208-d08cb3c89351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
        "https://images.unsplash.com/photo-1556086744-7502d61b1af5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
      ])
      </script>
    </div>

### Ajax实现预加载
>
    不仅仅预加载图片，还能预加载CSS、JavaScript等相关的东西。使用Ajax，比直接使用JS，优越之处在于JS和CSS的加载不会影响到当前页面。该方法简洁、高效。

>
    window.onload = function() {  
      setTimeout(function() {  
        // 预加载 JS and a CSS  
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'preload.js');  
        xhr.send('');  

        xhr = new XMLHttpRequest();  
        xhr.open('GET', 'preload.css');  
        xhr.send('');  

        // 预加载 image  
        new Image().src = "preload.png";  
      }, 1000);  //1000毫秒的延迟是为了防止脚本挂起，而导致正常页面出现功能问题。
    };

用JavaScript来实现该加载过程：    
>
    window.onload = function() {  
      setTimeout(function() {  
          // reference to <head>  
          var head = document.getElementsByTagName('head')[0];  
    
          // a new CSS  
          var css = document.createElement('link');  
          css.type = "text/css";  
          css.rel  = "stylesheet";  
          css.href = "preload.css";  
    
          // a new JS  
          var js  = document.createElement("script");  
          js.type = "text/javascript";  
          js.src  = "preload.js";  
    
          // preload JS and CSS  
          head.appendChild(css);  
          head.appendChild(js);  
    
          // preload image  
          new Image().src = "preload.png";  
    
      }, 1000);  
    };

# <a name="懒加载(延迟加载)">懒加载(延迟加载)</a>
## 定义
>
    懒加载也就是延迟加载。 
    当访问一个页面的时候，先把img元素或是其他元素的背景图片路径替换成一张大小为1*1px图片的路径（这样就只需请求一次，俗称占位图），只有当图片出现在浏览器的可视区域内时，才设置图片正真的路径，让图片显示出来。这就是图片懒加载。

## 原理
>

    页面中的img元素，如果没有src属性，浏览器就不会发出请求去下载图片，只有通过javascript设置了图片路径，浏览器才会发送请求。 
    懒加载的原理就是先在页面中把所有的图片统一使用一张占位图进行占位，把正真的路径存在元素的“data-src”（可自定义）属性里，当页面滚动时，判断该img标签是否出于可视区，再把data-src的地址赋予该标签

## 用处
>
    首提升用户的体验，试想一下，如果打开页面的时候就将页面上所有的图片全部获取加载，如果图片数量较大，对于用户来说简直就是灾难，会出现卡顿现象，影响用户体验。
    有选择性地请求图片，这样能明显减少了服务器的压力和流量，也能够减小浏览器的负担。

    简单说：提升页面加载速度、可以减轻服务器的压力、节约了流量,用户体验好

## 自 Chrome 75 起，将原生支持图片的延迟加载，在代码中编写 <img loading="lazy">，即支持滚动到视口再加载图片。

## jquery.lazyload.js
[CDN](https://www.bootcdn.cn/jquery_lazyload/)

![](img/jqlazyload.png)
>

    <img class="lazy"  data-original="图片地址" />

    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>

    <script src="https://cdn.bootcss.com/jquery_lazyload/1.9.7/jquery.lazyload.min.js"></script>
    <script>
      $("img.lazy").lazyload({
        placeholder : "img/grey.gif", //用图片提前占位
          // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
        effect: "fadeIn", // 载入使用何种效果
          // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
        threshold: 200, // 提前开始加载
          // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
        event: 'scroll',  // 事件触发时才加载
          // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
        //container: $("#container"),  // 对某容器中的图片实现效果
          // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
        failure_limit : 10 // 图片排序混乱时
          // failure_limit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
      });
    </script>

## jquery
>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script>
      //图片懒加载
      var num = 6;
      if ($('#lists .list').length >= num) {
        for (var i = 0; i < num; i++) { //预先加载前num个
          (function (i) {
            console.log(i)
            loadImg($('#lists .list:eq(' + i + ') .lazy-img'))
          }(i));
        }
      } else { //小于该个数加载全部
        $('#lists .lazy-img').each(function () {
          $(this).attr('src', $(this).attr('data-original'));
        })
      }

      $(window).on('scroll', function () { //当页面滚动的时候绑定事件
        $('#lists .lazy-img').each(function () { //遍历所有的img标签
          if (checkShow($(this)) && !isLoaded($(this))) {
            loadImg($(this)); //符合上述条件之后，再写一个加载函数加载当前img
          }
        })
      })

      function checkShow($img) { // 判断当前img是否已经出现在了视野中
        var scrollTop = $(window).scrollTop(); //即页面向上滚动的距离
        var windowHeight = $(window).height(); // 页面可视高度
        var offsetTop = $img.offset().top; //目标标签img相对于document顶部的位置
        if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { //判断图片是否出现在可视区
          return true;
        }
        return false;
      }

      function isLoaded($img) { //判断当前img是否加载过
        return $img.attr('data-original') === $img.attr('src');
      }

      function loadImg($img) { // img未加载过则加载图片
        $img.attr('src', $img.attr('data-original'));
      }
    </script>    