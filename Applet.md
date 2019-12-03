<a id="top"></a>

# 小程序

[微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/component/)

[uni-app](https://uniapp.dcloud.io/README)
[](https://dcloud.io/doc.html)


[微信小程序开发资源汇总](https://github.com/justjavac/awesome-wechat-weapp)

* <a href="#微信小程序">微信小程序</a>
* <a href="#生命周期">生命周期</a>
* <a href="#常用方法、API">常用方法、API</a>
  * <a href="#路由跳转">路由跳转</a>
  * <a href="#授权、获取用户信息">授权、获取用户信息</a>
  * <a href="#小程序图片高度自适应">小程序图片高度自适应</a>
  * <a href="#图片懒加载">图片懒加载</a>
  * <a href="#上拉加载，下拉刷新">上拉加载，下拉刷新</a>
  * <a href="#分享onShareAppMessage">分享onShareAppMessage</a>
  * <a href="#tabBar右上角添加文本">tabBar右上角添加文本</a>
  * <a href="#地图调用">地图调用</a>
  * <a href="#支付">小程序调起微信支付</a>
  * <a href="#分包加载">分包加载</a>
* <a href="#微信公众号">微信公众号</a>



--------

# <a name="微信小程序">微信小程序</a>[![bakTop](./img/backward.png)](#top)

# <a name="生命周期">生命周期</a>[![bakTop](./img/backward.png)](#top)

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

# <a name="常用方法、API">`常用方法、API`</a>[![bakTop](./img/backward.png)](#top)

## <a name="路由跳转">路由跳转</a>[![bakTop](./img/backward.png)](#top)

[文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html)
[文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)
[文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)

| open-type值：| 描述 | 对应api |
|:--|:--|:--|
| navigate      | 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面 （小程序中页面栈最多十层）| 对应 wx.navigateTo
| navigateBack  | 关闭当前页面，返回上一页面或多级页面|	对应 wx.navigateBack| 
| switchTab	    |跳到tabBar 页面，并关闭其他所有非 tabBar 页面| 对应 wx.switchTab| 
| redirect	    |关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面| 对应 wx.redirectTo| 
| reLaunch	    |关闭所有页面，跳转到应用内的某个页面| 对应 wx.reLaunch| 
| exit | 退出小程序，target="miniProgram"时生效 打开绑定的小程序| |
>
    <navigator url="/page/navigate/navigate?title=navigate" hover-class="none">navigate：跳转到新页面</navigator>

    <navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">redirect：在当前页打开</navigator>

    <navigator url="/page/index/index" open-type="switchTab" hover-class="other-navigator-hover">switchTab：切换 Tab</navigator>

    <navigator target="miniProgram" open-type="navigate" app-id="" path="" extra-data="" version="release">打开绑定的小程序</navigator>

##  <a name="授权、获取用户信息">授权、获取用户信息</a>[![bakTop](./img/backward.png)](#top)

#### 授权
>

    <button
        wx:if="{{canIUse}}"
        open-type="getUserInfo"
        bindgetuserinfo="bindGetUserInfo"
    >授权登录</button>
    <view wx:else>请升级微信版本</view>

    Page({
      data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo')
      },
      onLoad: function() {
        // 查看是否授权
        wx.getSetting({
          success: function(res){
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                success: function(res) {
                  console.log(res.userInfo)
                  //用户已经授权过
                }
              })
            }
          }
        })
      },
      bindGetUserInfo: function(e) {
        console.log(e.detail.userInfo)
        if (e.detail.userInfo){
          //用户按了允许授权按钮
        } else {
          //用户按了拒绝按钮
        }
      }
    })

