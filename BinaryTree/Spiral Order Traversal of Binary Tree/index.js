class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

//FIRST METHOD
function spiralOrderTraversal(node) {
    if (!node) return [];

    let result = [];

    let queue = [node];
    let flag = true;

    while (queue.length) {
        let len = queue.length;
        let temp = [];
        while (len--) {

            let currentData = queue.shift();

            if (!currentData) continue;

            if (flag) {
                temp.push(currentData.val);
            } else {
                temp.unshift(currentData.val);

            }

            if (currentData.left) queue.push(currentData.left);
            if (currentData.right) queue.push(currentData.right);
        }
        result.push(temp);
        flag = flag ? false : true;
    }

    return result;
}


//2ND METHOD

function spiralOrderTraversalMethod2(node) {

    let map = {};

    function helper(node, level, flag) {

        if (!node) return;

        if (!(level in map)) {
            map[level] = [];
        }

        if (flag) {
            map[level].push(node.val)
        } else {
            map[level].unshift(node.val)
        }
        let flagChecker = flag ? false : true;
        let left = helper(node.left, level + 1, flagChecker);
        let right = helper(node.right, level + 1, flagChecker);

        return left && right;

    }

    helper(node, 0, true);
    return Object.values(map)


}
let root = new Node(15);
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(8);
root.left.right = new Node(12);
root.right.left = new Node(16);
root.right.right = new Node(25);
root.left.left.left = new Node(20);
root.right.right.right = new Node(30);

console.log(spiralOrderTraversal(root));

console.log(spiralOrderTraversalMethod2(root));