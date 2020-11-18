class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


function convertToSumTree(root) {

    if (!root) return 0;

    let left = convertToSumTree(root.left);
    let right = convertToSumTree(root.right);

    let temp = root.val;

    root.val = left + right;

    return root.val + temp;
}


function print(node) {
    if (!node) return null;
    console.log(node.val);
    print(node.left);
    print(node.right);
}





var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
convertToSumTree(root);
