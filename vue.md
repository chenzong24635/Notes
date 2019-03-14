# 适配pc端改为适配pc端和移动端，使用2套css
  ## App.vue
    created: function () {
      if(document.documentElement.clientWidth > 640){
          require('./style/index.scss');
          this.plaform = 'pc';
      }else{
          require('./style/mobile.scss');
          this.plaform = 'mobile';
      }
    }

# 父子组件通信 
    https://cn.vuejs.org/v2/guide/components-props.html

## 父组件->子组件
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

## 子组件->父组件
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

# VueAwesomeSwiper
// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
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
            const activeColor = '#168fed'
            const normalColor = '#aeaeae'
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


# token 验证

# store管理部分页面隐藏全局组件
  ## store/index.js
      const store = new Vuex.Store({
        state: {
          headerShow: true, // 头部是否显示
        }
      })
  ## 页面
      destroyed () { //销毁时显示
        this.$store.state.headerShow = true
      },
      created () { //创建时隐藏
        this.$store.state.headerShow = false
      },


# 处理静态资源 -- http://vuejs-templates.github.io/webpack/static.html
  ## 图片路径 
    1. 相对URL，例如./assets/logo.png将被解释为模块依赖性。它们将替换为基于Webpack输出配置的自动生成的URL。

    2. 未加前缀的URL(同相对URL)，例如，assets/logo.png将被视为与相对URL相同并被翻译成./assets/logo.png。

    3. 带有前缀的URL~被视为模块请求，类似于require('some-module/image.png')。如果要利用Webpack的模块解析配置，则需要使用此前缀。例如，如果您有解析别名assets，则需要使用\<img src="~assets/logo.png" >以确保遵守别名。

    4. 根相对URL，如/assets/logo.png根本不处理。--打包后图片不加载



  ## src/assets和static/区别

      能被 webpack 追踪到的静态资源，如 img 标签引入的图片， 可以放到 assets 里，
      而webpack无法追踪到的图片，如通过 css backgrount-image 引入的图片，只能放到 static 目录。

      相同点：资源在html中使用，都是可以的。

      不同点：使用assets下面的资源，在js中使用的话，路径要经过webpack中file-loader编译，路径不能直接写。

      assets中的文件会经过webpack打包，重新编译，推荐该方式。而static中的文件，不会经过编译static中的文件只是复制一遍而已。简单来说，static中建议放一些外部第三方，自己的放到assets，别人的放到static中。

      注意：如果把图片放在assets与static中，html页面可以使用；但在动态绑定中，assets路径的图片会加载失败，因为webpack使用的是commenJS规范，必须使用require才可以

    1. 图片路径为static
      \<img class="img-title" src="static/images/index/b-t.jpg" alt="">

      onerror最好使用此路径下的图片\<img :src="item.pic" alt="" onerror="this.src='static/images/errorImg.jpg'">

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


# 打包后打开 index.html 空白,某些图片字体文件加载不出来解决办法

## 修改config下面的index.js中bulid模块导出的路径
    build: {
      //修改此处路径
      assetsPublicPath: './',  
    }

## 修改build文件夹下边的utils.js文件
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

## 如果以上方法仍然没有解决你的问题
    src里边router/index.js路由配置里边默认模式是hash，如果你改成了history模式的话，打开也会是一片空白。所以改为hash或者直接把模式配置删除，让它默认的就行 。如果非要使用history模式的话，需要你在服务端加一个覆盖所有的情况的候选资源：如果URL匹配不到任何静态资源，则应该返回一个index.html



# 引入外部js文件的方法和常量
## 方法
    function func() {　
      console.log('do something')
    }
    const test = 'test'

    export {
      func,
      test
    }

    //调用
    import {func, test} from 'static/js/public.js'

# Vue路由 -- https://router.vuejs.org/zh

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


## this.$route 和 this.$router区别：
    this.$route 信息参数（query、prams）传参获取 --只读
    this.$router 功能函数，go()，push()等方法调用 --只写

## push(),replace(),go()
    this.$router.push(location, onComplete?, onAbort?) //页面跳转，且会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，则回到之前的 URL。等同于<router-link :to="...">	

    this.$router.replace(location, onComplete?, onAbort?) //页面跳转，不会向 history 添加新记录，而是替换掉当前的 history 记录。等同于<router-link :to="..." replace> 
    this.$router.go(n) //的参数是一个整数，意思是在 history 记录中向前或者后退多少步，

## 跳转页面 -- 如果提供了 path，params会被忽略，所以params传参要用name来引入
    声明式 <router-link :to="...">
    编程式 router.push(...)
  ### 无参数：
      方式一：(:to动态绑定name 或则 path) 页面自动解析成path地址 
      <router-link :to="{name:'RouterB'}">去B页面</router-link> 

      方式二：(to="path")，只能指定path值 
      <router-link to="/RouterB">去B页面</router-link>  
      
  ### 传参:
      方式一：(通过query传入参数，参数通过url get方式拼接) --在浏览器地址栏中显示参数
      <router-link :to="{name:'RouterB', query: {name:'name1', title: 'title'} }">去B页面，传入参数</router-link>

      方式二：(通过params传入参数，参数通过路径[/001]形式拼接到url上，如果没有在路径配置种使用参数占位符，url不会拼接，直接展示是具体路由页面)
      <router-link :to="{name:'RouterB', params: {name:'name2', title: 'title2'}}">去B页面，params传入参数</router-link>


# 参数获取
    var param = this.$route.query; // var param = this.$route.params;
    //如果使用query方式传入的参数使用this.$route.query 接收
    //如果使用params方式传入的参数使用this.$router.params接收

