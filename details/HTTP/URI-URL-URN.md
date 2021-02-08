# URI、URL、URN

![HREF](/img/href.png)

## URI
URI，是uniform resource identifier，统一资源标识符，用来唯一的标识一个资源。

Web上可用的每种资源如HTML文档、图像、视频片段、程序等都是一个来URI来定位的

URI一般由三部组成：
①访问资源的命名机制
②存放资源的主机名
③资源自身的名称，由路径表示，着重强调于资源。

## URL
URL，是uniform resource locator，统一资源定位器，它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。

URL是Internet上用来描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上，特别是著名的Mosaic。
采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。URL一般由三部组成：
①协议(或称为服务方式)
②存有该资源的主机IP地址(有时也包括端口号)
③主机资源的具体地址。如目录和文件名等

如 scheme://user:pwd@host:port/path;params?query#frag

## URN
URN，uniform resource name，统一资源命名，是通过名字来标识资源，

      如 mailto:java-net@java.sun.com。
## 区别
URI是以一种抽象的，高层次概念定义统一资源标识，而URL和URN则是具体的资源标识的方式。
URI包含URL和URN

HOST :主机名，资源所在服务器的IP地址或域名（需DNS转换IP地址）  
PORT：端口号，每项服务在服务器上对应一个监听端口号

js中encodeURI()函数不会对 :/@;?# 进行编码  
encodeURIComponent()函数会对上述标点进行编码

[彻底明白ip地址，区分localhost、127.0.0.1和0.0.0.0](https://blog.csdn.net/liyi1009365545/article/details/84780476)

## new URL(url)  

new URL('https://www.aaa.com')
>
    hash: ""
    host: "www.aaa.com"
    hostname: "www.aaa.com"
    href: "https://www.aaa.com/"
    origin: "https://www.aaa.com"
    password: ""
    pathname: "/"
    port: ""
    protocol: "https:"
    search: ""
    searchParams: URLSearchParams {}
    username: ""

还可以传入一个相对地址作为第一个参数，并把相对地址的基础URL作为第二个参数来创建一个URL对象    
new URL('a','https://www.aaa.com')
相当于 new URL('https://www.aaa.com/a')
 
>
    hash: ""
    host: "www.aaa.com"
    hostname: "www.aaa.com"
    href: "https://www.aaa.com/a"
    origin: "https://www.aaa.com"
    password: ""
    pathname: "/a"
    port: ""
    protocol: "https:"
    search: ""
    searchParams: URLSearchParams {}
    username: ""