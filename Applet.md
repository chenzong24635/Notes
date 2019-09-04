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
<img src="./img/mpvue-lifecycle.jpg" width="50%" />>


## 不支持
不支持vue-router，因为小程序无法动态的插入和控制节点，几乎无法实现 

小程序里所有的 BOM／DOM 都不能用，也就是说 v-html 指令不能用

不支持部分复杂的 JavaScript 渲染表达式  
>
    目前可用的有 + - * % ?: ! == === > < [] .

不支持过滤器


# 导航

#  <a name="">授权</a>
>
    <button  open-type="getUserInfo" form-type="submit"   @getuserinfo="bindGetUserInfo">授权</button>

    bindGetUserInfo(e) {
      console.log(e)
      if (wepy.getStorageSync('useInfo')) {
        tip.alert('已授权')
        return false
      }
      if (e.detail.userInfo) {
        wepy.setStorageSync('useInfo', e.detail.userInfo)
    }
    
#  <a name="分享">分享onShareAppMessage(Object object)</a>
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
#  <a name="tabBar右上角添加文本">tabBar右上角添加文本:setTabBarBadge()</a>
>
    wepy.setTabBarBadge({
      index: 1, //tabBar 的哪一项，从左边算起
      text: '4条信息', // 显示的文本，超过 4 个字符则显示成 ...
      success:function(res){},  //失败的回调函数
      fail:function(res){},  //失败的回调函数
      complete:function(res){} //调用结束的回调函数（无论成功、失败）
    })
 
#  <a name="支付">小程序调起微信支付</a>
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