# 链接
[九种跨域方式实现原理](https://segmentfault.com/a/1190000018017118)


[前端解决跨域问题的8种方案](http://web.jobbole.com/88524/)


# 目录

<a href="#跨域">**跨域**</a>

* <a href="#跨域"></a>
* <a href="#jsonp跨域">jsonp跨域:只能够实现get请求</a>
* <a href="#document.domain + iframe 跨域">document.domain + iframe 跨域(只适用于主域相同,子域不同)</a>
* <a href="#window.name + iframe 跨域">window.name + iframe 跨域 只能够实现get请求）</a>
* <a href="#location.hash + iframe 跨域">location.hash + iframe 跨域 只能够实现get请求）</a>
* <a href="#postMessage跨域">postMessage跨域</a>
* <a href="#nginx代理跨域">nginx代理跨域 ??</a>
* <a href="#跨域资源共享 CORS">跨域资源共享 CORS</a>
* <a href="#node代理跨域">node代理跨域</a>
* <a href="#WebSocket协议跨域">WebSocket协议跨域 ??</a>
* <a href="#"></a>


# <a name="跨域">**跨域**</a>


## 简介
### url
![URL](/img/crossOrigin.png)
例：http://www.abc.com:8080/scripts/jquery.js

* http:// 协议，也就是HTTP超文本传输协议，也就是网页在网上传输的协议。
* www  服务器名，代表着是一个邮箱服务器，所以是mail.
* abc.com 域名，是用来定位网站的独一无二的名字。
* www.abc.com 网站名，由服务器名+域名组成。80 是端口号
* / 根目录，也就是说，通过网站名找到服务器，然后在服务器存放网页的根目录
* scripts/jquery.js 请求资源
* http://www.abc.com:8080/scripts/jquery.js  叫做URL，统一资源定位符，全球性地址，用于定位网上的资源

### 定义：
跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制。
 跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的。



广义的跨域：
>
    * 资源跳转： A链接、重定向、表单提交
    * 资源嵌入：<link>、<script>、<img>、<frame>等dom标签，还有样式中background:url()、@font-face()等文件外链
    * 脚本请求： js发起的ajax请求、dom和js对象的跨域操作等
    其实我们通常所说的跨域是狭义的，是由浏览器同源策略限制的一类请求场景。

### 同源策略限制内容：
>

    Cookie、LocalStorage 和 IndexDB 无法读取
    DOM 和 JS 对象无法获取
    Ajax请求发送不了

    同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。

    凡拥有src属性的标签都拥有跨域能力script img iframe

跨域通信：
    js进行DOM操作、通信时如果目标与当前窗口不满足同源条件，浏览器为了安全会阻止跨域操作。


### 常见的跨域场景

同源是指，协议、域名、端口均为相同。
>
    http://www.nealyang.cn/index.html 调用 http://www.nealyang.cn/server.php 非跨域
    
    http://www.nealyang.cn/index.html 调用 http://www.neal.cn/server.php 跨域,主域不同
    
    http://abc.nealyang.cn/index.html 调用 http://def.nealyang.cn/server.php 跨域,子域名不同

    http://www.nealyang.cn:8080/index.html 调用 http://www.nealyang.cn/server.php 跨域,端口不同

    https://www.nealyang.cn/index.html 调用 http://www.nealyang.cn/server.php 跨域,协议不同

    localhost 调用 127.0.0.1 跨域  域名和域名对应ip
>
    http://www.a.com/a.js  、   http://www.a.com/b.js        同域名            允许
    http://www.a.com/lab/a.js 、http://www.a.com/script/b.js 同域名下不同文件夹 允许
    http://www.a.com:8000/a.js、http://www.a.com/b.js        同域名，不同端口   不允许
    http://www.a.com/a.js、     https://www.a.com/b.js       同域名，不同协议   不允许
    http://www.a.com/a.js、     http://70.32.92.74/b.js      域名和域名对应ip   不允许
    http://www.a.com/a.js、     http://script.a.com/b.js   主域相同，子域不同  不允许(cookie也不允许访问)
    http://www.a.com/a.js、http://a.com/b.js    同域名，不同二级域名（同上） 不允许(cookie也不允许访问)
    http://www.cnblogs.com/a.js、http://www.a.com/b.js       不同域名      不允许

需要注意两点:
>

    如果是协议和端口造成的跨域问题“前台”是无能为力的；

    在跨域问题上，仅仅是通过“URL的首部”来识别而不会根据域名对应的IP地址是否相同来判断。“URL的首部”可以理解为“协议, 域名和端口必须匹配”。

## <a name="jsonp跨域">jsonp跨域:只能够实现get请求</a>
jsonp定义：
>
    是 json 的一种"使用模式"，是种跨域数据交互协议，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。
    
jsonp跨域原理：
>
    在html页面中通过相应的标签从不同域名下加载静态资源文件是被浏览器允许的。一般，动态创建script标签，再去请求一个带参网址来实现跨域通信

    因此可利用 <script> 标签没有跨域限制的漏洞。JSONP请求一定需要对方的服务器做支持才可以。

jsonp产生原因
>

    1. Ajax直接请求普通文件存在跨域无权限访问的问题（静态页、动态页、web服务、wcf只要是跨域请求一律不准）
    2. web的页面上调用js文件是不受跨域的影响（凡拥有src属性的标签都拥有跨域能力script img iframe）
    3. 可以判断 现在想通过纯web端(ActiveX控件、服务端代理、H5之Websocket等方式不算)跨域访问数据就只有一种可能，就是在远程服务器上设法把数据装进js格式的文件里，供客户度调用和进一步处理；
    4. json的纯字符数格式可以简洁的描述复杂数据还被js原生支持
    5. web客户端通过与调用脚本一样的方式来调用跨域服务器上动态生成的js格式文件(后缀.json)，服务器之所以要动态生成json文件目的把客户端需要的数据装入进去
    6. 客户端在对json文件调用成功后获得自己所需的数据剩下的就按照自己需求进行处理和展现，这种获取远程数据的方式非常像ajax其实并一样
    7. 为了方便客户端使用数据逐渐形成非正式传输协议jsonp


//原生的实现方式

>
    //index.html  (http://127.0.0.1:5500/jsonp/index.html)

    let script = document.createElement('script');  //动态创建script
    script.src = 'http://localhost:8080/crossOrigin/jsonp/test.php?callback=callback';
    document.body.appendChild(script);
    function callback(json) {  //回调执行函数
      console.log(JSON.stringify(json));
    }

    //test.php

    <?php
    //    使用jsonp实现跨域传输的方式，重点在于通过callback回调函数进行传递数据
        $data = array("name"=>"张三","sex"=>"男");
        $callback = $_GET['callback'];
        echo $callback."(".json_encode($data).")";
    ?>
>

    
jquery封装的jsonp的实现方式：
>
    $.ajax({
        type: "get", // 请求方式
        url: "http://localhost:8080/crossOrigin/jsonp/test.php", // 请求地址
        dataType: "jsonp",	// 标志跨域请求		
        jsonp: "callback", // 传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)，可省略
        jsonpCallback: "receive", // 自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，可省略
        success: function(json) { // 请求成功的回调函数，json既为我们想要获得的数据
          console.log(json);
        },
        error: function(e) { // 请求失败的回调函数
          console.log("error");
        }
    });
    function receive(data){
      //data是后台返回的json对象。
      //这里是回调函数的逻辑代码
      console.log(data)
    }

## <a name="document.domain + iframe 跨域">document.domain + iframe 跨域（只适用于主域相同,子域不同）</a>

什么是主域名相同呢
www.nealyang.cn 
aaa.nealyang.cn 
ba.ad.nealyang.cn 
这三个主域名都是nealyang.cn

只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域。
实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

例子：页面a.test.com:3000/a.html获取页面b.test.com:3000/b.html中a的值
>
    // a.html
      
      <iframe src="http://b.test.com:3000/b.html" frameborder="0" onload="load()" id="frame"></iframe>
      <script>
        document.domain = 'test.com'
        function load() {
          console.log(frame.contentWindow.mes);
        }
      </script>

    // b.html
      <script>
        document.domain = 'test.com'
        var mes = '我是b.html 数据';
      </script>

## <a name="window.name + iframe 跨域">window.name + iframe 跨域 只能够实现get请求）</a>

window.name属性可设置或者返回存放窗口名称的一个字符串。
window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。

其中a.html和b.html是同域的，都是 http://localhost:8080/crossOrigin/window.name/a.html 、b.html;
c.html是 http://127.0.0.1:5500/window.name/c.html

a.html http://localhost:8080/crossOrigin/window.name/a.html
>

    <p>window.name + iframe 跨域</p>
    <p>a.html</p>
    <iframe src="http://127.0.0.1:5500/window.name/c.html" frameborder="0" onload="load()" id="iframe"></iframe>
    <script>
      let first = true
      console.log('onload事件会触发2次，第1次加载跨域页，并留存数据于window.name')
      function load() {
        if(first){
          let iframe = document.getElementById('iframe');
          iframe.src = 'http://localhost:8080/crossOrigin/window.name/b.html';
          first = false;
          console.log('第1次onload(跨域页)成功后，切换到同域代理页面b.html')
        }else{
          console.log('第2次onload(同域b.html页)成功后，读取同域window.name中数据')
          console.log(iframe.contentWindow.name);
        }
      }
    </script>

b.html为中间代理页，与a.html同域，内容为空。
http://localhost:8080/crossOrigin/window.name/b.html


c.html  http://127.0.0.1:5500/window.name/c.html
>
    <p>  c.html</p>
    <script>
      window.name = '我是c.html数据'
      console.log('window.name', window.name)
    </script>

总结：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。

## <a name="location.hash + iframe 跨域">location.hash + iframe 跨域 只能够实现get请求）</a>

此跨域方法和window.name比较类似，一样是动态插入一个iframe然后设置其src为服务端地址，而服务端同样输出一端js代码，也同时通过与子窗口之间的通信来完成数据的传输。

关于锚点相信大家都已经知道了，其实就是设置锚点，让文档指定的相应的位置。锚点的设置用a标签，然后href指向要跳转到的id，当然，前提是你得有个滚动条，不然也不好滚动嘛是吧。

而location.hash其实就是url的锚点。比如http://www.nealyang.cn#Nealyang的网址打开后，在控制台输入location.hash就会返回#Nealyang的字段。


实现原理： a.html欲与c.html跨域相互通信，通过中间页b.html来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

具体实现步骤：一开始a.html给c.html传一个hash值，然后c.html收到hash值后，再把hash值传递给b.html，最后b.html将结果放到a.html的hash值中。

a.html和b.html是同域的，都是http://localhost:8080/crossOrigin/location.hash/a.html 、b.html
c.html是http://127.0.0.1:5500/location.hash/c.html

a.html
>
    <p>a.html</p>
    <iframe src="http://127.0.0.1:5500/location.hash/c.html#HaveYouGotIt"></iframe>
    <script>
      window.onhashchange = function () { //检测hash的变化
        console.log(location.hash);
      }
    </script>

b.html
>
    <p>b.html</p>
    <script>
      window.parent.parent.location.hash = location.hash
      // b.html将结果放到a.html的hash值中，b.html可通过parent.parent访问a.html页面
    </script>


c.html
>

    <p>c.html</p>
    <script>
        console.log(location.hash);
        let iframe = document.createElement('iframe');
        iframe.src = 'http://localhost:8080/crossOrigin/location.hash/b.html#IGotIt';
        document.body.appendChild(iframe);
    </script>

其实location.hash和window.name都是差不多的，都是利用全局对象属性的方法，然后这两种方法和jsonp也是一样的，就是只能够实现get请求


## <a name="postMessage跨域">postMessage跨域</a>

postMessage()方法  向外界窗口发送信息 它可用于解决以下方面的问题：
>

    页面和其打开的新窗口的数据传递
    多窗口之间消息传递
    页面与嵌套的iframe消息传递
    上面三个场景的跨域数据传递

otherWindow.postMessage(message,targetOrigin);
otherWindow指的是目标窗口，是window.frames属性的成员或者是window.open方法创建的窗口。 	    
message是要发送的消息，类型为String、Object(IE8、9不支持Obj)，部分浏览器只支持字符串，传参时好用JSON.stringify()序列化。
targetOrigin是限定消息接受范围，协议+主机+端口号,不限制就用星号 * ，如果要指定和当前窗口同源的话设置为”/”。
 
接受信息的message事件
>
    var onmessage = function(event) {
      var data = event.data;
      var origin = event.origin;
    }

    
例子 

a.html   http://127.0.0.1:5500/postMessage/a.html
>
    <p>postMessage跨域</p>
    <p>a.html</p>
    <p>http://127.0.0.1:5500/postMessage/a.html</p>
    <iframe src="http://localhost:8080/crossOrigin/postMessage/b.html" frameborder="0" id="frame" onload="load()"></iframe> 
    <!--   等它加载完触发一个事件  -->
    <script>
      function load() {
        let frame = document.getElementById('frame')
        frame.contentWindow.postMessage('我发个数据你看看', 'http://localhost:8080/crossOrigin/postMessage/b.html') //发送数据
        window.onmessage = function(e) { //接受返回的数据
          console.log('打印返回的数据：',e.data) //
        }
      }
    </script>

b.html http://localhost:8080/crossOrigin/postMessage/b.html
>
    <p>b.html</p>
    <p>http://localhost:8080/crossOrigin/postMessage/b.html</p>
    <script>
      window.onmessage = function(e) {
        console.log('打印接收的数据：',e.data) //接收数据
        e.source.postMessage('OK，收到了', e.origin) // 发送数据
      }
    </script>

## <a name=""></a>


## <a name="nginx代理跨域">nginx代理跨域 ??</a>

实现原理类似于Node中间件代理，需要你搭建一个中转nginx服务器，用于转发请求。

使用nginx反向代理实现跨域，是最简单的跨域方式。只需要修改nginx的配置即可解决跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能。

实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。

先下载nginx，然后将nginx目录下的nginx.conf修改如下:

proxy服务器
>
    server {
      listen 80;
      server_name www.domain1.com;
      location / {
        proxy_pass http://www.domain2.com:8080; #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用

        add_header Access-Control-Allow-Origin http://www.domain1.com; #当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
      }
    }

最后通过命令行nginx -s reload启动nginx
>
    // index.html
    var xhr = new XMLHttpRequest();

    // 前端开关：浏览器是否读写cookie
    xhr.withCredentials = true;

    // 访问nginx中的代理服务器
      xhr.open('get', 'http://www.domain1.com:81/?user=admin', true);
      xhr.send();
>
    // server.js
    var http = require('http');
    var server = http.createServer();
    var qs = require('querystring');
    server.on('request', function(req, res) {
        var params = qs.parse(req.url.substring(2));
        // 向前台写cookie
        res.writeHead(200, {
          'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly' // HttpOnly:脚本无法读取
        });
        res.write(JSON.stringify(params));
        res.end();
    });

    server.listen('8080');
    console.log('Server is running at port 8080...');



## <a name="跨域资源共享CORS">跨域资源共享CORS</a>
[跨域资源共享CORS详解-阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)

简介
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。 它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置。
带cookie请求：前后端都需要设置字段，另外需注意：所带cookie为跨域请求接口所在域的cookie，而非当前页。 

CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。IE8+：IE8/9需要使用XDomainRequest对象来支持CORS。

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。 因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。

两种请求
分为两种请求，一种是简单请求，另一种是非简单请求。只要满足下面条件就是简单请求
请求方式为HEAD、POST 或者 GET
http头信息不超出一下字段：Accept、Accept-Language 、 Content-Language、 Last-Event-ID、 Content-Type(限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain)
为什么要分为简单请求和非简单请求，因为浏览器对这两种请求方式的处理方式是不同的。

>
    Referer: http://127.0.0.1:8085/
    Origin: http://127.0.0.1:8085   //值设置为*，则会接受所有域的请求
    Accept: */*
    Cache-Control: no-cache
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8
    Pragma: no-cache

    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8085');
    res.setHeader('Access-Control-Allow-Credentials', true); //允许该请求内包含cookie信息同时，在客户端，还需要在ajax请求中设置withCredentials属性为true。
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

## <a name="node代理跨域">node代理跨域</a>

node中间件实现跨域代理，是通过启一个代理服务器，实现数据的转发，也可以通过设置cookieDomainRewrite参数修改响应头中cookie中域名，实现当前域的cookie写入，方便接口登录认证。
利用node + express + http-proxy-middleware搭建一个proxy服务器

前端
>

    <p>node 跨域</p>
    <p>本地文件index.html文件，通过代理服务器http://localhost:3000向目标服务器http://localhost:4000请求数据。</p>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script>
      $.ajax({
        url: 'http://localhost:3000',
        type: 'post',
        data: {
          name: 'xiamen',
          password: '123456'
        },
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
          console.log(result) // {"title":"fontend","password":"123456"}
        },
        error: function (msg) {
          console.log(msg)
        }
      })
    </script>

后端

>
    //运行 node server1.js; 代理服务器(http://localhost:3000)
    const http = require('http')
    // 第一步：接受客户端请求
    const server = http.createServer((request, response) => {
      // 代理服务器，直接和浏览器直接交互，需要设置CORS 的首部字段
      response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
      // 第二步：将请求转发给服务器
      const proxyRequest = http
        .request({
            host: '127.0.0.1',
            port: 4000,
            url: '/',
            method: request.method,
            headers: request.headers
          },
          serverResponse => {
            // 第三步：收到服务器的响应
            var body = ''
            serverResponse.on('data', chunk => {
              body += chunk
            })
            serverResponse.on('end', () => {
              console.log('The data is ' + body)
              // 第四步：将响应结果转发给浏览器
              response.end(body)
            })
          }
        )
        .end()
    })
    server.listen(3000, () => {
      console.log('The proxyServer is running at http://localhost:3000')
    })

>

    //运行 node server2.js ; 代理服务器(http://localhost:4000)
    const http = require('http')
    const data = {
      title: 'fontend',
      password: '123456'
    }
    const server = http.createServer((request, response) => {
      if (request.url === '/') {
        response.end(JSON.stringify(data))
      }
    })
    server.listen(4000, () => {
      console.log('The server is running at http://localhost:4000')
    })

## <a name="WebSocket协议跨域">WebSocket协议跨域</a>

WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。

原生WebSocket API使用起来不太方便，我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。

1）前端代码：
>
    <div>user input：<input type="text"></div>
    <script src="./socket.io.js"></script>
    <script>
    var socket = io('http://localhost:8080');

    // 连接成功处理
    socket.on('connect', function() {

        // 监听服务端消息
        socket.on('message', function(msg) {
            console.log('data from server: ---> ' + msg);
        });

        // 监听服务端关闭
        socket.on('disconnect', function() {
            console.log('Server socket has closed.');
        });

    });

    document.getElementsByTagName('input')[0].onblur = function() {
        socket.send(this.value);
    };
    </script>

2）node Server
>
    var http = require('http');

    var socket = require('socket.io');//先安装socket.io

    // 启http服务
    var server = http.createServer(function(req, res) {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end();
    });
    server.listen('8080');

    console.log('Server is running at port 8080...');

    // 监听socket连接
    socket.listen(server).on('connection', function(client) {

        // 接收信息
        client.on('message', function(msg) {

            client.send('hello：' + msg);

            console.log('data from client: ---> ' + msg);

        });

        // 断开处理
        client.on('disconnect', function() {
            console.log('Client socket has closed.');
        });
    });