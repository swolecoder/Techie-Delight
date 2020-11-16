//Calculate height of binary tree | Iterative & Recursive
//https://www.techiedelight.com/calculate-height-binary-tree-iterative-recursive/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var height = function (root) {

    return height(root)
};

function height(node) {
    if (!node) return 0;

    return Math.max(height(node.left), height(node.right)) + 1
}

//2nd method


var maxDepth = function(root) {

    if(!root)return 0;

    let stack = [[root,0]];

    let max = 0;

    while(stack.length){

        let len = stack.length;

        for(let i=0; i < len; i++){
            let [data,level] = stack.pop();

            max = Math.max(max, level)

            if(data.left){
                stack.push([data.left,level+1])
            }

            if(data.right){
                stack.push([data.right,level+1])
            }
        }
    }

    return max +1;
};