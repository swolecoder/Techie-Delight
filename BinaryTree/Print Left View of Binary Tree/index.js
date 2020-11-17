class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function leftView(node) {
    if (!node) return [];

    let queue = [node];
    let res = [];
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {

            let { val, left, right } = queue.shift();
            if (i == 0) {
                res.push(val);
            }


            if (left) queue.push(left);
            if (right) queue.push(right);
        }
    }

    return res;

}








let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
console.log(leftView(root))