#### 获取用户信息wx.getUserInfo()
必须是在用户已经授权的情况下调用
>

    wx.getUserInfo({
      success: function(res) {
        let userInfo = res.userInfo
        let nickName = userInfo.nickName
        let avatarUrl = userInfo.avatarUrl
        let gender = userInfo.gender //性别 0：未知、1：男、2：女
        let province = userInfo.province
        let city = userInfo.city
        let country = userInfo.country
      }
    }

## <a name="小程序图片高度自适应">小程序图片高度自适应及swiper轮播图中</a>[![bakTop](./img/backward.png)](#top)

图片设置mode="widthFix"
>
    <image :src="img" mode="widthFix" style="width:100%" /> 

swiper轮播图中的图片自适应高度的方法
>
    <swiper :style='{height:height}'>
      <block v-for="item in imgUrls">
        <swiper-item>
          // bindload是绑定图片加载的事件
          // widthFix
          <image :src="item" mode="widthFix" @load='imgHeight' style="width:100%" />  
        </swiper-item>
      </block>
    </swiper>

    data: {
      imgUrls: [],
      height:"" // 这是swiper要动态设置的高度属性
    },
    imgHeight(e) {
      let winWid = wx.getSystemInfoSync().windowWidth; // 获取当前屏幕的宽度
      let imgh = e.detail.height; // 图片高度
      let imgw = e.detail.width; // 图片宽度
      let swiperH = winWid*imgh/imgw + "px"
      // 等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  --> swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
      this.height = swiperH // 设置高度
    },

## <a name="图片懒加载">图片懒加载</a>[![bakTop](./img/backward.png)](#top)
>
    <block :key="item.id" v-for="(item,index) in lists">
      <view>
        //listIndex大于item.index时，图片显示
        <image :src="listIndex > index ? item : 'default.jpg' " mode="widthFix"></image>
      </view>
    </block>

    onShow(){
      //获取屏幕尺寸
      const screenWidth = wx.getSystemInfoSync().windowWidth
      const screenHeight = wx.getSystemInfoSync().windowHeight
        //获取页面初始状态图片数量，0.63为图片容器的高度值(63vw)，将代码中0.63改为你的容器对应高度
      this.listIndex = screenHeight / (screenWidth * 0.63),
      this.screenWidth = screenWidth,
      this.screenHeight = screenHeight
      this.getList()
    },
    onPageScroll(e) { 
      //滚动距离+屏幕高度换算vw倍数
      let listIndex = (e.scrollTop + this.screenHeight) / (this.screenWidth * 0.63)
      this.listIndex = listIndex
    },

## <a name="上拉加载，下拉刷新">上拉加载，下拉刷新</a>[![bakTop](./img/backward.png)](#top)
### 上拉加载 onReachBottom()
监听用户上拉触底事件,在触发距离内滑动期间，本事件只会被触发一次

可在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance  
>
    onReachBottom() {
      if (this.pageIndex < this.pages) {
        ++this.pageIndex;
        this.getLists();
      } else {
        console.log('已经到底了');
      }
    },
    methods:{
      getList() {
        //列表
        this.$api.getLists(this.pageIndex,this.pageSize).then(res => {
          if (res.status == 1) {
            let result = res.result;
            if(this.pageIndex === 1) {
              this.lists = result.list
            } else {
              this.lists = this.lists.concat(result.list);
            }
            this.totalPage = result.totalPage
          }
        });
      },
    }

### 下拉刷新 onPullDownRefresh()  
监听用户下拉刷新事件。

需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。

可以通过wx.startPullDownRefresh触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。


##  <a name="分享">分享onShareAppMessage(Object object)</a>[![bakTop](./img/backward.png)](#top)

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

##  <a name="tabBar右上角添加文本">tabBar右上角添加文本:setTabBarBadge()</a>[![bakTop](./img/backward.png)](#top)
>
    wepy.setTabBarBadge({
      index: 1, //tabBar 的哪一项，从左边算起
      text: '4条信息', // 显示的文本，超过 4 个字符则显示成 ...
      success:function(res){},  //失败的回调函数
      fail:function(res){},  //失败的回调函数
      complete:function(res){} //调用结束的回调函数（无论成功、失败）
    })
 
##  <a name="地图调用">地图调用</a>[![bakTop](./img/backward.png)](#top)
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

##  <a name="支付">小程序调起微信支付</a>[![bakTop](./img/backward.png)](#top)
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


##  <a name="分包加载">[分包加载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)</a>[![bakTop](./img/backward.png)](#top)
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

# <a name="微信公众号">微信公众号</a>[![bakTop](./img/backward.png)](#top)
