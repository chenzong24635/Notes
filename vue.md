* <a href="#MVVM、MVC">MVVM、MVC</a>
* <a href="#vue优点">vue优点</a>
* <a href="#双向数据绑定原理、实现">双向数据绑定原理、实现</a>
* <a href="#Vue的响应式原理">Vue的响应式原理</a>
* <a href="#生命周期">生命周期</a>
* <a href="#computed watch methods">computed watch methods</a>
* <a href="#Vue中给data中的对象属性添加一个新的属性时会发生什么，如何解决？">Vue中给data中的对象属性添加一个新的属性时会发生什么，如何解决？</a>
* <a href="#slot">slot插槽</a>
* <a href="#组件中key作用">组件中key作用</a>
* <a href="#$nextTick">$nextTick</a>
* <a href="#页面滚动">页面滚动</a>
* <a href="#keep-alive">keep-alive</a>
* <a href="#路由vue-router">路由vue-router</a>
  * <a href="#base">base</a>
  * <a href="#this.$route 和 this.$router区别">this.$route 和 this.$router区别</a>
  * <a href="#push(),replace(),go()">push(),replace(),go()</a>
  * <a href="#页面跳转方法">页面跳转方法</a>
  * <a href="#页面url参数获取">页面url参数获取</a>
  * <a href="#解决vue多个路由共用一个页面的问题">解决vue多个路由共用一个页面的问题</a>
  * <a href="#刷新当前路由方法">刷新当前路由方法</a>
  * <a href="#mode">mode: hash | history区别</a>
  * <a href="#切换页面时自动滚动到顶部">切换页面时自动滚动到顶部</a>
  * <a href="#设置页面title">设置页面title</a>

* <a href="#组件通信方法">组件通信方法</a>
* <a href="#监听组件的生命周期">监听组件的生命周期</a>


* <a href="#token验证">如何添加token验证</a>
* <a href="#静态资源处理">静态资源处理：图片等</a>
* <a href="#打包">打包时常见问题及解决</a>
* <a href="#其他">其他</a>
* <a href="#轮播图--VueAwesomeSwiper">轮播图--VueAwesomeSwiper使用</a>
* <a href="#rem">rem</a>
* <a href="#创建项目">创建项目</a>
* <a href="#npm">npm</a>
* <a href="#"></a>
* <a href="#"></a>


# <a name=""></a>
设置路径别名
>
    build -- webpack.base.conf.js
    module.exports -- resolve --a>lias

    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    'styles': resolve('src/assets/styles'), // 自己配置

    在main.js直接 styles，其他地方需要加波浪线 ‘ ~ ’

dependencies 与 devdependencies 区别
>
    –save会把依赖包名称添加到package.json文件dependencies键下
    –save-dev则添加到package.json文件devDependencies键下

    devDependencies -- 开发时用的依赖项，它们不会被部署到生产环境。
    Dependencies -- 生产环境中需要的依赖，即正常运行该包时所需要的依赖项。


# <a name="MVVM、MVC">MVVM、MVC</a>
>
    MVVM是是Model-View-ViewModel的缩写，
    Model代表数据模型，定义数据操作的业务逻辑，
    View代表视图层，负责将数据模型渲染到页面上，
    ViewModel通过双向绑定把View和Model进行同步交互，不需要手动操作DOM的一种设计思想。

    MVVM和MVC都是一种设计思想，主要就是MVC中的Controller演变成ViewModel,，MVVM主要通过数据来显示视图层而不是操作节点，解决了MVC中大量的DOM操作使页面渲染性能降低，加载速度慢，影响用户体验问题。主要用于数据操作比较多的场景

# <a name="vue优点">vue优点</a>
>
    低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

    可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

    独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
    可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

# <a name="双向数据绑定原理、实现">双向数据绑定原理、实现:Object.defineProperty、proxy</a>    
Vue2.x 使用 Object.defineProperty 实现数据双向绑定，V3.0 则使用了 Proxy

### 区别：
>
    Object.definedProperty 的作用是劫持一个对象的属性，劫持属性的getter和setter方法，在对象的属性发生变化时进行特定的操作。而 Proxy 劫持的是整个对象。

    Proxy 会返回一个代理对象，我们只需要操作新对象即可，而 Object.defineProperty 只能遍历对象属性直接修改。

    Object.definedProperty 不支持数组，更准确的说是不支持数组的各种API，因为如果仅仅考虑arry[i] = value 这种情况，是可以劫持的，但是这种劫持意义不大。而 Proxy 可以支持数组的各种API。

    尽管 Object.defineProperty 有诸多缺陷，但是其兼容性要好于 Prox


