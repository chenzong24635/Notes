const LinkedList = require('./LinkedList')
// 单项链表循环
class Queue{
  constructor(){
    this.ll = new LinkedList;
  }
  // 向后添加
  add(element) {
    return this.ll.add(element);
  }
  // 从头部删除
  shift() { 
    return this.ll.remove(0);
  }
}
let q = new Queue();
q.add(3)
q.add(34)
console.dir(q,{depth:200});