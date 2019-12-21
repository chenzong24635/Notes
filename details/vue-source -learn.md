[Vue源码简析(版本vue-2.4.4)](https://juejin.im/post/5ab07a63f265da2389258b12)

顺带学习ts

# 目录
![vue-source.jpg](../img/Vue/vue-source.jpg)

# cached 创建纯函数的缓存
```js
function cached (fn) {
  let cache = Object.create(null);
  return (function cachedFn (str) {
    let hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

在Vue中，需要转译很多相同的字符串，若每次都重新执行转译，会造成很多不必要的开销。
cache这个函数可以读取缓存，如果缓存中没有就存放到缓存中，最后再读。

Object.create(null)创建纯函数是为了防止变化（纯函数的特性：输入不变则输出不变）。
```
```js
function upcase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
var upcased = cached(upcase)
upcased('im a str')
upcased('im a str')

第一次执行upcased函数时，把字符串作为key, reault 作为value, 存入 cache对象 里，  
第二次再执行这个函数，结果直接取缓存 cache对象 key对应的value,而不必执行upcase函数
```

# camelize: 连字符转驼峰
```js
const camelizeRE = /-(\w)/g;
const camelize = cached(str => {
  return str.replace(camelizeRE,  (_, c) => c ? c.toUpperCase() : '')
});

// 第一个参数：_ 代表匹配到的字符
// 第二个参数：c 代表分组的第一个内容(camelizeRE里第一个括号匹配的内容)

camelize('a-b') // aB
```

# hyphenate：:驼峰转连字符
```js
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cached((str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
})

hyphenate('aB') // a-b
```

# once：只调用一次的函数
```js
function once (fn: Function): Function {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

function out(str) {
  console.log(str)
}
let a = once(out)
a('我执行了')
a('我没执行')
```

```js
```