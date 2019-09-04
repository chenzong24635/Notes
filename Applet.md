# 小程序

[微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/component/)

[wepy-基于Vue框架](https://wepyjs.github.io/wepy-docs/2.x/#/base/intro)
[mpvue-基于Vue框架](http://mpvue.com/mpvue/)


[微信小程序开发资源汇总](https://github.com/justjavac/awesome-wechat-weapp)

* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>
* <a href="#"></a>

#  <a name="mpvue">mpvue</a>
## 安装
>

    npm set registry https://registry.npm.taobao.org/  //切换源为 taobao 源

    npm install --global vue-cli@2.9 //全局安装 vue-cli

    创建一个基于 mpvue-quickstart 模板的新项目
    新手一路回车选择默认就可以了

    vue init mpvue/mpvue-quickstart my-project

   安装依赖
    cd my-project
    npm install
    npm run dev

    更新依赖
    npm i mpvue -S
    npm i mpvue-template-compiler mpvue-loader mpvue-webpack-target postcss-mpvue-wxss webpack-dev-middleware-hard-disk -S-D

## 生命周期
同vue,不同的是我们会在小程序 onReady 后，再去触发mounted
>
    beforeCreate
    created
    beforeMount
    mounted
    beforeUpdate
    updated
    activated
    deactivated
    beforeDestroy
    destroyed

app 部分：
>
    onLaunch，初始化
    onShow，当小程序启动，或从后台进入前台显示
    onHide，当小程序从前台进入后台

page 部分：
>
    onLoad，监听页面加载
    onShow，监听页面显示
    onReady，监听页面初次渲染完成
    onHide，监听页面隐藏
    onUnload，监听页面卸载

    onPullDownRefresh，监听用户下拉动作
    onReachBottom，页面上拉触底事件的处理函数
    onShareAppMessage，用户点击右上角分享
    onPageScroll，页面滚动
    onTabItemTap, 当前是 tab 页时，点击 tab 时触发 （mpvue 0.0.16 支持）


<!-- ![生命周期](./img/mpvue-lifecycle.jpg) -->
<img src="./img/mpvue-lifecycle.jpg" width="50%" />


## 不支持
不支持vue-router，因为小程序无法动态的插入和控制节点，几乎无法实现 

小程序里所有的 BOM／DOM 都不能用，也就是说 v-html 指令不能用

不支持部分复杂的 JavaScript 渲染表达式  
>
    目前可用的有 + - * % ?: ! == === > < [] .

不支持过滤器



------
<a name=""></a>
<a name=""></a>

--------
#<a name="微信小程序">微信小程序</a>

# <a name="生命周期">生命周期</a>
[App 注册小程序](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html)
>
    onLaunch，初始化
    onShow，当小程序启动，或从后台进入前台显示
    onHide，当小程序从前台进入后台
    onError, 错误监听函数
    onPageNotFound，页面不存在监听函数

[Page 注册页面](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html)
>
    onLoad，监听页面加载
    onShow，监听页面显示
    onReady，监听页面初次渲染完成（只调用一次）
    onHide，监听页面隐藏
    onUnload，监听页面卸载

    onPullDownRefresh，监听用户下拉动作
    onReachBottom，页面上拉触底事件的处理函数
    onShareAppMessage，用户点击右上角分享
    onPageScroll，页面滚动
    onResize, 屏幕旋转触发
    onTabItemTap, 当前是 tab 页时，点击 tab 时触发

<img src="./img/wx-lifecycle.png" width="50%" />

# <a name="常用方法、API">`常用方法、API`</a>

## <a name="导航路由">[导航路由](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)</a>
[页面路由](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html)
>
    open-type值：
    navigate      对应 wx.navigateTo 或 wx.navigateToMiniProgram 的功能	
    redirect	    对应 wx.redirectTo 的功能	
    switchTab	    对应 wx.switchTab 的功能	
    reLaunch	    对应 wx.reLaunch 的功能
    navigateBack	对应 wx.navigateBack 的功能
    exit	        退出小程序，target="miniProgram"时生效


    <navigator url="/page/navigate/navigate?title=navigate" hover-class="none">navigate：跳转到新页面</navigator>

    <navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">redirect：在当前页打开</navigator>

    <navigator url="/page/index/index" open-type="switchTab" hover-class="other-navigator-hover">switchTab：切换 Tab</navigator>

    <navigator target="miniProgram" open-type="navigate" app-id="" path="" extra-data="" version="release">打开绑定的小程序</navigator>

##  <a name="授权、获取用户信息">授权、获取用户信息</a>
#### 授权
>
    <button  open-type="getUserInfo" form-type="submit"   @getuserinfo="bindGetUserInfo">授权</button>

    bindGetUserInfo(e) {
      console.log(e)
      console.log(e.detail.userInfo)
      /* if (wx.getStorageSync('useInfo')) {
        tip.alert('已授权')
        return false
      }
      if (e.detail.userInfo) {
        wx.setStorageSync('useInfo', e.detail.userInfo)
      } */
    }

#### 获取用户信息wx.getUserInfo()
    // 必须是在用户已经授权的情况下调用
>

    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
      }
    }


##  <a name="分享">分享onShareAppMessage(Object object)</a>
监听用户点击页面内转发按钮（button 组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容。

    onShareAppMessage(res) {
      console.log(res.from) //String 转发事件来源。button：页面内转发按钮；menu：右上角转发菜单
      console.log(res.target) //Object 事件目标。如果 from 值是 button，则为button，否则undefined
      console.log(res.webViewUrl)	String	页面中包含web-view组件时，返回当前web-view的url
      return {
        title:  '' + this.info.name //转发标题（默认小程序名称）
        path: '/pages/index?mchid=' + this.mchid, //转发路径
        imageUrl: ''	//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。	使用默认截图
      }
    }

##  <a name="tabBar右上角添加文本">tabBar右上角添加文本:setTabBarBadge()</a>
>
    wepy.setTabBarBadge({
      index: 1, //tabBar 的哪一项，从左边算起
      text: '4条信息', // 显示的文本，超过 4 个字符则显示成 ...
      success:function(res){},  //失败的回调函数
      fail:function(res){},  //失败的回调函数
      complete:function(res){} //调用结束的回调函数（无论成功、失败）
    })
 
##  <a name="地图调用">地图调用</a>
[位置api](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html)

>
    // app.json中设置
    "permission": {
      "scope.userLocation": {
        "desc": "小程序获取权限时展示的接口用途说明。最长 30 个字符"
      }
    },


    wx.getLocation({ // 获取地址信息
      type: 'gcj02', //默认是wgs84 返回 gps 坐标；gcj02 返回可用于 wx.openLocation 的坐标
      altitude: '', // 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
      fail: function(res){},
      complete: function(res){},
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({ // 打开微信内置地图
          // 必填
          latitude, // 纬度，范围为-90~90，负数表示南纬。
          longitude,// 经度，范围为-180~180，负数表示西经。
          scale: 18, // 缩放比例，范围5~18
          // 选填
          name: '', // 位置名
          address: '',// 地址详细说明
          success: function(res){},
          fail: function(res){},
          complete: function(res){}
        })
      }
    })

