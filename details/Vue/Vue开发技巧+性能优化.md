* <a href="#vue项目性能优化">Vue开发技巧+性能优化</a>
  * <a href="#v-if和v-show的区别">v-if和v-show的区别</a>
  * <a href="#v-for 遍历避免同时使用 v-if">v-for 遍历避免同时使用 v-if</a>
  * <a href="#路由懒加载">路由懒加载</a>
  * <a href="#批量注册全局组件">批量注册全局组件</a>
  * <a href="#批量注册全局filter">批量注册全局filter</a>
  * <a href="#路由参数解耦">路由参数解耦</a>
  * <a href="#函数式组件">函数式组件</a>
  * <a href="#长列表性能优化">长列表性能优化Object.freeze</a>
  * <a href="#debounce使用">debounce使用</a>
  * <a href="#多个路由共用一个组件操作">多个路由共用一个组件,组件如何重新渲染</a>
  * <a href="#事件的销毁">事件的销毁 beforeDestroy $once('hook:beforeDestroy')</a>
  * <a href="#图片资源懒加载">图片资源懒加载</a>
  * <a href="#优化无限列表性能">优化无限列表性能</a>
  * <a href="#全局引入less变量">全局引入less变量</a>
  * <a href="#CDN引入">CDN引入</a>
  * <a href="#骨架屏">骨架屏</a>

