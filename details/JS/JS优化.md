* 将脚本放到页面底部 
* 合理使用async,defer属性加载脚本
* 压缩JS
* 删除不需要的、重复的脚本 

* 少用全局变量、缓存DOM节点查找的结果
    减少DOM操作次数: 
    设置样式时使用className（或el.style.cssText +=）而不是直接操作style;
    缓存已经访问过的元素;
    使用DocumentFragment暂存DOM，整理好以后再插入DOM树;
* 使用事件委托，避免大量的事件绑定；


