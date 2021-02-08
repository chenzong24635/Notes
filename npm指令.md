# <a name="npm指令">npm指令</a>


* npm -v // npm版本

* npm init //在此目录生成package.json文件，
  >npm init -y // 添加-y | --yes 参数则默认所有配置为默认yes

* npm install <package> -g //全局安装依赖包  (install 可缩写为 i)
  >npm install -g cnpm --registry=https://registry.npm.taobao.org

* npm install <package> //默认使用–-save(-S) 参数，如果不想保存到package.json中，可以添加--no-save参数；还可以指定–-save-dev(-D) 或 -g参数
  >npm i jquery  
   npm i jquery@2.2 //还可以下载指定版本

* npm install --production //安装dependencies依赖，不包含devDependencies

* npm uninstall <package> //卸载依赖包， 默认使用–save参数，即从package.json中移除

* npm cache clean --force //清缓存

* npm update <package> //升级依赖包版本

* npm outdated //查看当前过期依赖，其中current显示当前安装版本，latest显示依赖包的最新版本，wanted显示我们可以升级到可以不破坏当前代码的版本

* npm list [-g] [--depth=0] //查看当前目录或全局的依赖包，可指定层级为0
//list 可缩写为 ls 
* npm list <package> //查看依赖的当前版本

* npm root -g //查看全局安装地址

* npm search <string> //查找包含该字符串的依赖包

* npm view <package> [field] [--json]列出依赖信息，包括历史版本，可以指定field来查看某个具体信息，比如（versions) 可以添加–json参数输出全部结果

* npm home <package> //在浏览器端查看项目（项目主页）

* npm repo <package> //浏览器端打开项目地址（GitHub）

* npm docs <packge> //查看项目文档

* npm bugs <packge> //查看项目bug

* npm prune //移除当前不在package.json中但是存在 node_modules 中的依赖
  >rm -rf node_modules //移除 node_modules 文件夹

* npm link //不使用npm install 而连接某个依赖包，通常用作开发本地依赖包

# 镜像
淘宝npm镜像  
* 搜索地址：http://npm.taobao.org/  
* registry地址：http://registry.npm.taobao.org/  

cnpmjs镜像  
* 搜索地址：http://cnpmjs.org/  
* registry地址：http://r.cnpmjs.org/

安装淘宝镜像 npm config set registry https://registry.npm.taobao.org   
cnpm安装  npm install -g cnpm --registry=https://registry.npm.taobao.org

切换镜像 npm set registry https://registry.npm.taobao.org/

查看当前镜像 npm  get registry  
查看详细信息 npm info express

# package.json
npm init 生成的 package.json 属性意义
```js
{
  "name": "node-demo", // 包名
  "version": "1.0.0", // 版本号
  "description": "", // 包描述
  "main": "index.js",
  "scripts": { // 命令
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [], // 关键字
  "author": "", // 作者
  "license": "ISC", // 协议
  "devDependencies": { // 开发依赖
  },
  "dependencies": { // 生产依赖
  }
}

```

# package-lock.json
自npm 5之后所有的依赖包都采用扁平化管理的方式

package-lock.json 的作用是锁定依赖安装结构,保证在任意机器上执行 npm install 都会得到完全相同的 node_modules 结果,

因为package-lock.json存储所有安装的信息

# 依赖方式
## dependencies 与 devdependencies 区别
>
    –-save（简写 -S ）会把依赖包名称添加到package.json文件dependencies下
    –-save-dev（简写 -D）则添加到package.json文件devDependencies下

    dependencies ----- 生产环境中需要的依赖，即正常运行该包时所需要的依赖项。 
    devDependencies -- 开发时用的依赖项，它们不会被部署到生产环境。    

## peerDependencies 同版本依赖
同等依赖,如果你安装我，那么你最好也安装我对应的依赖，如果未安装会报出警告 bash 
```json
"peerDependencies": { "jquery": "2.2.0" }
```
 ## bundledDependencies 捆绑依赖
```json
"bundleDependencies": [
    "jquery"
 ],
```
使用npm pack 打包tgz时会将捆绑依赖一同打包

## optionalDependencies 可选依赖
如果发现无法安装或无法找到，不会影响npm的安装
# scripts 的命令配置    
在package.json中可以定义自己的脚本通过npm run来执行

```js
"scripts": {
   "hello": "echo hello",
   "build": "webpack"
}
```
我们可以使用 npm run hello执行脚本,也可以使用 npm run build执行node_modules/.bin目录下的webpack文件
* npm run 命令执行时，会把 ./node_modules/.bin/ 目录添加到执行环境的 PATH 变量中，因此如果某个命令行包未全局安装，而只安装在了当前项目的 node_modules 中，通过 npm run 一样可以调用该命令。

* 执行 npm 脚本时要传入参数，需要在命令后加 -- 标明, 如 npm run hello -- --port 3000 可以将 --port 参数传给hello 命令

* npm 提供了 pre 和 post 两种钩子机制，可以定义某个脚本前后的执行脚本,没有定义默认会忽略
  ```js
  "scripts": {
    "prehello":"echo prehello",
    "hello": "echo hello",
    "posthello":"echo posthello"
  }
  ```

可以通过打印全局env和 在项目下执行npm run env来对比PATH属性，不难发现在执行npm run 的时候确实会将 ./node_modules/.bin/ 目录添加到PATH中  
# nrm
npm i nrm -g //安装nrm

* nrm ls 所有可用源
* nrm test 所有源的速度
* nrm use npm # 切换的源 //切换源
* npm publish // 发布
# npx
npx命令是npm v5.2之后引入的新命令，npx可以帮我们直接执行node_modules/.bin文件夹下的文件

### 1.执行脚本
`npx webpack`
是不是省略了配置scripts脚本啦！

### 2.避免安装全局模块
全局安装的模块会带来很多问题，例如：多个用户全局安装的模块版本不同

`npx create-react-app react-project`
我们可以直接使用 npx 来执行模块，它会先进行安装，安装执行后会将下载过的模块删除~，这样可以一直使用最新版本啦~

