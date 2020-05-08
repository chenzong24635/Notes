
[](https://es6.ruanyifeng.com/#docs/generator)
[](https://wangtunan.github.io/blog/books/javascript/es6.html#%E8%BF%AD%E4%BB%A3%E5%99%A8-iterator-%E5%92%8C%E7%94%9F%E6%88%90%E5%99%A8-generator)


## 迭代器 Iterator
迭代器是一种特殊的对象，它具有一些专门为迭代过程设计的专有接口，所有迭代器都有一个next的方法，每次调用都返回一个结果对象。结果对象有两个属性，一个是value表示下一次将要返回的值；另外一个是done，它是一个布尔类型的值，当没有更多可返回的数据时返回true。迭代器还会保存一个内部指针，用来指向当前集合中值的位置，每调用一次next方法，都会返回下一个可用的值。

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

## 生成器 Generator 
Generator 生成器是一种返回迭代器的函数，通过function关键字后的*号来表示，函数中会用到新的关键词yield。

生成器函数最重要的一点是：每执行完一条yield语句，函数就会自动终止;  
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

在循环中使用生成器：
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
yield关键字只能在生成器内部使用，在其他地方使用会导致抛出错误，即使是在生成器内部的函数中使用也是如此。
```js
function * createIterator (items) {
  items.forEach(item => {
    // 抛出错误
    yield item + 1
  })
}
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

