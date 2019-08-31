# 链接
https://github.com/chokcoco/CSS-Inspiration

[You-Dont-Need-JavaScript](https://github.com/you-dont-need/You-Dont-Need-JavaScript)CSS实现效果而不需要JS

[CSS tricks](https://css-tricks.com/)

[常见的CSS图形](https://codepen.io/chenzong24635/pen/xQNyzg)

UI框架

[Bootstrap](http://www.bootcss.com/)

[vux](https://doc.vux.li/zh-CN/)

[mint-ui](http://mint-ui.github.io/docs/#/)

[Element](http://element-cn.eleme.io/#/zh-CN/component/installation)

[jqweui](http://jqweui.com/components)

[WeUI ](https://weui.io/)

动画

[animate.css](https://daneden.github.io/animate.css/) +
[WOW.js](http://www.dowebok.com/demo/131/)

[AniJS.js](http://anijs.github.io/)基于 CSS3 的动画库

[Vivus](http://maxwellito.github.io/vivus) 一款可以执行SVG路径动画的轻量级JS库


[imagehover](http://www.imagehover.io/) 允许您轻松实现可缩放的图像悬停效果。从CSS库中选择超过40种悬停效果类，重量仅为19KB。



CSS布局、居中

[Flex](https://yoksel.github.io/flex-cheatsheet/)

[Flex](http://caibaojian.com/flexbox-guide.html)

[Grid](http://grid.guide/)
[Grid](https://zhuanlan.zhihu.com/p/33030746)
[Grid](https://www.html.cn/archives/8510)

[CSS布局](http://zh.learnlayout.com/)

[CSS布局-个人笔记](http://htmlpreview.github.io/?https://github.com/chenzong24635/Notes/blob/master/css布局.html)

[CSS居中-个人笔记](http://htmlpreview.github.io/?https://github.com/chenzong24635/Notes/blob/master/css居中.html)

[CSS水平垂直居中](http://howtocenterincss.com/) 根据要求生成代码

[三列布局](http://www.cnblogs.com/xiaohuochai/p/5455905.html)

手册  

[CSS 教程手册](https://www.html.cn/book/css/)

[css手册](http://css.cuishifeng.cn/)

[css手册](http://css.doyoe.com/)

[雪碧图生成](https://www.toptal.com/developers/css/sprite-generator)

# 目录

* <a href="#CSS">**CSS**</a>

* <a href="#概述">概述</a>
* <a href="#权重、优先级">权重、优先级</a>
* <a href="#CSS引入的方式">CSS引入的方式有哪些? link和@import的区别是? 如何避免FOUC?</a>
* <a href="#盒模型">盒模型</a>
* <a href="#文字、盒子阴影">文字、盒子阴影</a>

* <a href="#百分数相对于width">padding/margin-top/bottom的百分数相对于width</a>
* <a href="#css选择器">css选择器</a>
* <a href="#哪些属性可继承">哪些属性可继承</a>
* <a href="#zIndex">堆叠上下文(stacking context )z-index</a>
* <a href="#BFC">块级格式化上下文(BFC)、行内格式化上下文(IFC)</a>
* <a href="#float特性">float特性</a>
* <a href="#display、visibility、overflow">display、visibility、overflow的隐藏问题</a>
* <a href="#line-hieght">line-hieght</a>
* <a href="#文本换行">文本换行</a>
* <a href="#尺寸单位">像素定义 尺寸单位</a>
* <a href="#css自定义属性">css自定义属性:root</a>
* <a href="#省略号">省略号</a>
* <a href="#移动端1px">移动端1px</a>
* <a href="#注意事项">注意事项</a>
* <a href="#用CSS开启硬件加速来提高网站性能">用CSS开启硬件加速来提高网站性能</a>
* <a href="#@规则">@规则</a>
* <a href="#CSS hack">CSS hack</a>
* <a href="#input placeholder颜色兼容">input placeholder颜色兼容</a>
* <a href="#border:solid">边框</a>
* <a href="#渐变">linear-gradient </a>



* <a href="#其他">**其他**</a>

# <a name="CSS">**CSS**</a>


## <a name="概述">概述</a>
CSS 是层叠样式表 ( Cascading Style Sheets ) 的简称。  
CSS 是一种标记语言，属于浏览器解释型语言，可以直接由浏览器执行，不需要编译。  
CSS 是用来表现HTML或XML的标记语言。  
CSS 样式可以让页面变得美观。  
CSS 语法由三部分构成：选择器、属性和值; selector {property: value} 

CSS的优势：
>
    内容与表现分离，有了CSS，网页的内容(XHMTL)与表现就可以分开了。
    使用CSS可以减少网页的代码量，增加网页的浏览速度。

## <a name="权重、优先级">权重、优先级</a>
>

    内联样式 > 内部样式表 > 外部样式表  
    !important > 内联样式 > ID > class > tag  
    权值            1000       100   10     1

    max-width、mix-width、max-height、min-height等条件属性是可以覆盖!important的

    同权重下样式定义最近者为准
    载入样式以最后载入的定位为准;


## <a name="CSS引入的方式">CSS引入的方式? link和@import的区别是? 如何避免FOUC？</a>
### CSS引入的方式
>
    内联样式：直接在 HTML 标签中的 style 属性中添加 <div style=''>
    内部样式：写在head中style, <head><style> div{}</style></head>  
    外部样式：在head标签中引入外部的 CSS 文件<head><link rel="stylesheet" href="demo.css"></head>  
    @import: <style>@import url(style.css);</style>

### link与@important区别：
>
    link是html标签,无兼容性问题;@import是在css2.1提出的，IE5以上才识别。 
    link不只能加载css，还可定义RSS等其；@import属于css范畴，只能加载css。  
    link引入的css与页面同时加载，而@important则需等页面完全载入后再加载。  
    linnk支持使用javascript控制dom去改变样式；而@import不支持。

### FOUC（文档样式短暂失效）
Flash Of Unstyled Content：文档样式短暂失效; 用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。

原因：
>
    使用import方法导入样式表。
    将样式表放在页面底部
    有几个样式表，放在html结构的不同位置。其实原理很清楚：当样式表晚于结构性html加载，当加载到此样式表时，页面将停止之前的渲染。此样式表被下载和解析后，将重新渲染页面，也就出现了短暂的花屏现象

解决方法：
>
    使用link标签将样式表放在head中

## <a name="盒模型">盒模型</a>
* 定义：
HTML中每个元素都被描绘成一个矩形盒子，这些盒子通过一个模型来描述其占有空间，该模型称为盒模型。盒模型通过四个边界描述:内边距（padding）、外边距(margin)、边框(border)、内容(content)

* 区  别：box-sizing:content-box | border-box 
1. 标准盒子模型(W3C):  
    宽度 = 内容的宽度（content）+ border + padding + margin;  
    box-sizing: content-box; 默认值，border和padding不计算入width之内
2. 怪异盒模型（IE）: 
    宽度 = 内容宽度（content+border+padding）+ margin  
    box-sizing: border-box; border和padding计算入width之内
    
![盒模型](/img/box.png)

盒模型相关的周边问题
>
    内联元素，例如<a>、<span>等，定义上下边界不会影响到行高（line-height），内联元素距离上一行元素的距离由行高决定，而不是填充或边界
    margin的边界合并
    inline-block元素之间的小空白
        原因为：HTML 中的换行符、空格符、制表符等合并为空白符, 字体大小不为 0 的情况下, 空白符自然占据一定的宽度, 因此产生了元素间的空隙.
        解决方案：
          可以为inline-block元素设置为负的margin-left;
          父元素font-size设置为0, 子元素再重新设置回来;
          直接在HTML文档里改变文本排列，使行间元素尾标签和下一个头便签间不留任何空格，如<span>第一个元素</span><span>第二个元素</span>

## <a name="文字、盒子阴影">文字、盒子阴影</a>
文字阴影：text-shadow 
>
    text-shadow:h-shadow v-shadow blur  color
                 水平位移 垂直位移  模糊程度  阴影颜色;
    //正值向右、下 ， 负值向左、上 ;模糊度不能为负值;
    //可以设置多个阴影 用逗号隔开

    .tu{ text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000; } //凸
    .ao{ text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff; } //凹

盒子阴影box-shadow
>
    box-shadow: h-shadow v-shadow blur spread color inset;
    值	说明
    h-shadow	必需的。水平阴影偏移量。正值：阴影在元素右边；负值：阴影在元素左边
    v-shadow	必需的。垂直阴影偏移量。正值：阴影在元素底部；负值：阴影在元素顶部
    blur	可选。模糊距离  
    spread	可选。阴影的大小  正值：阴影扩大；负值：阴影缩小
    color	可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表
    inset	可选。从外层的阴影（开始时）改变阴影内侧阴影


## <a name="百分数相对于width">为什么padding/margin-top/bottom的百分数相对于width？</a>
CSS权威指南中的解释：
>
    正常流中的大多数元素都会足够高以包含其后代元素（包括外边距），如果一个元素的上下外边距时父元素的height的百分数，就可能导致一个无限循环，父元素的height会增加，以适应后代元素上下外边距的增加，而相应的，上下外边距因为父元素height的增加也会增加，如果循环。


## <a name="css选择器">css选择器</a>
#### 
* 通配符选择器(*)
* id选择器（ #myid）
* class选择器（.myclass）
* 标签选择器（div, h1, p）
* 子代选择器（div > p）
* 后代选择器（div p）
* 相邻选择器（div + p）紧挨div后面的第一个p（必须紧挨着div，若中间隔着其他标签不生效,包括script、style标签）
* 通用兄弟选择器(div ~ p) //div后面所有的兄弟p
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
>
    是基于元素的特征而不是他们的id、class、属性或者内容。一般来说，元素的特征是不可以从DOM树上推断得到的，而且其是动态的，当用户和DOM进行交互的时候，元素可以获得或者失去一个伪类。
    伪类其实就是基于普通DOM元素而产生的不同状态，他是DOM元素的某一特征

* 结构伪类：
>
    E:first-child        //第一个子元素F  
    E:last-child         //最后一个子元素  
    E:nth-child(n)       //第n个 n=1,2,3...n ;  
    E:nth-last-child(n)  //倒数第n个子元素 n=1,2..
    E:nth-child(odd)     //奇数  
    E:nth-child(2n+1)    //奇数 在表达式中n取值范围：n=0,1,2..  
    E:nth-child(even)    //偶数 n=1,2.. 
    E:nth-child(2n)      //偶数 n=1,2.. 
    E:nth-child(-n+5)    //前5个子元素   n=0,1..
    E:nth-last-child(-n+5)//后5个子元素  n=0,1..
    E:nth-child(7n)      //选择7的倍数的E  n=0,1..
    E:only-child          //只包含一个子元素    

    E:first-of-type      //选择指定类型的第1个F  
    E:last-of-type       //选择指定类型的倒数第1个F  
    E:nth-of-type(n)     //选择指定类型的第n个F  
    E:nth-last-of-type(n)//选择指定类型倒数的第n个F  
    E:only-of-type       //选择只包含一个同类型的F子元素  

* 空伪类
>
    E:empty 选择 空元素 。空元素是指没有任何内容的元素，甚至空格都不行。//无内容 无子元素  

    E:blank 选择 没有子节点、仅有空的文本节点、仅有空白符的文本节点--浏览器不支持

* 目标伪类：
>
    E:target   //表示元素被激活的状态  配合锚点使用
    
* 排除伪类：
>
    E:not(selector) //除selector（任意选择器）外的元素会被选中；

* 动态伪类：
>
    a:link{...} 选择所有未访问过的超链接  
    a:visited{...} 选择所有访问过的超链接  
    a:hover{...} 当鼠标悬停于元素上方时  
    a:active{...} 当元素被激活时  

    input:foucs{...} 当元素获得输入焦点    

    css书写顺序 link visited hover active 不然有些效果不会呈现

* 语言伪类
>
    E:lang 匹配E的所有指定lang值为language的元素
    状态伪类： 
    E:checked 匹配选中的单选和复选按钮表单元素  
    E:enabled  匹配所有启动的表单元素  
    E:disabled  匹配所有禁用的表单元素  

#### 伪元素
>
    是创造文档树之外的对象。例如文档不能提供访问元素内容第一字或者第一行的机制。伪元素还提供一些在源文档中不存在的内容分配样式，例如:before和:after能够访问产生的内容。伪元素的内容实际上和普通DOM元素是相同的，但是它本身只是基于元素的抽象，并不存在于文档中，所以叫伪元素。
>
    E::before{content:"";......}
    E::after{content:"";......}
    E::first-letter     //选中第一个单词、字
    E::first-line     //选中第一行的伪元素
    E::selection       //选中的区域 
    E::placeholder  //设置placeholder样式-- IE不支持
    //兼容写法
        ::-webkit-input-placeholder {//chrome
            color: red;
        }
        :-ms-input-placeholder { //ie
            color: red;
        }
        ::-moz-placeholder { //ff
            color: red;
        }

css2伪类和伪元素都是用单冒号，所有的浏览器都兼容，
但是css3伪类为单冒号如:hover ，伪元素为双冒号::before；但是双冒号IE8以下不兼容


## <a name="CSS书写顺序">CSS书写顺序、规范</a>
书写顺序
>
    1.位置属性(position, top, right, z-index,display, float等)　　
    2.大小(width, height, padding, margin,border)
    3.文字系列(font, line-height, letter-spacing,color- text-align等)
    4.背景 颜色(background, color等)
    5.其他(animation, transition等)

书写规范
>
    属性缩写
    去掉小数点前的 0

## <a name="哪些属性可继承">哪些属性可继承</a>
* 不可继承的样式：
>
    border 、padding、 margin、 width 、height、position、
    a标签不能继承父元素中的color（被浏览器默认样式给覆盖）（解决：a{color:inherit} ）
    h1-h6 标题标签不能继承父元素中的font-size,font-weight

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

    font-weight:
        normal	默认值。标准的字符。
        bold	粗体字符。
        bolder	更粗的字符。
        lighter 更细的
        inherit	继承
        100-900 (400 等同于 normal，700 等同于 bold)

    font-size:16px;  文字大小

    如：font:italic 700 16px/40px  微软雅黑;


## <a name="zIndex">堆叠上下文(stacking context )z-index</a>
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)

[z-index堆叠规则](https://www.cnblogs.com/starof/p/4424926.html)

### 概述：
>
主要用来比较一个拥有定位元素（position不为static）的元素的z轴层叠关系（z-index）。
同一个层叠上下文中，层叠级别（即z-index属性值）大的显示在上面。
同一个层叠上下文中，层叠级别相同的两个元素，依据它们在HTML文档流中的顺序，写在后面的会覆盖前面的。

层叠上下文的层级是 HTML 元素层级的一个层级，因为只有某些元素才会创建层叠上下文。可以这样说，没有创建自己的层叠上下文的元素 将被父层叠上下文包含。

满足以下任一条件即可形成：
>
    z-index 值不为 "auto"的 绝对/相对定位， 
    position: fixed | sticky  
    z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素display: flex|inline-flex， 
    opacity值 < 1  
    transform 属性值不为 none  
    filter值不为 none
    perspective值不为“none”的元素，
    isolation 属性被设置为 "isolate"的元素，  
    mix-blend-mode 属性值不为 normal
    在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值  
    -webkit-overflow-scrolling 属性被设置 "touch"的元素  

在层叠上下文中，其子元素同样也按照上面解释的规则进行层叠。 
<b>其子元素的 z-index 值只在父级层叠上下文中有意义</b>。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。(每个层叠上下文完全独立于它的兄弟元素：当处理层叠时只考虑子元素。)


### 层叠顺序-优先级
* 不使用z-index的情况，也是默认的情况，即所有元素都不用z-index时，堆叠顺序如下：（低-->高)
>

    根元素（即HTML元素）的background和borders <
    正常流中非定位后代元素(没定位层级较有定位的低) <   
        总是先于定位元素渲染，所以表现就是在定位元素下方，跟在HTML中出现的顺序无关。 
    浮动元素(浮动元素之间是不会出现z-index重叠的) <
    有定位后代元素(有定位 越靠后出现 层级越高)  
        没有指定z-index值的定位元素，他们的堆叠顺序取决于在HTML文档中的顺序，越靠后出现的元素，位置越高，和定位属性无关。  



![不使用z-index](img/zIndex1.png)
分析：
>
    #5没有定位，处于正常流，所以根据以上规则，先于#1,#2,#3,#4这些已定位元素渲染，在最下方。

    #1，#2，#3，#4都是已定位元素，且未设置z-index，所以根据其在文档中出现的顺序依次被渲染，可以去掉apacity查看清晰效果。

* 使用z-index
z-index只适用于已经定位的元素
>
    定位元素z-index越大 层级越高（限同一父元素）
    定位元素与浮动元素（先看zindex，越大越高；若相同，再看其在html顺序，越后越高）

![zindex](img/zIndex2.png)

### z-index不起作用情况：
>
    1、父标签 position属性为relative；（改为position:absolute；）
    2、问题标签无position属性,不包括static (添加position属性)
    3、问题标签含有浮动(float)属性。(去除浮动)


## <a name="BFC">块级格式化上下文(BFC) 、行内格式化上下文(IFC)</a>
格式化上下文即Formatting context，它是指页面上的一个局部独立渲染区域，根据Formatting context中包含的是元素类型的不同，分为块级格式上下文BFC和行内格式化上下文IFC，

### BFC
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

* 概述：BFC(Block Formatting Context)是Web页面中盒模型布局的CSS渲染模式。它的定位体系属于常规文档流。

* BFC形成条件：
1. 根元素 html
2. float的值不为none
3. position的值为absolute或fixed（不为static或relative或sticky）
4. overflow的值不为visible( hidden,scroll,auto, )
5. display的值为 inline-block | flex | inline-flex | grid | inline-grid | table | table-cell | table-caption |  
6. display值为 flow-root
7. 多列容器（元素的colunm-count或column-width不为auto，包括column-count为1）
.....

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
    如果一个浮动元素后面跟着一个非浮动的元素，那么就会产生一个覆盖的现象。清除元素内部浮动，只要把父元素设为BFC就可以清理子元素的浮动了，最常见的用法就是在父元素上设置overflow: hidden样式 
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

### IFC 
行内格式化上下文IFC(Inlinel Formatting context)

布局规则：
>
    子元素水平方向横向排列，并且垂直方向起点为元素顶部。
    在垂直方向上，子元素会以不同形式来对齐（vertical-align）。
    能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。
    IFC中的“line box”一般左右边贴紧其包含块，但float元素会优先排列。
    IFC中的“line box”高度由 CSS 行高计算规则来确定，同个IFC下的多个line box高度可能会不同。
    当 inline-level boxes的总宽度少于包含它们的line box时，其水平渲染规则由 text-align 属性值来决定。
    当一个“inline box”超过父元素的宽度时，它会被分割成多个boxes，这些 oxes 分布在多个“line box”中。如果子元素未设置强制换行的情况下，“inline box”将不可被分割，将会溢出父元素。



当一个span里面的内容大于line box的宽度，它的内容自动拆分成两个部分，分布在两行（两个line box）中
>
    <style type="text/css">
        #container{
        width: 100px;
        height: 200px;
        background: gold;
        }
        #container span{
        color: #fff;
        background:#000;
        }
    </style>

    <div id="container">
        <span>This is a span</span>
    </div>

两个span元素的宽度总和已经大于line box的宽度了，但是第二个元素没有进行换行布局。
因为第一个span里面的字符串和第二个span里面的字符串之间不存在空格，因此IFC把他们的内容理解成一个连续的字符串，他们也就成了不可拆分的整体，第二个span也就没有办法进行换行了。

解决方法：
    span间加空格 
    span设置强制换行：word-break;break-all; | word-break: break-word; |  word-wrap: break-word;
>
    #container{
    width: 100px;
    height: 200px;
    background: gold;
    }
    #container span{
    color: #fff;
    background:#000;
    }
    #container span:last-child{
    color: #ff0000;
    background-color: #233;
    }
    <div id="container"><span>inlineinline</span><span>inlineinline</span></div>


## <a name="float特性">float特性</a>
由于float意味着使用块布局，所以它会修改元素的display值（block）。

* 浮动的本意： 让文字像流水一样环绕浮动元素。

* 特性：
>
    包裹性
    高度欺骗

* 规则：
>
    不会超越前面的块元素，仅在本行浮动 
    脱离文档流后，下分的块元素会填充  
    两个浮动元素的垂直外边距将不会折叠 
    浮动后的元素不会影响其他块元素的布局，仅会影响被它覆盖的行内元素  
    浮动盒子的顶部不会超出在html文档中早出现的的块级元素(block)或者是浮动元素的顶部

## <a name="display、visibility、overflow">display、visibility、overflow、opacity的隐藏问题</a>
* display：block | none | inline | table | flex | grid .... 
* overflow : visible | auto | hidden | scroll
      visible:不处理,  auto:默认属性    
      hidden:溢出隐藏, scroll:总是显示滚动条 


* visibility(可见性): inherit | visible | hidden|collapse
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
1. display:none：不会触发绑定的所有事件.
2. visibility:hidden：不会触发其点击事件
3. opacity:0：可以触发点击事件。设置元素透明度为0后，元素只是相对于人眼不存在而已，对浏览器来说，它还是存在的，所以可以触发绑定事件

* 动画属性的差异
1. display:none：完全不受transition属性的影响，元素立即消失
2. visibility：hidden：元素消失的时间跟transition属性设置的时间一样，但是没有动画效果.
3. opacity:0,动画属性生效,能够进行正常的动画效果.


## <a name="line-hieght">line-hieght</a>
定义：两行文字基线之间的距离。//不同字体之间的基线是不同的。
>
    line-height:normal  | <number>  | <lenght>  |  <percent>  |  inherit;
      
>
|父元素设行高   | 子元素行高 font-size |
|:---|:---|
|行高单位px     | 行高=父元素行高
|行高单位em、%  | 行高=父元素文字大小*行高值（与子元素文字大小无关）
|行高单位无     | 行高=子元素大小*行高值

## <a name="文本换行">文本换行</a>
强制不换行
>
    white-space:nowrap;

正常文字的换行(亚洲文字和非亚洲文字)
>
    white-space:normal;

强制英文单词断行
>
    word-break:break-all;

自动换行
>
    word-wrap: break-word; 
    word-break: break-all; 
    //white-space:normal;

white-space
>
    normal: 忽略/合并空白(默认值)
    pre: 保留空白，如同<pre>的行为
    nowrap: 忽略/合并空白，文本不会换行，直到遇到<br/>
    pre-wrap: 保留空白，但是会正常地进行换行
    pre-line: 忽略/合并空白，但是会正常地进行换行
    inherit: 从父元素继承。

word-wrap
>
    normal: 只在允许的断字点换行(默认值)
    break-word: 在长单词或URL地址内部进行换行

word-break
>  
    normal:依照亚洲和非亚洲语言的文本规则，允许在单词内换行。(默认值)
    keep-all:让亚洲语言文本如同非亚洲语言文本那样不允许在任意单词内换行。
    break-all:允许非亚洲语言文本行如同亚洲语言文本那样可以在任意单词内换行。

## <a name="尺寸单位">像素定义 尺寸单位</a>
#### 像素
https://blog.csdn.net/qq_42704649/article/details/86507883

https://www.cnblogs.com/ranyonsue/p/6795943.html
>
    在CSS中我们一般使用px作为单位，需要注意的是，CSS样式里面的px和物理像素并不是相等的。CSS中的像素只是一个抽象的单位，在不同的设备或不同的环境中，CSS中的1px所代表的物理像素是不同的。在PC端，CSS的1px一般对应着电脑屏幕的1个物理像素，但在移动端，CSS的1px等于几个物理像素是和屏幕像素密度有关的。


##### 物理像素(physical pixel)
>
    一个物理像素是显示器(手机屏幕)上最小的物理显示单元，在操作系统的调度下，每一个设备像素都有自己的颜色值和亮度值。

##### 设备独立像素(DIP, DP)(density-independent pixel)
>
        设备独立像素(也叫密度无关像素)，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: css像素)，然后由相关系统转换为物理像素。

##### 设备像素比(DPR)(device pixel ratio) 

    定义了物理像素和设备独立像素的对应关系
>
    window.devicePixelRatio获取到当前设备的dpr

    设备像素比 = 物理像素 / 设备独立像素 // 在某一方向上，x方向或者y方向

    媒体查询判断当前设备的dpr：
    -webkit-device-pixel-ratio,
    -webkit-min-device-pixel-ratio,  -webkit-max-device-pixel-ratio
>
    普通密度桌面显示屏的DPR = 1
    高密度桌面显示屏(Mac Retina)的DPR = 2
    主流手机显示屏的DPR = 2 | 3

##### DIPS(device-independent pixels) CSS像素是一个抽象概念，设备无关像素

#####  DPI(dots per inch) 
>
    为打印机每英寸可以喷的墨汁点数，用于印刷行业中度量空间点的密度

#####  PPI(pixels per inch)像素密度
>
    为屏幕每英寸的像素数量(即在一个对角线长度为1英寸的正方形内所拥有的像素数)，用于度量计算机显示屏上像素的密度。目前PPI(主要是iOS)和DPI(比如在Android中)都会用在计算机显示设备的参数描述中，并且二者的意思是一样的，都是代表像素密度


##### CSS像素(CSS Pixels)
>

    CSS像素(CSS Pixels)是WEB编程中诞生的概念，用于定于浏览器中每个模型不同CSS的值大小。由于CSS像素（CSS Pixels）是个逻辑性的像素，而非物理性的像素，所以1个CSS像素在不同设备上大小可能会有不同。

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


## <a name="css自定义属性">css自定义属性</a>
<b>IE不支持</b>

* 特点：
>
    自定义元素的定义由 -- 开头(如：--a,--a--b, ....)，这样浏览器能够区分自定义属性和原生属性，从而将它俩分开处理。 

    可以在:root中定义全局变量; :root{--color:red}
    也可在别的作用域定义局部变量; div{--color:red}

    对大小写敏感：--color 与 --COLOR 不同

    可以级联继承 

* 获取方式
>
    css：var() 方法获取值: var(--my--color)
        支持第二个参数: var(--my-color, green) 当--my--color不存在或不起作用时应用

    js：window.getComputedStyle(element)的getPropertyValue方法获取属性值  
        el.style.setProperty来设置属性值
>
    例子
    :root{
        --color: green;
    }
    div{
        --div--color: #000;
    }
    .a{
        color: var(--color)
    }
    <div class="a">fsffs</div>
    <script>
        const div = document.querySelector('.a')
        const styles = getComputedStyle(div) //获取所有css样式
        const color = styles.getPropertyValue('--color') //获取属性值
        console.log(color) //--> red
        div.style.setProperty('--color', 'green') //设置属性值
    </script>


## <a name="用CSS开启硬件加速来提高网站性能">用CSS开启硬件加速来提高网站性能</a>
#### 何为硬件加速

就是将浏览器的渲染过程交给GPU处理，而不是使用自带的比较慢的渲染器。这样就可以使得animation与transition更加顺畅。

我们可以在浏览器中用css开启硬件加速，使GPU (Graphics Processing Unit) 发挥功能，从而提升性能

现在大多数电脑的显卡都支持硬件加速。鉴于此，我们可以发挥GPU的力量，从而使我们的网站或应用表现的更为流畅。

#### 硬件加速原理

浏览器接收到页面文档后，会将文档中的标记语言解析为DOM树。DOM树和CSS结合后形成浏览器构建页面的渲染树。渲染树中包含了大量的渲染元素，每一个渲染元素会被分到一个图层中，每个图层又会被加载到GPU形成渲染纹理，而图层在GPU中transform 是不会触发 repaint 的，最终这些使用 transform 的图层都会由独立的合成器进程进行处理。

CSS transform 会创建了一个新的复合图层，可以被GPU直接用来执行 transform 操作。

浏览器什么时候会创建一个独立的复合图层呢:
>
    3D 或者 CSS transform
    <video> 和 <canvas> 标签
    CSS filters
    元素覆盖时，比如使用了 z-index 属性
 

#### 为什么硬件加速会使页面流畅

因为 transform 属性不会触发浏览器的 repaint（重绘），而绝对定位absolute中的 left 和 top 则会一直触发 repaint（重绘）。

为什么 transform 没有触发 repaint 呢？简而言之，transform 动画由GPU控制，支持硬件加速，并不需要软件方面的渲染。
 

#### 哪些CSS属性能触发GPU的硬件加速：
>
    transform
    opacity
    filter

#### 如何在桌面端和移动端用CSS开启硬件加速

CSS animations, transforms 以及 transitions 不会自动开启GPU加速，而是由浏览器的缓慢的软件渲染引擎来执行。那我们怎样才可以切换到GPU模式呢，很多浏览器提供了某些触发的CSS规则。

现在，像Chrome, FireFox, Safari, IE9+和最新版本的Opera都支持硬件加速，当它们检测到页面中某个DOM元素应用了某些CSS规则时就会开启，最显著的特征的元素的3D变换。

例如：

.cube {
   -webkit-transform: translate3d(250px,250px,250px)
   rotate3d(250px,250px,250px,-120deg)
   scale3d(0.5, 0.5, 0.5);
}

可是在一些情况下，我们并不需要对元素应用3D变换的效果，那怎么办呢？这时候我们可以使用个小技巧“欺骗”浏览器来开启硬件加速。

虽然我们可能不想对元素应用3D变换，可我们一样可以开启3D引擎。例如我们可以用transform: translateZ(0); 来开启硬件加速 。

.cube {
   -webkit-transform: translateZ(0);
   -moz-transform: translateZ(0);
   -ms-transform: translateZ(0);
   -o-transform: translateZ(0);
   transform: translateZ(0);
   /* Other transform properties here */
}

在 Chrome and Safari中，当我们使用CSS transforms 或者 animations时可能会有页面闪烁的效果，下面的代码可以修复此情况：

.cube {
   -webkit-backface-visibility: hidden;
   -moz-backface-visibility: hidden;
   -ms-backface-visibility: hidden;
   backface-visibility: hidden;
   -webkit-perspective: 1000;
   -moz-perspective: 1000;
   -ms-perspective: 1000;
   perspective: 1000;
   /* Other transform properties here */
}

在webkit内核的浏览器中，另一个行之有效的方法是
.cube {
   -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
   -ms-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
  /* Other transform properties here */
}

原生的移动端应用(Native mobile applications)总是可以很好的运用GPU，这是为什么它比网页应用(Web apps)表现更好的原因。硬件加速在移动端尤其有用，因为它可以有效的减少资源的利用(移动端本身资源有限)。

 

#### 使用硬件加速的问题

1. 内存。如果GPU加载了大量的纹理，那么很容易就会发生内容问题，这一点在移动端浏览器上尤为明显，所以，一定要牢记不要让页面的每个元素都使用硬件加速。

2. 使用GPU渲染会影响字体的抗锯齿效果。这是因为GPU和CPU具有不同的渲染机制。即使最终硬件加速停止了，文本还是会在动画期间显示得很模糊。


#### 总结：

只对我们需要实现动画效果的元素应用以上方法

小心使用这些方法，如果通过你的测试，结果确是提高了性能，你才可以使用这些方法。使用GPU可能会导致严重的性能问题，因为它增加了内存的使用，而且它会减少移动端设备的电池寿命。

 


## <a name="注意事项">注意事项</a>

1. margin的top、bottom及padding的top、bottom使用百分比作为单位时，是相对父元素的宽度width的而不是高度height；
2. 含有定位属性的元素，其top、bottom单位为百分比时，是相对于父元素的高度的。left、right则是相对于父元素的宽度的。
3. 边框宽度不允许使用百分比值
4. 
  当子元素是绝对定位，  子元素设置width:100% = 父容器的padding+content 
  当子元素是非绝对定位，子元素设置width:100% = 父元素的content

5. 使用calc时运算符之间要有空格 ，否则可能无效 


## <a name="省略号">省略号</a>

#### 单行省略号
    .ov1{
      white-space: nowrap; //强制文本在一行内输出
      overflow: hidden; //隐藏溢出部分
      text-overflow: ellipsis; //对溢出部分加上...
    }

#### 多行省略号
    <!-- 只适用于webkit内核 -->
    .ov2{
      position: relative;
      display: -webkit-box;
      display: -moz-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      word-break: break-all; 
      -webkit-line-clamp: 2;
      -moz-line-clamp: 2;
      /* 防止打包后出现css中文本超出部分隐藏显示省略号失效
         autoprefixer自动移除老式过时的代码 */
      /*! autoprefixer: off */
        -webkit-box-orient: vertical;/*伸缩盒子的子元素排列：从上到下*/
        -moz-box-orient: vertical;
      /* autoprefixer: on */
    }

    <!-- 火狐 -->
    @-moz-document url-prefix() {
      .ov2{max-height: 40px;}
      .ov2::after{
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding-left: 40px;
        /* //以上三个属性，可以后续调整，看要把...放在哪个位置 */
        background: -webkit-linear-gradient(left, transparent, #fff 55%);
        background: -o-linear-gradient(right, transparent, #fff 55%);
        background: -moz-linear-gradient(right, transparent, #fff 55%);
        background: linear-gradient(to right, transparent, #fff 55%);
        /* 背景色可写成渐变也可写成一样的颜色 */
      }
    }
    
    <!-- IE10、11 -->
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      .ov2{max-height: 36px;}
      .ov2::after{
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding-left: 40px;
        /* 以上三个属性，可以后续调整，看要把...放在哪个位置 */
        background: -webkit-linear-gradient(left, transparent, #fff 55%);
        background: -o-linear-gradient(right, transparent, #fff 55%);
        background: -moz-linear-gradient(right, transparent, #fff 55%);
        background: linear-gradient(to right, transparent, #fff 55%);
      }
    }


## <a name="移动端1px">移动端1px</a>
>

    .border-1px,
    .border-t-1px{
      position: relative;
    }
    .border-t-1px:after{
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      border-top: 1px solid #000;
      /* height: 1px; background-color: #000;*/
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }

    .border-1px:after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid #000;
        width: 200%;
        height: 200%;
        transform: scale(.5);
        -webkit-transform: scale(.5);
        transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
    }
## <a name="@规则">@规则</a>
@charset 
>
    定义样式表中使用的字符编码。它必须写在样式表的最开头且前面不可有别的字符。

    @charset "UTF-8";

@font-face
>
    给网页指定文本字体。
    @font-face {
        font-family: "Test Font";
        src: url("test.ttf");
    }
    body { font-family: "Test Font"}

@import
>
    导入外部CSS样式表文件
    @import url('a.css')

@media
>
    定义在一个或多个设备类型、具体特点和环境的媒体查询来应用样式。

    @media screen and (min-width: 900px) {
    }

@keyframs
>
    通过定义动画序列中的关键帧来控制CSS动画不同步骤的状态。
    @keyframes name{
        from{}
        to{}
    }

@supports
>
    检测规则组的规则是否生效。规则与@media类似
    @supports (display: flex) {
        div {
            display: flex;
        }
    }

@viewport
>
    设置视口（viewport）的特性。

@page
>
    用于在打印文档时修改某些CSS属性。@page规则只能修改margin、orphans、widow 和 page breaks of the document，对其他属性的修改是无效的。
    @page {
        size: 10in 20in;
        margin: 10% 20%;
    }

## <a name="CSS hack">CSS hack</a>
[CSS hack](https://blog.csdn.net/freshlover/article/details/12132801)

//IE6-9
>
    <!--[if IE]>
    <style type="text/css">
    </style>
    <![endif]-->

//IE10、11
>
    <style type="text/css">
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {

      }
    </style>

## <a name="input placeholder颜色兼容">input placeholder颜色兼容</a>
>
    ::-webkit-input-placeholder { color: ; }/*WebKit, Blink, Edge*/
    :-moz-placeholder { color: ; }/*Mozilla Firefox 4 to 18*/
    ::-moz-placeholder { color: ; }/*Mozilla Firefox 19+*/
    :-ms-input-placeholder { color: ; }/*Internet Explorer 10-11 */

## <a name="border:solid">边框</a>
[详情来源](https://www.w3cplus.com/css/css-tips-0904-1.html)

### 其他方法 绘制一个实心边框(border-style:solid)
>
    outline:1em solid #000; //不占用盒模型空间
>    
    box-shadow: 0 0 0 1em #000; //不占用盒模型空间
>    
    {
      padding: 1em;
      background: linear-gradient(to right, #fff, #fff), #000;
      background-clip: content-box, padding-box;
    }
>
    {
        border: 1em solid transparent;
        border-image: linear-gradient(to right, #000, #000) 10% round;
    }    

> 伪元素


### 层叠边框
![层叠边框](/img/border.png)
>
    .div1{
      width: 300px;
      height: 100px;
      margin: 20px auto;
      outline: 10px dashed red;
      box-shadow: 0 0 0 10px #000;
    }
>
    .div2{
      margin: 20px auto;
      width: 300px;
      height: 100px;
      border: 10px dashed;
      background:
        linear-gradient(to top, red, 10px, transparent 10px),
        linear-gradient(to right, red, 10px, transparent 10px),
        linear-gradient(to bottom, red, 10px, transparent 10px),
        linear-gradient(to left, red, 10px, transparent 10px);
      background-origin: border-box;
    }
>    
    .div3{
      margin: 20px auto;
      width: 300px;
      height: 100px;
      border: 10px dashed;
      background: linear-gradient(to top, #fff, #fff), red;
      background-clip: padding-box, border-box;
    }

## <a name="渐变">linear-gradient</a>
[你真的理解CSS的linear-gradient？](https://www.w3cplus.com/css3/do-you-really-understand-css-linear-gradients.html)

# <a name="其他">**其他**</a>

## 使用指针事件來控制鼠标事件

指针事件允許您指定鼠标如何与其触摸的元素进行交互。 

例如：要禁用按钮上的默认指针事件
>
    .button-disabled {
      opacity: .5;
      pointer-events: none;
    }

## 为破碎图象定义样式
>
    img {
      display: block;
      font-family: sans-serif;
      font-weight: 300;
      height: auto;
      line-height: 2;
      position: relative;
      text-align: center;
      width: 100%;
    }

    img::before {
      content: "We're sorry, the image below is broken ";
      display: block;
      margin-bottom: 10px;
    }

    img::after {
      content: "(url:'attr(src)')";
      display: block;
      font-size: 12px;
    }

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



## 清除手机端a链接点击高亮：
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    图片作为a标签点击按钮
    a,a:hover,a:active,a:visited,a:link,a:focus{
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        outline:none;
        background: none;
        text-decoration: none;
    }


##  改变选中内容的背景颜色
>
    ::selection { 
        background: #fff; 
        color: #333; 
    } 
    ::-moz-selection { 
        background: #fff; 
        color: #333; 
    } 
    ::-webkit-selection { 
        background: #fff; 
        color: #333; 
    } 
## 三角形
    width:0; 
    height:0; 
    border-style: solid;
    border-width: 30px 10px;
    border-color:  transparent transparent transparent ##f4f4f4;

    
## -webkit-text-size-adjust: none
 //Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示；
// 可关闭字体大小自动调整功能.; 
//放在body中会导致页面缩放失效,不要把-webkit-text-size-adjust设置为全局或者可继承的


## <a name=""></a>


## <a name=""></a>
#<a name=""></a>
background-blend-mode和mix-blend-mode