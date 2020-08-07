# <a name="npm指令">npm指令</a>

``` js
npm init //在此目录生成package.json文件，
>npm init -y // 添加-y | --yes 参数则默认所有配置为默认yes

npm install <package> -g //全局安装依赖包  (install 可缩写为 i)
>npm install -g cnpm --registry=https://registry.npm.taobao.org

npm install <package> //默认使用–-save(-S) 参数，如果不想保存到package.json中，可以添加--no-save参数；还可以指定–-save-dev(-D) 或 -g参数

npm install --production //安装dependencies依赖，不包含devDependencies

npm uninstall <package> //卸载依赖包， 默认使用–save参数，即从package.json中移除

npm cache clean --force //清缓存

npm update <package> //升级依赖包版本

npm outdated //查看当前过期依赖，其中current显示当前安装版本，latest显示依赖包的最新版本，wanted显示我们可以升级到可以不破坏当前代码的版本

npm list [-g] [--depth=0] //查看当前目录或全局的依赖包，可指定层级为0
//list 可缩写为 ls 
npm list <package> //查看依赖的当前版本

npm root -g //查看全局安装地址

npm search <string> //查找包含该字符串的依赖包

npm view <package> [field] [--json]列出依赖信息，包括历史版本，可以指定field来查看某个具体信息，比如（versions) 可以添加–json参数输出全部结果

npm home <package> //在浏览器端查看项目（项目主页）

npm repo <package> //浏览器端打开项目地址（GitHub）

npm docs <packge> //查看项目文档

npm bugs <packge> //查看项目bug

npm prune //移除当前不在package.json中但是存在 node_modules 中的依赖
>rm -rf node_modules //移除 node_modules 文件夹

npm link //不使用npm install 而连接某个依赖包，通常用作开发本地依赖包
```

## 镜像
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


## dependencies 与 devdependencies 区别
>
    –-save（简写 -S ）会把依赖包名称添加到package.json文件dependencies下
    –-save-dev（简写 -D）则添加到package.json文件devDependencies下

    dependencies ----- 生产环境中需要的依赖，即正常运行该包时所需要的依赖项。 
    devDependencies -- 开发时用的依赖项，它们不会被部署到生产环境。    