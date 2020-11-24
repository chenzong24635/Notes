# 
util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。

[util-所有API](https://nodejs.org/api/util.html) 


* util.callbackify(fn) 将 async 异步函数（或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数
  ```js
  const util = require('util');

  async function fn() {
    return 'hello world';
  }
  const cbFn = util.callbackify(fn);

  cbFn((err, res) => {
    if (err) throw err;
    console.log(res);
  });
  ```

* util.inherits(constructor, superConstructor) 实现对象间原型继承

* util.inspect(obj,[showHidden],[depth],[colors]) 将任意对象转换为字符串，通常用于调试和错误输出。
  >obj: 要转换的对象  
  >showHidden: 可选，为 true 时将会输出更多隐藏信息  
  >depth: 可选，表示最大递归的层数,（默认会递归 2 层，null表无限层）  
  >colors: 可选，为 true 时将输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。

* util.isArray(obj) 判断是否数组
* util.isRegExp(obj) 判断是否正则
* util.isDate(obj) 判断是否日期
