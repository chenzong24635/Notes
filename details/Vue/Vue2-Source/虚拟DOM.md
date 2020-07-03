
[深入剖析：Vue核心之虚拟DOM](https://juejin.im/post/5d36cc575188257aea108a74)


## 真实DOM
webkit 渲染引擎工作流程图
![](/img/render.png)
![](/img/render1.png)


浏览器渲染引擎工作流程都差不多，大致分为5步:
创建DOM树——创建StyleRules——创建Render树——布局Layout——绘制Painting

1. 构建 DOM 树：HTML被HTML解析器解析成DOM树
2. 生成样式表：CSS被CSS解析器解析成CSSOM树
3. 构建 Render 树：结合DOM树和CSSOM树，生成一棵渲染树(Render Tree),这一过程又称为Attachment)。每个DOM节点都有attach方法，接受样式信息，返回一个render对象(又名renderer)。这些render对象最终会被构建成一颗Render树。
4. 确定节点坐标(flow): 根据 Render 树结构，为每个 Render 树上的节点确定一个在显示屏上出现的精确坐标；
5. 绘制页面(paint)：根据 Render 树和节点显示坐标，然后调用每个节点的 paint 方法，将它们绘制出来。

4、5是最耗时的部分，这两步合起来即 渲染。

注意点：

* `DOM树的构建是文档加载完成开始的？`构建DOM数是一个渐进过程，为达到更好用户体验，渲染引擎会尽快将内容显示在屏幕上。它不必等到整个HTML文档解析完毕之后才开始构建render数和布局。

* `Render树是DOM树和CSSOM树构建完毕才开始构建的吗？`这三个过程在实际进行的时候又不是完全独立，而是会有交叉。会造成一边加载，一遍解析，一遍渲染的工作现象。

* `CSS 的解析注意点？`CSS的解析是从右往左逆向解析的(从DOM树的下－上解析比上－下解析效率高)，嵌套标签越多，解析越慢。



## Virtual DOM

由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟Dom的产生原因。

一个简单的 div 元素的属性
![](/img/Vue/divdom.png)

Vue 使用了 Virtual DOM（虚拟 DOM）来更新 DOM 节点，提升渲染性能。借鉴了开源库snabbdom的实现。


Virtual DOM本质就是用一个原生的JS对象去描述一个DOM节点。是对真实DOM的一层抽象。(也就是源码中的VNode类，它定义在src/core/vdom/vnode.js中。)

Virtual DOM映射到真实DOM要经历VNode的create、diff、patch等阶段。

Virtual DOM 结构类似 ast，
Virtual DOM是 dom解析， ast是语法解析

