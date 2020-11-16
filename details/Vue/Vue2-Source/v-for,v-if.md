
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

export function genFor (
  el: any,
  state: CodegenState,
  altGen?: Function,
  altHelper?: string
): string {
  const exp = el.for
  const alias = el.alias
  const iterator1 = el.iterator1 ? `,${el.iterator1}` : ''
  const iterator2 = el.iterator2 ? `,${el.iterator2}` : ''

  ...

  el.forProcessed = true // avoid recursion
  return `${altHelper || '_l'}((${exp}),` +
    `function(${alias}${iterator1}${iterator2}){` +
      `return ${(altGen || genElement)(el, state)}` +
    '})'
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
```

上面的 `_l` 是什么呢？
调用 renderList 方法对列表进行循环解析
```js
// src\core\instance\render-helpers\index.js
export function installRenderHelpers (target: any) {
  target._o = markOnce // v-once render 处理
  target._n = toNumber // 值转换 Number 处理
  target._s = toString // 值转换 String 处理
  target._l = renderList // v-for render 处理
  ...
}  

// src\core\instance\render-helpers\render-list.js
export function renderList (
  val: any,
  render: (
    val: any,
    keyOrIndex: string | number,
    index?: number
  ) => VNode
): ?Array<VNode> {
  let ret: ?Array<VNode>, i, l, keys, key
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length)
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i)
    }
  } else if (typeof val === 'number') {
    ret = new Array(val)
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i)
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = []
      const iterator: Iterator<any> = val[Symbol.iterator]()
      let result = iterator.next()
      while (!result.done) {
        ret.push(render(result.value, ret.length))
        result = iterator.next()
      }
    } else {
      keys = Object.keys(val)
      ret = new Array(keys.length)
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i]
        ret[i] = render(val[key], key, i)
      }
    }
  }
  if (!isDef(ret)) {
    ret = []
  }
  (ret: any)._isVList = true
  return ret
}

```

可知，vue会先执行 v-for，再去处理 v-if，因此无论如何 for循环的列表都会渲染，会造成性能浪费

