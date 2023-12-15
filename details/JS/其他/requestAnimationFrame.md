
# requestAnimationFrame
[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame) -- MDN

[requestAnimationFrame](https://www.w3cplus.com/javascript/requestAnimationFrame.html) -- 大漠

[setTimeout和requestAnimationFrame](https://juejin.im/post/6844904083204079630)

[](https://github.com/sl1673495/blogs/issues/47)

告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行


* 语法
window.requestAnimationFrame(callback);
>callback 下一次重绘之前更新动画帧所调用的函数(即上面所说的回调函数)。该回调函数会被传入DOMHighResTimeStamp参数，该参数与performance.now()的返回值相同，它表示requestAnimationFrame() 开始去执行回调函数的时刻。
>一个 long 整数，请求 ID ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给 window.cancelAnimationFrame() 以取消回调函数。


## 使用



```js
const div = document.getElementById('div'); 
let start;

function step(timestamp) {
  if (start === undefined)start = timestamp;
  const elapsed = timestamp - start;

  //这里使用`Math.min()`确保元素刚好停在200px的位置。
  div.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

  if (elapsed < 2000) { // 在两秒后停止动画
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

## 作用

与setTimeout、setInterval区别，requestAnimationFrame不需要设置时间间隔。

大多数电脑显示器的刷新频率是60Hz，大概相当于每秒钟重绘60次。大多数浏览器都会对重绘操作加以限制，不超过显示器的重绘频率，因为即使超过那个频率用户体验也不会有提升。因此，最平滑动画的最佳循环间隔是1s/60，约等于16.6ms。

而setTimeout和setInterval的问题是，它们都不精确（且setTimeout的第二个参数的最小值（最短间隔）不得低于4毫秒）。它们的内在运行机制决定了时间间隔参数实际上只是指定了把动画代码添加到浏览器UI线程队列中以等待执行的时间。如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行。

requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。

```js
let timer =null
    let div = document.querySelector('#div')
    btn.addEventListener('click',()=>{
      /* timer = setInterval(()=>{
        let w = parseInt(getComputedStyle(div).width)
        // let w = parseInt(div.getBoundingClientRect().width)
        if(w<=500){
          div.style.width = w + 5 +'px'
          div.innerHTML = w/5 +'%'
        }else{
          clearInterval(setInterval)
          timer=null
        }
      },16.6) */
      timer=requestAnimationFrame(function fn(){
        let w = parseInt(getComputedStyle(div).width)
        // let w = parseInt(div.getBoundingClientRect().width)
        if(w<=500){
          div.style.width = w + 5 +'px'
          div.innerHTML = w/5 +'%'
          requestAnimationFrame(fn)
        }else{
          cancelAnimationFrame(fn)
        }
      })
    })
```


## 特点
* requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率

* 在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量

* requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销
