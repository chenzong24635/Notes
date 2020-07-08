# cookie
https://segmentfault.com/a/1190000011295587

>

    cookie是存储在浏览器端，并且随浏览器的请求一起发送到服务器端的，它有一定的过期时间，到了过期时间自动会消失。


    浏览器默认情况下无法主动跨域向后端发送cookie，需要在前端请求时加入配置项{withCredentials:true}。
    jquery:  $.ajax({url:'myurl',method:'GET', xhrFields:{withCredentials:true},success:function(){}});

    axios:axios.defaults.withCredentials = true

    还需后端配置：在response header里面添加配置项
    "Access-Control-Allow-Credentials", "true"
    "Access-Control-Allow-Origin", "允许跨域的域名" //或设为 "*" 

* cookie方法、属性
>
    客户端可以设置cookie 的选项：expires、domain、path、secure
    读写cookie方法：document.cookie
>
    
    document.cookie = 'key=value;max-age=10000;domain=aaa.com;path=/;secure'

    max-age：cookie的过期时间,是一个相对时间，单位是秒；优先级高于expires。
    expires：值为日期对象的toUTCString()格式，即Thu, 21 Sep 2018 06:10:38 GMT，指cookie过期的绝对时间。
    domain： 设置cookie存放的域，如果没有设置则为当前主机的域。
    path：指cookie存储的目录，默认为当前文件的存储目录。
    secure：加入此配置项，则指定该cookie只能通过https协议进行传输。

* 如何删除cookie
>
    在客户端，可以将expires属性设置为过去的一个时间。即：document.cookie = 'key=' + value + ';expires='+ passed_date
    或设置该cookie的max-age=0


* Cookie 隔离？（或者说：请求资源的时候不要让它带cookie）
>
    如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
    所以不如隔离开。

    因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，
    这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。

    同时这种方式不会将cookie传入Web Server，也减少了Web Server对cookie的处理分析环节，
    提高了webserver的http请求的解析速度


* cookie作用
>
    cookie可以解决http的无状态的问题，与服务器进行交互，作为http规范存在。它具有极高的简便性、可扩展性和可用性，也可以通过加密和SSL技术来提高其安全性。因此推荐使用cookie作为标识而不是身份验证的工具。

* Cookie使用限制
>
    Cookie 必须在 HTML 文件的内容输出之前设置；不同的浏览器 (Netscape Navigator、Internet Explorer) 对 Cookie 的处理不一致，使用时一定要考虑；客户端用户如果设置禁止 Cookie，则 Cookie 不能建立。 并且在客户端，一个浏览器能创建的 Cookie 数量最多为 300 个，并且每个不能超过 4KB，每个 Web 站点能设置的 Cookie 总数不能超过 20 个。

* cookie的缺点

1. 大小和数目受限制。浏览器对一个域cookie的条目数有上限要求，且每个cookie的大小不得超过4kb。
2. 存在安全性问题，易被人拦截。
3. 需要指定域，不可以跨域
4. 浪费带宽，因为我每次请求一个新的页面，cookie都会被自动发送过去。
5. 有的移动端浏览器不支持cookie或浏览器禁用cookie
6. 有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。


