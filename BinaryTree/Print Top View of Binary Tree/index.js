class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function printBottom(node) {


    let map = {};

    function helper(node, level, horizontal) {
        if (!node) return null;
        if (!(horizontal in map)) map[horizontal] = [];
        map[horizontal].push({ "val": node.val, "level": level })

        let left = helper(node.left, level + 1, horizontal - 1);
        let right = helper(node.right, level + 1, horizontal + 1);
        return left && right;
    }
    helper(node, 0, 0);

    let result = [];
    let keys = Object.keys(map).sort((a, b) => a - b)

    for (let i = 0; i < keys.length; i++) {
        let mapData = map[keys[i]];
        let lastData = mapData[0];
        const { val } = lastData;
        result.push(val)
    }
    return result;
}


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
console.log(printBottom(root))