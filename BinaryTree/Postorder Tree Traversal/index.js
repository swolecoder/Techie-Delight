class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
//Iterative & Recursive



function postorderRecursion(node) {
    let res = [];
    function helper(node) {
        if (!node) return;
        helper(node.left);
        helper(node.right);
        res.push(node.val)
    }
    helper(node);
    return res;
}


function postorderIterative(node) {

    if (!node) return [];

    let queue = [node];
    let res = [];

    while (queue.length) {
        let data = queue.pop();
        res.push(data.val)
        if (data.left) queue.push(data.left);
        if (data.right) queue.push(data.right)
    }
    return res.reverse();
}





/* Construct below tree
          1
        /   \
       /     \
      2       3
     /      /  \
    /      /    \
   4      5      6
         / \
        /   \
       7     8
*/
/*[
  Output:  [ 4, 2, 7, 8,
            5, 6, 3, 1
  ]
  */
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
console.log(postorderRecursion(root));

console.log(postorderIterative(root));