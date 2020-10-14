
```js
// src\compiler\codegen\index.js

// 各个指令对应的转换逻辑
export function genElement (el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }

  if (el.staticRoot && !el.staticProcessed) { // 静态节点
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) { // v-once 处理
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) { // v-for 处理
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) { // v-if 处理
    return genIf(el, state)
  } 
  ...
}
```

源码可知，vue会先执行 v-for，再根据v-for的返回值去处理 v-if，因此无论如何 for循环的列表都会渲染，会造成性能浪费

