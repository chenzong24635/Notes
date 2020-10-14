

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