### Object.defineProperty:

Object.defineProperty 定义出来的属性，默认是不可枚举，不可更改，不可配置【无法delete】
>
    let obj = {};
    let temp = 'base';
    Object.defineProperty(obj, 'name', {
        get() {
            console.log("读取成功");
            return temp
        },
        set(value) {
            console.log("设置成功");
            temp = value;
        }
    });
    obj.name = 'change';
    console.log(obj.name);

### proxy
Proxy 会劫持整个对象，读取对象中的属性或者是修改属性值，那么就会被劫持。但是有点需要注意，复杂数据类型，监控的是引用地址，而不是值，如果引用地址没有改变，那么不会触发set。
>
    let obj = {name: 'Yvette', hobbits: ['travel', 'reading'], info: {
        age: 20,
        job: 'engineer'
    }};
    let p = new Proxy(obj, {
        get(target, key) { //第三个参数是 proxy， 一般不使用
            console.log('读取成功');
            return Reflect.get(target, key);
        },
        set(target, key, value) {
            if(key === 'length') return true; //如果是数组长度的变化，返回。
            console.log('设置成功');
            return Reflect.set([target, key, value]);
        }
    });
    p.name = 20; //设置成功
    p.age = 20; //设置成功; 不需要事先定义此属性
    p.hobbits.push('photography'); //读取成功;注意不会触发设置成功
    p.info.age = 18; //读取成功;不会触发设置成功    


# <a name="Vue的响应式原理">Vue的响应式原理</a>

>
    当一个Vue实例创建时，vue会遍历data选项的属性，用 Object.defineProperty 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

