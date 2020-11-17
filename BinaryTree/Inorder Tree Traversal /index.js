class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


function inOrder(node) {
    let result = []
    function helper(node) {
        if (!node) return;
        helper(node.left);
        result.push(node.val)
        helper(node.right)
    }
    helper(node)

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
console.log(inOrder(root))