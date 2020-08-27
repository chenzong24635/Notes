
[深入剖析：Vue核心之虚拟DOM](https://juejin.im/post/5d36cc575188257aea108a74)


## 真实DOM
webkit 渲染引擎工作流程图


[浏览器页面渲染](/details/面试题/JS面试题/浏览器页面渲染.md)

## Virtual DOM

由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟Dom的产生原因。

一个简单的 div 元素的属性
![](/img/Vue/divdom.png)

Vue 使用了 Virtual DOM（虚拟 DOM）来更新 DOM 节点，提升渲染性能。借鉴了开源库snabbdom的实现。


Virtual DOM本质就是用一个原生的JS对象去描述一个DOM节点。是对真实DOM的一层抽象。(也就是源码中的VNode类，它定义在src/core/vdom/vnode.js中。)

Virtual DOM映射到真实DOM要经历VNode的create、diff、patch等阶段。

Virtual DOM 结构类似 ast，
Virtual DOM是 dom解析， ast是语法解析

