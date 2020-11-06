
# 前端性能优化

[前端性能优化之雅虎35条军规](https://mp.weixin.qq.com/s?__biz=MzUzOTM0MTE4OQ==&mid=2247485489&idx=1&sn=053398c3f26f13924b27a1877fa0a2c4&chksm=fac8b0dbcdbf39cdfb4320aa76c0802ef320792a63b7bf64b4613258d15746592511726be50e&scene=0&xtrack=1#rd)


content方面:
*  减少HTTP请求：合并文件、CSS Sprites、Gzip压缩，CDN托管，data缓存
*  减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
*  避免重定向：多余的中间访问
*  延迟加载，预加载
*  缓存AJAX请求结果：每次操作本地变量，减少了请求次数   
*  将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
*  gzip压缩
*  避免404


Server方面:
* 使用CDN(静态内容分发网络)：可以以较低的投入，有效提升加载速度  
* 添加Expires或者Cache-Control响应头  
* 使用Gzip压缩: 图片和PDF文件不要使用gzip,它们本身已经压缩过
* 配置ETag
* 尽早输出缓存
* Ajax使用GET进行请求

