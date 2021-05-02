v-if并不是指令(编译过程中，会转换为三元表达式)，控制dom是否渲染

v-show是指令，控制display:none的添加移除（会先存储原display值，v-show为true时，再设置回去）

v-if源码
```js
// src\compiler\codegen\index.js
// 各个指令对应的转换逻辑
export function genElement (el: ASTElement, state: CodegenState): string {
  ...

  else if (el.for && !el.forProcessed) { // v-for 处理
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) { // v-if 处理
    return genIf(el, state)
  }
  ...
}  

export function genIf (
  el: any,
  state: CodegenState,
  altGen?: Function,
  altEmpty?: string
): string {
  el.ifProcessed = true // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

// 编译过程中 将v-if，转换为三元表达式
function genIfConditions (
  conditions: ASTIfConditions,
  state: CodegenState,
  altGen?: Function,
  altEmpty?: string
): string {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  const condition = conditions.shift()
  if (condition.exp) {
    return `(${condition.exp})?${
      genTernaryExp(condition.block)
    }:${
      genIfConditions(conditions, state, altGen, altEmpty)
    }`
  } else {
    return `${genTernaryExp(condition.block)}`
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

```


v-show源码
```js
// src\platforms\web\runtime\directives\show.js
export default {
bind (el: any, { value }: VNodeDirective, vnode: VNodeWithData) {
    vnode = locateNode(vnode)
    //尝试获取transition，如果v-show绑定的标签外层套了一个transition则会把信息保存到该对象里
    const transition = vnode.data && vnode.data.transition
    // 保存最初的display属性
    const originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display
    if (value && transition) {
      vnode.data.show = true
      enter(vnode, () => {
        el.style.display = originalDisplay
      })
    } else {
      el.style.display = value ? originalDisplay : 'none'
    }
  },
```
