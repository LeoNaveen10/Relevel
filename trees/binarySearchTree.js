class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function insertInBST(root, data){
    if(root == null){ //base case
        root = new Node(data);
        return root;
    }

    if(data < root.data){
        root.left = insertInBST(root.left, data);
    }
    else{
        root.right = insertInBST(root.right, data);
    }
    return root;
}

function minValue(root){
    if(root == null){
        return NaN;
    }
    while(root.left != null){ //go through left to get minvalue
        root = root.left; 
    }
    return root.data;
}


/**
 * Find the node first, delete the node, then we have 2 options to choose from
 *  1)  smallest number from  the  right side
 *  2) largest number from the left side
 * 
 *  we can take anyone of the value to replace the deleted node.
 *  then based on the funciton recursive call, the new node will be attached as per the call as 
 *                      node.left or node.right(as per the function call)
 */


function deleteInBST(root, data){
    if(root == null){
        return;
    }
    if(data < root.data){
        root.left = deleteInBST(root.left, data);
    }
    else if(data > root.data){
        root.right = deleteInBST(root.right, data);
    } 
    //found the node to delete
    else if(root.left != null && root.right != null){ //node have 2 child
        root.data = minValue(root.right); //inorder successor
        root.right = deleteInBST(root.right, root.data);
    }
    else if(root.left != null || root.right != null){//node have 1 child
        root = root.left ||root.right;
    }
    else{//node have 0 child => leaf node
        root = null;
    }

    return root;
}

let output = [];
function inorderTraversal(root){
    if(root == null) return output; //base case
    // left ,root, right
    inorderTraversal(root.left);
    // console.log(root.data);
    output.push(root.data);
    inorderTraversal(root.right);
    return output;
}

let root = new Node(10);
// inorderTraversal(root);
// console.log("--------------------");
insertInBST(root, 100);
// inorderTraversal(root);
// console.log("--------------------");
insertInBST(root, 5);
// inorderTraversal(root);
// console.log("--------------------");
insertInBST(root, 15);
// inorderTraversal(root);
// console.log("--------------------");
insertInBST(root, 1);
let myoutput = inorderTraversal(root);
console.log(myoutput);
console.log("--------------------");
// deleteInBST(root, 5);
// inorderTraversal(root);
// console.log("--------------------");
// deleteInBST(root, 10);
// inorderTraversal(root);
// console.log("--------------------");
// deleteInBST(root, 15);
// inorderTraversal(root);
// console.log("--------------------");