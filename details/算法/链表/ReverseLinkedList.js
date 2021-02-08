// 单项链表反转

const LinkedList = require('./LinkedList')


class reverseLinkedList extends LinkedList {
  constructor() {
    super();
  }
  // 递归实现 -- 两两交换
  reverseList(){
    function reverse(head){
      // 先遍历底层节点
      // 为null 说明到头，结束递归
      if(head == null || head.next == null) return head;
      let newHead = reverse(head.next);
      // 两两交换
      head.next.next = head;
      head.next = null;
      return newHead;
      /* 例： 1 2 3 4
        head.next存在则递归，因此从末尾开始 即head为3开始（因为4的next为null）
        而3 next指向 4，因此第一次，返回 newHead 为4
        head.next.next即将4的next指向3（原先是3 的新next指向4，反转了）
        head.next =null则是清空3的next指向
       */
    }
    this.head = reverse(this.head);
    return this.head 
  }

  // 迭代实现-- 新建一个head，将旧head头依次放入新head的头
  // head:1 2 3 4 
  // newHead: null
  //          1 null
  //          2 1 null
  //          3 2 1 null
  //          4 3 2 1 null

  reverseList(){
    let head = this.head;
    if(head == null || head.next == null) return head;
    let newHead = null;
    while (head !=null ) {
        let temp = head.next;
        head.next = newHead;
        newHead = head;
        head = temp;
    }
    this.head = newHead;
    return newHead;
  }
}
