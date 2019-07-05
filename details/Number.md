JavaScript 中的 Number 类型有 2^64-2^53+3 个值

根据双精度浮点数的定义，Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。

同样根据浮点数的定义，非整数的 Number 类型无法用 ==（=== 也不行） 来比较，
如，0.1+0.2 !=0.3： 解决: Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON(JS能够表示的最小精度)