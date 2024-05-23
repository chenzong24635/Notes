#!/usr/bin/env node
"use strict";

Promise.resolve().then(function () {
  console.log(0);
  return Promise.resolve(4);
}).then(function (res) {
  console.log(res);
});
Promise.resolve().then(function () {
  console.log(1);
}).then(function () {
  console.log(2);
}).then(function () {
  console.log(3);
}).then(function () {
  console.log(5);
}).then(function () {
  console.log(6);
});