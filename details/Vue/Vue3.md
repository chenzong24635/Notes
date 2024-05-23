
[vue3官网](https://cn.vuejs.org/guide/introduction.html)
[vue3模板编译在线体验](https://vue-next-template-explorer.netlify.app/)

[抄笔记：尤雨溪在Vue3.0 Beta直播里聊到了这些…](https://juejin.im/post/5e9f6b3251882573a855cd52)


# 初始化项目
* npm create vue@latest



# 选项式 API 和组合式 API
* 选项API: 所定义的属性都会暴露在函数内部的 this 上，它会指向当前的组件实例

[什么是组合式 API？](https://cn.vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api)

![img](/img/Vue/optionsAPI_compositionAPI.jpg)

# [生命周期](https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)
[生命周期钩子](https://cn.vuejs.org/api/composition-api-lifecycle.html#composition-api-lifecycle-hooks)

![生命周期](/img/Vue/lifeCycle_vue3.png)
* onBeforeMount()
* onMounted()
* onBeforeUpdate()
* onBeforeUnmount()
* onUpdated()
* onUnmounted()
* onErrorCaptured()
* onRenderTracked()  注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用,`仅在开发模式下可用`
* onRenderTriggered()  注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用,`仅在开发模式下可用`
* onActivated() 注册一个回调函数，若组件实例是 \<KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用。
* onDeactivated() 注册一个回调函数，若组件实例是 \<KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用
* onServerPrefetch() 注册一个异步函数，在组件实例在服务器上被渲染之前调用。`仅在SSR模式可用`


### 2.x生命周期选项和Composition API之间的映射
* beforeCreate -> 使用 setup()
* created -> 使用 setup()
* beforeMount -> onBeforeMount
* mounted -> onMounted
* beforeUpdate -> onBeforeUpdate
* updated -> onUpdated
* beforeDestroy -> onBeforeUnmount
* destroyed -> onUnmounted
* activated -> onActivated
* deactivated -> onDeactivated

* errorCaptured -> onErrorCaptured
* onRenderTracked, 新增
* onRenderTriggered, 新增

两个新增的钩子都接收DebuggerEvent类似于onTrack和onTrigger观察者的选项;它使我们能够知道是什么导致了Vue实例中的重新渲染。
```js
onRenderTriggered(()=>{
  // 检查哪个依赖项导致组件重新呈现

  debugger
})
```


### 生命周期调用顺序 
```js
// 创建
setup ->
beforeCreate ->
created ->
onBeforeMount ->
onRenderTracked ->
onMounted ->
onRenderTriggered  ->
onBeforeUpdate  ->
onUpdated  ->

// 更新
onRenderTriggered ->
onBeforeUpdate ->
onUpdated ->

// 销毁
onBeforeUnmount  ->
onUnmounted  ->
```

# [API](https://cn.vuejs.org/api/)
## [app-config](https://cn.vuejs.org/api/application.html#app-config)
|2.x Global API| 3.x Instance API(app)
|:--|:--
|Vue.config | app.config
|Vue.config.productionTip| 已移除
|Vue.config.ignoredElements|app.config.isCustomElement
|Vue.component|app.component
|Vue.directive|app.directive
|Vue.mixin|app.mixin
|Vue.use|app.use

## 
* createApp() 创建一个应用实例
* createSSRApp() 创建一个应用实例
* app.mount() 将实例挂载在一个容器元素中
* app.unmount() 卸载已挂载的应用实例
* app.provide(key, value) 值注入,其所有后代组件中都可使用
* app.component()  组件注册
  如果同时传递一个组件名字符串及其定义，则注册一个全局组件；如果只传递一个名字，则会返回用该名字注册组件 (如果存在的话)。  
  ```js
  // 注册一个选项对象  
  app.component('my-component', {
    /* ... */
  })
  // 得到一个已注册的组件   
  const MyComponent = app.component('my-component')
  ```
* app.directive() 指令绑定  
   如果同时传递一个名字和一个指令定义，则注册一个全局指令；如果只传递一个名字，则会返回用该名字注册的指令 (如果存在的话)。 
   ```js 
   // 注册（对象形式的指令）
    app.directive('my-directive', {
      /* 自定义指令钩子 */
    })

    // 注册（函数形式的指令）
    app.directive('my-directive', () => {
      /* ... */
    })

    // 得到一个已注册的指令
    const myDirective = app.directive('my-directive')
    ```
* app.use() 安装插件
* app.mixin()  混入
* app.version 当前Vue 版本号
* app.config  实例的配置
  * app.config.globalProperties  注册能够被应用内所有组件实例访问到的全局属性的对象(Vue 2 中 Vue.prototype 使用方式的一种替代)
  * app.config.performance 在浏览器开发工具的“性能/时间线”页中启用对组件初始化、编译、渲染和修补的性能表现追踪
  * [app.config.errorHandler](https://cn.vuejs.org/api/application.html#app-config-errorhandler) 应用内抛出的未捕获错误指定一个全局处理函数



* [defineComponent()](https://cn.vuejs.org/api/general.html#definecomponent) 定义组件
* [defineAsyncComponent()](https://cn.vuejs.org/api/general.html#defineasynccomponent) 定义异步组件
* [defineCustomElement()](https://cn.vuejs.org/api/general.html#definecustomelement) 自定义元素
* version 
* nextTick
* mergeProps() 合并多个 props 对象


## setup
```html
<script>
export default {
  setup(props, context) {
    return {
    }
  }
}
</script>
```
* setup 它是组合式 API 的统一入口,所有生命周期函数定义都是需要定义在次函数下才生效
* setup函数会在 beforeCreate之后 created之前执行
* setup 函数中无法访问到 this
* setup创建组件实例时，在初始组件解析后立即调用。在生命周期方面，它在beforeCreate挂接之前被调用。
* setup接受两个参数，
* return 返回一个对象,会暴露给模板和组件实例

setup接受两个参数，
* props：组件之间通信, props 是响应式的 ，并且会在传入新的 props 时同步更新
* context：上下文对象 ，是非响应式
  * context.attrs：透传 Attributes（非响应式的对象，等价于 $attrs）
  * context.slots：插槽（非响应式的对象，等价于 $slots）
  * context.emit：触发事件（函数，等价于 $emit）
  * context.expose()：用于显式地限制该组件暴露出的属性，当父组件通过模板引用访问该组件的实例时，将仅能访问 expose 函数暴露出的内容  
  ```
  attrs 和 slots 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过 attrs.x 或 slots.x 的形式使用其中的属性。此外还需注意，和 props 不同，attrs 和 slots 的属性都不是响应式的。如果你想要基于 attrs 或 slots 的改变来执行副作用，那么你应该在 onBeforeUpdate 生命周期钩子中编写相关逻辑。
  ```

可以返回一个渲染函数
```html
<script>

import { h, ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return () => h('div', count.value)
  }
}
</script>
```
### expose
子组件在 setup() 函数中返回的所有东西都可以被父组件直接访问
```html
<template>
  <div>子组件</div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup(props, context) {
    let name = ref('A')
    let age = ref(18)
    // context.expose()
    context.expose({age})
    return { name, age };
  }
}
</script>
```
使用了 \<script setup> 的组件是默认私有的：一个父组件无法访问到一个使用了 \<script setup> 的子组件中的任何东西，除非子组件在其中通过 defineExpose 宏显式暴露：
```html
<template>
  <div>子组件</div>
</template>
<script setup>
import { ref } from 'vue'
let name = ref('A')
let age = ref(18)
// defineExpose()
// defineExpose({age})
</script>
```

## setup语法糖 - \<script setup> 
### [setup语法糖](https://cn.vuejs.org/api/sfc-script-setup.html#script-setup)
起初 Vue3.0 暴露变量必须 return 出来，template中才能使用；
vue3.2只需在script标签中添加setup。

\<script setup> 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的 \<script> 语法，它具有更多优势：  
* 更少的样板内容，更简洁的代码。
* 能够使用纯 TypeScript 声明 props 和自定义事件。
* 更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。
* 更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。


```html
<script lang="ts" setup>
  import { ref } from 'vue';
  //flag变量不需要在 return出去了
  let flag=ref("a")
</>
```
### 组件不需要在注册
```html
<!-- 这个是组件 -->
<template>
    <div>
        <h2> 你好-我是肖鹤云</h2>
    </div>
</template>


使用的页面
<template>
  <div class="home">
    <test-com></test-com>
  </div>
</template>
<script lang="ts" setup>
// 组件命名采用的是大驼峰，引入后不需要在注册，是不是爽歪歪呀!
//在使用的使用直接是小写和横杠的方式连接 test-com
import TestCom from "../components/TestCom.vue"
</script>
```

\<script setup> 可以和普通的 \<script> 一起使用

\<script setup> 中可以使用顶层 await。结果代码会被编译成 async setup()。 必须与 Suspense 内置组件组合使用

### defineProps defineEmits defineExpose  useSlots  useAttrs
defineProps 接收与 props 选项相同的值，defineEmits 接收与 emits 选项相同的值。  

使用 \<script setup> 的组件是默认关闭的——即通过模板引用或者 $parent 链获取到的组件的公开实例，不会暴露任何在 \<script setup> 中声明的绑定。  

useSlots 和 useAttrs 是真实的运行时函数，它的返回与 setupContext.slots 和 setupContext.attrs 等价  


子组件
```html
<script lang="ts" setup>
  import {defineProps, defineEmits} from 'vue'
  // 子组件接受参数
  defineProps({
    info:{
      type: String,
      default:' '
    },

  })

  // 子组件向父组件抛出事件
  let $myemit=defineEmits(['myAdd','myDel'])
  let hander1Click=():void=>{
    $myemit('myAdd','新增的数据')
  }


  // 将组件中的属性暴露出去，这样父组件可以获取
  defineExpose({
    myName: 'abc'
  })
</script>
```

父组件
```html
<template>
  <div class="home">
    <test-com @myAdd="myAddHander" ref="testcomRef"></test-com>
    <button @click="getSonHander">获取子组件中的数据</button>
  </div>
</template>
<script lang="ts" setup>
import TestCom from "../components/TestCom.vue"
import {ref} from 'vue'
const testcomRef = ref()
const getSonHander=()=>{
  console.log('获取子组件中的数据', testcomRef.value.myName);
}
</script>
```

## ref() 、reactive()
* ref(): 接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value
* reactive(): 返回一个对象的响应式代理

区别
* ref 函数创建的响应式数据，在模板中可以直接被使用，在 JS 中需要通过 .value 的形式才能使用。
* ref 函数可以接收原始数据类型与引用数据类型。一般用于原始数据类型
* reactive 函数只能接收引用数据类型。(仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的 原始类型 无效。)
* 如果将一个对象赋值给 ref，那么这个对象将通过 reactive() 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。


reactive 能做的，ref 都能胜任，并且 ref 底层还是使用 reactive 来做的,
```html
<script setup  lang="ts">

let r1 = ref({a:[1]})
let r2 = reactive({b: [9]})
// 调用
r1.value.a
r2.b


</script>
```
reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的 
只有代理对象是响应式的，更改原始对象不会触发更新
```html
<script setup  lang="ts">
  import {reactive,watch, watchEffect}from 'vue'
const raw = {arr: [0]} // 非响应式
const proxy = reactive(raw) // 响应式

// 代理对象和原始对象不是全等的
console.log(proxy === raw, proxy, raw) // false

let cahngeraw = () => {
  raw.arr.push(1)
  console.log(proxy,'cahnge raw', raw) // false
}
let cahngeproxy = () => {
  proxy.arr.push(2)
  console.log(proxy,'cahnge proxy', raw) // false
}

watch(proxy,() => {
  console.log(proxy,'watch proxy');
})

// 改变 raw 时,虽然 proxy 值也改变了，但是 watch 不会监听到 proxy 的改变
// 改变 proxy 时,row 值也改变了， 同时 watch 能监听到 proxy 的改变

</script>

<template>
  <div @click="cahngeraw">cahngeraw</div>
  <div @click="cahngeproxy">cahngeproxy</div>
</template>
```


## 其他api
* toRef(): 基于响应式对象上的一个属性，创建一个对应的 ref;创建的 ref 与其源属性保持同步
* toRefs()： 将一个响应式对象转换为一个普通对象，相当于批量使用 toRef
* readonly():  接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理
* unref():  如果参数是 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val 计算的一个语法糖
* isRef():  检查某个值是否为 ref
* isReactive():  检查一个对象是否是由 reactive() 或 shallowReactive() 创建的代理。
* isReadonly():  检查一个对象是否是由 readonly() 或 shallowReadonly() 创建的代理
* isProxy():  检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理
* shallowRef(): ref() 的浅层作用形式
* shallowReactive(): reactive() 的浅层作用形式
* triggerRef(): 强制触发依赖于一个浅层 ref 的副作用(shallowRef)，这通常在对浅引用的内部值进行深度变更后使用。
* customRef(): 创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式
* toRaw(): 返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象
* markRaw(): 将一个对象标记为不可被转为代理。返回该对象本身。
* toValue() 3.3 版本中新增的 API。目的是将 ref 或 getter 规范化为值。如果参数是 ref，它会返回 ref 的值；如果参数是函数，它会调用函数并返回其返回值。否则，它会原样返回参数。它的工作方式类似于 unref()，但对函数有特殊处理。


## computed()、watch()
### [computed()](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging)

我们可以向 computed() 传入第二个参数，是一个包含了 onTrack 和 onTrigger 两个回调函数的对象：
onTrack 将在响应属性或引用作为依赖项被跟踪时被调用。
onTrigger 将在侦听器回调被依赖项的变更触发时被调用。
```js
const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // 当 count.value 被追踪为依赖时触发
    debugger
  },
  onTrigger(e) {
    // 当 count.value 被更改时触发
    debugger
  }
})

// 访问 plusOne，会触发 onTrack
console.log(plusOne.value)

// 更改 count.value，应该会触发 onTrigger
count.value++
```

### watch()
```js
watch(source, callback, {
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})

watchEffect(callback, {
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})
```

### watchEffect
* watchEffect(effect, options): 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。返回值是一个用来停止该副作用的函数。
  * effect 副作用函数,用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用
  * options 可选的选项
    * flush?: 'pre' | 'post' | 'sync' // 默认：'pre'
      * pre (默认) 将在组件更新前执行副作用
      * post 将在组件更新后执行副作用 （在侦听器回调中能访问被 Vue 更新之后的DOM）
      * sync 同步执行，在响应式依赖发生改变时立即触发侦听器
    * onTrack?: (event: DebuggerEvent) => void
    * onTrigger?: (event: DebuggerEvent) => void


* watchPostEffect() 使用 flush: 'post' 选项时的别名。 
* watchSyncEffect() 使用 flush: 'sync' 选项时的别名。


在 setup() 或 \<script setup> 中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止
如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏
```html
<script setup>
import { watchEffect } from 'vue'

// 它会自动停止
watchEffect(() => {})

// ...这个则不会！
setTimeout(() => {
  const unwatch = watchEffect(() => {})
}, 100)

// 需要手动停止
unwatch()
</script>

```
注意，需要异步创建侦听器的情况很少，请尽可能选择同步创建。如果需要等待一些异步数据，你可以使用条件式的侦听逻辑：
```js
// 需要异步请求得到的数据
const data = ref(null)

watchEffect(() => {
  if (data.value) {
    // 数据加载后执行某些操作...
  }
})
```



watchEffect 仅会在其同步执行期间，才追踪依赖。在使用异步回调时，只有在第一个 await 正常工作前访问到的属性才会被追踪。

如下例：
按fn1时， 虽然 num1 改变了但 watchEffect 不会触发
```html
<template>
  <button @click="fn">fn</button>
  <button @click="fn1">fn1</button>
</template>
<script setup>
import { watchEffect, ref } from 'vue';

let fn = () => {
  num.value += 1
  console.log('fn', num);
}
let fn1 = () => {
  num1.value += 1
  console.log('fn1', num1);
}
let num = ref(0)
let num1 = ref(0)

watchEffect(async () => {
  console.log('watchEffect');
  const res = await fn(num)
  const res1 = await fn1(num1)
})
</script>
```


`清除副作用 `    
  >在纯函数中，副作用指的是如果一个函数在输入和输出之外还做了其他的事情，那么这个函数额外做的事情就被称为 副作用，而产生副作用的函数被称为 副作用函数。

  
watchEffect(effect) 的回调函数(effect)就是一个副作用函数，因为我们使用watchEffect就是为了监听响应数据变化后做一些其他操作。

一旦副作用函数被执行时，它势必会对程序带来一些影响。有时副作用函数会执行一些异步的副作用，而异步则会带来一些响应(副作用)是"失效"的，我们需要及时清除这些响应。  

而 watchEffect((onInvalidate) => {}) 监听器可以接收一个 onInvalidate 函数作为入参，用来注册清理失效时的回调。  
当以下情况发生时，这个失效回调会被触发：

  * 副作用即将重新执行时。  
  * 监听被停止。(如果在 setup 或生命周期钩子函数中使用了 watchEffect，则在组件卸载时)

```html
<template>
  <div>count: {{count}}</div>
  <button @click="update">按钮</button>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup() {
    const count = ref(1);
    watchEffect(onInvalidate => {
      const timer = setTimeout(() => {
        console.log('发请网络请求')
      }, 1000);
      onInvalidate(() => {
        clearTimeout(timer)
      });
      console.log(count.value);
    });

    function update() {
      count.value++;
    }

    return { count, update }
  }
}
</script>
```


### watch 和 watchEffect区别
watch 和 watchEffect 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：

* watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。

* watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。


# ref获取DOM的方式
* ref  
  通过对div元素添加了ref属性，为了获取到这个元素，我们声明了一个与ref属性名称相同的变量sectionRef，然后我们通过 sectionRef.value 的形式即可获取该div元素。
  ```html
  <template>
    适用场景：获取单一dom
    <div ref="sectionRef" class="ref-section"></div>
  </template>

  <script setup lang="ts">
  import {ref, onMounted} from 'vue'
  const sectionRef = ref(null)
  onMounted(() => {
    console.log(sectionRef.value);
  });
  </script>
  ```

* 通过父容器的ref遍历拿到dom引用  
  ```html
  <template>
    <p>通过父容器的ref遍历拿到dom引用</p>
    <p>适用场景：通过v-for循环生成的固定数量元素的场景</p>
    <div ref="listRef" class="list-section">
      <div @click="higherAction(index)" class="list-item" v-for="(item, index) in list" :key="index">
        <span>{{item}}</span>
      </div>
    </div>
  </template>

  <script setup lang="ts">
    import {
      ref,
      reactive,
      onMounted
    } from 'vue'
    const listRef = ref()
    let list = reactive([1, 2, 3, 4])
    const higherAction = (index) => {
      console.log(listRef.value.children[index]);
    }
    onMounted(() => {
      console.log(listRef);
    })
  </script>
  ```
* v-for 中的模板引用 -v3.2.25 及以上版本
```html
<template>
  <p>通过v-for的ref遍历拿到dom引用， <mark>应该注意的是，ref 数组并不保证与源数组相同的顺序</mark></p>
  <p>适用场景：通过v-for循环生成的不固定数量或者多种元素的场景</p>
  <div class="list-section">
    <div @click="higherAction(index)" class="list-item" v-for="(item, index) in list" :key="index"  ref="listRef" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    reactive,
    onMounted
  } from 'vue'
  const listRef = ref([])
  let list = reactive([1, 2, 3, 4])
  const higherAction = (index) => {
    console.log(listRef.value[index]);
  }
  onMounted(() => {
    console.log(listRef);
  })
</script>
```

* 函数模板引用-- 通过:ref 传入一个函数,将dom引用放到数组中。当绑定的元素被卸载时，函数也会被调用一次，此时的 el 参数会是 null
```html
<template>
  <p>通过:ref将dom引用放到数组中</p>
  <p>适用场景：通过v-for循环生成的不固定数量或者多种元素的场景</p>
  
  <div class="list-section">
    <div :ref="setRefAction" @click="higherAction(index)" class="list-item" v-for="(item, index) in list"
      :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {
    ref,
    reactive,
    onMounted
  } from 'vue'

  const list = reactive([1, 2, 3, 4])
  const listRef = reactive([])

  const higherAction = (index) => {
    console.log(listRef[index]);
  }

  const setRefAction = (el) => {
    listRef.push(el);
  }
  onMounted(() => {
    console.log(listRef);
  })
</script>
```



# CSS
* 深度选择器 :deep()
  ```html
  <style scoped>
  .a :deep(.b) {
  }
  </style>
  ```
* 插槽选择器 :slotted()   
  默认情况下，作用域样式不会影响到 \<slot/> 渲染出来的内容，因为它们被认为是父组件所持有并传递进来的。使用 :slotted 伪类以明确地将插槽内容作为选择器的目标：

  ```html
  <script setup lang="ts">
    import childCom from '@/components/HelloWorld.vue'
  </script>
  <template>
    <childCom >
      <div>
        <div class="red">插槽： 我是红色的</div>
        <div class="green">插槽： 我是绿色的</div>
      </div>
    </childCom>
  </template>

  ```

  子组件
  ```html
  <template lang="">
    <slot></slot>
    <div>子组件 </div>
  </template>
  <script setup>

  </script>
  <style scoped>
    :slotted(.red) {
      color: red;
    }
    :slotted(.green) {
      color: green;
    }
  </style>
  ```
* 全局选择器  :global

* v-bind(): style 中使用v-bind绑定 js 中的变量  
  ```html
  <script setup lang="ts">
    import {
      reactive,
    } from 'vue'
    const state = reactive({
      color: 'red'
    })
  </script>
  <style scoped>
    span {
      color: v-bind('state.color');
    }  
  </style>
  ```
  浏览器显示
  style attribute {
      --e17ea971-state_color: red;
  }

* CSS Modules  
  一个 \<style module> 标签会被编译为 CSS Modules 并且将生成的 CSS class 作为 $style 对象暴露给组件：暴露的对象默认名为  $style，也可自定义
  ```html
  <template>
    <p :class="$style.red">我是红的</p>
    <p :class="sy.red">没想到吧，我是蓝的</p>

    <p ref="pRef">xxxx</p>
  </template>
  <script setup>
    // 
    import { useCssModule, onMounted, ref } from 'vue'
    // 获取对应的calss
    let m1 = useCssModule()
    let m2 = useCssModule('sy')
    const pRef = ref(null)
    onMounted(() => {
      console.log(pRef,'green');
      pRef.value.classList.add(m1.red)
      pRef.value.classList.add(m2.green)

      // pRef.value.classList.add('green')
      // pRef.value.classList.add('red')

    }),
    console.log(m1,m2);
  </script>
  <style module>
  .red {
    color: red;
  }
  </style>
  <style module="sy">
  .red {
    color: blue;
  }
  .green{
    color: green;
  }
  </style>
  ```
  编译显示
  ```html
  <style>
    ._red_xad9b_2 {
      color: red;
    }
    ._red_np93z_2 {
      color: blue;
    }
    ._green_gkpx2_5 {
      color: green;
    }
  </style>
  <p class="_red_xad9b_2">我是红的</p>
  <p class="_red_np93z_2">没想到吧，我是蓝的</p>
  <p class="_red_xad9b_2 _green_gkpx2_5">xxxx</p>
  ```

# # [组件 v-model](https://cn.vuejs.org/guide/components/v-model.html#component-v-model)
去掉了 .sync ，合并到了 v-model 里
```html
<!-- vue 2.x -->
<my-com :title.sync="title" />

<!-- vue 3.x -->
<my-com v-model:title="title" />

```
v-model 等价于 :modelValue="someValue" 和 @update:modelValue="someValue = $event"

v-model:foo 等价于 :foo="someValue" 和 @update:foo="someValue = $event"




可绑定多个 v-model
```html
<!-- parent -->
<template lang="">
  parent
  <p>{{num1}} <span @click="changeNum1">改变num1</span></p>
  <p>{{num2}} <span @click="changeNum2">改变num2</span></p>
  <TestDemo
    v-model:num1="num1"
    v-model:num2="num2"
  ></TestDemo>
</template>
<script setup>
let num1 = ref(0)
let num2 = ref(0)
let changeNum1 = () => {
  num1.value += 1
}
let changeNum2 = () => {
  num2.value += 1
}
</script>
<style lang="">
</style>


<!-- child -->
<template lang="">
  child
  <p>{{num1}} </p>
  <p> </p>
  <input
    :value="num2"
    @input="$emit('update:num2', $event.target.value)"
  />

</template>
<script setup>
defineProps(['num1', 'num2'])
defineEmits(['update:num2'])
</script>


defineModel写法
<!-- child -->
<template lang="">
  child11
  <p>{{num1}} </p>
  <p> </p>
  <input
    v-model="num2"
  />

</template>
<script setup>
import {defineModel} from 'vue'
let num1 = defineModel('num1')
let num2 = defineModel('num2')

</script>
```




# [defineModel()](https://cn.vuejs.org/api/sfc-script-setup.html#definemodel)
从 Vue 3.4 开始，推荐的实现方式是使用 [defineModel()](https://cn.vuejs.org/api/sfc-script-setup.html#definemodel) 宏：
defineModel() 返回的值是一个 ref。它可以像其他 ref 一样被访问以及修改，不过它能起到在父组件和当前变量之间的双向绑定的作用：

它的 .value 和父组件的 v-model 的值同步；
当它被子组件变更了，会触发父组件绑定的值一起更新。



父组件
```html
<script setup>
import Child from './Child.vue'
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <Child v-model="msg" />
</template>

```

子组件
```html
<script setup>
const model = defineModel()
</script>

<template>
  <span>My input</span> <input v-model="model">
</template>
```


### 底层机制​
defineModel 是一个便利宏。编译器将其展开为以下内容：
* 一个名为 modelValue 的 prop，本地 ref 的值与其同步；
* 一个名为 update:modelValue 的事件，当本地 ref 的值发生变更时触发。

### 处理 v-model 修饰符
```html
<script setup>
import { ref } from 'vue'
import MyComponent from './MyComponent.vue'
  
const myText = ref('')
</script>

<template>
  This input capitalizes everything you enter:
  <MyComponent v-model.capitalize="myText" />
  <MyComponent v-model:title.capitalize="myText" />

</template>


<script setup>

const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})

// 带参数的 v-model 修饰符
const [title, titleModifiers] = defineModel('title')
</script>

<template>
  <input type="text" v-model="model" />
</template>
```

# 指令
```js
v2
const MyDirective = {
  bind(el, binding, vnode, prevVnode) {},
  inserted() {},
  update() {},
  componentUpdated() {},
  unbind() {}
}

v3
const MyDirective = {
  beforeMount(el, binding, vnode, prevVnode) {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {}, // new
  unmounted() {}
}
```

# Fragment
vue2创建一个Vue组件，只能有一个根节点

这意味着无法创建这样的组件：
```vue
<template>
  <div>Hello</div>
  <div>World</div>
</template>
```
原因是代表任何Vue组件的Vue实例都需要绑定到单个DOM元素中。  
创建具有多个DOM节点的组件的唯一方法是通过创建不具有基础Vue实例的功能组件。

vue3 
* 不再限于模板中的单个根节点
* render 函数也可以返回数组了，类似实现了 React.Fragments 的功能 

意义
* 减少无意义的div
* 组件递归，可以实现平级递归，不会有多余的div了 这个在以后实现虚拟列表，tree组件的时候意义重大

# [Teleport](https://cn.vuejs.org/guide/built-ins/teleport.html)

\<Teleport\>原先是对标 React Portal（增加多个新功能，更强）

但因为Chrome有个提案，会增加一个名为Portal的原生element，为避免命名冲突，改为Teleport

Teleport是特殊的组件，旨在在当前组件之外呈现某些内容。这也是这是处理模态框、弹出窗口和通常显示在页面顶部的组件的一种非常好的方法。

通过使用Portals，您可以确保没有任何主机组件CSS规则，会影响您要显示的组件，并使您免于使用进行讨厌的黑客攻击

vue2需通过portal-vue库实现

```js
interface TeleportProps {
  /**
   * 必填项。指定目标容器。
   * 可以是选择器或实际元素。
   */
  to: string | HTMLElement
  /**
   * 当值为 `true` 时，内容将保留在其原始位置
   * 而不是移动到目标容器中。
   * 可以动态更改。
   */
  disabled?: boolean
}
```


### 组件属性
* to: 必须是有效的查询选择器或 HTMLElement
  ```html
  <!-- 正确 -->
  <teleport to="body" />
  <teleport to="#some-id" />
  <teleport to=".some-class" />
  <teleport to="[data-teleport]" />

  <!-- 错误 -->
  <teleport to="h1" />
  <teleport to="some-string" />
  ```

* disabled： 用于禁用 \<teleport> 的功能，这意味着其插槽内容将不会移动到任何位置，而是在您在周围父组件中指定了 \<teleport> 的位置渲染。


```html
<template>
  <div class="box"></div>
  <button @click="modalOpen = true">
    点我打开模态框 (With teleport!)
  </button>
  <div id="container"></div>
    
  <!-- 渲染为body标签 的子级-->
  <teleport to="body">
  <!-- <teleport to="#container"> -->
    <div v-if="modalOpen" class="modal">
      <div >
        <p>I'm a teleported modal! (My parent is "body")</p>
        <!-- teleport也可以嵌入组件 -->
       
        <button @click="modalOpen = false">
          点我关闭
        </button>
      </div>
    </div>
  </teleport>
  
  <!-- 在同一目标上使用多个 teleport -->
  <teleport to="body" >
    <div v-if="modalOpen" class="modal" style="margin-top:20px">
      我是另一个挂在body上的teleport
      <p>多个 teleport组件可以将其内容挂载在同一个目标元素上，而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上。</p>
    </div>
  </teleport>

  <!-- 渲染为.box 的子级 -->
  <teleport to=".box" >
    <div v-if="modalOpen" class="modal" style="margin-top:20px">
      我是.box上的teleport
      
    </div>
  </teleport>

  <!-- 使用disabled属性 -->
  <teleport to="body" :disabled="isDisabled">
    <div v-if="modalOpen" class="modal" style="margin-top:20px">
      我是个本该挂在body上的teleport，但使用 disabled 属性，因此不会移动，挂载在定义的位置
      <button @click="isDisabled = false">
        点我改变位置
      </button>
    </div>
  </teleport>
</template>
<script setup>
const modalOpen = ref(false)
const isDisabled = ref(true)

</script>
<style scoped >
.modal{
  text-align: center;
  border: 1px solid ;
  background-color: #ccc;
}
</style>

```

# [Suspense](https://cn.vuejs.org/guide/built-ins/suspense.html)
* 可在嵌套层级中等待嵌套的异步依赖项
* 支持async setup()
* 支持异步组件

加载异步组件，在异步组件加载完成成并完全渲染之前 suspense 会先显示 #fallback 插槽的内容 。
```html
<Suspense>
  <template #default>
    异步的组件
  </template>
  <template #fallback>
    加载状态的组件
  </template>
</Suspense>
```


# Vue2和Vue3响应方式对比


# [API自动按需引入和组件自动按需注册](https://juejin.cn/post/7166802156006309918)
```js
// 自动引入插件
npm i -D unplugin-auto-import

// 自动注册插件
npm i -D unplugin-vue-components


// vite.config.ts里面配置。配置完成后保存，会产生两个.d.ts文件, auto-import.d.ts文件，和main.ts平级。这个文件就是替你去引入各种api的集成文件

import AutoImport from "unplugin-auto-import/vite";
import Componengts from "unplugin-vue-components/vite";

// defineConfig里在plugins里配置
plugins: [
  AutoImport({
    // 配置需要自动引入的组件
    imports: ["vue", "vue-router", "pinia"],
    // 创建全局 d.ts声明文件
    dts: "src/auto-imports.d.ts",
    // Auto import inside Vue templates
    vueTemplate: true,
    // vant自动按需引入
    // resolvers: [VantResolver()],
    dirs: []
  }),
  // 自动组件注册插件
  Componengts({
    // 定义哪里的组件需要。这里的配置是全局components和局部文件的components都需要按需引入
    dirs: ['src/components', 'src/**/components'],
    // 扩展那些文件
    extensions: ["vue", 'md'],
    // 允许自动导入和注册的组件
    include: [/\.vue$/, /\.vue?vue/, /\.md$/],
    // vant自动注册组件
    // resolvers: [VantResolver()],
    // 创建全局 d.ts声明文件
    dts: "src/components.d.ts",
  }),
],
```

