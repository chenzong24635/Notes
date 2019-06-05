mouseover/mouseout与mouseenter/mouseleave的区别与联系
mouseover/mouseout是标准事件，所有浏览器都支持；mouseenter/mouseleave是IE5.5引入的特有事件后来被DOM3标准采纳，现代标准浏览器也支持
mouseover/mouseout是冒泡事件；mouseenter/mouseleave不冒泡。需要为多个元素监听鼠标移入/出事件时，推荐mouseover/mouseout托管，提高性能


// 定义一个简单的模板类，使用{}作为转义标记，中间的数字表示替换目标，format实参用来替换模板内标记 
(function (window) {
    function fn(str) {
        this.str = str;
    }

    fn.prototype.format = function () {
        var arg = Array.prototype.slice.call(arguments, 0);
        return this.str.replace(/\{\s*(\d+)\s*\}/g, function (a, b) {
            return arg[b] || '';
        });
    };

    window.fn = fn;
})(window);

// use
(function () {
    var t = new fn('<p><a href="{0}">{1}</a><span>{2}</span></p>');
    console.log(t.format('http://www.alibaba.com', 'Alibaba', 'Welcome'));
})();





# 页面加载进度条
>
    首先，咱们要想知道页面是否加载完毕，需要知道以下几点： 
    1.document.onreadystatechange 页面加载状态改变时的事件 
    2.document.readyState 页面当前文档的状态 :有四种状态
        uninitialized 还未开始载入 
        loading 载入中
        interactive 已加载，文档和永和可以开始交互 
        complete 载入完成 
        

    document.onreadystatechange = function () {//即在加载的过程中执行下面的代码
        if(document.readyState=="complete"){//complete加载完成
            
        }
    }


### 通过css3来制作进度条小动画
![loading](img/loading.png)

    .loading {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: #fff;
    }

    .loading .pic {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }

    .loading .pic i {
      display: block;
      float: left;
      width: 6px;
      height: 50px;
      background-color: #399;
      margin: 0 2px;
      transform: scaleY(.4);
      animation: load .6s infinite;
    }

    .loading .pic i:nth-child(2) {
      animation-delay: .1s;
    }

    .loading .pic i:nth-child(3) {
      animation-delay: .2s;
    }

    .loading .pic i:nth-child(4) {
      animation-delay: .3s;
    }

    .loading .pic i:nth-child(5) {
      animation-delay: .4s;
    }

    @keyframes load {
      0%,
      100% {
        transform: scaleY(.4);
      }
      50% {
        transform: scaleY(1);
      }
    }

    <div class="loading">
        <div class="pic">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>

    document.onreadystatechange = function () {
      if (document.readyState === 'complete') {//加载完成隐藏
        document.querySelector('.loading').style.display = 'none'
      }
    }


###  根据当前页面加载图片数/页面所有图片数 实现加载进度条
    .loading1 {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: #fff;
    }

    .loading1 .pic1 {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      font-size: 30px;
      text-align: center;
      line-height: 100px;
    }

    .loading1 .pic1 span {
      display: block;
      width: 80px;
      height: 80px;
      position: absolute;
      top: 10px;
      left: 10px;
      border-radius: 50%;
      box-shadow: 0 3px 0 #666;
      animation: rotate 1s infinite linear;
      -webkit-animation: rotate 1s infinite linear;
    }

    @-webkit-keyframes rotate {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    <div class="loading1">
        <div class="pic1">
        <span></span>
        <b>0%</b>
        </div>
    </div>

    <script>
        $(function () {
            var imgs = $('img'); // 获取所有图片
            var num = 0;
            imgs.each(function (i) {
                var cImg = new Image();
                cImg.onload = null;
                cImg.onload = function () { // 图片加载时
                    num++;
                    $('.loading1 b').html(parseInt(num / $('img').length * 100) + '%'); // 更新进度条
                    if (num >= $('img').length) { // 所有图片加载完毕时
                        $('.loading1').fadeOut(); // 隐藏 进度条
                    }
                }
                cImg.src = imgs[i].src;
            });
        });
    </script>

###  根据文件加载顺序来 实现加载进度条
>
    设置几个加载进度节点,加载到时则实现加载动画
    .line {
      position: fixed;
      top: 0;
      left: 0;
      height: 1px;
      background-color: #000;
    }

    <div class="line"></div>
    <header>
        <img src='img.jpg'>
    </header>
    
    <script>
        $('.line').animate({width:'10%'},100);
    </script>
    
    <section class='banner'>
        <img src='img.jpg'>
    </section>
    
    <script>
        $('.line').animate({width:'60%'},100);
    </script>
    
    <footer'>
        <img src='img.jpg'>
    </footer>
    
    <script>
        $('.line').animate({width:'100%'},100,function(){
            $('.line').fadeOut(); // 底部加载完成后隐藏进度条
        });
    </script>

# 纯css页面滚动进度条-页面内容仅限文本
>
    *{
      margin: 0;
      padding: 0;
    }
    html{
      height: 3000px;
    }
    body {
      /* 添加从左下到到右上角的线性渐变 */
      background-image: linear-gradient(to right top, red 50%, #eee 50%);
      /* 减去一个屏幕的高度，这样渐变刚好在滑动到底部的时候与右上角贴合。 */
      background-size: 100% calc(100% - 100vh + 5px);
      background-repeat: no-repeat;
    }
    /* 用一个伪元素，遮住多余部分 */
    body::before {
      content: "";
      position: fixed;
      top: 1px;
      left: 0;
      bottom: 0;
      right: 0;
      background: #fff;
      z-index: -1;
    }

# IntersectionObserver 判断元素是否进入了"视口"（viewport）
[详情](http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

# getBoundingClientRect()
## 用法
    obj.getBoundingClientRect()

## 返回值
>

    width: 自身宽
    height: 自身高

    top:   元素上边到视窗上边的距离
    bottom:元素下边到视窗上边的距离
    left:  元素左边到视窗左边的距离
    right: 元素右边到视窗左边的距离

    x: 同left (IE不支持
    y: 同top   (IE不支持

    可知：
    right - left = width
    bottom - top = height

## 兼容性
![getBoundingClientRect](img/getBoundingClientRect.png)    