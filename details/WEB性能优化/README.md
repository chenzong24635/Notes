[前端性能优化 24 条建议（2020）](https://juejin.im/post/6892994632968306702)

[前端性能优化之雅虎35条军规](https://juejin.im/post/6844903657318645767)



# 前端性能优化
npm i -g lighthouse

## [图片优化](./图片优化.md)
## [CSS优化](./CSS优化.md)
## [JS优化](./JS优化.md)
## [Webpack优化](./Webpack优化.md)

## 其他
## content方面:
*  减少HTTP请求：合并文件、CSS Sprites、Gzip压缩，CDN托管，data缓存
*  减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
*  避免重定向：多余的中间访问
   >比如，访问http://xxx.com 将被301重定向到 http://xxx.com/
*  延迟加载，预加载
*  缓存AJAX请求结果：每次操作本地变量，减少了请求次数
*  将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
*  gzip压缩
*  避免404
   >HTTP请求很昂贵，返回无效的响应（如404未找到）完全没必要，降低用户体验而且毫无益处

## Server方面:

* 静态资源使用CDN(静态内容分发网络)：可以以较低的投入，有效提升加载速度  
* 添加Expires或者Cache-Control响应头  
* 使用Gzip压缩: 图片和PDF文件不要使用gzip,它们本身已经压缩过
* 配置ETag
* 尽早输出缓存
* Ajax使用GET进行请求

## Cookie方面
* 减少 Cookie 大小
  * 去除不必要的 Cookie；
  * 尽量压缩 Cookie 大小；
  * 注意设置 Cookie 的 domain 级别，如无必要，不要影响到 sub-domain；
  * 设置合适的过期时间。
* 设置合适的过期时间
* 静态资源使用无Cookie域名
  >静态资源一般无需使用Cookie，可以把它们放在使用二级域名或者专门域名的无Cookie服务器上，降低Cookie传送的造成的流量浪费，提高响应速度。

## 移动端
* 保证所有组件都小于25K
  >因为iPhone不能缓存大于25K的组件，
* 打包内容为分段（multipart）文档  