# <a name="vue项目性能优化">Vue开发技巧 + 性能优化</a>[![bakTop](/img/backward.png)](#top)  
[10个Vue开发技巧助力成为更好的工程师](https://juejin.im/post/5e8a9b1ae51d45470720bdfa)
[这 10 个技巧让你成为一个更好的 Vue 开发者](https://juejin.im/post/5e8286f6e51d4546c72dfff0)

[Vue 开发必须知道的 36 个技巧【近1W字】](https://juejin.im/post/5d9d386fe51d45784d3f8637)

[Vue CLI 首屏优化技巧](https://segmentfault.com/a/1190000019499007)

[Vue 项目性能优化](https://juejin.im/post/5d548b83f265da03ab42471d)

# <a name="v-if和v-show的区别">v-if和v-show的区别</a>[![bakTop](./img/backward.png)](#top)  
[官网解释](https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)

```html
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

v-show 只是简单的display控制显隐藏，不管初始条件如何，元素总会被渲染；
```
v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。  
因此，v-if适用于很少改变条件的场景，v-show适用于频繁切换条件的场景。

# <a name="v-for 遍历避免同时使用 v-if">v-for 遍历避免同时使用 v-if</a>[![bakTop](./img/backward.png)](#top)  
[官网解释](https://cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8)

[风格指南-避免 v-if 和 v-for 用在一起](https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81)

v-for 具有比 v-if 更高的优先级; 

推荐：
```html
isShow为false时，不会渲染列表，
如果将 v-if="isShow" 放在li标签里，列表依旧会渲染
<template>
<ul v-if="isShow">
  <li
    v-for="item in lists"
    :key="item.id">
    {{ item.name }}
  </li>
</ul>
</template>
```

当只需要渲染很小一部分的时候，可以通过 computed 过滤掉无需渲染的列表。
而不是在 li 标签里使用  v-if="item.isActive"   

推荐：
```html
<template>
<ul>
  <li
    v-for="item in activeLists"
    :key="item.id">
    {{ item.name }}
  </li>
</ul>
</template>

<script>
export default{
  data(){
    return{
      lists: [],
    }
  },
  computed: {
    activeLists() {
      return this.lists.filter((item) => {
        return item.isActive
      })
    }
  }
}
</script>
```

不推荐：v-for,v-if 同时使用 
```html
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

## <a name="自定义组件双向绑定">model,.sync选项实现自定义组件双向绑定</a>[![bakTop](/img/backward.png)](#top)
[Vue中从v-model，model，.sync到双向数据传递，再到双向数据绑定](https://blog.csdn.net/Qin_Shuo/article/details/82693919)

### v-model
```<input v-model='val'>```  
相当于  
```<input :value="val" @input="val = $event.target.value">```

父组件使用
```html
<vmodel-input v-model="val" />

<input v-model="val"><!-- v-model -->
```

子组件
```html
<template>
  <div>
    <input
      :value="vmodelVal"
      @input="handleInput"
    />
  </div>
</template>
<script>
export default {
  name: "VModelInput",
  props: {
    vmodelVal: {
      type: String,
      default: ''
    }
  },
  methods:{
    handleInput(event){
      console.log(event.target.value);
      this.$emit('input',event.target.value)//这里$emit调用的是默认的input
    }
  }
}
</script>
```

### .sync
[.sync 修饰符](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)

父组件使用
```html
<div >
  <!-- <sync-input 
    :syncVal="val"
    @update:syncVal="val = $event"
  /> -->
  <!-- 使用 .sync语法简写 -->
  <sync-input :syncVal.sync="val" />

  <input v-model="val"><!-- v-model -->
</div>
```

子组件
```html
<template>
  <input
    :value="syncVal"
    @input="handleInput"
  />
</template>
<script>
  export default {
    name: "SyncInput",
    props: {
      syncVal: {
        type: String,
        default: ''
      }
    },
    methods:{
      handleInput(event){
        console.log(event.target.value);
        this.$emit('update:syncVal', event.target.value)
        //默认 update 
      }
    }
  }
</script>
```
注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync="doc.title + 'abcd'" 是无效的)

### [model](https://cn.vuejs.org/v2/api/#model)

允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。

父组件使用
```html
<model-input v-model="val" />
```

子组件
```html
<template>
  <div>
    <input
      :value="modelVal"
      @[methodType]="handleInput"
    />
  </div>
</template>
<script>
const methodType = 'input'
// const methodType = 'click'
export default {
  name: "ModelInput",
  //自定义prop和event，作为v-model触发依据
  model:{
    prop:'modelVal',
    event: methodType
  },
  data() {
    return {
      methodType
    }
  },
  props: {
    modelVal: {
      type: String,
      default: ''
    }
  },
  methods:{
    handleInput(event){
      console.log(event.target.value);
      this.$emit(this.methodType, event.target.value)
      //自定义组件中使用v-model都需要通过$emit触发
      //触发的方法 必须和 model.event 相同
    }
  }
}
</script>
```

## <a name="render函数">render函数</a>[![bakTop](/img/backward.png)](#top)  
场景:有些代码在 template 里面写会重复很多,可使用 render 函数
```html
// 初级
<template>
 <div>
    <h1 v-if="level == 1"><slot></slot></h1>
    <h2 v-if="level == 2"><slot></slot></h2>
    <h3 v-if="level == 3"><slot></slot></h3>
    <h4 v-if="level == 4"><slot></slot></h4>
    <h5 v-if="level == 5"><slot></slot></h5>
    <h6 v-if="level == 6"><slot></slot></h6>
  </div>
</template>

// 优化版,利用 render 函数减小了代码重复率
<template>
  <div>
    <child :level="1">我是h1</child>
    <child :level="2">我是h2</child>
  </div>
</template>
<script>
  export default {
    components: {
      child: ()=> import('./child.vue')
    },
  }
</script>

//child.vue
<script>
  export default {
    props: {
      level: {
        require: true,
        type: Number,
      }
    },
    render(createElement) {
      return createElement('h' + this.level, this.$slots.default);
    }
  };
</script>
```

template和render函数的区别：
* template适合简单的组件封装，render函数适合复杂的组件封装
* template理解起来相对简单，但灵活性不高，性能低，而render灵活性较高，对使用者要求亦高
* render函数渲染没有编译过程，相当于把代码直接给程序，所以容易出现错误，对使用者要求高
* render函数较template优先级别高


## <a name="动态组件">动态组件</a>[![bakTop](/img/backward.png)](#top)
[动态组件](https://cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6)

有的时候，在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里：

通过 Vue 的 \<component\> 元素加一个特殊的 is attribute 来实现
```html
<template>
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentTab: "a",
        tabs: ["a", "b", "c"]
      }
    },
    components: {
      "tab-a": {
        template: '<div>A</div>'
      },
      "tab-b": {
        template: '<div>B</div>'
      },
      "tab-c": {
        template: '<div>C</div>'
      },
    },
    computed: {
      currentTabComponent: function() {
        return "tab-" + this.currentTab.toLowerCase();
      }
    }
  }
</script>
```

* [在动态组件上使用 keep-alive](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive)



每次切换新标签的时候，Vue 都创建了一个新的 currentTabComponent 实例。

有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题
```html
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

## <a name="异步组件">异步组件,路由懒加载</a>[![bakTop](/img/backward.png)](#top)  
[异步组件-vue官网](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)

Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。

全局
```js
// 工厂函数执行 resolve 回调
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})

或者
// 工厂函数返回 Promise
Vue.component(
  'async-webpack-example',
  // 这个 `import` 函数会返回一个 `Promise` 对象。
  () => import(/* webpackChunkName: 'async-webpack-example' */'./my-async-component')
)
```

局部
```js
new Vue({
  components: {
    'my-component': () => import('./my-async-component')
  }
})
```

// 工厂函数返回一个配置化组件对象
```js
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

## <a name="递归组件">递归组件</a>[![bakTop](/img/backward.png)](#top)  
[递归组件-vue官网](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6)

组件是可以在它们自己的模板中调用自身的。不过它们只能通过 name 选项来做这件事：

必须给一个条件来限制数量，否则会抛出错误: max stack size exceeded，所以请确保递归调用是条件性的 (例如使用一个最终会得到 false 的 v-if)。


当你的数据结构如下时，就需要递归组件
```js
{
  lists: [
    {
      id: '1',
      title: 't1',
      children: [
        id: 't1-1',
        title: 't1-1',
      ]
    },
    {
      id: '2',
      title: 't2',
      children: [
        id: 't2-1',
        title: 't2-1',
      ]
    },
  ]
}
```

```html
<template>
  <div class="">
    <ul v-for="list in lists" :key="list.id">
      <list-item :list="list" />
    </ul>
  </div>
</template>
<script>
import listItem from './test1.vue'
export default {
  components: {
    listItem
  },
  data () {
    return {
      lists: [
        {
          id: '1',
          title: 't1',
          children: [
            {
              id: 't1-1',
              title: 't1-1',
              children: [
                {
                  id: 't1-1-1',
                  title: 't1-1-1',
                },
              ]
            },
            {
              id: 't1-2',
              title: 't1-2',
            },
          ]
        },
        {
          id: '2',
          title: 't2',
          children: [
            {
              id: 't2-2',
              title: 't2-2',
            }
          ]
        },
        {
          id: '3',
          title: 't3',
        },
      ]
    }
  },
}
</script>
```

```html
<template>
  <li class="">
    -{{list.title}}
    <ul  v-if="hasChild" style="padding-left: 10px">
      <list-item v-for="item in list.children"  :list="item" :key="item.id" />
    </ul>
  </li>
</template>
<script>
export default {
  name: 'list-item', //必要
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  computed:{
      hasChild(){ //递归终止条件，避免抛错
        return this.list.children && this.list.children.length
      }
    },
}
</script>
```

显示结果  
![](/img/Vue/递归组件-result.jpg)


## <a name="批量注册全局组件">批量注册全局组件</a>[![bakTop](/img/backward.png)](#top)  

* require.context(arg1,arg2,arg3)
  >arg1 - 读取文件的路径  
  >arg2 - 是否遍历文件的子目录  
  >arg3 - 匹配文件的正则  


globalComponent.js  
```js
export default {
  install(Vue) {
    // 批量注册公用组件
    const components = require.context('@/components/common', false, /\.vue$/)
    components.keys().map(path => {
      const fileName = path.replace(/(.*\/)*([^.]+).*/ig, "$2"); // 获取组件文件名
      Vue.component(fileName, components(path).default || components(path)) // 动态注册该目录下的所有.vue文件
    })
  }
}
```

main.js
```js
import globalComponent from '@/lib/globalComponent.js'
Vue.use(globalComponent)
```

## <a name="批量注册全局filter">批量注册全局filter</a>[![bakTop](/img/backward.png)](#top)  
filters/index.js
```js
const filters = {
  fn: ()=>{}
}

//批量注册全局filter
export default {
  install(Vue) {
    Object.keys(filters).forEach(item => {
      Vue.filter(item, filters[item])
    })
  }
}
```

main.js
```js
import filters from '@/filters'
Vue.use(filters)
```

## <a name="路由参数解耦">路由参数解耦 props</a>[![bakTop](/img/backward.png)](#top)  
[路由组件传参](https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F)

一般用法,与 $route 的耦合
```js
export default {
  methods: {
    getParamsId() {
      return this.$route.params.id
    }
  }
}
```

正确的做法是通过 props 解耦
```js
const router = new VueRouter({
  routes: [{
    path: '/user/:id',
    component: User,
    //布尔模式
    props: true

    //对象模式
    /* props: {
      newsletterPopup: false
    } */

    //函数模式
    /* props: (route) => ({
      id: route.params.id
    }) */
  }]
})

将路由的 props 属性设置为 true 后，组件内可通过 props 接收到 params 参数

export default {
  props: ['id'],
  methods: {
    getParamsId() {
      return this.id
    }
  }
}
```

## <a name="函数式组件">函数式组件 functional</a>[![bakTop](/img/backward.png)](#top)  
[函数式组件](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)

定义：
* Stateless(无状态)： 没有响应式数据
* Instanceless(无实例)：组件自身没有实例，即没有 this 上下文

特点：渲染开销低，对性能有好处

应用：  
当组件没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法。实际上，它只是一个接受一些 prop 的函数。在这样的场景下，我们可以将组件标记为 functional。



子组件使用 函数式组件
```html
<template functional>
  <div class="list">
      <div class="item" v-for="item in props.list" :key="item.id" @click="props.itemClick(item)">
          <p>{{item.title}}</p>
          <p>{{item.content}}</p>
      </div>
  </div>
</template>
```

父组件
```js
<template>
  <div>
    <List :list="list" :itemClick="func" />
  </div>
</template>
import List from '@/components/List.vue'
export default {
  components: {
      List
  },
  data() {
    return {
      list: [
        {
          title: 'title1',
          content: 'content1'
        },
        {
          title: 'title2',
          content: 'content2'
        },
      ],
      currentItem: ''
    }
  },
  methods: {
    func(val){
      console.log(val);
    }
  }
}
```

### 动态指令参数
```html
<button @[clickType]="myFunc">{{clickType}}</button>
<script>
data(){
  return {
    clickType: 'click'
  }
},
methods: {
  myFunc(){
    this.clickType = this.clickType === 'click' ? 'dblclick' : 'click';
  }
}
</script>
```


## <a name="长列表性能优化">长列表性能优化 Object.freeze</a>[![bakTop](/img/backward.png)](#top) 

Vue 会通过 Object.defineProperty 对数据进行劫持，来实现视图响应数据的变化，然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变  

通过 Object.freeze 方法来冻结一个对象,可以减少组件初始化的时间
```js
export default {
  data(){
    return {
      users: {}
    }
  },
  async created() {
    const users = await axios.get("xxx");
    this.users = Object.freeze(users);
  }
};
```

## <a name="debounce使用">debounce使用 beforeDestroy或$once</a>[![bakTop](/img/backward.png)](#top) 
当一个按钮多次点击时会导致多次触发事件，可以结合场景是否立即执行immediate

```js
import {debounce} from 'lodash'

methods：{
  remoteMethod: debounce(function (query) {
    // to do ...
    // this 的指向没有问题
  }, 200),
}
```

##  <a name="多个路由共用一个组件操作">多个路由共用一个组件,组件如何重新渲染</a>[![bakTop](/img/backward.png)](#top)  
* router-view上加上一个唯一的key
```html
<div id="app">
  <router-view :key="$route.fullPath" />
</div>
```

* watch监听
```js
当路由变化时，watch里的路由监听函数都会被触发，可以在这个函数中对页面的数据进行重新加载的操作。
watch:{
  "$route":function(to,from){
    if (to.name === from.name && to.params.id !== from.params.id) {
      //do something 
    }
  }
}
```

* beforeRouteUpdate  // 组件内的守卫
```js
//设置id参数 判断是否相同
beforeRouteUpdate (to, from, next) {
  if (to.name === from.name && to.params.id !== from.params.id) {
    //do something 
    next() 
  }
}
```

## <a name="事件的销毁">事件的销毁 beforeDestroy, $once('hook:beforeDestroy')</a>[![bakTop](/img/backward.png)](#top) 
在 js 内使用 定时器, addEventListener 等方式是不会自动销毁的 

* beforeDestroy,destroyed周期清除
```js
data() {
  return {
    timer: null  // 定时器名称
  }
},
mounted() {
  this.timer = setTimeout(() => {
    // 某些操作
  }, 1000)
},
beforeDestroy() {
  clearTimeout(this.timer);
}
```

* 通过$once这个事件侦听器器在定义完定时器之后的位置来清除定时器
```js
mounted() {
  const timer = null
  timer = setTimeout(() => {
    // 某些操作
  }, 1000)
  // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
  this.$once('hook:beforeDestroy', () => {
    clearTimeout(timer);
  })
},
```

[$once、$on、$off的使用](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E7%A8%8B%E5%BA%8F%E5%8C%96%E7%9A%84%E4%BA%8B%E4%BB%B6%E4%BE%A6%E5%90%AC%E5%99%A8)


## <a name="图片资源懒加载">图片资源懒加载</a>[![bakTop](/img/backward.png)](#top) 

```js
//安装插件
npm install vue-lazyload --save-dev

//man.js 中引入并使用
import VueLazyload from 'vue-lazyload'

//直接使用
Vue.use(VueLazyload)

//或者添加自定义选项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

//将 img 标签的 src 属性直接改为 v-lazy 
<img v-lazy="/static/img/1.png">
```




## <a name="优化无限列表性能">优化无限列表性能</a>[![bakTop](/img/backward.png)](#top) 

如果你的应用存在非常长或者无限滚动的列表，那么需要采用 窗口化 的技术来优化性能，只需要渲染少部分区域的内容，减少重新渲染组件和创建 dom 节点的时间。 你可以参考以下开源项目 [vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list) 和[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)  来优化这种无限列表的场景的。


## <a name="全局引入less变量">全局引入less变量</a>[![bakTop](/img/backward.png)](#top)  
```npm i style-resources-loader -D```  安装 style-resources-loader

安装完成之后，命令行会让你选择预处理器，我们选择 less!

安装完预处理器 会在项目的 vue.config.js 里面生成一段代码，我们只需要将 less 文件路径放入其中
```js
pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/index.less')]
    }
  }
```

样式穿透
* less使用  /deep/
* scss使用 ::v-deep
* stylus使用 >>>


## <a name="SVG封装">SVG封装</a>[![bakTop](/img/backward.png)](#top) 
[SVG封装](./SVG封装.md)

## <a name="CDN引入">CDN引入</a>[![bakTop](/img/backward.png)](#top) 

国内的CDN服务推荐使用[BootCDN](https://www.bootcdn.cn/)

index.html
```html
<!-- CDN引入外部资源 -->
<script src="//cdn.bootcss.com/vue/2.6.11/vue.min.js"></script>
<script src="//cdn.bootcss.com/vuex/3.0.1/vuex.min.js"></script>
<script src="//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
<script src="//cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
<script src="//unpkg.com/iview@1.0.1/dist/iview.min.js"></script>
```

[vue.config.js配置externals](https://webpack.js.org/configuration/externals/)
```js
configureWebpack: {
  externals: {
    'vue': 'Vue',
    'vuex': 'Vuex',
    'vue-router': 'VueRouter',
    'axios': 'axios',
    'iView': 'iview',
    // 'element-ui': 'ELEMENT',
  },
},
```

优化写法

public/index.html添加
```html
<head>
  <!-- 使用CDN加速的CSS文件，配置在vue.config.js下 -->
  <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.css) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="preload" as="style" />
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
  <% } %>
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
```

vue.config.js
```js
// cdn预加载使用
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios'
}
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: [],
    js: [
      "//cdn.bootcss.com/vue/2.6.11/vue.min.js",
      "//cdn.bootcss.com/vuex/3.1.3/vuex.min.js",
      "//cdn.bootcss.com/vue-router/3.1.6/vue-router.min.js",
      "//cdn.bootcss.com/axios/0.19.2/axios.min.js"
    ]
  }
}

