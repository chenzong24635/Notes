[](https://juejin.im/post/6844904053328052232)

# 浅谈浏览器中的preflight请求

### PreFlight请求是什么?

我们都知道浏览器常用的请求有`POST GET PUT DELETE`等，不知道大家有没有关注过还有个请求类型叫`OPTIONS`。一般来说`preflight`预检请求，指的就是OPTIONS请求。
它会在浏览器认为即将要执行的请求可能会对服务器造成不可预知的影响时，由浏览器自动发出。通过预检请求，浏览器能够知道当前的服务器是否允许执行即将要进行的请求，只有获得了允许，浏览器才会真正执行接下来的请求。

通常`preflight`请求不需要用户自己去管理和干预，它的发出的响应都是由浏览器和服务器自动管理的。


### 什么时候会触发PreFlight请求
preflight预检请求属于CORS规范的一部分

* 请求方法限制  
  >只能够使用GET POST HEAD

* 请求头限制
  >只能包含以下九种请求头 Accept Accept-Language Content-Language Content-Type DPR Downlink Save-Data Viewport-Width Width

* Content-Type限制
  >只能包含以下三种类型 text/plain multipart/form-data application/x-www-form-urlencoded

* XMLHttpRequestUpload对象限制
  >XMLHttpRequestUpload对象没有注册任何事件监听器

* ReadableStream对象限制
  >请求中不能使用ReadableStream对象


preflight请求是CORS规范的一部分，只有在跨域的前提下，才会触发preflight请求的条件

跨域不一定会触发preflight预检请求，发生preflight预检请求一定跨域了。