# <a name="生命周期">生命周期</a>
[Vue2.0生命周期](https://segmentfault.com/a/1190000008010666)

生命周期：
>
    创建前/后： 
    beforeCreated阶段: vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。
    created阶段: 完成data初始化，$el还没有。

    载入前/后：
    beforeMount阶段：完成了$el和data初始化，但还是挂载之前为虚拟的dom节点，data.message还未替换。
    mounted阶段：vue实例挂载完成，data.message成功渲染。

    更新前/后：当data变化时，会触发beforeUpdate和updated方法。

    销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在


生命周期钩子的一些使用方法：
>

    beforecreate : 可以在这加个loading事件，在加载实例时触发

    created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用

    mounted : 挂载元素，获取到DOM节点
    
    updated : 如果对数据统一处理，在这里写上相应函数

    beforeDestroy : 可以做一个确认停止事件的确认框 

![lifecycle](img/lifecycle.png)

# <a name="computed watch methods">computed watch methods</a>

用法、区别：
>
    computed watch前两者自动追踪数据，执行相关函数，methods需手动调用；

    watch 监听某个数据(需在data定义)的变化，执行相关操作
    computed 是计算属性，用法与data一致, 计算后返回新值

    数据变化的同时进行异步操作或者是比较大的开销，那么watch为最佳选择
    watch的对象必须事先声明

# <a name="Vue中给data中的对象属性添加一个新的属性时会发生什么，如何解决？">Vue中给data中的对象属性添加一个新的属性时会发生什么，如何解决？</a>
>
    示例：
    <template>
      <div>
        <ul>
          <li v-for="value in obj" :key="value">
            {{value}}
          </li>
        </ul>
        <button @click="addObjB">添加obj.b</button>
      </div>
    </template>
    <script>
    export default {
      data () {
        return {
          obj: {
            a: 'obj.a'
          }
        }
      },
      methods: {
        addObjB () {
          this.obj.b = 'obj.b'
          console.log(this.obj)
        }
      }
    }
    </script>
    <style></style>
    点击button会发现，obj.b 已经成功添加，但是视图并未刷新：
    原因在于在Vue实例创建时，obj.b并未声明，因此就没有被Vue转换为响应式的属性，自然就不会触发视图的更新，这时就需要使用Vue的全局api $set()：

    addObjB () {
          // this.obj.b = 'obj.b'
          this.$set(this.obj, 'b', 'obj.b')
          console.log(this.obj)
        }
    $set()方法相当于手动的去把obj.b处理成一个响应式的属性，此时视图也会跟着改变了：



# <a name="slot">slot插槽</a>
插槽显不显示、怎样显示是由父组件来控制的，而插槽在哪里显示就由子组件来进行控制


>
    //父组件
    <template>
      <div>
        我是父组件
        <slot-one>
          <p style="color:red">我是父组件插槽内容</p>
        </slot-one>
      </div>
    </template>

    //子组件
    <template>
      <div class="slotOne">
        <div>我是slotOne组件</div>
        <slot></slot>
      </div>
    </template>

具名插槽
>
    //父组件
    <template>
      <div>
        我是父组件
        <slot-two>
          <p>我是普通插槽</p>
          <template slot="header">
            <p>我是name为header的slot</p>
          </template>
          <p slot="footer">我是name为footer的slot</p>
        </slot-two>
      </div>
    </template>

    //子组件
    <template>
      <div class="slotTwo">
        <div>slottwo</div>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </template>


# <a name="组件中key作用">组件中key作用</a>
>

    当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM
>

    key 的作用是为了在 diff 算法执行时更快的找到对应的节点，提高 diff 速度。

    vue 和 react 都是采用 diff 算法来对比新旧虚拟节点，从而更新节点。在 vue 的 diff 函数中。可以先了解一下 diff 算法。

    在交叉对比的时候，当新节点跟旧节点头尾交叉对比没有结果的时候，会根据新节点的 key 去对比旧节点数组中的 key，从而找到相应旧节点（这里对应的是一个 key => index 的 map 映射）。如果没找到就认为是一个新增节点。而如果没有 key，那么就会采用一种遍历查找的方式去找到对应的旧节点。一种一个 map 映射，另一种是遍历查找。相比而言。map 映射的速度更快。


# <a name="$nextTick">$nextTick</a>
作用：
>
    Vue中DOM更新是异步的
    $nextTick是DOM更新完成后执行的

# <a name="页面滚动">页面滚动</a>
* document.documentElement.scrollTop = 380 //不需要加单位
* 
    this.$nextTick(() => {
      <!-- this.$refs.DOM.scrollBy(0, 300) -->
      this.$refs.DOM.scrollTo(0, 300)
    })
* 
document.getElementById('ID').scrollIntoView()

# <a name="keep-alive">keep-alive</a>

>
    包裹动态组件时，会缓存不活动的组件实例，主要用于保留组件状态或避免重新渲染；

    使用：
      缓存： <keep-alive include=”组件名”></keep-alive>
      不缓存：<keep-alive exclude=”组件名”></keep-alive>

    如果使用了keep-alive对组件进行了缓存，组件不会销毁，destroyed不执行

# <a name="路由vue-router">路由vue-router</a>
https://router.vuejs.org/zh

##  <a name="base">base</a>

    {
      path: '/a/:id',  //访问路径,
      name: 'a', //名称，vue页面可通过name调用,
      component: A, //具体vue页面
      meta: {title: '标题'},  //页面标题
      children: [

      ],
      redirect: '/b', //{ name: 'foo' } 重定向：当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
      alias:'/b', //别名：/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
    }
##  <a name="this.$route 和 this.$router区别">this.$route 和 this.$router区别</a>

    this.$route 信息参数（query、prams）传参获取 --只读
    this.$router 功能函数，go()，push()等方法调用 --只写

##  <a name="push(),replace(),go()">push(),replace(),go()</a>
1. push()

    this.$router.push(location, onComplete?, onAbort?) //页面跳转，且会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，则回到之前的 URL。等同于<router-link :to="...">	

2. replace()

    this.$router.replace(location, onComplete?, onAbort?) //页面跳转，不会向 history 添加新记录，而是替换掉当前的 history 记录。等同于<router-link :to="..." replace> 

3. go()
    
    this.$router.go(n) //的参数是一个整数，意思是在 history 记录中向前或者后退多少步，

##  <a name="页面跳转方法">页面跳转方法</a>
如果提供了 path，params会被忽略，所以params传参要用name来引入

    声明式 <router-link :to="...">
    编程式 router.push(...)

### 无参数：
1. (:to动态绑定name 或则 path) 页面自动解析成path地址 
>
    <router-link :to="{name:'RouterB'}">去B页面</router-link> 

2. (to="path")，只能指定path值 
>
    <router-link to="/RouterB">去B页面</router-link>  
      
### 传参:
1. query
>
    (query传参，参数通过url get方式拼接) --在浏览器地址栏中显示参数 ?id=myid&name=myname

    <router-link :to="{path:'/Ajax.mdRouterB', query: {name:'name1', title: 'title'} }">去B页面，传入参数</router-link>

2. params传参
>
    (params传参，参数通过路径[/001]形式拼接到url上，如果没有在路径配置种使用参数占位符，url不会拼接，直接展示是具体路由页面)/myid/myname

    <router-link :to="{name:'RouterB', params: {name:'name2', title: 'title2'}}">去B页面，params传入参数</router-link>

##  <a name="页面url参数获取">页面url参数获取</a>
>
    var param = this.$route.query; //query传参 获取方法
    var param = this.$route.params; //params传参 获取方法

##  <a name="解决vue多个路由共用一个页面的问题">解决vue多个路由共用一个页面的问题</a>
1. watch
>
    当路由变化时，watch里的路由监听函数都会被触发，可以在这个函数中对页面的数据进行重新加载的操作。
    watch:{
      "$route":function(to,from){
        //to 对象：包含目标地址
        //from 对象：包含当前地址
        //其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
      }
    }
2. beforeRouteUpdate  // 组件内的守卫
>
    //设置id参数 判断是否相同
    beforeRouteUpdate (to, from, next) {
      if (to.name ==== from.name && to.params.id !== from.params.id) {
        //do something 
        next() 
      }
    }

##  <a name="刷新当前路由方法">刷新当前路由方法</a>

1. 
    this.$router.go(0)
    location.reload() 
    //这两种方式都相当于f5刷新，页面会有卡顿的情况

2. 先进入空白页再在空白页跳转回到上一个页面
    // 要刷新的页面
    refresh () {
      this.$router.replace({
        path: '/refresh',
        query: {
          t: Date.now()
        }
      })
    }

    // 空白页 
    <script>
    export default {
      beforeRouteEnter(to, from, next) {
        next(vm => {
          vm.$router.replace(from.path)
        })
      }
    }
    </script>

3. 通过改变router-view中的key来达到刷新组件的目的
    <router-view :key="reload"></router-view>
    默认让key等于当时的时间戳，当切换当前路由的时候改变时间戳为现在的时间戳，同样也可以达到刷新路由的目的
    this.reload = new Date().getTime()

##  <a name="mode">mode: hash | history区别</a>
hash
>
    即地址栏 URL 中的 # 符号。
    比如这个 URL：http://www.abc.com/#/hello，hash 的值为#/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
    通过 hashchange 事件监听 URL 的变化，改变 URL 的方式只有这几种：通过浏览器前进后退改变 URL、通过<a>标签改变 URL、通过window.location改变URL

history 
>
    利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）

这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

#### mode:history缺点
* 打包存放路径问题
mode: 'history',
base: '/dist/'

* 刷新问题
不怕前进，不怕后退，就怕刷新，f5，（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的。

在hash模式下，前端路由修改的是##中的信息，而浏览器请求时是不带它玩的，所以没有问题.但是在history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的响应或者资源，页面会404。

#### 如何去除vue项目中的网址的 ## --- History模式
    //router/index.js
    const router = new VueRouter({
      mode: 'history',
      routes: [...]
    })
##  <a name="切换页面时自动滚动到顶部">切换页面时自动滚动到顶部</a>
>
    export default new Router({
      scrollBehavior: () => ({ y: 0 }), //路由跳转后页面回到顶部
      routes: [...]
    })

>

    const router = new Router({
      routes:[...]
    })

    router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
      window.scrollTo(0,0)//切换页面时滚动条自动滚动到顶部
      next()//执行进入路由，如果不写就不会进入目标页
    })

    export default router

