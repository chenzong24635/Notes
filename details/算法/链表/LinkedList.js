// 单项链表

class Node{
  // element 读取节点
  // next 下一个节点
  constructor(element, next){
    this.element = element;
    this.next = next;
  }
}

class LinkedList{
  constructor() {
    this.head = null;// 存储 当前元素指向的下一个（next)
    this.size = 0; // 链表长度
  }
  // 根据索引，获取对应节点
  _node(index) {
    // 越界判断， 大于size抛错
    if (index < 0 || index > this.size) throw new Error('越界');
    let current = this.head;
    // 不停循环查找
    for(let i = 0;i < index;i++) {
      // 此处会多去一次next，因此循环时，i<index
      current = current.next;
    }
    return current;
  }
  // 根据索引添加，或直接添加
  add(index,element){
    // 直接添加，只传element
    if(arguments.length === 1) {
      // 获取element值
      element = index;
      // 获取新增值的索引
      index = this.size; 
    }
    if (index < 0 || index > this.size) throw new Error('越界');
    // 第一次
    if(index === 0) {
      // 获取老的头部
      let head = this.head;
      // 传入head作为 next，建立关系
      // 同时更新head,
      this.head = new Node(element, head)
    }else{
      // 找到当前位置对应的节点，替换为新节点,
      let prevNode = this._node(index - 1);
      prevNode.next = new Node(element, prevNode.next)
      /* 
      比如现在关系是 10 3 2 1,调用add(3,100);即在 2 后面添加个100；
      要变为 10 3 2 100 1 ；
      最初时 prevNode 为 2，prevNode.next是 1；
      而 new Node(element, prevNode.next) 是将 100 的next设为 1；
      然后设置prevNode.next = 其返回值，更新了 2 的next为 100；
      */
    }
    // 长度加一
    this.size += 1;
  }
  // 删除,不会塌陷只是改变指针引用
  remove(index){
    if (index < 0 || index >= this.size) throw new Error('越界');
    let removeNode = null;
    if(index === 0) { //移除头部
      // 改变头指向下一个，（若不引用会垃圾回收）
      removeNode = this.head;
      this.head = this.head.next;
    }else {
      // 否则
      // 获取当前节点的前一个
      let prevNode = this._node(index - 1);
      if(!prevNode) return;
      // 将当前节点的前一个节点指向当前节点的后一个
      removeNode = prevNode.next;
      prevNode.next = prevNode.next.next;
      /* 例子
        现为 10 3 2 1
        要删除2，则可以将 3 的next指向 1，而 2 未被引用就会被垃圾回收
       */
    }
    // 长度减一
    this.size -= 1;
    // 返回删除的节点
    return removeNode;
  }
  // 修改
  set(index,element){
    let node = this._node(index);
    node.element = element;
    //返回修改的节点
    return node;
  }
  // 获取
  get(index){
    // 返回获取到的节点
    return this._node(index);
  }
  // 清除
  clear() {
    this.size = 0;
    this.head = null;
  }
}

let ll = new LinkedList();

ll.add(0,1);
ll.add(4,11);


console.dir(ll,{depth:1000});