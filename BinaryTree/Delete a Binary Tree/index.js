function deleteBinaryTree(node){
    if(!node) return;

    deleteBinaryTree(node.left);
    deleteBinaryTree(node.right);

    delete node;

    node = null;
}