class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

//BFS level order
function levelOrderTraversal(node) {
    if (!node) return [];

    let result = [];
    let queue = [node];


    while (queue.length) {

        let len = queue.length;
        let temp = [];
        while (len--) {
            let { val, left, right } = queue.shift();
            if (!val) continue;

            temp.push(val);

            if (left) queue.push(left);
            if (right) queue.push(right);


        }

        result.push(temp)
    }

    return result;
}


function levelOrderTraversalMethod2(node) {
    if (!node) return [];

    let level = 1;

    let map = {};

    function helper(node, level) {
        if (!node) return;

        if (!(level in map)) {
            map[level] = [];
        }

        map[level].push(node.val);

        let left = helper(node.left, level + 1);
        let right = helper(node.right, level + 1);

        return left && right;
    }

    helper(node, level);
    return Object.values(map)
}



let root = new Node(15);
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(8);
root.left.right = new Node(12);
root.right.left = new Node(16);
root.right.right = new Node(25);


console.log(levelOrderTraversal(root))
console.log(levelOrderTraversalMethod2(root))