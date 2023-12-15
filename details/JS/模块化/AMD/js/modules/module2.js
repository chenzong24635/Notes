// 定义没有依赖的模块
define(function() {
  let msg = '我是module2'
  function getMsg() {
    return msg.toUpperCase()
  }
  return { getMsg, msg } // 暴露模块
})
