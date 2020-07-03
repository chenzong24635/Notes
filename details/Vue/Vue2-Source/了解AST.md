## AST（Abstract Syntax Tree）抽象语法树
[AST](https://chengyuming.cn/views/webpack/AST.html)

[AST 在线转换网站](https://astexplorer.net/)

## 概念
AST 是源代码的抽象语法结构的树状表现形式

无论是代码编译（babel），打包（webpack），代码压缩，css预处理，代码校验（eslint），代码美化（pretiier），Vue中对template的编译，这些的实现都离不开AST。

## AST是如何生成的

AST是通过JS Parser （解析器），将js源码转化为抽象语法树，主要分为两步
* 分词
* 语义分析

### 分词

将整个的代码字符串，分割成语法单元数组（token）。 JS中的语法单元（token）指标识符（function，return），运算符，括号，数字，字符串等能解析的最小单元

### 语义分析

语义分析的目的是将分词得到的语法单元进行一个整体的组合，分析确定语法单元之间的关系。
简单来说，语义分析可以理解成对语句（statement）和表达式（expression）的识别。

语句，一个具备边界的代码区域。相邻的两个语句之间从语法上讲互不影响。比如： var a = 1; if(xxx){xxx}
表达式，指最终会有一个结果的一小段代码，它可以嵌入到另一个表达式中，且包含在表达式中。比如：a++， i > 0 && i< 6

语义分析是一个递归的过程，它会将分词分析出来的数组转化成树形的表达形式。同时，会验证语法，语法如果存在错误的话，会抛出语法错误。

## Vue模板编译过程

![](/img/Vue/vue-ast.jpg)
