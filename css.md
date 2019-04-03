# 链接
https://github.com/chokcoco/CSS-Inspiration

[You-Dont-Need-JavaScript](https://github.com/you-dont-need/You-Dont-Need-JavaScript)CSS实现效果而不需要JS

UI框架
[BootStrap](http://www.bootcss.com/)

动画

[animate.css](https://daneden.github.io/animate.css/) +
[WOW.js](http://www.dowebok.com/demo/131/)

[AniJS.js](http://anijs.github.io/)基于 CSS3 的动画库

[Vivus](http://maxwellito.github.io/vivus) 一款可以执行SVG路径动画的轻量级JS库


[imagehover](http://www.imagehover.io/) 允许您轻松实现可缩放的图像悬停效果。从CSS库中选择超过40种悬停效果类，重量仅为19KB。


[CSS tricks](https://css-tricks.com/)


CSS布局

[Flex](https://yoksel.github.io/flex-cheatsheet/)

[Flex](http://caibaojian.com/flexbox-guide.html)

[Grid](http://grid.guide/)

[CSS布局](http://zh.learnlayout.com/)


[三列布局](http://www.cnblogs.com/xiaohuochai/p/5455905.html)

手册

[css手册](http://css.cuishifeng.cn/)

[css手册](http://css.doyoe.com/)

[雪碧图生成](https://www.toptal.com/developers/css/sprite-generator)

# 目录

* <a href="#CSS">**CSS**</a>

* <a href="#概述">概述</a>
* <a href="#权重、优先级">权重、优先级</a>
* <a href="#CSS引入的方式">CSS引入的方式有哪些? link和@import的区别是?</a>
* <a href="#盒模型">盒模型</a>
* <a href="#css选择器">css选择器</a>
* <a href="#哪些属性可继承">哪些属性可继承</a>
* <a href="#zIndex">堆叠上下文(stacking context )z-index</a>
* <a href="#BFC">块级格式化上下文(BFC)</a>
* <a href="#display、visibility、overflow">display、visibility、overflow的隐藏问题</a>
* <a href="#line-hieght">line-hieght</a>
* <a href="#文本换行">文本换行</a>
* <a href="#尺寸单位">像素定义 尺寸单位</a>
* <a href="#省略号">省略号</a>
* <a href="#注意事项">注意事项</a>
* <a href="#CSS hack">CSS hack</a>


# <a name="CSS">**CSS**</a>


## <a name="概述">概述</a>
1. CSS 是层叠样式表 ( Cascading Style Sheets ) 的简称。
2. CSS 是一种标记语言，属于浏览器解释型语言，可以直接由浏览器执行，不需要编译。
3. CSS 是用来表现HTML或XML的标记语言。
4. CSS 是由W3C的CSS工作组发布推荐和维护的.
5. CSS 是编程入门人员的必修课，运用CSS样式可以让页面变得美观。
6. CSS语法由三部分构成：选择器、属性和值： selector {property: value} 

CSS的优势
内容与表现分离，有了CSS，网页的内容(XHMTL)与表现就可以分开了。
使用CSS可以减少网页的代码量，增加网页的浏览速度。

## <a name="权重、优先级">权重、优先级</a>
优先级就近原则，同权重情况下样式定义最近者为准;
载入样式以最后载入的定位为准;
1. 内联样式 > 内部样式表 > 外部样式表
2. important > 内联样式 > ID > 类，属性选择器和伪类选择器>元素和伪元素

## <a name="CSS引入的方式">CSS引入的方式? link和@import的区别是?</a>
### CSS引入的方式
1. 内联样式：直接在 HTML 标签中的 style 属性中添加 \<div style=’color:red’></div>
2. 内部样式：写在head中style, \<head>\<style> div{color:red;}\</style>\</head>
3. 外部样式：在head标签中引入外部的 CSS 文件\<head><link rel="stylesheet" href="demo.css"></head>
4. @import: \<style>@import url(style.css);\</style>

### link与@important区别：
1. link是html标签,无兼容性问题;@import是在css2.1提出的，IE5以上才识别。
2. link不只能加载css，还可定义RSS等其；@import属于css范畴，只能加载css。
3. link引入的css与页面同时加载，而@important则需等页面完全载入后再加载
4. linnk支持使用javascript控制dom去改变样式；而@import不支持。

## <a name="盒模型">盒模型</a>
* 定义：
HTML中每个元素都被描绘成一个矩形盒子，这些盒子通过一个模型来描述其占有空间，该模型称为盒模型。盒模型通过四个边界描述:内边距（padding）、外边距(margin)、边框(border)、内容(content)

* 区  别：box-sizing:content-box | border-box 
1. 标准盒子模型(W3C): 宽度 = 内容的宽度（content）+ border + padding + margin;
    box-sizing: content-box; 默认值，border和padding不计算入width之内
2. 怪异盒模型（IE）：  宽度 = 内容宽度（content+border+padding）+ margin
    box-sizing: border-box; border和padding计算入width之内
    
![盒模型](/img/box.png)

## <a name="css选择器">css选择器</a>
#### 
* 通配符选择器(*)
* id选择器（ #myid）
* 类选择器（.myclassname）
* 标签选择器（div, h1, p）
* 相邻选择器（h1 + p）
* 子选择器（ul > li）
* 后代选择器（li a）
* 通用兄弟选择器(E ~ F) //E后面所有的兄弟F 
* 属性选择器（a[rel = "external"]）
* 伪类选择器（a:hover, li:nth-child）
* .....

#### 属性选择器

E[attr]        //E中带有attr属性
E[attr=val]    //E中带有attr属性 且值为 val
E[attr*=val]   //E中带有attr属性 且值包含 val
E[attr^=val]   //E中带有attr属性 且值以 val 开始
E[attr$=val]   //E中带有attr属性 且值以 val 结尾 
E[attr~=val]   //E中带有attr属性 且值具有多个空格分隔的值，其中一个值为val
E[attr|=val]   //E中带有attr属性 且值具有 val 或以 val- 开始的值，常用于lang（lang='en-us'）

#### 伪类  
* 结构伪类：子元素序号从1开始算
>
    E F:first-child        //第一个子元素F
    E F:last-child         //最后一个子元素
    E F:nth-child(n)       //第n个   n=1,2,3....n  //不要带入数组的概念
    E F:nth-last-child(n)  //倒数第n个子元素
    E F:nth-child(odd)     //奇数
    E F:nth-child(2n+1)    //奇数   在表达式中n取值范围：n=0,1,2,3...
    E F:nth-child(even)    //偶数
    E F:nth-child(2n)      //偶数  
    E F:nth-child(-n+5)    //前5个子元素
    E F:nth-last-child(-n+5)//后5个子元素
    E F:nth-child(7n)      //选择7的倍数的E
    E :only-child          //只包含一个子元素

    E F:nth-of-type(n)     //选择指定类型的第n个F
    E F:nth-last-of-type(n)//选择指定类型倒数的第n个F
    E F:first-of-type      //选择指定类型的第1个F
    E F:last-of-type       //选择指定类型的倒数第1个F
    E F:only-of-type       //选择只包含一个同类型的F子元素

* 空伪类
>
    :empty 选择 空元素 。空元素是指没有任何内容的元素，甚至空格都不行。//无内容 无子元素
    :blank 选择 没有子节点、仅有空的文本节点、仅有空白符的文本节点--浏览器不支持

* 目标伪类：
>
    E:target   //表示元素被激活的状态  配合锚点使用
* 排除伪类：
>
    E:not(selector) //除selector（任意选择器）外的元素会被选中；
* 动态伪类：
>
    a:link{...}		选择所有未访问过的超链接
    a:visited{...}	选择所有访问过的超链接
    a:hover{...} 当鼠标悬停于元素上方时  IE6只支持a:hover
    a:active{...} 当元素被激活时
    input:foucs{...} 当元素获得输入焦点  IE7前都不支持
* 语言伪类
>
    E：lang（language） 匹配E的所有指定lang值为language的元素
    状态伪类：
    E:checked 匹配选中的单选和复选按钮表单元素
    E:enabled  匹配所有启动的表单元素
    E:disabled  匹配所有禁用的表单元素

#### 伪元素
    E::before{content:"";......}
    E::after{content:"";......}
    E::first-letter     //选中第一个单词、字
    E::first-line     //选中第一行的伪元素
    E::selection       //选中的区域 

## <a name="哪些属性可继承">哪些属性可继承</a>
* 不可继承的样式：
>
    border 、padding、 margin、 width 、height、position、
    a标签不能继承父元素中的文字颜色（层叠掉了）
    h1-h6 标题标签不能继承父元素中的文字大小
* 可继承的样式：
>
    font- (font-family、font-size、 ...)
    line- (line-height ...)
    text- (text-align,text-indent,text-transform,text-shadow ...)
    letter-spacing
    word-break
    word-spacing
    white-space
    color
    visibility
    cursor

* font属性:
>
    font: font-style  font-weight  font-size/line-height  font-family;
    一定按照书写顺序。font-size和font-family必须，其他可选 
    font-style: normal | italic;      normal 默认值  italic  斜体
    font-weight: 700; 文字粗细  值从100-900，不推荐使用font-weight:bold;
    font-size:16px;  文字大小
    如：font:italic 700 16px/40px  微软雅黑;


## <a name="zIndex">堆叠上下文(stacking context )z-index</a>
"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context

概述：
>
主要用来比较一个拥有定位元素（position不为static）的元素的z轴层叠关系（z-index）。
同一个层叠上下文中，层叠级别（即z-index属性值）大的显示在上面。
同一个层叠上下文中，层叠级别相同的两个元素，依据它们在HTML文档流中的顺序，写在后面的会覆盖前面的。

层叠上下文的层级是 HTML 元素层级的一个层级，因为只有某些元素才会创建层叠上下文。可以这样说，没有创建自己的层叠上下文的元素 将被父层叠上下文包含。

满足以下任一条件即可形成：
>
    1. z-index 值不为 "auto"的 绝对/相对定位，
    2. z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，
    3. opacity值 < 1
    4. transform 属性值不为 none
    5. position: fixed
    6. filter值不为 none
    7. perspective值不为“none”的元素，
    8. isolation 属性被设置为 "isolate"的元素，
    9. mix-blend-mode 属性值不为 normal
    10. 在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
    -webkit-overflow-scrolling 属性被设置 "touch"的元素

在层叠上下文中，其子元素同样也按照上面解释的规则进行层叠。 特别值得一提的是，其子元素的 z-index 值只在父级层叠上下文中有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。

z-index不起作用情况：
>
    1、父标签 position属性为relative；
    2、问题标签无position属性（不包括static）；
    3、问题标签含有浮动(float)属性。

总结:
>
    给一个 HTML 元素定位和 z-index 赋值创建一个层叠上下文，（opacity 值不为 1 的也是相同）。
    层叠上下文可以包含在其他层叠上下文中，并且一起创建一个有层级的层叠上下文。
    每个层叠上下文完全独立于它的兄弟元素：当处理层叠时只考虑子元素。
    每个层叠上下文是自包含的：当元素的内容发生层叠后，整个该元素将会 在父层叠上下文中 按顺序进行层叠。

## <a name="BFC">块级格式化上下文(BFC)</a>
* 概述：BFC(Block Formatting Context)是Web页面中盒模型布局的CSS渲染模式。它的定位体系属于常规文档流。

* BFC形成条件：
2. float的值不为none
3. position的值不为static或relative
4. overflow的值不为visible
5. display的值为 inline-block | flex | inline-flex | table-cell | table-caption |

* BFC的布局规则
1. 内部的元素会在垂直排列，可以理解为是BFC中的一个常规流
2. 元素垂直方向的距离由margin决定，属于同一个BFC的两个相邻盒子的margin可能会发生重叠
3. 每个元素的左外边距与包含块的左边界相接触(从左往右，否则相反)，即使存在浮动也是如此，说明BFC中的子元素不会超出它的包含块
4. BFC的区域不会与float元素区域重叠叠
5. 计算BFC的高度时，浮动子元素也参与计算
6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

* BFC的作用
1. 不和浮动元素重叠：
>
    如果一个浮动元素后面跟着一个非浮动的元素，那么就会产生一个覆盖的现象。清除元素内部浮动，只要把父元素设为BFC就可以清理子元素的浮动了，最常见的用法就是在父元素上设置overflow: hidden样式，对于IE6加上zoom:1就可以了(IE Haslayout)。
2. 解决margin边距折叠问题
>
    按照BFC的定义，只有同属于一个BFC时，两个元素才有可能发生垂直Margin的重叠，这个包括相邻元素，嵌套元素，只要他们之间没有阻挡(例如边框，非空内容，padding等)就会发生margin重叠。

    因此要解决margin重叠问题，只要让它们不在同一个BFC就行了，但是对于两个相邻元素来说，意义不大，没有必要给它们加个外壳，但是对于嵌套元素来说就很有必要了，只要把父元素设为BFC就可以了。这样子元素的margin就不会和父元素的margin发生重叠了。
3. 防止文字环绕（给环绕元素添加BFC）
4. 在多列布局中使用BFC（最后一个子元素添加BFC）
>
    如果我们正在创建的一个多列布局占满了整个容器的宽度，在某些浏览器中最后一列有时候将会被挤到下一行。会发生这样可能是因为浏览器舍入（取整）了列的宽度使得总和的宽度超过了容器的宽度。然而，如果我们在一个列的布局中建立了一个新的BFC，它将会在前一列填充完之后的后面占据所剩余的空间

* 清除浮动
    .clearfix:after,.clearfix:before{
      content: " ";
      display: block;
      height: 0;
      line-height:0;
      clear: both;
      overflow: hidden;
      visibility: hidden;
    }
    .clearfix {zoom: 1;}

## <a name="display、visibility、overflow">display、visibility、overflow的隐藏问题</a>
* display：block | none | inline | table….. 
* overflow : visible | auto | hidden | scroll
      visible:不处理,  auto:默认属性    
      hidden:溢出隐藏, scroll:总是显示滚动条 

* visibility : inherit | visible | hidden|collapse
    inherit:继承
    visible:可视
    hidden:隐藏
    collapse: 主要用来隐藏表格的行或列。隐藏的行或列能够被其他内容使用。其他对象，等同于hidden。

### 三种隐藏方式差别:visibility:hidden,display:none,opacity:0
* 渲染上的差异:
1. display:none:隐藏且不占空间，会导致浏览器的回流和重绘。
2. visibility为hidden:隐藏但占空间，只会导致浏览器重绘而不会回流。
3. opacity:0,隐藏但占空间, 不重绘也不回流

* 事件绑定的差异
1. display:none：元素彻底消失，不会触发绑定的事件.
2. visibility:hidden：无法触发其点击事件
3. opacity:0：可以触发点击事件。设置元素透明度为0后，元素只是相对于人眼不存在而已，对浏览器来说，它还是存在的，所以可以触发绑定事件

* 动画属性的差异
1. display:none：完全不受transition属性的影响，元素立即消失
2. visibility：hidden：元素消失的时间跟transition属性设置的时间一样，但是没有动画效果.
3. opacity:0,动画属性生效,能够进行正常的动画效果.


## <a name="line-hieght">line-hieght</a>
定义：两行文字基线之间的距离。//不同字体之间的基线是不同的。

line-height:normal   | <number>  | <lenght>  |  <percent>  |  inherit;
>
    单独给一个标签设行高       结果
    行高单位px           行高与文字大小无关
    行高单位em           行高=文字大小*行高值
    行高单位%            行高=文字大小*行高值
    行高无单位           行高=文字大小*行高值
>
    父元素设行高       子元素行高 font-size
    行高单位px      行高=父元素行高
    行高单位em      行高=父元素文字大小*行高值（与子元素文字大小无关）
    行高单位%       行高=父元素文字大小*行高值（与子元素文字大小无关）
    行高单位无      行高=子元素大小*行高值


## <a name="文本换行">文本换行</a>
强制不换行
white-space:nowrap;

正常文字的换行(亚洲文字和非亚洲文字)
white-space:normal;

自动换行
word-wrap: break-word; 
word-break: break-all; 
white-space:normal;

强制英文单词断行
word-break:break-all;


;

## <a name="尺寸单位">像素定义 尺寸单位</a>
#### 像素
>
    window.devicePixelRatio是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。
    设备像素比 = 物理像素 / 设备独立像素 // 在某一方向上，x方向或者y方向
    window.devicePixelRatio = 物理像素 / dips

    window.devicePixelRatio获取到当前设备的dpr
    -webkit-device-pixel-ratio，-webkit-min-device-pixel-ratio和  -webkit-max-device-pixel-ratio进行媒体查询

    普通密度桌面显示屏的devicePixelRatio=1
    高密度桌面显示屏(Mac Retina)的devicePixelRatio=2
    主流手机显示屏的devicePixelRatio=2或3


* DPR(device pixel ratio) 设备像素比
* DIPS(device-independent pixels) CSS像素是一个抽象概念，设备无关像素
* DPI(dots per inch) 为打印机每英寸可以喷的墨汁点数，用于印刷行业中度量空间点的密度
* PPI(pixels per inch)为屏幕每英寸的像素数量(即在一个对角线长度为1英寸的正方形内所拥有的像素数)，用于度量计算机显示屏上像素的密度。目前PPI(主要是iOS)和DPI(比如在Android中)都会用在计算机显示设备的参数描述中，并且二者的意思是一样的，都是代表像素密度

#### 尺寸单位
>
    %: 占父元素的百分比
    px: 像素，指屏幕上的一个点  .绝对尺寸单位，其值是固定的
    em: 相对单位， 标准字体大小的倍率 ,继承父级元素的字体大小，如果元素的 font-size 为 14px ，那么 1em = 14px；如果 font-size 为 18px，那么 1em = 18px
    rem: 相对单位，相对于根元素 html 的 font-size
    rpx: 微信小程序相对单位。1rpx = 屏幕宽度/750 px。在 750px 的设计稿上,1rpx = 1px
    vw、vh、vmin、vmax:

vw、vh、vmin、vmax 的含义

    vw、vh、vmin、vmax 是一种视窗单位，也是相对单位。它相对的不是父节点或者页面的根节点。而是由视窗（Viewport）大小来决定的，单位 1. 代表类似于 1%。

    视窗(Viewport)是你的浏览器实际显示内容的区域—，换句话说是你的不包括工具栏和按钮的网页浏览器。

    vw: 视窗高度的百分比; 1vw 等于1/100的视口宽度。  视口宽度750px, 1vw = 750px/100 = 7.5 px。
    vh: 视窗宽度的百分比; 1vh 等于1/100的视口高度。浏览器高度900px, 1 vh = 900px/100 = 9 px。
    vmin 、vmax：关于视口高度和宽度两者的最小或者最大值。比如，浏览器的宽度设置为1100px，高度设置为700px， 1vmin = 7px， 1vmax = 11px。

    vmin、vmax 用处
    做移动页面开发时，如果使用 vw、wh 设置字体大小（比如 5vw），在竖屏和横屏状态下显示的字体大小是不一样的。
    由于 vmin 和 vmax 是当前较小的 vw 和 vh 和当前较大的 vw 和 vh。这里就可以用到 vmin 和 vmax。使得文字大小在横竖屏下保持一致。

vw、vh 与 % 百分比的区别
>

    % 是相对于父元素的大小设定的比率，vw、vh 是视窗大小决定的。
    vw、vh 优势在于能够直接获取高度，而用 % 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度。


## <a name="注意事项">注意事项</a>

1. margin的top、bottom及padding的top、bottom使用百分比作为单位时，是相对父元素的宽度width的而不是高度height；
2. 含有定位属性的元素，其top、bottom单位为百分比时，是相对于父元素的高度的。left、right则是相对于父元素的宽度的。
3. 边框宽度不允许使用百分比值
4. 当子元素是绝对定位，子元素设置width:100%实际上指的是相对于父容器的padding+content的宽度。
   当子元素是非绝对定位，子元素设置width:100%才是指子元素的 content ，其等于父元素的 content宽度。
5. line-height有单位时，子元素是继承父元素的line-height的，
    无单位时，其line-height等于无单位的数值乘以子元素本身的字体大小
6. 使用calc时运算符之间要有空格 ，否则可能无效 


## <a name="省略号">省略号</a>

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


## <a name="CSS hack">CSS hack</a>

[CSS hack](https://blog.csdn.net/freshlover/article/details/12132801)




# 其他

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


## <a name=""></a>
## <a name=""></a>
## <a name=""></a>