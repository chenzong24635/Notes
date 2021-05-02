// 前序遍历

// 递归
preorderTraversal(){
  function traversal(node) {
    if(node === null) return
    console.log(node,'node');
    traversal(node.left)
    traversal(node.right)
  }
  traversal(this.root)
} 

// 迭代，通过栈结构(先进后出) 来遍历树 
prevoderTraversal(callback) {
  // 栈
  let stack = []
  stack.push(this.root);
  while (stack.length) {
    let node = stack.pop();
    callback(node);
    //10   [19,8]
    //10 8  [19,6]
    //10 8 6 [19,]
    //10 8 6 19 [22,15]
    //10 8 6 19 15[22]
    //10 8 6 19 15 22[20]
    //10 8 6 19 15 22 20[]
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
}