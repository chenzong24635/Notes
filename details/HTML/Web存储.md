
# Web存储

[cookie](/details/JS/cookie.md)

### 区别
cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。

sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

* 存储大小：
  >
      cookie数据大小不能超过4k。
      sessionStorage，localStorage  达到5M甚至更多

* 有期时间：
  >
      localStorage   浏览器关闭后数据不丢失除非主动删除数据；多窗口数据共享
      sessionStorage 数据在当前浏览器窗口关闭后自动删除。同窗口数据共享
      cookie         设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

* 作用域:
  >
      sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
      localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。

* Storage方法
  >
      setItem(key, value) 保存数据
      getItem(key) 读取数据
      removeItem(key) 删除键值为key的存储内容
      clear() 清空所有数据
      key(n) 以索引值来获取键值key的数据
      length 存储空间积累项的数目

      保存数据：sessionStorage.setItem('keyname','value') / sessionStroge.keyname='value';
      读取数据：sessionStorage.getItem('keyname') / sessionStroge.keyname /  sessionStroge.key(n)

* cookie方法
  ```js

      let cookie = {
        set: function (key, val, time) { // 设置cookie方法
          let date = new Date() // 获取当前时间
          let expiresDays = time // 将date设置为n天以后的时间
          date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000) // 格式化为cookie识别的时间
          document.cookie = key + '=' + val + ';expires=' + date.toGMTString() + '; path=/' // 设置cookie
        },
        get: function (key) { // 获取cookie方法
          /* 获取cookie参数 */
          let getCookie = document.cookie.replace(/[ ]/g, '') // 获取cookie，并且将获得的cookie格式化，去掉空格字符
          let arrCookie = getCookie.split(';') // 将获得的cookie以'分号'为标识 将cookie保存到arrCookie的数组中
          let tips // 声明变量tips
          for (let i = 0; i < arrCookie.length; i++) { // 使用for循环查找cookie中的tips变量
            let arr = arrCookie[i].split('=') // 将单条cookie用'等号'为标识，将单条cookie保存为arr数组
            if (key === arr[0]) { // 匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
              tips = arr[1] // 将cookie的值赋给变量tips
              break // 终止for循环遍历
            }
          }
          return tips
        },
        delete: function (key) { // 删除cookie方法
          let date = new Date() // 获取当前时间
          date.setTime(date.getTime() - 10000) // 将date设置为过去的时间
          document.cookie = key + '=v; expires =' + date.toGMTString() // 设置cookie
        }
      }
    ```

### token
token是用户身份的验证方式，我们通常叫它：令牌。最简单的token组成:uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign(签名，由token的前几位+盐以哈希算法压缩成一定长的十六进制字符串，可以防止恶意第三方拼接token请求服务器)。还可以把不变的参数也放进token，避免多次查库。

应用场景：
>
    A：当用户首次登录成功（注册也是一种可以适用的场景）之后, 服务器端就会生成一个 token 值，这个值，会在服务器保存token值(保存在数据库中)，再将这个token值返回给客户端.
    B：客户端拿到 token 值之后,进行本地保存。（SP存储是大家能够比较支持和易于理解操作的存储）
    C：当客户端再次发送网络请求(一般不是登录请求)的时候,就会将这个 token 值附带到参数中发送给服务器.
    D：服务器接收到客户端的请求之后,会取出token值与保存在本地(数据库)中的token值做对比

    对比一：如果两个 token 值相同， 说明用户登录成功过!当前用户处于登录状态!
    对比二：如果没有这个 token 值, 则说明没有登录成功.
    对比三：如果 token 值不同: 说明原来的登录信息已经失效,让用户重新登录.