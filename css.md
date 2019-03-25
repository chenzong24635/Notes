## vw、vh、vmin、vmax 的含义
vw、vh、vmin、vmax 是一种视窗单位，也是相对单位。它相对的不是父节点或者页面的根节点。而是由视窗（Viewport）大小来决定的，单位 1. 代表类似于 1%。

视窗(Viewport)是你的浏览器实际显示内容的区域—，换句话说是你的不包括工具栏和按钮的网页浏览器。

1. 具体描述如下：
* vw：视窗宽度的百分比（1vw 代表视窗的宽度为 1%）
* vh：视窗高度的百分比
* vmin：当前 vw 和 vh 中较小的一个值
* vmax：当前 vw 和 vh 中较大的一个值

2. vw、vh 与 % 百分比的区别
* % 是相对于父元素的大小设定的比率，vw、vh 是视窗大小决定的。
* vw、vh 优势在于能够直接获取高度，而用 % 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度的，所以这是挺不错的优势。

3. vmin、vmax 用处
做移动页面开发时，如果使用 vw、wh 设置字体大小（比如 5vw），在竖屏和横屏状态下显示的字体大小是不一样的。
由于 vmin 和 vmax 是当前较小的 vw 和 vh 和当前较大的 vw 和 vh。这里就可以用到 vmin 和 vmax。使得文字大小在横竖屏下保持一致。

## el.style.cssText +=

## 图片缩放
    // 先放大1.1倍 ，再还原。一般用于轮播图
    .img{
      transform: matrix(1.1, 0, 0, 1.1, 0, 0);/* 等同于transfrom:scale(1.1,1.1) */
      -webkit-transition: all 0.4s ease 1.2s;
      -moz-transition: all 0.4s ease 1.2s;
      -ms-transition: all 0.4s ease 1.2s;
      -o-transition: all 0.4s ease 1.2s;
      transition: all 0.4s ease 1.2s;
    }

    .img.active{
      transform: matrix(1, 0, 0, 1, 0, 0); /* 等同于transfrom:scale(1,1)*/
      -webkit-transition: all 7.0s ease;
      -moz-transition: all 7.0s ease;
      -ms-transition: all 7.0s ease;
      -o-transition: all 7.0s ease;
      transition: all 7.0s ease;  
      transition-delay: 0.4s;
    }

css矩阵matrix
>
    transform: matrix(a,b,c,d,e,f)
    a c e   x   ax + cy + e // ax+cy+e:变换后的水平坐标
    b d f . y = bx + dy + f // bx+dy+f:变换后的垂直位置 
    0 0 1   1   0  + 0  + 1

x, y表示转换元素的所有坐标（变量）

matrix(sx, 0, 0, sy, 0, 0) 等同于scale(sx, sy)

matrix(0, 0, 0, 0, tx, ty) 等同于translate(tx, ty)


## meta
<meta id="viewport" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">

    window.devicePixelRatio是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。
    设备像素比 = 物理像素 / 设备独立像素 // 在某一方向上，x方向或者y方向
    window.devicePixelRatio = 物理像素 / dips

    window.devicePixelRatio获取到当前设备的dpr
    -webkit-device-pixel-ratio，-webkit-min-device-pixel-ratio和  -webkit-max-device-pixel-ratio进行媒体查询

    普通密度桌面显示屏的devicePixelRatio=1
    高密度桌面显示屏(Mac Retina)的devicePixelRatio=2
    主流手机显示屏的devicePixelRatio=2或3


## 像素
* DPR(device pixel ratio) 设备像素比
* DIPS(device-independent pixels) CSS像素是一个抽象概念，设备无关像素
* DPI(dots per inch) 为打印机每英寸可以喷的墨汁点数，用于印刷行业中度量空间点的密度
* PPI(pixels per inch)为屏幕每英寸的像素数量(即在一个对角线长度为1英寸的正方形内所拥有的像素数)，用于度量计算机显示屏上像
素的密度。目前PPI(主要是iOS)和DPI(比如在Android中)都会用在计算机显示设备的参数描述中，并且二者的意思是一样的，都是代表像素密度



##  :empty 和 :blank CSS的伪选择器。
    :empty 选择 空元素 。空元素是指没有任何内容的元素，甚至空格都不行。
    :blank 选择 没有子节点、仅有空的文本节点、仅有空白符的文本节点--浏览器不支持

font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;

## user-select
user-select:none
-webkit-user-select:none
> (1) 语法
user-select:none | text | all | element
默认值：text
适用范围：除替换元素外的所有元素

> (2) 取值说明
none:文本不能被选择
text:可以选择文本
all：当所有内容作为一个整体时可以被选择。如果双击或者在 上下文上点击子元素，
    那么被选择的部分将是以该子元素 向上回溯的最高祖先元素。