##  <a name="支付">小程序调起微信支付</a>
[文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=5)

>

    wx.requestPayment({
    'timeStamp': '', //时间戳
    'nonceStr': '', //随机字符串，长度为32个字符以下
    'package': '', //统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
    'signType': 'MD5', //签名类型，默认为MD5，支持HMAC-SHA256和MD5。注意此处需与统一下单的签名类型一致
    'paySign': '', //签名
    'success':function(res){}, //成功的回调函数
    'fail':function(res){},  //失败的回调函数
    'complete':function(res){} //调用结束的回调函数（无论成功、失败）
    })


##  <a name="分包加载">[分包加载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)</a>
在小程序启动时，默认会下载主包并启动主包内页面，如果用户需要打开分包内某个页面，客户端会把对应分包下载下来，下载完成后再进行展示。  
进入主包页面时，需要下载的代码量小了很多，白屏时间更短，体验更佳。

注意：
>
    整个小程序所有分包大小不超过 4M，单个分包/主包大小不能超过 2M

    分包数量目前没有限制，也就是说你可以放N个分包，甚至每个页面一个分包

    入口页面/TAB页面必须在主包里

    分包目录不能在主包目录下面

    分包可以引用自己包内、主包内的资源，不能引用其他分包内的资源


>
    {
      "pages":[
        "pages/index",
        "pages/logs"
      ],
      "subpackages": [
        {
          "root": "packageA",
          "pages": [
            "pages/cat"
          ]
        },
        {
          "root": "packageB",
          "name": "pack2",
          "pages": [
            "pages/apple"
          ]
        }
      ],
      "preloadRule": {//分包预加载
        
      }
    }

# <a name=""></a>
# <a name=""></a>
# <a name=""></a>

# <a name="微信公众号">微信公众号</a>