##  <a name="设置页面title">设置页面title </a>
>
    const router = new Router({
      routes: [
        {
          path: '/',
          name: 'index',
          meta: { title: "首页" },
          component: Index
        }
      ]
    })

    router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
      window.scrollTo(0,0)//切换页面时滚动条自动滚动到顶部
      if (to.meta.title) {//判断是否有标题
        document.title = to.meta.title
      }
      next()//执行进入路由，如果不写就不会进入目标页
    })

    export default router

    

# <a name="组件通信方法">组件通信方法</a>
https://zhuanlan.zhihu.com/p/66189674

## EventBus  事件总线

    // main.js 中定义一个新的eventBus对象，其是一个全新的Vue实例
    export const eventBus = new Vue()
    Vue.prototype.eventBus = eventBus //绑定为全局对象

    //接收事件 监听当前实例上的自定义事件
    eventBus.$on( event, callback )

    //发送事件 触发当前实例上的事件
    eventBus.$emit( event,  [...args])

    // 移除事件
    eventBus.$off( [event, callback] )
    移除所有事件 eventBus.$off() 
    移除某事件   eventBus.$off('testEvent')

### 注意
1. $emit时，必须已经$on，否则将无法监听到事件，也就是说对组件是有一定的同时存在的要求的。(注：路由切换时，新路由组件先created，旧路由组件再destoryed，部分情况可以分别写入这两个生命周期，见此问题)。

