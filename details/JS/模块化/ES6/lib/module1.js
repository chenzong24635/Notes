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