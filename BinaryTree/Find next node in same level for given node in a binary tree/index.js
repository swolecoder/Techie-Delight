class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

//BFS
/*

 Time complexity : O(n)
 Space complexity: O(n)

*/
function findRightNode(node, val) {

    if (!node) return null;

    let queue = [node];

    while (queue.length) {
        let len = queue.length;

        while (len--) {
            let data = queue.shift();

            if (data.val == val) {
                if (queue.length == 0) return null;
                return queue.shift().val; //return the val
            }

            if (data.left) queue.push(data.left);
            if (data.right) queue.push(data.right)

        }
    }


    return null;
}




function findRightNodeMethod(node, val) {

    function preOrder(node, findVal, level, foundLevel) {
        if (!node) return null;


        if (node.val == findVal) {
            foundLevel[0] = level;
            return;
        }
        else if (foundLevel[0] != 0) {
            if (level == foundLevel) {
                return node.val;
            }
        }

        let left = preOrder(node.left, findVal, level + 1, foundLevel);
        //if node is found in lewft subtree return it
        if (left) return left;
        let right = preOrder(node.right, findVal, level + 1, foundLevel);
        return right;

    }

    let foundLevel = [0]

    return preOrder(node, val, 0, foundLevel)


}






let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
// console.log(findRightNode(root, 2));
// console.log(findRightNode(root, 5));
// console.log(findRightNode(root, 7));
// console.log(findRightNode(root, 8));

console.log(findRightNodeMethod(root, 2));
// console.log(findRightNodeMethod(root, 5));
// console.log(findRightNodeMethod(root, 7));
// console.log(findRightNodeMethod(root, 8));