# 解决vue多个路由共用一个页面的问题
  当路由变化时，watch里的路由监听函数都会被触发，可以在这个函数中对页面的数据进行重新加载的操作。
  watch:{
    "$route":function(to,from){
      //to 对象：包含目标地址
      //from 对象：包含当前地址
      //其实还有一个next参数的，这个参数是控制路由是否跳转的，如果没写，可以不用写next()来代表允许路由跳转，如果写了就必须写next(),否则路由是不会生效的。
    }
  }

# vuex store 
## 部分页面隐藏全局组件 --如：导航栏
    // src/store/index.js

    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex);

    const store = new Vuex.Store({
      state: {
        bottomShow: true,
      }
    })
    export default store

    // App.vue 
    <Bottom v-if="$store.state.bottomShow"></Bottom>

    //不想显示的页面
    created () {
      this.$store.state.bottomShow = false
    },
    destroyed () { // 组件销毁销毁后 还原状态，否则所以页面都不会显示
      this.$store.state.bottomShow = true
    }

# 组件引用路径写法 
    // 在build/webpack.base.conf.js中定义了 @
    @/commponents/a.vue

# 如何去除vue项目中的网址的 # --- History模式
    const router = new VueRouter({
      mode: 'history',
      routes: [...]
    })

# 切换页面时自动滚动到顶部
  export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }), //路由跳转后页面回到顶部
    routes: []
  })

# 设置页面title 、 切换页面时自动滚动到顶部（另一种）
    const router = new Router({
      routes: [
        {
          path: '/',
          name: 'index',
          meta: { title: "首页" },
          component: Index
        },
        {
            path:'/',
            name:'list',
            meta:{ title:"列表页" },
            component: List
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


# Vue 用 axios 调用本地的 json 文件，
  json 必须存放在 “ static ” 文件夹下，static 目录是 vue-cli 向外暴露的静态文件夹，所有静态数据都应该放到static目录中。
  ## 调本地json文件
  import data from '@/assets/json/index/swiper1.json'
  console.log(data)

# 修改组件css  /deep/ 或 >>>   
    // less和sass中不管用
    .wrap /deep/ .vux-header {
      background-color: #3cc51f;
    }

# 修改Vux组件中样式变量（组件颜色）
    修改build/webpack.base.conf.js
    module.exports = vuxLoader.merge(webpackConfig, {
      plugins:[
        {name: 'vux-ui'},
        {name: 'less-theme', path: 'src/assets/style/dy.less'}//自定义的Less文件路径
      ]
    })

    自定义dy.less内容
    @tabbar-text-active-color: #ff0d00;

    最后需要重新启动项目，不然配置不起效果

# rem
    
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

## px2remLoader用法
    直接写px，编译后会直接转化成rem —- 除开下面两种情况，其他长度用这个
    在px;后面添加/*no*/，不会转化px，原样输出。 — 一般border需用这个
    在px;后面添加/*px*/,会根据dpr的不同，生成三套代码。—- 一般字体需用这个
    border: 1px solid #ddd; /*no*/
    height: 64px; /*px*/
    font-size: 28px; /*px*/


# vue-cli安装
    npm install --global vue-cli

# 创建项目
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

# 生成文件目录后，使用 npm / cnpm安装依赖
npm install
> 安装淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org

# 启动项目
npm run dev 
> 如果浏览器打开之后，没有加载出页面，有可能是本地的 8080 端口被占用，需要修改一下配置文件 config里的index.js
>> dev --> port

# 打包上线 npm run build
    > 打开config/index.js，将其中build的assetsPublicPath值改为’./’
    > 组件的路径不能使用@/../static   只能使用../../../static这个时候，打包过后的登陆页面引用图片路径错误，多了一个/static/css
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

    > 在项目开发完成之后，npm run build 来进行打包工作。注意，自己的项目文件都需要放到 src 文件夹下。
    > 打包完成后，会生成 dist 文件夹，如果已经修改了文件路径，可以直接打开本地文件查看。项目上线时，只需要将 dist 文件夹放到服务器就行了。




    ├── build/                      # webpack 编译任务配置文件: 开发环境与生产环境
    │   └── ...
    ├── config/                     
    │   ├── index.js                # 项目核心配置
    │   └── ...
    ├ ── node_module/               #项目中安装的依赖模块
       ── src/
    │   ├── main.js                 # 程序入口文件
    │   ├── App.vue                 # 程序入口vue组件
    │   ├── components/             # 组件
    │   │   └── ...
    │   └── assets/                 # 资源文件夹，一般放一些静态资源文件
    │       └── ...
    ├── static/                     # 纯静态资源 (直接拷贝到dist/static/里面)
    ├── test/
    │   └── unit/                   # 单元测试
    │   │   ├── specs/              # 测试规范
    │   │   ├── index.js            # 测试入口文件
    │   │   └── karma.conf.js       # 测试运行配置文件
    │   └── e2e/                    # 端到端测试
    │   │   ├── specs/              # 测试规范
    │   │   ├── custom-assertions/  # 端到端测试自定义断言
    │   │   ├── runner.js           # 运行测试的脚本
    │   │   └── nightwatch.conf.js  # 运行测试的配置文件
    ├── .babelrc                    # babel 配置文件
    ├── .editorconfig               # 编辑配置文件
    ├── .gitignore                  # 用来过滤一些版本控制的文件，比如node_modules文件夹 
    ├── index.html                  # index.html 入口模板文件
    └── package.json                # 项目文件，记载着一些命令和依赖还有简要的项目描述信息 
    └── README.md                   #介绍自己这个项目的，可参照github上star多的项目。
    build/



# npm
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
