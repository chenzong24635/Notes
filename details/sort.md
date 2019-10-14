<details open>
  <summary>
    目录
  </summary>

* <a href="#"></a>
* <a href="#"></a>
</details>

#  <a name=""></a>

[快速排序](https://segmentfault.com/a/1190000009426421)
[选择排序](https://segmentfault.com/a/1190000009366805)
[希尔排序](https://segmentfault.com/a/1190000009461832)

https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650590037&idx=1&sn=adcbbbd5c9527f931d2387ca276af9db&chksm=8891db71bfe652676f53590dd7a8d3e851d75cc44bee64900262303abab4ec8ad7f745527942&scene=0&xtrack=1&key=41cacdd5e50db66b711bcdfdd27ef70d4c8fb7b1a89db2b4af18f3d7e55e2f1ea1c56fe78c72efd22f389c79b6cf17fdc474ac6a19d3a19df51876535adeac3aec391dc0ed1e1e3145026f468bb61bb3&ascene=1&uin=MTIxNDM5MTUzOQ%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=ux306bB6145mArBOjZyoL55nd%2FlNIdfRN7VNyn2M03sYy1jRGGI6Ijt3qMiyszmQ


1. 冒泡排序： 每次将最小元素推至最前
>
    function bubble(arr) {
      if(arr.length <= 1)return arr
      let n = 0; //计算循环次数
      let len = arr.length;
      for (i = 0; i < len - 1; i++) {
        for (j = 0; j < len - i - 1; j++) {
          if (arr[j] > arr[j + 1]) { //相邻元素两两对比
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            n++;
          }
        }
      }
      return {arr, n};
    }

2. 快速排序：
>
    var quickSort = function(arr) {
      if (arr.length <= 1) { return arr; }
      //选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集
      var pivotIndex = Math.floor(arr.length / 2);
      var pivot = arr.splice(pivotIndex, 1)[0];
      var left = [];
      var right = [];
      //开始遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集。
      for (var i = 0, len = arr.length; i < len; i++){
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      //用递归不断重复这个过程，就可以得到排序后的数组。
    　return quickSort(left).concat([pivot], quickSort(right));
    };