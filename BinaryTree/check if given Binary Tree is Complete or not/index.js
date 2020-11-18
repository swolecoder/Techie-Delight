class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
/*
 Time Complexity: O(n)
 Space Complexity: O(n)


*/
function isCompleteMethod1(root) {
    if (!root) return false;

    let queue = [root];
    let flag = false;

    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let data = queue.shift();

            if (!data) {
                flag = true;
            } else {

                if (flag) return false;
                queue.push(data.left);
                queue.push(data.right);
            }
        }

    }

    return true;
}


function isCompleteMethod2(root) {

    let storeRes = [];//new Array(100).fill(false)

    function inOrder(root, n) {
        if (!root) return null;

        inOrder(root.left, 2 * n + 1);
        storeRes[n] = true;
        inOrder(root.right, 2 * n + 2)
    }

    inOrder(root, 0);


    for (let i = 0; i < storeRes.length; i++) {
        if (!storeRes[i]) return false;
    }

    return true;




}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(isCompleteMethod1(root));

console.log(isCompleteMethod2(root));