2. $on在组件销毁后不会自动解除绑定，若同一组件多次生成则会多次绑定事件，则会一次$emit，多次响应，需额外处理。

3. 数据非“长效”数据，无法保存，只在$emit后生效

## props, $emit -- 父子组件通信 
    https://cn.vuejs.org/v2/guide/components-props.html

#### 父组件->子组件
  父组件
    <child :child-com="content"></child> //注意这里用驼峰写法

  子组件
    props: ['childCom', 'title']

    //指定值类型
    props: {
      title: String,
      likes: Number,
      isPublished: Boolean,
      commentIds: Array,
      author: Object
    }
    // 设置默认值
    propD: {
      type: Number,
      default: 100
    },
    propE: {
      type: Object,
      default: function () {  // 对象或数组默认值必须从一个工厂函数获取
        return { message: 'hello' }
      }
    }

#### 子组件->父组件
  子组件
    <template>
        <div @click="open"></div>
    </template>

    methods: {
      open() {
          this.$emit('showbox','msg'); //触发showbox方法，'msg'为向父组件传递的数据
      }
    }
  父组件
    <child @showbox="toshow" :msg="msg"></child> //监听子组件触发的showbox事件,然后调用toshow方法

    methods: {
      toshow(msg) {
        this.msg = msg;
      }
    }


## $attrs/$listeners
## $parent / $children & ref
## provide/inject
>
    允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。一言而蔽之：祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。



# <a name="监听组件的生命周期">监听组件的生命周期</a>

比如有父组件 Parent和子组件 Child，如果父组件监听到子组件挂载 mounted就做一些逻辑处理

常规的写法可能如下：
>
    // Parent.vue
    <Child @mounted="doSomething"/>

    // Child.vue
    mounted() {
      this.$emit("mounted");
    }


通过 @hook来监听，子组件不需要任何处理，只需要在父组件引用的时候即可：
>
    <Child @hook:mounted="doSomething"/>

    其它的生命周期事件，例如： created， updated等都可监听


# <a name="token验证">如何添加token验证</a>

#### api/index.js
    // 请求拦截器
    axios.interceptors.request.use(
      config => {
        if (store.state.accessToken) { // 在请求头中加token
          config.headers['X-Access-Auth-Token'] = store.state.accessToken
        }
        return config
      }, error => {
        return Promise.reject(error)
      }
    )   
#### store/index.js
    const store = new Vuex.Store({
      state: {
        accessToken: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : '',
      },
      mutations: {
        // 修改token，并将token存入localStorage
        changeToken (state, user) {
          state.accessToken = user.accessToken
          localStorage.setItem('accessToken', user.accessToken)
        }
      }
    })
#### router/index.js
  给需要判断是否登录的页面添加参数 requiresAuth
    const router = new Router({
      routes: [
        {
          path: '/cart',
          meta: {
            title: '购物车',
            requiresAuth: true
          }
        },
        {
          path: '/login',
          name: 'login',
          component: login
        }
      ]
    })

    //  在全局前置守卫中判断
    router.beforeEach((to, from, next) => {
      if (to.meta.requiresAuth) { // 是否需要toekn验证
        let token = localStorage.getItem('accessToken')
        if (!token) { // toekn是否存在
          next('/login') 
        } else {
          next()
        }
      } else {
        next()
      }
    })
#### 登录页面的token设置
    import { mapMutations } from 'vuex'
    methods: {
      ...mapMutations([
        // 将 `this.changeToken(args)` 映射为 `this.$store.commit('changeToken', args)`
        // 对应store/index.js的mutations方法
        'changeToken'
      ]),
      login () { // 登录成功时
        // // 将用户token保存到vuex中
        this.changeToken({ accessToken: data.accessToken})
      }
    }


# <a name="静态资源处理">静态资源处理</a>

