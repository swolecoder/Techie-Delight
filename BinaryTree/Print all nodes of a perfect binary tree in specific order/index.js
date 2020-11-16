//https://www.techiedelight.com/print-nodes-binary-tree-specific-order/

class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

//perfect binary trees

// Print top down
function printNode(node) {

    let res = [];
    if (!node) return res;
    //root key
    res.push(root.val)
    let q1 = [node.left];
    let q2 = [node.right];

    while (q1.length) {

        let len = q1.length;

        while (len--) {

            let data = q1.shift();
            if (data) res.push(data.val);

            if (data.left) q1.push(data.left)
            if (data.right) q1.push(data.right)

            let secondData = q2.shift();
            if (secondData) res.push(secondData.val);

            if (secondData.right) q2.push(secondData.right);
            if (secondData.left) q2.push(secondData.left)

        }
    }
    return res;


}


// Print Bottom Up
function printBottomUpNode(node) {

    let res = [];
    if (!node) return res;
    //root key
    let q1 = [node.left];
    let q2 = [node.right];

    let level = 1;
    let map = {};
    map[level] = [];
    map[level].push(root.val)

    while (q1.length) {

        let len = q1.length;
        level++
        while (len--) {
            if (map[level] == null) map[level] = [];

            let data = q1.shift();
            // if (data) res.unshift(data.val);
            map[level].push(data.val)

            if (data.left) q1.push(data.left)
            if (data.right) q1.push(data.right)

            let secondData = q2.shift();
            // if (secondData) res.unshift(secondData.val);
            map[level].push(secondData.val)
            if (secondData.right) q2.push(secondData.right);
            if (secondData.left) q2.push(secondData.left)

        }
    }

    let keys = Object.keys(map)

    for (let i = keys.length - 1; i >= 0; i--) {
        let val = map[keys[i]];
        res.push(...val)
    }

    return res;

}


let root = new Node(1);
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.left.right.left = new Node(10);
root.left.right.right = new Node(11);
root.right.left.left = new Node(12);
root.right.left.right = new Node(13);
root.right.right.left = new Node(14);
root.right.right.right = new Node(15);
let test = [1, 2, 3, 4, 7, 5, 6, 8, 15, 9, 14, 10, 13, 11, 12]
// let a = printNode(root)
// console.log(a)
// console.log(JSON.stringify(a) == JSON.stringify(test))

let a = printBottomUpNode(root)
console.log(a)
// console.log(JSON.stringify(a) == JSON.stringify(test))