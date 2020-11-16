
class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function reverseLevelOrderTraversal(node) {

    let res = [];
    if (!node) return res;

    let queue = [node];

    while (queue.length) {
        let len = queue.length;
        let temp = [];
        while (len--) {

            let data = queue.shift();
            temp.push(data.val);

            if (data.left) queue.push(data.left);
            if (data.right) queue.push(data.right);

        }

        res.unshift(...temp)
    }

    return res;


}

let root;

root = new Node(15);
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(8);
root.left.right = new Node(12);
root.right.left = new Node(16);
root.right.right = new Node(25);

console.log(reverseLevelOrderTraversal(root))