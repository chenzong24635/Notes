### 斐波那契数列(fibonacci)
F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）
>1 1 2 3 5 8 13 21 34 55 89

普通 -- 存在大量的重复计算
```js
function fib(n) {
  if(n <= 2) return 1
  return fib(n-1) + fib(n-2)
}
```

优化 -- 去除重复计算版
```js
function fib(n){
  function _fib(n, a = 0, b = 1){
    if(n <= 0) return a
    return _fib(n-1, b, a + b)
  }
  return _fib(n)
}
```


### 输出n个 fib 数
```js
const fibArr = n => Array(n).fill(0).reduce((prev, next, i) => prev.concat(i > 1 ? prev[i - 1] + prev[i - 2] : i), []);
```

### fib n的阶层
```js
function fib(n, total = 1) {
  if (n <= 1) return total;
  return fib(n - 1, n * total);
}
```