// 定义有依赖的模块
define(['module2', 'jquery'], function(module2) {
  let name = 'Tom'
  console.log(module2);
  console.log($);
  function showMsg() {
    console.log(module2.getMsg() + ', ' + name)
  }
  // 暴露模块
  return { showMsg }
})
