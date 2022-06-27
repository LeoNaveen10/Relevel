const {Queue} = require('../Queue/queue');

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 *  printing whenever we touch the node from left
 *  
 */

function preorderTraversal(root){                        
    if(root == null) return; //base case
    //root, left , right
    console.log(root.data);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}

/**
 * printing whenver we touch the node from right
 */

function postorderTraversal(root){
    if(root == null) return; //base case
    //left , right, root
    postorderTraversal(root.left);
    postorderTraversal(root.right);
    console.log(root.data);
}

/**
 * printing nodes whenver we touch the node from center
 */


function inorderTraversal(root){
    if(root == null) return; //base case
    // left ,root, right
    inorderTraversal(root.left);
    console.log(root.data);
    inorderTraversal(root.right);
}

function heightOfTree(root){
    if(root == null){
        return -1;
    }

    let leftSubtreeHeight = heightOfTree(root.left); //-1 //0
    let rightSubtreeHeight = heightOfTree(root.right);//-1 //0

    let currHeight = Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
    return currHeight; //0
}
/**
 * on each recursive  call we are increasing the current level by 1, then finally printing the values  in the
 *      particular level when the exact level is reached.
 */

function printLevelK(root, currLevel, levelToPrint){
    if(root == null) return; //base case
    //root, left , right
    if(currLevel == levelToPrint){
        console.log(root.data);
        return;              //if particular base is found, we can return from execution without calling function again 
                            // for good TC
    }
    printLevelK(root.left, currLevel+1, levelToPrint);
    printLevelK(root.right, currLevel+1, levelToPrint);
}

/**
 * passing each level to printLevel function untilll we reach the maximum height 
 */

function printAllLevels(root){ //n + (n*height)=> O(n*height)
    let lastLevel = heightOfTree(root);  //O(n)
    for(let x = 0; x <= lastLevel; x++){ //O(n*height)
        console.log("-------level : ",x," ------");
        printLevelK(root, 0, x); //O(n)
        console.log("-------------");
    }
}

/**
 * Create queue first, then push the nodes as per the level of the nodes in current tree
 * Add null after each level, then print as per the level of tree
 */

function levelOrderOptimized(root){
    if(!root){
        return;
    }
    let queue = new Queue();
    queue.enqueue(root); // 100 and 101 are only for the first time when adding root to the queue
    queue.enqueue(null);
    while(!queue.isEmpty()){   // then use this while loop to print untill null
        let n = queue.getFront();
        queue.dequeue();
        if(n == null){
            console.log("--------------------");  // if null is removed then, enqueue  the null again.  
            if(!queue.isEmpty()){
                queue.enqueue(null);
            }
            continue;
        }
        console.log(n.data);
        if(n.left != null){   // add left and right node of the particular node
            queue.enqueue(n.left);
        }
        if(n.right != null){
            queue.enqueue(n.right);
        }
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(90);
// preorderTraversal(root);
// console.log("----------------");
// postorderTraversal(root);
// console.log("----------------");
// inorderTraversal(root);


//         10
//        /  \
//      20    30
//     /  \     \
//    40  50     60
//console.log(root);
//printLevelK(root, 0, 2);
//let height = heightOfTree(root);
//console.log(height);
//printAllLevels(root);
levelOrderOptimized(root);


function buildTree(input, n){
    let arr = [];
    let parentIndex=0;
    arr[parentIndex] = input[0];
    for(let i=1; i<n; i=i+2){
        let left= 2*parentIndex +1;
        let right= 2*parentIndex +2;
        arr[left] = input[i];
        arr[right] = input[i+1];
        parentIndex++;
    }
    return arr;
}

let input = [10, 20, 30, 40, 50, null, 60, null, null, null, null, null, null, null, null];

//console.log(buildTree(input, 15));
//         10
//        /  \
//      20    30
//     /  \     \
//    40  50     60


function rightViewOfBinaryTree(root){
    if(!root){
        return;
    }
    let result=[];
    let queue = new Queue();
    queue.enqueue(root);
    queue.enqueue(null);
    while(!queue.isEmpty()){
        let n = queue.getFront();
        queue.dequeue();
        if(!queue.isEmpty() && queue.getFront() == null){
            result.push(n.data);
        }
        if(n == null){
            if(!queue.isEmpty()){
                queue.enqueue(null);
            }
            continue;
        }
        if(n.left != null){
            queue.enqueue(n.left);
        }
        if(n.right != null){
            queue.enqueue(n.right);
        }
    }
    return result;
}


function leftViewOfBinaryTree(root){
    if(!root){
        return;
    }
    let result=[];
    let queue = new Queue();
    queue.enqueue(root);
    queue.enqueue(null);
    result.push(root.data);
    while(!queue.isEmpty()){
        let n = queue.getFront();
        queue.dequeue();
       
        if(n == null){
            if(!queue.isEmpty()){
                queue.enqueue(null);
                result.push(queue.getFront().data);
            }
            continue;
        }
        if(n.left != null){
            queue.enqueue(n.left);
        }
        if(n.right != null){
            queue.enqueue(n.right);
        }
    }
    return result;
}


function isValidBST(root){
    return isBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

//minimum = maximum of left subtree, maximum => minimum of right subtree
function isBST(node, minimum, maximum){
    if(node == null){ //base case
        return true;
    }

    if(minimum > node.data || node.data > maximum){
        return false;
    }

    let leftSubtreeIsBST = isBST(node.left, minimum, node.data);
    let rightSubtreeIsBST = isBST(node.right, node.data, maximum);

    return leftSubtreeIsBST && rightSubtreeIsBST;
}