<!--[if !IE]>除IE外都可识别<![endif]-->
<!--[if IE]> 所有的IE可识别 <![endif]-->
<!--[if IE 6]> 仅IE6可识别 <![endif]-->
<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->
<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
<!--[if IE 7]> 仅IE7可识别 <![endif]-->
<!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
<!--[if IE 8]> 仅IE8可识别 <![endif]-->
<!--[if IE 9]> 仅IE9可识别 <![endif]-->

//IE6-9
<!--[if IE]>
<style type="text/css">
  .ov2{height: 47px;}
</style>
<![endif]-->

//IE10、11
<style type="text/css">
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* .ov2{height: 47px;} */
  }
</style>

filter:alpha(opacity=50)

    background: linear-gradient(to left, ##f00, ##f00) left top no-repeat, 
                linear-gradient(to bottom, ##f00, ##f00) left top no-repeat, 
                linear-gradient(to left, ##f00, ##f00) right top no-repeat,
                linear-gradient(to bottom, ##f00, ##f00) right top no-repeat, 
                linear-gradient(to left, ##f00, ##f00) left bottom no-repeat,
                linear-gradient(to bottom, ##f00, ##f00) left bottom no-repeat,
                linear-gradient(to left, ##f00, ##f00) right bottom no-repeat,
                linear-gradient(to left, ##f00, ##f00) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;  


box-shadow: h-shadow v-shadow blur spread color inset;
	    水平阴影 垂直阴影  模糊距离 阴影尺寸 阴影色 外部阴影（默认内部阴影)
box-shadow: 0 6px 0 0 ##eee;


#### 单行省略号
    .ov1{
      white-space: nowrap; //强制文本在一行内输出
      overflow: hidden; //隐藏溢出部分
      text-overflow: ellipsis; //对溢出部分加上...
    }

#### 多行省略号
###### 只适用于webkit内核
    .ov2{
      position: relative;
      display: -webkit-box;
      display: -moz-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -moz-line-clamp: 2;
      // 防止 打包后出现css中文本超出部分隐藏显示省略号失效
      // autoprefixer自动移除老式过时的代码
      /*! autoprefixer: off */
        -webkit-box-orient: vertical;/*伸缩盒子的子元素排列：从上到下*/
        -moz-box-orient: vertical;
      /* autoprefixer: on */
    }

###### 火狐
    @-moz-document url-prefix() {
      .ov2{
        max-height: 40px;//设置最大高度，加上overflowhidden，正好是两行，使超出部分隐藏
      }
      .ov2::after{
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding-left: 40px;//以上三个属性，可以后续调整，看要把...放在哪个位置
        background: -webkit-linear-gradient(left, transparent, ##fff 55%);
        background: -o-linear-gradient(right, transparent, ##fff 55%);
        background: -moz-linear-gradient(right, transparent, ##fff 55%);
        background: linear-gradient(to right, transparent, ##fff 55%);//背景色可写成渐变也可写成一样的颜色
      }
    }

###### IE10、11
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      .ov2{max-height: 36px;}
      .ov2::after{
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding-left: 40px;//以上三个属性，可以后续调整，看要把...放在哪个位置
        background: -webkit-linear-gradient(left, transparent, ##fff 55%);
        background: -o-linear-gradient(right, transparent, ##fff 55%);
        background: -moz-linear-gradient(right, transparent, ##fff 55%);
        background: linear-gradient(to right, transparent, ##fff 55%);//背景色可写成渐变也可写成一样的颜色
      }
    }

## 文字换行
> 强制不换行
  * white-space:nowrap;

> 正常文字的换行(亚洲文字和非亚洲文字)
  * white-space:normal;

> 强制英文单词断行
  * word-break:break-all;

> 自动换行
  * white-space:normal;
  * word-break:break-all;
  * word-wrap:break-word;

> 字母大小写：
  * text-transform ：
  * Capitalize 英文拼音的首字母大写
  * Uppercase 英文拼音字母全大写
  * Lowercase 英文拼音字母全小写

## 手机端调起电话、email
  <a href="tel:电话号码" >电话号码</a>
  <a href="mailto:邮箱">邮箱</a>

## 清除手机端a链接点击高亮：
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color:transparent;

## 三角形
    width:0; 
    height:0; 
    border-style: solid;
    border-width: 30px 10px;
    border-color:  transparent transparent transparent ##f4f4f4;


## input placeholder颜色
    ::-webkit-input-placeholder { color: ##d3d2d2; }/*WebKit, Blink, Edge*/
    :-moz-placeholder { color: ##d3d2d2; }/*Mozilla Firefox 4 to 18*/
    ::-moz-placeholder { color: ##d3d2d2; }/*Mozilla Firefox 19+*/
    :-ms-input-placeholder { color: ##d3d2d2; }/*Internet Explorer 10-11 */


## -webkit-text-size-adjust: 100%
// 关闭字体大小自动调整功能.; 防止iPhone在坚屏转向横屏时放大文字（注意，就算viewport设置了maximum-scale=1.0 文字还是会放大的）
//放在body中会导致页面缩放失效,不要把-webkit-text-size-adjust设置为全局或者可继承的