module.exports = {
  chainWebpack(config) {
    // 添加CDN参数到 htmlWebpackPlugin 配置中， 详见public/index.html 修改
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
          args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
          args[0].cdn = cdn.dev
      }
      return args
    })
  }
}
```

## <a name="骨架屏">骨架屏</a>[![bakTop](/img/backward.png)](#top) 

[骨架屏](https://www.jianshu.com/p/eacac700630e)
骨架屏就是在页面数据尚未加载前先给用户展示出页面的大致结构，直到请求数据返回后再渲染页面，补充进需要显示的数据内容。常用于文章列表、动态列表页等相对比较规则的列表页面。
<img src="../../img/skeleton.jpg">


## 插件-打包优化

### 对vue-cli内部的 webpack 配置进行更细粒度的修改
vue.config.js
```js
module.exports = {
  configureWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}  
```

### webpack-bundle-analyzer 打包后模块大小分析
npm install -g webpack-bundle-analyzer 

vue.config.js
```js
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new BundleAnalyzerPlugin())
    } else {
    }
  },
  // 或者
  /* chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(BundleAnalyzerPlugin)
          .end();
        config.plugins.delete('prefetch')
      }
    } else {
    }
  }, */
}
```
npm run build --report

### compression-webpack-plugin 开启gzip压缩
```js
const CompressionWebpackPlugin = require('compression-webpack-plugin')

configureWebpack: (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 匹配文件名
        threshold: 10240, //对超过 10*1024 的数据进行压缩
        minRatio: 0.8,
        deleteOriginalAssets: false //是否删除原文件
      })
    )
  }
}
```

## 报错
vue.runtime.esm.js?2b0e:619 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.


这里引用的是`vue.runtime.esm.js`，造成的不能正常运行，  
在 vue.config.js 修改引用文件为 `vue.esm.js`
```js
const path = require('path')
function resolve (dir) {
  return path.join(__dirname,dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$','vue/dist/vue.esm.js') // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
}
```