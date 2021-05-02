# JSX
[JSX 简介](https://react.docschina.org/docs/introducing-jsx.html)

React 使用 JSX 来替代常规的 JavaScript。JSX 是一个 JavaScript 语法扩展。

JSX是一种JS和HTML混合的语法,将组件的结构、数据甚至样式都聚合在一起定义组件
```js
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <h1>Hello</h1>,
  document.getElementById('root')
);
```


我们不需要一定使用 JSX，但它有以下优点：
* JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
* 它是类型安全的，在编译过程中就能发现错误。
* 使用 JSX 编写模板更加简单快速。
* JSX 防止注入攻击,React DOM 在渲染所有输入内容之前，默认会进行转义

## React元素
* JSX其实只是一种语法糖,最终会通过babeljs转译成createElement语法
* React元素是构成React应用的最小单位
* React元素用来描述你在屏幕上看到的内容
* React元素事实上是普通的JS对象,ReactDOM来确保浏览器中的DOM数据和* React元素保持一致

## JSX执行过程
* jsx 在 webpack 打包时，babel-loader 会将 jsx 转义为 ast ，生成createElement 
* 在浏览器运行时才会执行 createElement 方法得到虚拟DOM即 React 元素，描述了DOM元素的样式。  
* 再通过 ReactDOM.render 将虚拟DOM转换为真实DOM，并插入页面


jsx --> ast --> React.createElement --> 虚拟dom

## JSX用法

```jsx
let element = <h1 className='title' style={{color:'red'}}>hello</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
)
```

Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用(React17之前)。  
以下等价于上方 JSX 写法

* 参数1：为标签类型 (div,h1,span)
* 参数2: 包含属性的对象
* 参数3及之后都是 子元素
```js
let element = React.createElement(
  "h1", 
  {
    className: "title",
    style: {
      color: 'red'
    }
  }, "hello");

ReactDOM.render(
  element,
  document.getElementById('root')
)
```


解析为虚拟DOM结果
```js
{
  type:'h1',
  key: null,
  ref: null,
  props:{
    children:"hello",
    className: "title",
    style: {
      color: 'red'
    },
  },
  ....
}
```
这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。

### JSX表达式

表达式写在大括号 {} 中 
> JSX中不能使用 if else 语句，可使用三元表达式替代
```jsx
<h1 >{true ? 'Hello' : 'Error' }</h1>
```

注释也要写在花括号 {} 中  
```jsx
<h1 >{false ? 'Hello' : 'Error' }{/* 注释 */}</h1>
```

### JSX属性
需要注意的是JSX并不是HTML,更像JavaScript

在JSX中属性不能包含关键字，像class需要写成className,for需要写成htmlFor,并且属性名需要采用驼峰命名法
```js
let myId = "id0"
<h1 
  id={myId+' id1'}
  className="class1"
  style={{ color: 'red' }}
  onClick={()=>{console.log('click');}}
>Hello</h1>
```

### 在模板中插入数组，数组会自动展开所有成员
```js
let arr = [1,2,3]
<p>{arr}</p>
```


### JSX也是对象
可以在if或者 for语句里使用JSX
将它赋值给变量，当作参数传入，作为返回值都可以

if中使用
```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');
function greeting(name) {
  if (name) {
    return <h1>Hello, {name}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element = greeting('zhufeng');
ReactDOM.render(
  element,
  root
);
```

for中使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
let root = document.getElementById('root');
let names = ['张三', '李四', '王五'];
let elements = [];
for (let i = 0; i < names.length; i++) {
  elements.push(<li>{names[i]}</li>);
}
ReactDOM.render(
  <ul>
    {elements}
  </ul>,
  root
);
```