## 处理静态资源 -- http://vuejs-templates.github.io/webpack/static.html
  #### 图片路径 
    1. 相对URL，例如./assets/logo.png将被解释为模块依赖性。它们将替换为基于Webpack输出配置的自动生成的URL。

    2. 未加前缀的URL(同相对URL)，例如，assets/logo.png将被视为与相对URL相同并被翻译成./assets/logo.png。

    3. 带有前缀的URL~被视为模块请求，类似于require('some-module/image.png')。如果要利用Webpack的模块解析配置，则需要使用此前缀。例如，如果您有解析别名assets，则需要使用\<img src="~assets/logo.png" >以确保遵守别名。

    4. 根相对URL，如/assets/logo.png根本不处理。--打包后图片不加载

  #### src/assets和static/区别

      能被 webpack 追踪到的静态资源，如 img 标签引入的图片， 可以放到 assets 里，
      而webpack无法追踪到的图片，如通过 css backgrount-image 引入的图片，只能放到 static 目录。

      相同点：资源在html中使用，都是可以的。

      不同点：使用assets下面的资源，在js中使用的话，路径要经过webpack中file-loader编译，路径不能直接写。

      assets中的文件会经过webpack打包，重新编译，推荐该方式。而static中的文件，不会经过编译static中的文件只是复制一遍而已。简单来说，static中建议放一些外部第三方，自己的放到assets，别人的放到static中。

      注意：如果把图片放在assets与static中，html页面可以使用；但在动态绑定中，assets路径的图片会加载失败，因为webpack使用的是commenJS规范，必须使用require才可以

1. 图片路径为static
    \<img class="img-title" src="static/images/index/b-t.jpg" alt="">

    onerror图片
    * \<img :src="item.pic" alt="" onerror="this.src='static/images/errorImg.jpg'">
    * \<img :src="item.pic" alt="" :onerror="errorImg'">
      data下: errorImg: 'this.src="' + require('../../assets/images/common/errorImg.jpg') + '"',
2. assets
    \<img class="img-title" src="../assets/images/index/m-t.jpg" alt="">
    编译后会转为
    \<img data-v-57509004="" src="/static/img/m-t.f606898.jpg" alt="" class="img-title">

3. 在JavaScript中获取资源路径 使用require对图片路径进行引用，这样通过变量传递的不是字符串而是图片资源。
    例：\<img :src="imgUrl" alt=""> 
    data () {
      return {
        imgUrl: require('../assets/images/index/m-t.jpg')
      }
    }





# <a name="打包">打包时常见问题及解决</a>
## vue中打包后出现css中文本超出部分隐藏显示省略号失效
    这是webpack的锅，webpack打包后-webkit-box-orient被移除，所以导致失效。
     .content {
        display: -webkit-box; /*作为弹性伸缩盒子模型显示*/
        -webkit-line-clamp: 2; /*显示的行数；如果要设置2行加...则设置为2*/
        overflow: hidden;
        text-overflow: ellipsis; /* 溢出用省略号*/
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;/*伸缩盒子的子元素排列：从上到下*/
        /* autoprefixer: on */
      }

## vue-cli2打包后打开 index.html 空白,某些图片字体文件加载不出来解决办法

1. 修改config下面的index.js中bulid模块导出的路径
    build: {
      //修改此处路径
      assetsPublicPath: './',
    }

2. build下utils.js文件
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
          //此处添加publicPath:'../../'
        publicPath:'../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }

3. 使用了mode：history
    src里边router/index.js路由配置里边默认模式是hash，如果你改成了history模式的话，打开也会是一片空白。
    dist包不是服务器跟目录，在index.htm里手动给js和css添加dist目录即可/dist/；

    mode: 'history',
    base: '/dist/' // 添加路径


## nginx
* 基本命令
    启动服务：start nginx
    退出服务：nginx -s quit
    强制关闭服务：nginx -s stop
    重载服务：nginx -s reload　　（重载服务配置文件，类似于重启，服务不会中止）
    验证配置文件：nginx -t
    使用配置文件：nginx -c "配置文件路径"
    使用帮助：nginx -h

# <a name="其他">其他</a>
## 组件引用路径写法 
    // 在build/webpack.base.conf.js中定义了 @
    @/commponents/a.vue


## Vue 用 axios 调用本地的 json 文件，
  json 必须存放在 “ static ” 文件夹下，static 目录是 vue-cli 向外暴露的静态文件夹，所有静态数据都应该放到static目录中。
  #### 调本地json文件
  import data from '@/assets/json/index/swiper1.json'
  console.log(data)

