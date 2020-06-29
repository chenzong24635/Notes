[参考](https://www.jianshu.com/p/af0b398602bc?tdsourcetag=s_pctim_aiomsg)

[参考](https://juejin.im/post/5d36cc575188257aea108a74)

由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟Dom的产生原因。
Vue2的Virtual DOM借鉴了开源库snabbdom的实现。
Virtual DOM本质就是用一个原生的JS对象去描述一个DOM节点。是对真实DOM的一层抽象。(也就是源码中的VNode类，它定义在src/core/vdom/vnode.js中。)
VirtualDOM映射到真实DOM要经历VNode的create、diff、patch等阶段。
「key的作用是尽可能的复用 DOM 元素。」
新旧 children 中的节点只有顺序是不同的时候，最佳的操作应该是通过移动元素的位置来达到更新的目的。
需要在新旧 children 的节点中保存映射关系，以便能够在旧 children 的节点中找到可复用的节点。key也就是children中节点的唯一标识。

## Virtual DOM

V2.x 使用了 Virtual DOM（虚拟 DOM）来更新 DOM 节点，提升渲染性能。

Vue的 \<template>内容  在 Vue.js 编译阶段，会解析为 Virtual DOM

Virtual DOM 结构类似 ast，
Virtual DOM是 dom解析， ast是语法解析




正常的 DOM 节点在 HTML 中是这样的：
```html
<div id="main">
  <p>文本</p>
</div>
```

用 Virtual DOM 创建生成 JS 对象
```js
const vNode = {
  tag: 'div',
  attributes: {
    id: 'main'
  },
  children: [
    {
      tag: 'p',
      attributes: null,
      text: '文本'
    }
  ]
}
```