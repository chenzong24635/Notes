* 将脚本放到页面底部 

* 使用外部javascript和css 

* 压缩javascript和css 

* 删除不需要的、重复的脚本 

* 少用全局变量、缓存DOM节点查找的结果
    减少DOM操作次数: 
      设置样式时使用className（或el.style.cssText +=）而不是直接操作style;

      缓存已经访问过的元素;

      使用DocumentFragment暂存DOM，整理好以后再插入DOM树;