## 修改组件css  /deep/ 或 >>>   
    // less和sass中不管用
    .wrap /deep/ .vux-header {
      background-color: ##3cc51f;
    }

## 修改Vux组件中样式变量（组件颜色）
    修改build/webpack.base.conf.js
    module.exports = vuxLoader.merge(webpackConfig, {
      plugins:[
        {name: 'vux-ui'},
        {name: 'less-theme', path: 'src/assets/style/dy.less'}//自定义的Less文件路径
      ]
    })

    自定义dy.less内容
    @tabbar-text-active-color: ##ff0d00;

    最后需要重新启动项目，不然配置不起效果


# <a name="轮播图--VueAwesomeSwiper">轮播图--VueAwesomeSwiper</a>
https://segmentfault.com/a/1190000014609379

api同swiper
// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
>
    swiperOption: {
      notNextTick: true,
      swiperOption: { // swiper options 所有的配置同swiper官方api配置
        autoplay: true, // 可设置数值来指定播放速度
        speed: 400, // 滑动速度
        direction : 'horizontal', // 滑动方向
        loop: true, //是否循环
        navigation: { // 上一张、下一张
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: { // 圆点
          el: '.swiper-pagination',
          clickable: true, // 点击滑动
          type: 'custom',
          renderCustom: function (swiper, current, total) { // 自定义分页器样式
            const activeColor = '##168fed'
            const normalColor = '##aeaeae'
            let color = ''
            let paginationStyle = ''
            let html = ''
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                  color = activeColor
              } else {
                  color = normalColor
              }
              paginationStyle = `background:${color};opacity:1;margin-right:20px;width:20px;height:20px;transform:skew(15deg);border-radius:0;`
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return html
          }
        },
        initialSlide: 0, // 设定初始化时slide的索引
        grabCursor: true, // 小手掌抓取滑动
        setWrapperSize: true,
        autoHeight: true,
        scrollbar: '.swiper-scrollbar', // 滚动条
        on: { // 滑动之后回调函数
          slideChangeTransitionEnd: function(){
            console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
      }
    }

    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
    },
    mounted() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    }



# <a name="rem">rem</a>
>    
    npm install lib-flexible --save //安装flexible
    import 'lib-flexible' //在main.js中引入flexible

    npm install px2rem-loader --save-dev //安装px2rem-loader,自动将px转换为rem

    配置px2rem-loader
    在vue-cli生成的文件中,找到以下文件 build/utils.js,
    在exports.cssLoaders添加
    const px2remLoader = {
      loader: 'px2rem-loader',
      options: {
        remUnit: 75
      }
    }
    在generateLoaders修改
    const loaders = options.usePostCSS ? [cssLoader, px2remLoader, postcssLoader] : [cssLoader, px2remLoader]

#### px2remLoader用法
    直接写px，编译后会直接转化成rem —- 除开下面两种情况，其他长度用这个
    在px;后面添加/*no*/，不会转化px，原样输出。 — 一般border需用这个
    在px;后面添加/*px*/,会根据dpr的不同，生成三套代码。—- 一般字体需用这个
    border: 1px solid ##ddd; /*no*/
    height: 64px; /*px*/
    font-size: 28px; /*px*/


# <a name="创建项目">vue-cli快速创建项目</a>
>
    npm install --global vue-cli //  vue-cli安装
    vue init webpack vuedemo

    输入命令后，会跳出几个选项让你回答：
    Project name (baoge)： -----项目名称，直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters）
    Project description (A Vue.js project)： ----项目描述，也可直接点击回车，使用默认名字
    Author ()： ----作者名
    Runtime + Compiler: recommended for most users 运行加编译，既然已经说了推荐，就选它了
    Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere 仅运行时，已经有推荐了就选择第一个了
    Install vue-router? (Y/n) 是否安装vue-router，这是官方的路由，大多数情况下都使用，这里就输入“y”后回车即可。
    Use ESLint to lint your code? (Y/n) 是否使用ESLint管理代码，ESLint是个代码风格管理工具，是用来统一代码风格的，一般项目中都会使用。
    > Pick an ESLint preset (Use arrow keys) 选择一个ESLint预设，编写vue项目时的代码风格，直接y回车
    > Setup unit tests with Karma + Mocha? (Y/n) 是否安装单元测试，我选择安装y回车
Setup e2e tests with Nightwatch(Y/n)? 是否安装e2e测试 ，我选择安装y回车

