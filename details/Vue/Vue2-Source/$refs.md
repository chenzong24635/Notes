
ref三种情况:
* 组件绑定
* 真实DOM绑定
* v-for绑定

```js
// src\core\vdom\modules\ref.js
export function registerRef (vnode: VNodeWithData, isRemoval: ?boolean) {
  const key = vnode.data.ref
  if (!isDef(key)) return

  const vm = vnode.context
  // 给ref赋予当前组件实例或真实DOM
  const ref = vnode.componentInstance || vnode.elm
  const refs = vm.$refs
  // 移除
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref)
    } else if (refs[key] === ref) {
      refs[key] = undefined
    }
  } else {
    // 添加
    // 如果是v-for绑定的ref
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref]
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref)
      }
    } else {
      refs[key] = ref
    }
  }
} 
```