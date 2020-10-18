
设置了keepAlive缓存的组件：

  第一次进入：beforeRouterEnter ->created->…->activated->…->deactivated
  后续进入时：beforeRouterEnter ->activated->deactivated

可以看出，只有第一次进入该组件时，才会走created钩子，而需要缓存的组件中activated是每次都会走的钩子函数

```js
// src\core\components\keep-alive.js

export default {
  name: 'keep-alive',
  abstract: true, // 定义为抽象组件，它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。

  props: {
    include: patternTypes, // 需要缓存的组件
    exclude: patternTypes, // 不需要缓存的组件
    max: [String, Number] // 最大缓存组件数
  },

  created () {
    // 存储缓存的组件，{ key: vnode }
    this.cache = Object.create(null)
    // 存储缓存组件name（越往后代表最近访问）
    this.keys = []
  },

  destroyed () {
    // 遍历销毁所有缓存的组件实例
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted () {
    // 监听 include，exclude 变化，调用pruneCache，实时写入读取缓存或者删除
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  render () {
    // 获取插槽默认内容
    const slot = this.$slots.default
    // 只获取插槽第一个子组件
    const vnode: VNode = getFirstComponentChild(slot)
    /* 例
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      vnode 为 <router-view v-if="$route.meta.keepAlive"></router-view>
    */

    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    // 存在组件参数
    if (componentOptions) {
      // check pattern
      // 组件名
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this

      // name不在 include 中或者在 exclude 中(表示该组件不进行缓存)，则直接返回vnode,
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
      // 获取或生成组件的标识key（不存在则根据组件 cid和tag创建一个）
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key

      // 如果已经缓存过该组件
      if (cache[key]) {
        // 获取缓存cache中实例
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        // 并调整key排序
        /*
          如当前已缓存 keys = ['comA','comB','comC']
          进入 comB 页面并离开后
          keys = ['comA','comC','comB']
         */
        remove(keys, key) // 先删除
        keys.push(key) // 在push到最后
      } else {
        // 未缓存过该组件。则直接添加
        cache[key] = vnode
        keys.push(key)
        // prune oldest entry
        // 超过缓存数限制，将第一个删除
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }
      // 标记走了缓存
      // 渲染和执行被包裹组件的钩子函数需要用到
      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}
```