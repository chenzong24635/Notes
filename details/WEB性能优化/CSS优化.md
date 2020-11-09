
* 将样式表放到页面顶部（\<head>里）
* 不使用@import；使用\<link>
* 压缩css文件
* 异步加载CSS（\<link rel="preload" href="xxx.css" as="style" onload="this.rel=stylesheet"  />）

* 有选择地使用选择器

* 避免使用css表达式(CSS Expression)又称动态属性(Dynamic properties)

* 使用transform，filters，opacity属性开启GUP硬件加速

* 使用动画时脱离文档流，开启硬件加速，优先使用 css 动画；

* css属性简写

* 值为0时无需写单位

* 减少后代选择器使用

* 层级扁平，避免过于多层级的选择器嵌套；
* 避免过度约束

* 命名语义化，规范化（BEM）

