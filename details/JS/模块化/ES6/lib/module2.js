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