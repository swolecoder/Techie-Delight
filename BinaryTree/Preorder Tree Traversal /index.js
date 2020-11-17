class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


function preOrder(node) {
    let result = []
    function preOrder(node) {
        if (!node) return;
        result.push(node.val)
        preOrder(node.left);
        preOrder(node.right)
    }
    preOrder(node)

    return result;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
console.log(preOrder(root));