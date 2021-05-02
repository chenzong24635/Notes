// 二叉搜索树实现

class Node{
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(compare) {
    this.root = null;
    this.size = 0;
    // 使用自定义比较，当传入的不一定是数字时，用户可自定义比较方法
    this.compare = compare || this.compare;
  }
  // 比较
  compare(e1, e2) {
    return e1 > e2
  }
  // 添加
  add(element) {
    if(this.root === null) {
      this.root = new Node(element, null);
      this.size += 1;
      return
    }
    let currentNode = this.root;
    // 存储父节点,因为 while 循环完毕后为null，
    let parent = currentNode;
    let compare;
    // 迭代判断
    while(currentNode) {
      compare = this.compare(currentNode.element, element);
      // 存储父节点
      parent = currentNode;
      // 新增的更小，则获取左边的为父节点
      if(compare) {
        currentNode = currentNode.left;
      }else {
        currentNode = currentNode.right;
      }
    }
    let node = new Node(element, parent);
    // 新增的比父节点更小，则放左边
    if(compare) {
      parent.left = node;
    }else {
      parent.right = node;
    }
    this.size += 1;
  }
}
// let tree = new Tree((e1,e2)=>e1.id>e2.id);
// tree.add({id:10,name:'a'})

let tree = new Tree();
tree.add(10)
tree.add(8)
tree.add(19)
tree.add(6)
tree.add(15)
tree.add(22)
tree.add(20)
console.dir(tree,{depth:1000});