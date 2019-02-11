# px2remLoader用法
直接写px，编译后会直接转化成rem —- 除开下面两种情况，其他长度用这个
在px;后面添加/*no*/，不会转化px，原样输出。 — 一般border需用这个
在px;后面添加/*px*/,会根据dpr的不同，生成三套代码。—- 一般字体需用这个
border: 1px solid #ddd; /*no*/
height: 64px; /*px*/
font-size: 28px; /*px*/

# 页面跳转
* 1
* <!-- 使用 router-link 组件来导航. -->
* <!-- 通过传入 `to` 属性指定在main.js文件设置的别名链接，如/1 -->
* <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
* <router-link to="/1">Go to Foo</router-link>

* 2
> 
methods:{
    clickFn:function(){
        this.$router.go('/login');//其中login是你定义的一个路由模块
}

# 修改Vux组件中预先定义的样式变量（组件颜色）
修改build/webpack.base.conf.js
> 
module.exports = vuxLoader.merge(webpackConfig, {
  plugins:[
    {name: 'vux-ui'},
    {name: 'less-theme', path: 'src/assets/style/yisong.less'}//自定义的Less文件路径
  ]
})

修改.less内容可自己根据项目需求定制
@tabbar-text-active-color: #ff0d00;

最后 修改配置文件以后需要重新启动项目，不然配置不起效果


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




# vue-cli安装
npm install --global vue-cli

# 创建项目
vue init webpack vuedemo

输入命令后，会跳出几个选项让你回答：
* Project name (baoge)： -----项目名称，直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters）
* Project description (A Vue.js project)： ----项目描述，也可直接点击回车，使用默认名字
* Author ()： ----作者名
* Runtime + Compiler: recommended for most users 运行加编译，既然已经说了推荐，就选它了
* Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere 仅运行时，已经有推荐了就选择第一个了
* Install vue-router? (Y/n) 是否安装vue-router，这是官方的路由，大多数情况下都使用，这里就输入“y”后回车即可。
* Use ESLint to lint your code? (Y/n) 是否使用ESLint管理代码，ESLint是个代码风格管理工具，是用来统一代码风格的，一般项目中都会使用。
> * Pick an ESLint preset (Use arrow keys) 选择一个ESLint预设，编写vue项目时的代码风格，直接y回车
> * Setup unit tests with Karma + Mocha? (Y/n) 是否安装单元测试，我选择安装y回车
Setup e2e tests with Nightwatch(Y/n)? 是否安装e2e测试 ，我选择安装y回车

# 生成文件目录后，使用 npm / cnpm安装依赖
npm install
> 安装淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org

# 启动项目
npm run dev 
> 如果浏览器打开之后，没有加载出页面，有可能是本地的 8080 端口被占用，需要修改一下配置文件 config里的index.js
>> dev --> port

#打包上线

> 在项目开发完成之后，可以输入 npm run build 来进行打包工作。注意，自己的项目文件都需要放到 src 文件夹下。
> 打包完成后，会生成 dist 文件夹，如果已经修改了文件路径，可以直接打开本地文件查看。项目上线时，只需要将 dist 文件夹放到服务器就行了。



* ├── build/                      # webpack 编译任务配置文件: 开发环境与生产环境
* │   └── ...
* ├── config/                     
* │   ├── index.js                # 项目核心配置
* │   └── ...
* ├ ── node_module/               #项目中安装的依赖模块
*    ── src/
* │   ├── main.js                 # 程序入口文件
* │   ├── App.vue                 # 程序入口vue组件
* │   ├── components/             # 组件
* │   │   └── ...
* │   └── assets/                 # 资源文件夹，一般放一些静态资源文件
* │       └── ...
* ├── static/                     # 纯静态资源 (直接拷贝到dist/static/里面)
* ├── test/
* │   └── unit/                   # 单元测试
* │   │   ├── specs/              # 测试规范
* │   │   ├── index.js            # 测试入口文件
* │   │   └── karma.conf.js       # 测试运行配置文件
* │   └── e2e/                    # 端到端测试
* │   │   ├── specs/              # 测试规范
* │   │   ├── custom-assertions/  # 端到端测试自定义断言
* │   │   ├── runner.js           # 运行测试的脚本
* │   │   └── nightwatch.conf.js  # 运行测试的配置文件
* ├── .babelrc                    # babel 配置文件
* ├── .editorconfig               # 编辑配置文件
* ├── .gitignore                  # 用来过滤一些版本控制的文件，比如node_modules文件夹 
* ├── index.html                  # index.html 入口模板文件
* └── package.json                # 项目文件，记载着一些命令和依赖还有简要的项目描述信息 
* └── README.md                   #介绍自己这个项目的，可参照github上star多的项目。
* build/
