
## 自定义loading组件-指令封装
[实战技巧，Vue原来还可以这样写](https://juejin.im/post/5eef7799f265da02cd3b82fe#heading-6)

### 自定义loading组件
用Vue.extend + 单例模式去实现一个 全局 loading 方法

components/loading/index.vue
```html
<template>
  <transition name="custom-loading-fade">
    <!--loading遮罩-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading内容-->
      <div class="custom-loading-box">
        <div class="loading">
          <img src="loading.gif">
        </div>
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      text: '',
      visible: false
    }
  }
}

</script>
<style lang="less">
.custom-loading{
  &-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &-box{
    text-align: center;
    /* margin: auto; IE失效 */
    color: #fff;
    p{margin-top: 10px;}
    .loading{
      animation: loading-rotate 0.6s linear infinite;
    }
  }
}
@keyframes loading-rotate {
  0% {
    transform:  rotate(0);
  }
  100% {
    transform:  rotate(1turn);
  }
}
</style>
```

components/loading/index.js
```js
import LoadingComponent from './index.vue'

export default {
  install(Vue) {
    // 通过Vue.extend将组件包装成一个子类
    const LoadingConstructor = Vue.extend(LoadingComponent)
    let loading = null
    
    // 绑定loading关闭方法
    LoadingConstructor.prototype.close = function () {
      // 如果loading 有引用，则去掉引用
      if (loading) {
        loading = undefined
      }
      // 先将组件隐藏
      this.visible = false
      // 延迟300毫秒，等待loading关闭动画执行完之后销毁组件
      setTimeout(() => {
        // 移除挂载的dom元素
        if (this.$el && this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el)
        }
        // 调用组件的$destroy方法进行组件销毁
        this.$destroy()
      }, 300)
    }

    const Loading = (options = {}) => {
      // 单例，如果组件已渲染，则返回即可
      if (loading) {
        return loading
      }
      // 要挂载的元素
      const parent = document.body
      // 组件data数据
      const opts = {
        text: '加载中。。。',
        ...options
      }
      // 通过构造函数初始化组件 相当于 new Vue()
      const instance = new LoadingConstructor({
        el: document.createElement('div'),
        data: opts
      })
      // 将loading元素挂在到parent上面
      parent.appendChild(instance.$el)
      // 显示loading
      Vue.nextTick(() => {
        instance.visible = true
      })
      // 将组件实例赋值给loading
      loading = instance
      return instance
    }
    // 绑定方法到全局
    Vue.prototype.$loading = Loading
  }
}
```

main.js 
```js
import loading from '@/components/loading/index.js'
Vue.use(loading)
```

使用
```js
const loading = this.$loading()
const loading1 = this.$loading()
setTimeout(() => {
  loading.close()
}, 1000 * 3)

// 调用了两次loading,但是只出现了一个，而且我只关闭了loading，但是loading1也被关闭了
```

### 自定义loading指令

components/loading/index.vue
```html
同上
```

components/loading/directive.js
```js
import LoadingComponent from './index.vue'
// 使用 Vue.extend构造组件子类

// 定义一个名为loading的指令
export default{
  install(Vue){
    const LoadingContructor = Vue.extend(LoadingComponent)
    Vue.directive('loading', {
      /**
       * 只调用一次，在指令第一次绑定到元素时调用，可以在这里做一些初始化的设置
       * @param {*} el 指令要绑定的元素
       * @param {*} binding 指令传入的信息，包括 {name:'指令名称', value: '指令绑定的值',arg: '指令参数 v-bind:text 对应 text'}
       */
      bind(el, binding) {
        const instance = new LoadingContructor({
          el: document.createElement('div'),
          data: {
            text: '加载中。。。',
          }
        })
        el.appendChild(instance.$el)
        el.instance = instance
        Vue.nextTick(() => {
          el.instance.visible = binding.value
        })
      },
      /**
       * 所在组件的 VNode 更新时调用
       * @param {*} el
       * @param {*} binding
       */
      update(el, binding) {
        // 通过对比值的变化判断loading是否显示
        if (binding.oldValue !== binding.value) {
          el.instance.visible = binding.value
        }
      },
      /**
       * 只调用一次，在 指令与元素解绑时调用
       * @param {*} el
       */
      unbind(el) {
        const mask = el.instance.$el
        if (mask.parentNode) {
          mask.parentNode.removeChild(mask)
        }
        el.instance.$destroy()
        el.instance = undefined
      }
    })
  }
}

```

main.js注册指令
```js
import vLoading from '@/components/loading/directive.js'
Vue.use(vLoading)
```

使用
```html
<template>
  <div v-loading="visible"></div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  created() {
    this.visible = true
    setTimeout(() => {
      this.visible = false
    },3000)
  }
}
</script>
```