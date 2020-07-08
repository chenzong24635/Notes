[reduceRight-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

reduceRight()接收一个函数作为累加器，数组中的每个值（从右到左）开始缩减，最终为一个值，  

```js
Array.prototype.selfReduceRight = function (fn, initialValue) {
  // 不是函数时，报错
  if(!fn || typeof fn !== 'function') {
    throw  TypeError(`${fn} is not a function`)
  }

  let sourceArr = this;
  let len = sourceArr.length;
  let res;
  let startIndex;
  // 初始值为定义时
  if (initialValue === undefined) {
    // 找到倒数第一个非空单元（真实）的元素和下标
    for (let i = len-1; i >= 0; i--) {
      if (!sourceArr.hasOwnProperty(i)) continue;
      startIndex = i;
      res = sourceArr[i];
      break;
    }
  } else {
    res = initialValue;
  }
  // 遍历的起点为上一步中找到的真实元素后面一个真实元素
  // 每次遍历会跳过空单元的元素
  for (let i = --startIndex || len-1; i >= 0 ; i--) {
    if (!sourceArr.hasOwnProperty(i)) continue;
    res = fn.call(null, res, sourceArr[i], i, sourceArr);
  }
  return res;
};
```