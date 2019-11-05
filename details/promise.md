# Promise

[【2019 前端进阶之路】站住，你这个Promise！](https://zhuanlan.zhihu.com/p/52714698)

[ES6 Promise](http://es6.ruanyifeng.com/#docs/promise)


Promise是一个构造函数（或者类），接受一个函数作为参数，该函数接受resolve，reject两个参数。

Promise 对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功） 和 rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。  

Promise 对象的状态改变，只有两种可能：从 pending 变为 fulfilled 和 从 pending 变为 rejected。只要这两种情况发生，状态就凝固了，不会再变了，就称为 resolved（已定型）。

调用resolve或reject并不会终结 Promise 的参数函数的执行。一般来说，调用resolve或reject以后，Promise 的使命就完成了，可return resolve()


* 基本用法：  
>
    new Promise((resolve, reject) => {
      resolve()
      console.log(2)
    })

    调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务

* Promise.prototype.then()  
then 方法返回新的Promise实例  
then 方法的第一个参数是 resolved 状态的回调函数，第二个参数（可选）是 rejected 状态的回调函数。
>
    new Promise((resolve, reject) => {
      if(Math.random()>=0.5){
        resolve('成功')
      }else{
        reject('失败')
      }
    }).then((data) => {
      console.log(data) //成功
    }, (error) => {
      console.log(error) //失败
    })

* Promise.prototype.catch()  

catch方法 是.then(null, rejection) 或 .then(undefined, rejection)别名 用于指定发生错误时的回调函数

catch方法返回Promise 对象，因此后面还可以接着调用 then 方法。

如果异步操作抛出错误，状态就会变为 rejected，就会调用 catch 方法指定的回调函数，处理这个错误。 then 方法指定的回调函数，如果运行中抛出错误，也会被 catch 方法捕获。 catch 方法的写法更接近同步的写法（try/catch）。  
因此，建议总是使用 catch 方法，而不使用 then 方法的第二个参数。

>
    new Promise((resolve, reject) => {
      <!--  -->
    }).
    then((data) => {
      
    }).
    catch((err) => {

    })

    等价于

    new Promise((resolve, reject) => {
      <!--  -->
    }).
    then((data) => {

    },(err) => {
      
    })

如果没有使用 catch 方法或者 then 第二个参数指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应

* Promise.prototype.finally()  

finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。  
不接收任何参数

* Promise.all()    

将多个Promise实例，包装成一个新的Promise实例
>
    var p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() >= 0.5) {
            resolve('P1');
        } else {
            reject('error');
        }
      }, 500);
    });
    var p2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 600, 'P2');
    });

    var p = Promise.all([p1, p2]).
      then((results) => {
        console.log(results); // 输出：['P1', 'P2']
      }).
      catch((error) => {
          console.log(error); // 如果p1执行失败，则输出：error
      });

Promise.all 方法接受一个数组作为参数，p1、p2 都是 Promise 实例，如果不是，就会先调用下面讲到的 Promise.resolve 方法，将参数转为 Promise 实例，再进一步处理。（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）

p的状态由p1、p2决定，分成两种情况:
>

    只有 p1、p2 的状态都变成 fulfilled，p 的状态才会变成 fulfilled，此时 p1、p2 的返回值组成一个数组，传递给 p 的回调函数。

    只要 p1、p2 之中有一个被 rejected，p 的状态就变成 rejected，此时第一个被 reject 的实例的返回值，会传递给 p 的回调函数。

* Promise.race()    

var p = Promise.race([p1, p2]);

race方法 类似于all方法同样是将多个Promise实例，包装成一个新的 Promise 实例。
 
不同的是 只要 p1、p2 之中有一个实例率先改变状态，p 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 p 的回调函数。


* Promise.resolve()
将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。  
Promise.resolve(obj);

Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

* Promise.reject()
* Promise.try()