## 生成文件目录后，使用 npm / cnpm安装依赖
npm install
> 安装淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org

## 启动项目 npm run dev 
> 如果浏览器打开之后，没有加载出页面，有可能是本地的 8080 端口被占用，需要修改一下配置文件 config里的index.js
dev --> port

## 打包上线 npm run build
    打开config/index.js，将其中build的assetsPublicPath值改为’./’
    组件的路径不能使用@/../static   只能使用../../../static这个时候，打包过后的登陆页面引用图片路径错误，多了一个/static/css
      修改build文件夹下边的utils.js文件
      if (options.extract) {
        return ExtractTextPlugin.extract({
          use: loaders,
          fallback: 'vue-style-loader',
          publicPath:'../../'  //此处添加publicPath:'../../'
        })
      } else {
        return ['vue-style-loader'].concat(loaders)
      }

    在项目开发完成之后，npm run build 来进行打包工作。注意，自己的项目文件都需要放到 src 文件夹下。
    打包完成后，会生成 dist 文件夹，如果已经修改了文件路径，可以直接打开本地文件查看。项目上线时，只需要将 dist 文件夹放到服务器就行了。




    ├── build/                      ## webpack 编译任务配置文件: 开发环境与生产环境
    │   └── ...
    ├── config/                     
    │   ├── index.js                ## 项目核心配置
    │   └── ...
    ├ ── node_module/               ##项目中安装的依赖模块
       ── src/
    │   ├── main.js                 ## 程序入口文件
    │   ├── App.vue                 ## 程序入口vue组件
    │   ├── components/             ## 组件
    │   │   └── ...
    │   └── assets/                 ## 资源文件夹，一般放一些静态资源文件
    │       └── ...
    ├── static/                     ## 纯静态资源 (直接拷贝到dist/static/里面)
    ├── test/
    │   └── unit/                   ## 单元测试
    │   │   ├── specs/              ## 测试规范
    │   │   ├── index.js            ## 测试入口文件
    │   │   └── karma.conf.js       ## 测试运行配置文件
    │   └── e2e/                    ## 端到端测试
    │   │   ├── specs/              ## 测试规范
    │   │   ├── custom-assertions/  ## 端到端测试自定义断言
    │   │   ├── runner.js           ## 运行测试的脚本
    │   │   └── nightwatch.conf.js  ## 运行测试的配置文件
    ├── .babelrc                    ## babel 配置文件
    ├── .editorconfig               ## 编辑配置文件
    ├── .gitignore                  ## 用来过滤一些版本控制的文件，比如node_modules文件夹 
    ├── index.html                  ## index.html 入口模板文件
    └── package.json                ## 项目文件，记载着一些命令和依赖还有简要的项目描述信息 
    └── README.md                   ##介绍自己这个项目的，可参照github上star多的项目。
    build/



# <a name="npm ">npm</a>
>
    npm init 在此目录生成package.json文件，可以添加-y | --yes 参数则默认所有配置为默认yes

    npm install <package> -g 全局安装依赖包
    npm install <package> 默认使用–save 参数，如果不想保存到package.json中，可以添加--no-save参数；还可以指定–save-dev 或 -g参数
    npm install --production 安装dependencies，不包含devDependencies

    npm uninstall <package> 卸载依赖包， 默认使用–save参数，即从package.json中移除
    npm update <package> 升级依赖包版本
    npm outdated 查看当前过期依赖，其中current显示当前安装版本，latest显示依赖包的最新版本，wanted显示我们可以升级到可以不破坏当前代码的版本

    npm ls [-g] [--depth=0] 查看当前目录或全局的依赖包，可指定层级为0

    npm root -g 查看全局安装地址

    npm ll[la] [--depth=0] 查看依赖包信息

    npm list <package>查看依赖的当前版本

    npm search <string> 查找包含该字符串的依赖包

    npm view <package> [field] [--json]列出依赖信息，包括历史版本，可以指定field来查看某个具体信息，比如（versions) 可以添加–json参数输出全部结果

    npm home <package> 在浏览器端查看项目（项目主页）

    npm repo <package> 浏览器端打开项目地址（GitHub）

    npm docs <packge> 查看项目文档

    npm bugs <packge> 查看项目bug

    npm prune 移除当前不在package.json中但是存在node_modules中的依赖

    npm link 不使用npm install 而连接某个依赖包，通常用作开发本地依赖包 
