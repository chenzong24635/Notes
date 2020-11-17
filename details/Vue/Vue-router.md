* <a href="#base">router-构建选项</a>
* <a href="#$route 和 $router区别">\$route 和 \$router区别</a>
* <a href="#页面url参数获取">页面url参数获取</a>
* <a href="#push(),replace(),go()">push(),replace(),go()</a>
* <a href="#导航守卫">导航守卫</a>
* <a href="#addRoutes">addRoutes</a>
* <a href="#v-slot">v-slot API (3.1.0 新增)</a>
* <a href="#路由模式">路由模式</a>

#
[Vue Router-官网](https://router.vuejs.org/zh)
[Vue Router-github](https://github.com/vuejs/vue-router)

##  <a name="base">[router-构建选项](https://router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9)</a>[![bakTop](/img/backward.png)](#top)  
```js
{
  path: '/a/:id?',  //访问路径, id表示路由参数 ，？表示路由参数可选（可传可不传)
  //多个参数：'/a/:id?/:name'
  component: comA, //具体vue页面
  name: 'a', //名称，vue页面可通过name调用,
  components: { [name: string]: Component }, // 命名视图组件
  redirect: '/b', // 重定向：// 当用户访问 /a时，URL 将会被替换成 /b，实际访问 /b 
  props: true, // 路由参数解析
  alias:'/b',  // 别名：
  /* 
    a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a 

    但用在 path: '/',中，不起作用，如：
    {
      path: '/',
      component: Hello,
      alias:'/home'
    } 
  */
  children: [],// 嵌套路由
  beforeEnter: (to, from, next) => {},
  meta: {title: '标题'},  //页面标题

  // 2.6.0+
  caseSensitive: true, // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions: {} // 编译正则的选项

}

// 捕获所有路由或 404 Not found 路由
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```

### [嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)
user页面内嵌套其他页面
```js
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

user.vue
```html
<template>
  <div>
    <div>userPage</div>

    <!-- 嵌套路由必须添加router-view  -->
    <router-view></router-view> 
  </div>
</template>
```

```js
const router = new VueRouter({
  routes: [
    { 
      path: '/user/:id', 
      component: User,
      // 嵌套路由设置
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

### [命名视图](https://router.vuejs.org/zh/guide/essentials/named-views.html)
有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了
```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```
```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      // 注意加 s
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```


##  <a name="$route 和 $router区别">\$route 和 \$router区别</a>[![bakTop](/img/backward.png)](#top)
* this.$route  信息参数（query、prams）传参获取 --只读
* this.$router 功能函数，go()，push()等方法调用 --只写

##  <a name="页面url参数获取">页面url参数获取</a>[![bakTop](/img/backward.png)](#top)  
* var querys = this.$route.query; //query传参 获取方法
* var params = this.$route.params; //params传参 获取方法

##  <a name="push(),replace(),go()">页面跳转方法push(),replace(),go()</a>[![bakTop](/img/backward.png)](#top)

`如果提供了 path，params会被忽略，所以用params方式传参要用name来引入`
需要传参时，name对应params；path对应query

* 声明式导航(:to动态绑定name 或则 path) 页面自动解析地址 
* 声明式导航(to="path")，只能指定path值 
* query传参，参数通过url get方式拼接) --在浏览器地址栏中显示参数：?id=myid&name=myname
* params传参，参数通过路径[/001]形式拼接到url上，如果没有在路径配置种使用参数占位符，url不会拼接，直接展示是具体路由页面)：/myid/myname

### push() 
页面跳转，且会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，则回到之前的 URL。 

* 编程式导航
  ```js
  this.$router.push(location, onComplete?, onAbort?) 

  this.$router.push('user') // -> /user
  this.$router.push({ name: 'user', params: { userId: '123' }}) // -> /user/123
  this.$router.push({ path: 'user', query: { userId: '123' }}) // -> /user?userId=123
  this.$router.push({ path: '/user/123'}) // -> /user/123
  this.$router.push('/user/123') // -> /user/123
  ```

* 声明式导航
  ```html
  <router-link to="user">(路由中定义的name)</router-link>
  <router-link to="/user">(路由定义的path)</router-link>
  <router-link to="/user/123">(路由定义的path)</router-link>
  <router-link to="user/123">(路由定义的path)</router-link>
  <router-link :to="{ name: 'user', params: { userId: 123 }}">name--params</router-link>
  <router-link :to="{ path: '/user', query: { userId: 123 }}">path--query</router-link>
  ```

onComplete 和 onAbort 回调作为第二个和第三个参数。
这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。


`需要注意的是：`，如果定义路由时未定义路由参数，且路由跳转时使用 params 传参，此时参数不会显示在页面 url 上，但依旧可以通过 $route.params 获取此参数， `但是一旦刷新页面，参数就会丢失`。
而 query 方式则不同，依参数旧会形式

例
```js
{
  name: 'A',
  path: '/A',
  component: () => import('../views/A.vue'),
},

// 跳转到 A 页面
this.$router.push({
  name: 'A',
  params: {
    id: 123
  }
})

```
跳转到 A 页面时，页面 url 为： `http://192.168.1.91:8080/#/A`

`this.$route.params`，返回 `{id: 123}`

而一旦页面刷新则值丢失，返回 `{}`


### replace() 页面跳转，不会向 history 添加新记录，而是替换掉当前的 history 记录。
* 编程式导航
  ```js
  this.$router.replace(location, onComplete?, onAbort?) 

  this.$router.replace({ name: 'user', params: { userId: '123' }})
  ```

* 声明式导航  添加属性replace
  ```html
  <router-link replace :to="{ name: 'user', params: { userId: '123' }">
    ...
  ```

### go() 在 history 记录中向前或者后退
* 编程式导航
  ```js
  this.$router.go(n) //参数n是一个整数，意思是在 history 记录中向前或者后退多少步，

  this.$router.go(1)  //等同于 history.forward()
  this.$router.go(-1) //等同于 history.back()
  ```

### back() 后退
### forward() 前进

### resolve()

* 编程式导航
  ```js
  this.$router.resolve(location, current?, append?)
  // current 是当前默认的路由 (通常你不需要改变它)
  // append 允许你在 current 路由上附加路径 (如同 router-link

  resolveLink(){
    let routeUrl = this.$router.resolve({
        path: "/user",
        query: {userId: '123'}
    });
    window.open(routeUrl.href, '_blank');
  }
  ```

* 声明式导航， 添加属性 target="_blank" 
  ```html
  <router-link target="_blank" to="/user">user</router-link>
  ```


## <a name="导航守卫">导航守卫</a>[![bakTop](/img/backward.png)](#top)  
路由钩子函数种类：
* 全局守卫
  * beforeEach
  * beforeResolve(2.5.0 新增)
  * afterEach

* 路由守卫
  * beforeEnter

* 组件守卫
  * beforeRouteEnter
  * beforeRouteUpdate
  * beforeRouteLeave

### 完整的导航解析流程
* 导航被触发。
* 在失活的组件里调用 beforeRouteLeave 守卫。
* 调用全局的 beforeEach 守卫。
* 在重用的组件(即只改变路由参数，路径不变)里调用 beforeRouteUpdate 守卫 (2.2+)。
* 在路由配置里调用 beforeEnter。
* 解析异步路由组件。
* 在被激活的组件里调用 beforeRouteEnter。
* 调用全局的 beforeResolve 守卫 (2.5+)。
* 导航被确认。
* 调用全局的 afterEach 钩子。
* 触发 DOM 更新。
* 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### 全局前置守卫:beforeEach
当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。

```js
const router = new Router({})
router.beforeEach((to, from, next)=>{})
//to: 即将进入的路由
//from: 当前离开的路由

  //to from 包含属性($route)：
  {
    fullPath: ""
    hash: ""
    matched: []
    meta: {}
    name: null
    params: {}
    path: ""
    query: {}
  }

//next:
next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。

next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。

next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。

next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
```

`确保要调用 next 方法，否则钩子就不会被 resolved。`

------

#### beforeEach应用
* 判断页面是否需要登录、修改页面title

```js
router.beforeEach((to, from, next) => {
  // 判断即将进入的页面是否需要登录
  if (to.meta.requiresAuth) {
    //获取token
    let token = localStorage.getItem('accessToken')
    //不存在跳到登录页，否则不变
    if (!token) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
  if (to.meta.title) {
    // 路由发生变化修改页面title
    document.title = to.meta.title
  }
})
```

### 全局解析守卫:beforeResolve
2.5.0 新增  
与beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用

### 全局后置守卫 afterEach

不会接受 next 函数也不会改变导航本身：
```js
router.afterEach((to, from) => {
  // ...
})

```

### 路由守卫：
```js
{
  name: 'home',
  path: '/home',
  beforeEnter: (to, from, next) => {},
}
```

### 组件内的守卫：beforeRouteEnter 、beforeRouteUpdate (2.2 新增)、beforeRouteLeave

```js
beforeRouteEnter (to, from, next) {
  // 在渲染该组件的对应路由被 confirm 前调用
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建

  //不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
  next(vm => {
    // 通过 `vm` 访问组件实例
    // `next 函数中 vm 回调不是同步执行，而是等到 mounted 执行完之后，才执行` 。
  })
},
beforeRouteUpdate (to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例 `this`

  this.name = to.params.name
  next()
},
beforeRouteLeave (to, from, next) {
  // 导航离开该组件的对应路由时调用,如退出时，弹窗确认

  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

## 路由过度动效
```html
<transition>
  <router-view></router-view>
</transition>
```
## <a name="addRoutes">addRoutes 动态添加路由</a>[![bakTop](/img/backward.png)](#top)  
addRoutes允许在应用初始化之后，动态的挂载路由
>router.addRoutes(routes: Array<RouteConfig>)

## <a name="v-slot">[v-slot API (3.1.0 新增)](https://router.vuejs.org/zh/api/#v-slot-api-3-1-0-%E6%96%B0%E5%A2%9E)</a>[![bakTop](/img/backward.png)](#top)  

在使用 v-slot API 时，需要向 router-link 传入一个单独的子元素。否则 router-link 将会把子元素包裹在一个 span 元素内。
```html
<router-link
  to="/about"
  v-slot="{ href, route, navigate, isActive, isExactActive }"
>
<a 
  :active="isActive" 
  :href="href" @click="navigate"
  :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
>
  <p>href: {{ href }}</p> <!-- href: #/about -->
  <p>route.fullPath: {{ route.fullPath }}</p> <!-- route.fullPath: /about -->
  <p>navigate: {{ navigate }}</p> <!-- navigate: function (e) { if (guardEvent(e)) { if (this$1.replace) { router.replace(location, noop); } else { router.push(location, noop); } } } -->
  <p>isActive: {{ isActive }}</p> <!-- isActive: false -->
  <p>isExactActive: {{ isExactActive }}</p> <!-- isExactActive: false -->
</a>
<!-- 解析为 <a data-v-055b2d17="" href="#/about"> ...</a> -->
```
* href：解析后的 URL。将会作为一个 a 元素的 href attribute。
* route：解析后的规范化的地址。
* navigate：触发导航的函数。会在必要时自动阻止事件，和 router-link 同理。
* isActive：如果需要应用激活的 class 则为 true。允许应用一个任意的 class。
* isExactActive：如果需要应用精确激活的 class 则为 true。允许应用一个任意的 clas

`如果你在 <a> 元素上添加一个 target="_blank"，则 @click="navigate" 处理器会被忽略。`

##  <a name="mode">路由模式 hash | history区别</a>[![bakTop](/img/backward.png)](#top)  
[参考](https://juejin.im/post/5cd8d609e51d456e7b372155#heading-9)

### 什么是前端路由：  
路由的概念来源于服务端，在服务端中路由描述的是 URL 与处理函数之间的映射关系。
在 Web 前端单页应用 SPA(Single Page Application)中，路由描述的是 URL 与 UI 之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）。

### vue-router 有 3 种路由模式：hash、history、abstract
对应的源码如下所示：
```js
switch (mode) {
  case 'history':
    this.history = new HTML5History(this, options.base);
    break;
  case 'hash':
    this.history = new HashHistory(this, options.base, this.fallback);
    break;
  case 'abstract':
    this.history = new AbstractHistory(this, options.base);
    break;
  default:
    if (process.env.NODE_ENV !== 'production') {
      assert(false, `invalid mode: ${mode}`);
    }
}
```

### hash
URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，改变 URL 中的 hash 部分不会引起页面刷新

比如这个 URL：http://www.abc.com/#/hello，hash 的值为#/hello。它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。

通过 `hashchange` 事件(监听location.hash的改变)监听 URL 的变化，

改变 URL 的方式只有这几种：
* 通过浏览器前进后退改变 URL、
* 通过\<a>标签改变 URL、
* 通过window.location改变URL

### history

利用了H5 history的 `pushState()` 和 `replaceState()` 方法

这两个方法应用于浏览器的历史记录栈，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。

history.pushState({ page: 1 }, "", "a.html");
history.replaceState({ page: 1 }, "", "a.html");

pushState() 需要三个参数: 一个状态对象, 一个标题 (目前被忽略), 和 (可选的) 一个URL. 让我们来解释下这三个参数详细内容：
* 状态对象 — 是一个JavaScript对象，通过pushState () 创建新的历史记录条目。无论什么时候用户导航到新的状态，popstate事件就会被触发，且该事件的state属性包含该历史记录条目状态对象的副本。可以是能被序列化的任何东西。

* 标题 — 在此处传一个空字符串应该可以安全的防范未来这个方法的更改。或者，你可以为跳转的state传递一个短标题。

* URL — 该参数定义了新的历史URL记录。注意，调用 pushState() 后浏览器并不会立即加载这个URL，但可能会在稍后某些情况下加载这个URL，比如在用户重新打开浏览器时。新URL不必须为绝对路径。如果新URL是相对路径，那么它将被作为相对于当前URL处理。新URL必须与当前URL同源，否则 pushState() 会抛出一个异常。该参数是可选的，缺省为当前URL。

popstate
>
    当历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。

    需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()）

    触发浏览器回退按钮
    window.addEventListener('popstate', ()=>{
      console.log(location.href)
    })

###  abstract
支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

### mode:history缺点

* 打包存放路径问题
>
    mode: 'history',
    base: '/dist/' 

* 刷新问题
>

    不怕前进，不怕后退，就怕刷新（f5），（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的。
    在hash模式下，前端路由修改的是##中的信息，而浏览器请求时是不带它玩的，所以没有问题.
    但是在history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的响应或者资源，页面会404。


### 404的配置  
>
    {
      path:'*',
      component:Error
    }

* abstract 

 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.


