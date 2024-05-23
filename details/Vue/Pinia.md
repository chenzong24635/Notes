[Pinia](https://pinia.vuejs.org/zh/introduction.html)

# 介绍
## 为什么你应该使用 Pinia
Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state = reactive({}) 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些[安全漏洞](https://cn.vuejs.org/guide/scaling-up/ssr#cross-request-state-pollution)。 

>
    在 SSR 环境下，应用模块通常只在服务器启动时初始化一次。同一个应用模块会在多个服务器请求之间被复用，而我们的单例状态对象也一样。如果我们用单个用户特定的数据对共享的单例状态进行修改，那么这个状态可能会意外地泄露给另一个用户的请求。我们把这种情况称为跨请求状态污染。

    从技术上讲，我们可以在每个请求上重新初始化所有 JavaScript 模块，就像我们在浏览器中所做的那样。但是，初始化 JavaScript 模块的成本可能很高，因此这会显著影响服务器性能。


## 入门例子
```js
//  main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
```

使用一个函数 (与组件 setup() 类似) 
```js
// stores/counter.js
import { defineStore } from 'pinia'

 export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

```html
<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

counter.count++

// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 })

// 或使用 action 代替
counter.increment()
</script>
<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
</template>
```


## 对比 Vuex 3.x/4.x

Pinia API 与 Vuex(<=4) 也有很多不同，即：

mutation 已被弃用。它们经常被认为是极其冗余的。它们初衷是带来 devtools 的集成方案，但这已不再是一个问题了。
无需要创建自定义的复杂包装器来支持 TypeScript，一切都可标注类型，API 的设计方式是尽可能地利用 TS 类型推理。
无过多的魔法字符串注入，只需要导入函数并调用它们，然后享受自动补全的乐趣就好。
无需要动态添加 Store，它们默认都是动态的，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。
不再有嵌套结构的模块。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores 有循环依赖关系。
不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。


# 核心概念
* defineStore 定义 Store
* storeToRefs 响应式解构 store
* $patch() 直接改变 store
* $reset() 使用选项式 API 时，你可以通过调用 store 的 $reset() 方法将 state 重置为初始值
* $subscribe()

* $dispose()
* $onAction()


## 定义 Store
 Store 是用 defineStore() 定义的，它的第一个参数要求是一个独一无二的名字：
 ```js
import { defineStore } from 'pinia'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useAlertsStore = defineStore('alerts', {
  // 其他配置...
})
 ```
 这个名字 ，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。

defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。


在 Setup Store 中：
* ref() 就是 state 属性
* computed() 就是 getters
* function() 就是 actions
```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

注意，要让 pinia 正确识别 state，你必须在 setup store 中返回 state 的所有属性。这意味着，`你不能在 store 中使用私有属性`。不完整返回会影响 SSR ，开发工具和其他插件的正常运行。



store 是一个用 reactive 包装的对象，这意味着不需要在 getters 后面写 .value。就像 setup 中的 props 一样，我们`不能对它进行解构`：

```html
<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
// ❌ 这将不起作用，因为它破坏了响应性
// 这就和直接解构 `props` 一样
const { name, doubleCount } = store
name // 将始终是 "Eduardo"
doubleCount // 将始终是 0
setTimeout(() => {
  store.increment()
}, 1000)
// ✅ 这样写是响应式的
// 💡 当然你也可以直接使用 `store.doubleCount`
const doubleValue = computed(() => store.doubleCount)

</script>
```

可以使用 storeToRefs 提取属性时保持其响应性
```js
const { name, doubleCount } = storeToRefs(store)
```


## State
### 访问 state
通过 store 实例访问 state，直接对其进行读写。
```js
const store = useStore()
store.count // 读
store.count++ //写

```

### 重置 state: $reset
使用`选项式 API` 时，你可以通过调用 store 的 $reset() 方法将 state 重置为初始值。
```js
const store = useStore()
store.$reset()
```

在 Setup Stores 中，您需要创建自己的 $reset() 方法：

### 变更 state: $patch
除了用 store.count++ 直接改变 store，你还可以调用 $patch 方法。
```js
// 更改一个属性
store.$patch({ 
  count: store.count + 1
})

// 同时更改多个属性
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})
```

两种变更 store 方法的主要区别是，$patch() 允许你将多个变更归入 devtools 的同一个条目中。同时请注意，直接修改 state，$patch() 也会出现在 devtools 中，而且可以进行 time travel (在 Vue 3 中还没有)。


### 替换 state: $patch
你不能完全替换掉 store 的 state，因为那样会破坏其响应性。但是，你可以 patch 它。
```js
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })
```

### 订阅 state: 
```js
const cartStore = useStore()
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem('cart', JSON.stringify(state))
}, { detached: true })
```

当该组件被卸载时，它们将被自动删除。如果你想在组件卸载后依旧保留它们，请将 { detached: true } 作为第二个参数，以将 state subscription 从当前组件中分离：


## Getter

Getter 完全等同于 store 的 state 的计算值。

作为 store 的一个属性，你可以直接访问任何 getter(与 state 属性完全一样)：

```js
export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  // getter
  const doubleCount = computed(() => count.value * 2)
  return { count, doubleCount }
})
```



访问其他 store 的 getter
```js
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```
## Action