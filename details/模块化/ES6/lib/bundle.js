(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

// app.js文件
(0, _module.foo1)();
(0, _module.bar1)();
(0, _module.add1)(1, 2);
(0, _module2.foo2)();
(0, _module2.bar2)();
},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo1 = foo1;
exports.bar1 = bar1;
exports.add1 = add1;
// 分别暴露
function foo1() {
  console.log('foo1() module1');
}
function bar1() {
  console.log('bar1() module1');
}
function add1(num1, num2) {
  var num = num1 + num2;
  console.log('add1', num);
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//  统一暴露
function foo2() {
  console.log('foo2() module2');
}
function bar2() {
  console.log('bar2() module2');
}

exports.foo2 = foo2;
exports.bar2 = bar2;
},{}]},{},[1]);
