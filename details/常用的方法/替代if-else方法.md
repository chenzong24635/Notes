[](https://juejin.im/post/6882390231715151879)

# 场景零减少不必要代码
* 普通优化
```js
if(condition){
    //doSomething
}else{
    return ;
}

// 优化
if(!condition){
    return ;
}
//doSomething


// 优化
condition && fn()
```

* 三目运算符优化
```js
let  price;
if(condition){
   price = 80;
}else{
  price = 100;
}

// 优化
let price = condition ? 80 : 100
```

* 数组优化
```js
// 获取月分的天数
function getDays(month){
  if (month == 1)  return 31;
  if (month == 2)  return 29;
  if (month == 3)  return 31;
  if (month == 4)  return 30;
  if (month == 5)  return 31;
  if (month == 6)  return 30;
  if (month == 7)  return 31;
  if (month == 8)  return 31;
  if (month == 9)  return 30;
  if (month == 10)  return 31;
  if (month == 11)  return 30;
  if (month == 12)  return 31;
}


// 优化
let monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function getDays(month){
    return monthDays[--month];
}
```


* 多态优化
```js
//非多态
let hobby = function (animal) {
  if (animal == "cat") {
    cat.eat();
  } else if (animal == "dog") {
    dog.eat();
  }
};

let cat = {
  eat() {
    console.log("fish!");
  },
};

let dog = {
  eat() {
    console.log("bone!");
  },
};

hobby("cat"); //fish!
hobby("dog"); //bone!
```

```js
// 多态
let hobby = function (animal) {
  if(animal.eat instanceof Function){
      animal.eat();
  }
};

let cat = {
  eat() {
    console.log("fish!");
  },
};

let dog = {
  eat() {
    console.log("bone!");
  },
};
hobby(cat); //fish!
hobby(dog); //bone!
```

# 场景一： 根据status显示对应名称

## switch
```js
const getStatus = (status) => {
  let txt = ''
  switch(status){
    case 1: 
      txt = '待付款';
      break;
    case 2: 
      txt = '待发货';
      break;
    case 3: 
      txt = '已发货';
      break;
    case 4: 
      txt = '交易完成';
      break;
    case 5: 
      txt = '交易关闭';
      break;
    default: 
      txt = '';
      break;
  }
  return txt
}
```


## 策略模式
数组形式
```js
const statusArr = ['default','待付款','待发货','已发货','交易完成','交易关闭',]

const getStatus = (status) => {
  return statusArr[status] || statusArr[0]
}
```

对象形式
```js
const statusStr = {
  1: '待付款',
  2: '待发货',
  3: '已发货',
  4: '交易完成',
  5: '交易关闭',
  'default': '',
}
const getStatus = (status) => {
  return statusStr[status] || statusStr['default']
}
```

Map形式
```js
const statusStr = new Map([
  [1, ['待付款']],
  [2, ['待发货']],
  [3, ['已发货']],
  [4, ['交易完成']],
  [5, ['交易关闭']],
  ['default', ['']],
]) 
const getStatus = (status) => {
  let actions = statusStr.get(status) || statusStr.get('default') 
  return actions[0];
}
console.log(getStatus(1));
```

# 场景二：多个condition对应名称
判断 订单状态status 同时需要判断 用户身份 identity

if-else
```js
const onButtonClick = (status, identity) => {
  if (identity == 'guest') {
    if (status == 1) {
      console.log('guest_1')
    } else if (status == 2) {
      console.log('guest_2')
    }
  } else if (identity == 'master') {
    if (status == 1) {
      console.log('master_1')
    } else if (status == 2){
      console.log('master_2')
    }
  }else{
    console.log('default')
  }
}
```

## 策略模式
objcet对象
```js
const actions = {
  'guest_1': () => {console.log('guest_1');},
  'master_1': () => {console.log('master_1');},
  'default': () =>  {console.log('default');}
}
const onButtonClick = (identity, status) => {
  let action = actions[`${identity}_${status}`] || actions['default']
  action()
}
console.log(onButtonClick('guest',3));
```

Map对象--字符拼接形式
```js
const actions = new Map([
  ['guest_1', () => {console.log('guest_1');}],
  ['master_1', () => {console.log('master_1');}],
  ['default', () =>  {console.log('default');}]
]) 
const onButtonClick = (identity, status) => {
  let action = actions.get(`${identity}_${status}`) || actions.get('default') 
  action()
}
console.log(onButtonClick('guest',1));
```

Map对象--对象形式
```js
const actions = new Map([
  [
    {
      identity: 'guest',
      status: 1
    }, () => {
      console.log('guest-1');
    }
  ],
  [
    {
      identity: 'master',
      status: 1
    },
    () => {
      console.log('master-1');
    }
  ],
  [
    'default',
    () => {
      console.log('default');
    }
  ],
])
const onButtonClick = (identity, status) => {
  let action = [...actions].filter(([key, value]) => (key.identity === identity && key.status === status))
  if(action.length){
    action.forEach(([key, value]) => value())
  }else{
    let fn = actions.get('default')
    fn&&fn()
  }
}
onButtonClick('guest',2)
```


# 场景三：根据status做出相应操作
```js
/** 
  @params {Number} orderType: 订单类型，1: 500元定金用户，2: 200元定金用户，3: 普通用户
  @params {Boolean} pay: 是否已支付 true/false (已下单但未支付用户需进入普通购买模式)
  @params {Number} stock: 产品库存，已支付定金用户不受限
*/
```

## 职责链模式
```js
let order500 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log('500元定金预购, 得到100优惠券');
  } else {
    // 将请求传递给200元订单
    order200(orderType, pay, stock);
  }
};
let order200 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log('200元定金预购, 得到50优惠券');
  } else {
    // 将请求传递给普通订单
    orderNormal(orderType, pay, stock);
  }
};
let orderNormal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log('普通购买, 无优惠券');
  } else {
    console.log('手机库存不足');
  }
};
order500(1, true, 500); // 输出：500 元定金预购, 得到100 优惠券
```


## 函数式编程
[ramda](https://ramda.cn/docs/#cond)
```js
import R from 'ramda'
var fn = R.cond([
  [R.equals(0),
    R.always('water freezes at 0°C')
  ],
  [R.equals(100),
    R.always('water boils at 100°C')
  ],
  [R.T,
    temp => 'nothing special happens at ' + temp + '°C'
  ]
]);
fn(0);//=> 'water freezes at 0°C'
fn(50);//=> 'nothing special happens at 50°C'
fn(100); //=> 'water boils at 100°C'
```

# 场景四： 根据范围去进行不同处理

例： 比如某平台的信用分数评级，超过700-950，就是信用极好，650-700信用优秀，600-650信用良好，550-600信用中等，350-550信用较差。

if-else
```js
function showGrace(grace) {
  let _level = '';
  if (grace >= 700) {
    _level = '信用极好'
  } else if (grace >= 650) {
    _level = '信用优秀'
  } else if (grace >= 600) {
    _level = '信用良好'
  } else if (grace >= 550) {
    _level = '信用中等'
  } else {
    _level = '信用较差'
  }
  return _level;
}
```
## look-up表
使用look-up表，把配置数据和业务逻辑分离
```js

const level = [700, 650, 600, 550]; // 评分等级，以升序或降序形式排序
const levelForGrace = ['信用极好', '信用优秀', '信用良好', '信用中等', '信用较差']; // level对应的评价

function _showGrace(grace, level, levelForGrace) {
  // 从头开始比较
  for (let i = 0; i < level.length; i++) {
    // 当前值大于某个level值时，返回对应评价
    if (grace >= level[i]) {
      return levelForGrace[i];
    }
  }
  //如果不存在，那么就是分数很低，返回最后一个
  return levelForGrace[levelForGrace.length - 1];
}
function showGrace(grace){
  return _showGrace(grace,level,levelForGrace)
}

console.log(showGrace(620));
```

使用配置数据和业务逻辑分离的形式，好处:
* 修改配置数据比业务逻辑修改成本更小，风险更低
* 配置数据来源和修改都可以很灵活
* 配置和业务逻辑分离，可以更快的找到需要修改的代码
* 配置数据和业务逻辑可以让代码风格统一
