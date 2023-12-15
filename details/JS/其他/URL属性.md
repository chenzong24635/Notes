## <a name="页面url属性">页面 url 属性</a>

new URL('http://www.aaa.com/bbb.aspx?name=1')

> hash: ""  
> host: "www.aaa.com:8080"  
> hostname: "www.aaa.com"  
> href: "http://www.aaa.com:8080/bbb.aspx?name=1"  
> origin: "http://www.aaa.com:8080"  
> password: ""  
> pathname: "/bbb.aspx"  
> port: "8080"  
> protocol: "http:"  
> search: "?name=1"  
> searchParams: URLSearchParams {}
> username: ""

- hash (URL 中在井号“#”后面的分段)

  > window.location.hash  
  > new URL(url).hash

- host (URL 的主机部分包含端口号)

- href (URL 整个地址字符串)

- hostname (URL 的主机部分不含端口号)

- origin (只读属性，返回具有 URL 来源的 Unicode 序列化 USVString。Origin 的结构是由传入的 URL 类型决定的，对于 http 或 https 的链接，得到的 Origin 将会为 协议（http/https）+ (://) + 域名 + (:端口)，一般情况下，默认端口将会被忽略。对于 BLOB 链接，Origin 返回的则是 BLOB：后面的部分)

- userName 和 password 属性也是可写属性，它能提取域名前的用户名和密码部分的内容

  ```js
  url = new URL("https://username1:password1@www.grapecity.com.cn");

  console.log(url.username, url.password);
  //username1 password1
  ```

- pathname (URL 的第一个斜杠(/) 后面除参数外的部分)

- port (URL 的端口号)

  > (默认的 80 端口返回空字符)

- protocol (URL 的协议部分,一般是指类似 http:，https:，ftp:，file:等这样的协议)

- search (URL 地址参数?后面的部分)

- searchParams 属性  
  search 属性只为我们获取了整个参数字符串，如果有把字符串解析为键值对，这时候 searchParams 属性就派上了用场，该属性将获得一个 URLSearchParams 对象，该对象具有列出查询字符串键值对列表的能力，例如，要获取参数列表，我们可以这样使用。
  > new URL('http://www.aaa.com/bbb.aspx?name=1').searchParams.get('name') // 1
  > new URLSearchParams(window.loaction.search).get('name')

### 获取 url 中的参数值

### new URL
```js
new URL('https://www.aaa.com/?name=dadan&id=95827')

// 返回值
{
  href: "https://www.aaa.com:8888/?name=dadan&id=95827"
  origin: "https://www.aaa.com:8888"
  protocol: "https:"
  username: ""
  password: ""
  host: "www.aaa.com:8888"
  hostname: "www.aaa.com"
  port: "8888"
  pathname: "/"
  search: "?name=dadan&id=95827"
  searchParams: URLSearchParams {}
  hash: ""
}
```

### URLSearchParams:解析 url 为对象

[URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams) 定义了一些实用的方法来处理 URL 的查询字符串。

```js
let url = "http://www.aaa.com/?id=0&name=dadan&age=13&hobby=nothing"
let searchParams = new URLSearchParams(url);

for (let item of searchParams) {
  console.log(item);
}
//output
// ["http://www.aaa.com/?id", "0"]
// ["name", "dadan"]
// ["age", "13"]
// ["hobby", "nothing"]

console.log(searchParams.has("name")) // true
console.log(searchParams.get("name")) // dadan
console.log(searchParams.get("name1")) // null
console.log(searchParams.getAll("name")) // ["dadan"]
console.log(searchParams.set("name", "我是95827"),searchParams.get("name")) // undefined "我是95827"
console.log(searchParams.append("appendname", "我叫楚大蛋"),searchParams.get("appendname"))// undefined "我叫楚大蛋"
console.log(decodeURIComponent(searchParams.toString())) // http://www.aaa.com/?id=0&name=我是95827&age=13&hobby=nothing&appendname=我叫楚大蛋
console.log(searchParams.delete("name"),searchParams.get("name"))// undefined null
```

### 将 url 中的参数转换为对象

```js
function getQueryString(name, url=window.location) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = new URL(url).search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
console.log(getQueryString("参数名1"));
console.log(getQueryString("参数名2"));
console.log(getQueryString("参数名3"));
```

* 

```js
function parseParam(url=window.location) {
  url = new URL(url).search; //获取url中"?"符后的字串
  let obj = {};
  if (url.includes("?")) {
    let str = url.substr(1); //去除 ?
    let arr = str.split("&"); 
    for(var i = 0; i < arr.length; i ++) {
      let tempArr = arr[i].split("=")
      obj[tempArr[0]] = encodeURIComponent(tempArr[1]);
    }
  }
  return obj;
}
console.log(parseParam());
```

* 
```js
let url = 'http://www.aaa.com/?a=a1&b=123&c=打算'

function parseParam(url=window.location) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = encodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  })
  return paramsObj;
}
console.log(parseParam(url)) //{a: "a1", b: 123, c: "打算"}
```

