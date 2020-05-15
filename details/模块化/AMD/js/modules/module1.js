// 定义有依赖的模块
define(['module2'], function(moduleA) {
  let name = 'Tom'
  function showMsg() {
    console.log(moduleA.getMsg() + ', ' + name)
  }
  // 暴露模块
  return { showMsg }
})
