# 链接
[git](https://git-scm.com/book/zh/v2)
[git学习](https://learngitbranching.js.org/?demo)
[猴子都能懂的git入门](https://backlog.com/git-tutorial/cn/contents/)

# vscode-sync-setting ：
* token: bb7d41e1e039fdd294a6819e7305b73bd066d9a1
* sync.gist: 0e3b4eb383f938cbacac6b443dd818a0
# git


* git init 
* touch README.md
* git add README.md
* git commit -m "first commit"
* git remote add origin https://github.com/chenzong24635/仓库名.git   //关联远程仓库
  //,若报错: remote origin already exists. 先运行  git remote rm origin  	  
* git push -u origin master  //提交到你的仓库

* git push --force --set-upstream origin master // 强制替换所有内容


# md添加图片
    ![这里添加图片的alt属性值](/pics/index.png)
    <img src="/pics/index.png" width="49%" />

    图片水平排列居中
    <div align="center">
      <img src="/pics/index.png" height="300" width="300" >
      <img src="/pics/index.png" height="300" width="300" >
      <img src="/pics/index.png" height="300" width="300" >
    </div>
    
# 如何在github上预览html文件

    直接在你github地址中的html文件前面加上http://htmlpreview.github.com/?

    如：http://htmlpreview.github.io/?https://github.com/djz917/Game/blob/master/2048/index.html

# git基本命令：
* git init  --初始化git 将当前目录变为仓库
* git clone url   --获取  git clone http://chenzong@git/仓库名.git
* git add .    ---添加 
* git commit  -m "备注"      ---提交 
* git pull origin   ---从服务器拉取
* git push origin  ---更新到服务器
* git status 
* git rm -r --cached fileName --删除文件/文件夹

# 安装配置：
* npm install git
* git config --global user.name "chenzong24635"
* git config --global user.email "chenzong24635@163.com"

# 本地永久保存账号密码
1. 
    git config --global credential.helper store

2. 
>
    C:\Users\Administator目录下生成 .gitconfig配置文件。添加：
    [user]
      name = chenzong24635  //你的用户名
      email = chenzong24635@163.com  //你的git邮箱账号
    [credential]
        helper = stor

# 删除或修改本地Git保存的账号密码
控制面板 -->用户账户 -->管理你的凭据 -->择Windows凭据 -->git保存的用户信息


# 重设git用户的名字和邮箱:
* git config --global user.name "chenzong24635"
* git config --global user.email ""chenzong24635@163.com"
* 删除.ssh文件夹下的known_hosts 
* git Bash下生成ssh，如不设密码，直接回车到底 
* $ ssh-keygen -t rsa -C "chenzong24635@163.com"
* 拷贝公钥id_rsa.pub到托管服务（github, gitee）的SSH 公钥设置中 
* git Bash执行（管理员身份） 
* ssh -T git@github.com 或 ssh -T git@gitee.com 

# 查看用户名、邮箱
* git config user.name
* git config user.email


# gitingore
忽略某些文件提交

规则  作用
>
    /mtk    过滤整个文件夹
    *.zip   过滤所有.zip文件
    /mtk/do.c   过滤某个具体文件
    !/mtk/one.txt   追踪（不过滤）某个具体文件

注意：如果你创建.gitignore文件之前就push了某一文件，那么即使你在.gitignore文件中写入过滤该文件的规则，该规则也不会起作用，git仍然会对该文件进行版本管理。


配置语法
>
    以斜杠“/”开头表示目录；
    以星号“*”通配多个字符；
    以问号“?”通配单个字符
    以方括号“[]”包含单个字符的匹配列表；
    以叹号“!”表示不忽略(跟踪)匹配到的文件或目录。

注意： git 对于 .gitignore配置文件是按行从上到下进行规则匹配的



# git命令:

* git init  //初始化git  将当前目录变为仓库
* git add ./filename  //将文件添加到暂存区
* git commit -m "备注" //将暂存区文件提交到仓库
* git remote add origin http://github.com/仓库名.git //关联远端仓库
* git remote rm origin//删除远端仓库关联
* git remote -v//查看已关联远端库
* git push -u origin master //提交到远端仓库 第一次以后用：git push origin master

* git log //查看记录
* git reset --hard HEAD^//回退版本 HEAD HEAD^  HEAD^^ HEAD~100
* cat filename//查看文件内容
* git reflog//记录每次命令查找id
* git status //查看文件状态
* git checkout -- readme.txt。//放弃工作区中的内容
* git rm -r fileName --删除本地文件/文件夹
* git rm -r --cached fileName --删除缓存文件/文件夹

查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>
