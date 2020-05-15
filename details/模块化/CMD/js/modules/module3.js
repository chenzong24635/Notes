// module3.js文件
define(function (require, exports, module) {
  //引入依赖模块(同步)
  var module2 = require('./module1')

  function show() {
    console.log(1);
    module2.show()
    console.log(1);
    // console.log('module3 show() ' + module2.msg)
  }
  exports.show = show
  //引入依赖模块(异步)
  require.async('./module2', function (m2) {
    console.log('module3异步引入依赖模块  ' + m2.API_KEY)
  })
})
