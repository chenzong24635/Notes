
[Generator 函数的语法](https://es6.ruanyifeng.com/#docs/generator)

#  Generator
## 概述
Generator 函数是 ES6 提供的一种异步编程解决方案

Generator 生成器是一种返回迭代器的函数，通过function关键字后的*号来表示，函数中会用到新的关键词yield。



当执行完一条yield语句时，函数会自动停止执行，除非代码手动调用迭代器的next方法。
```js
function * createIterator () {
  yield 1
  yield 2
}
const iterator = createIterator()
console.log(iterator.next())  // {value: 1, done: false}
console.log(iterator.next())  // {value: 2, done: false}
console.log(iterator.next())  // {value: undefined, done: true}
```

## yield表达式

由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以提供了一种可以暂停执行的函数。yield表达式就是暂停标志。

yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。

`遍历器对象的next方法的运行逻辑:`
* 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

* 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式

* 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
  ```js
  function* gen() {
    yield 1;
    return 99;
    yield 2; // 永远不会执行
  }

  var g = gen();

  console.log(g.next()) // { value: 1, done: false }
  console.log(g.next()) // { value: 99, done: true }
  console.log(g.next()) // { value: undefined, done: true }
  ```

* 如果该函数没有return语句，则返回的对象的value属性值为undefined。




需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。

```js
function* gen() {
  yield  123 + 456; // 不会立即求值，只会在next方法将指针移到这一句时，才会求值。
}
```

yield关键字只能在生成器内部使用，在其他地方使用会导致抛出错误，即使是在生成器内部的函数中使用也是如此。


```js
function * createIterator (items) {
  // forEach方法的参数是一个普通函数
  items.forEach(item => {
    // 抛出错误
    yield item + 1
  })
}
```


for循环中使用生成器：
```js
function * createIterator (items) {
  for(let i = 0, len = items.length; i < len; i++) {
    yield items[i]
  }
}
const it = createIterator([1, 2, 3])
console.log(it.next())  // { done: false, value: 1 }
console.log(it.next())  // { done: false, value: 2 }
console.log(it.next())  // { done: false, value: 3 }
console.log(it.next())  // { done: true, value: undefined }
```

菲波那列数
```js
function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
var [first, second, third, fourth, fifth, sixth] = fibs();
console.log([first, second, third, fourth, fifth, sixth]);//[0,1,1,2,3,5]

let it = fibs();
it.next(); //{value: 0, done: false}
it.next(); //{value: 1, done: false}
it.next(); //{value: 1, done: false}
it.next(); //{value: 2, done: false}
it.next(); //{value: 3, done: false}
```

## 迭代器 Iterator
迭代器是一种特殊的对象，它具有一些专门为迭代过程设计的专有接口，所有迭代器都有一个next的方法，每次调用都返回一个结果对象。

结果对象有两个属性，一个是value表示下一次将要返回的值；另外一个是done，它是一个布尔类型的值，当没有更多可返回的数据时返回true。

迭代器还会保存一个内部指针，用来指向当前集合中值的位置，每调用一次next方法，都会返回下一个可用的值。

```js
let arr = [1,3,5];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());//{ value: 1, done: false }
console.log(iterator.next());//{ value: 3, done: false }
console.log(iterator.next());//{ value: 4, done: false }
console.log(iterator.next());//{ value: undefined, done: true }
```

```js
class My1{
  constructor(){
    this.arr = [1,2,3];
  }
  * [Symbol.iterator](){
    yield *this.arr;
  }
}
let my1 = new My1();
for(let item of my1){
  console.log(item); // 1 2 3
}
```

通过实现[Symbol.iterator]()和.next()两个方法你就可以创建自定义迭代器
```js
function createIterator(items) {
  let i = 0;
  return {
    next() {
      let done = (i >= items.length);
      let value = items[i++];
      return {
        value,
        done,
      };
    }
  };
}

let arr = [10, 20, 30];
let it = createIterator(arr); 
// let it = arr[Symbol.iterator](arr);
console.log(it.next()); //{value: 10, done: false}
console.log(it.next()); //{value: 20, done: false}
console.log(it.next()); //{value: 30, done: false}
console.log(it.next()); //{value: undefined, done: true}
console.log(it.next()); //{value: undefined, done: true}
```

## Generator.prototype.return()
返回给定的值，并且终结遍历 Generator 函数。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

console.log(g.next())        // { value: 1, done: false }
console.log(g.return('foo')) // { value: "foo", done: true }
console.log(g.next())   // { value: undefined, done: true }
```

## Generator.prototype.throw()

以在函数体外抛出错误，然后在 Generator 函数体内捕获

```js
var gen = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获：', e);
  }
};

var g = gen();
g.next();

try {
  g.throw('错误1');
  g.throw('错误2');
} catch (e) {
  console.log('外部捕获：', e);
}
// 内部捕获：错误1
// 外部捕获：错误2
```