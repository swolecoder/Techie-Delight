class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
//a is less than b
var isCousins = function(root, x, y) {

    let ans = false;

    function preOrder(root, x,findX, y, findY,level){

        if(!root)return null;

        if(root.val == x &&findX[0] == -1 ){
            findX[0] = level
        }

        if(root.val == y &&findY[0] == -1 ){
            findY[0] = level
        }

        if(findX[0] != -1 && findX[0] != -1 ){
            ans = true
        }

        preOrder(root.left, x,findX, y, findY,level);
        preOrder(root.right, x,findX, y, findY,level)

    }

    let findX = [-1];
    let findY = [-1]
    preOrder(root, x,findX, y, findY,0)
   return ans;
};


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log(isCousins(root, 2, 3)== true);
console.log(isCousins(root, 2, 7)== true);
console.log(isCousins(root, 2, null)== false);
console.log(isCousins(root, 4, 7)== true)