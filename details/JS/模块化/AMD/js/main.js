// main.js
(function() {
  require.config({
    baseUrl: 'js/', //基本路径 出发点在根目录下
    paths: {
      //映射: 模块标识名: 路径
      module1: './modules/module1', //此处写成module1.js,会报错
      module2: './modules/module2',
      jquery: './libs/jquery-1.11.0.min'
    }
  })
  require(['module1'], function(moduleA) {
    moduleA.showMsg()
  })
})()
