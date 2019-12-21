
# 前端性能优化

[前端性能优化之雅虎35条军规](https://mp.weixin.qq.com/s?__biz=MzUzOTM0MTE4OQ==&mid=2247485489&idx=1&sn=053398c3f26f13924b27a1877fa0a2c4&chksm=fac8b0dbcdbf39cdfb4320aa76c0802ef320792a63b7bf64b4613258d15746592511726be50e&scene=0&xtrack=1#rd)


content方面:
>
    减少HTTP请求：合并文件、CSS Sprites、Gzip压缩，CDN托管，data缓存

    减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询  

    避免重定向：多余的中间访问

    延迟加载，预加载

    缓存AJAX请求结果：每次操作本地变量，减少了请求次数   

    减少DOM元素数量：计算页面 DOM元素 document.getElementsByTagName('*').length

    将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量

    减少iframe使用:frame完全加载以后，页面才会触发load事件(动态加载可解决)  

    避免在页面的主体布局中使用table，
      table要等其中的内容完全下载之后才会显示出来,显示比div+css布局慢;

      标签较多，增加文件大小；

      不易维护，无法适应响应式设计；

      默认的表格布局算法会产生大量重绘

    避免404


css方面:
>
    将样式表放到页面顶部（<head>里）

    不使用@import；使用<link>

    避免使用css表达式(CSS Expression)又称动态属性(Dynamic properties)

    不使用IE的filter(不是 CSS3 Filter)

    值为0时无需写单位

JS方面:
>
    将脚本放到页面底部  

    使用外部javascript和css 

    压缩javascript和css  

    删除不需要的、重复的脚本  

    少用全局变量、缓存DOM节点查找的结果

    减少DOM操作次数: 
      设置样式时使用className（或el.style.cssText +=）而不是直接操作style;

      缓存已经访问过的元素;

      使用DocumentFragment暂存DOM，整理好以后再插入DOM树;


图片方面
>

    优化图片:根据实际颜色需要选择色深、压缩

    尽可能使用css、svg、base64、iconfont代替图片

    优化css Sprite

    不要在HTML中拉伸缩放图片

    避免图片src为空（src属性为空，但浏览器仍然会向服务器发起一个HTTP请求）

    保证favicon.ico小并且可缓存

Server方面:
>
    使用CDN(静态内容分发网络)：可以以较低的投入，有效提升加载速度  

    添加Expires或者Cache-Control响应头  

    使用Gzip压缩: 图片和PDF文件不要使用gzip,它们本身已经压缩过

    配置ETag
    
    尽早输出缓存

    Ajax使用GET进行请求

Cookie方面:
>
    减小cookie大小:提高响应速度。

    静态资源使用无cookie域名:低Cookie传送的造成的流量浪费，提高响应速度。

    设置合适的过期时间


移动端方面：
>
    保持单个组件小于25k
