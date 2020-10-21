[官网](https://uniapp.dcloud.io/)
[dcloud](https://dcloud.io/doc.html)
[插件](https://ext.dcloud.net.cn/)


[uni-app开发微信小程序引入UI组件库(Vant-weapp)步骤](https://www.cnblogs.com/roseAT/p/11200203.html)


https://www.cnblogs.com/gqx-html/p/10967570.html



App打包
https://ask.dcloud.net.cn/article/35777



## [生命周期](https://uniapp.dcloud.io/frame?id=%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)
### 应用生命周期 -- App.vue
`应用生命周期仅可在App.vue中监听，在其它页面监听无效。`

* onLaunch	当uni-app 初始化完成时触发（全局只触发一次）
* onShow	当 uni-app 启动，或从后台进入前台显示
* onHide	当 uni-app 从前台进入后台
* onError	当 uni-app 报错时触发
* onUniNViewMessage	对 nvue 页面发送的数据进行监听，可参考 nvue 向 vue 通讯
* onUnhandledRejection	对未处理的 Promise 拒绝事件监听函数（2.8.1+）
* onPageNotFound	页面不存在监听函数
* onThemeChange	监听系统主题变化


### 页面生命周期
* onLoad	监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）
* onShow	监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
* onReady	监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
* onHide	监听页面隐藏
* onUnload	监听页面卸载
* onResize	监听窗口尺寸变化	
* onPullDownRefresh	监听用户下拉动作，一般用于下拉刷新，参考示例
* onReachBottom	页面上拉触底事件的处理函数
* onShareAppMessage	用户点击右上角分享	
* onPageScroll	监听页面滚动，参数为Object
* onShareTimeline	监听用户点击右上角转发到朋友圈	微信小程序	2.8.1+
* ....

### 组件生命周期（没有在pages.json里注册）
即Vue的生命周期


## 