# 
<!-- src\shared\util.js -->
## camelize 连字符转驼峰
```js
const camelizeRE = /-(\w)/g
const camelize = cached((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})

console.log(camelize('aa-bb')); // aaBb
```

## hyphenate 驼峰转连字符
```js
const hyphenateRE = /\B([A-Z])/g
const hyphenate = (str) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

console.log(hyphenate('aaBb')); // aa-bb
```

## capitalize 首字符大写
```js
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
console.log(capitalize('ab')); // Ab

```

## cached 缓存
```js
function cached(fn) {
  const cache = Object.create(null)
  return (function cachedFn (str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  })
}
```

## 类型判断
### isPrimitive 基本类型
```js
function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
```

### isPromise 是否promise类型
```js
function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}
function isDef (v){
  return v !== undefined && v !== null
}
```

### isNative 是否原生

```js
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}
```