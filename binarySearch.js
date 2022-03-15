let arr = [1, 2, 3, 4, 5, 6];
/**
 * using iteration method
 */
let binarySearch = (arr, target) => {

    let len = arr.length;
    
    let l = 0, r = len - 1;

    while (l <= r) {
        let mid = parseInt((r+l)/ 2);

        if(arr[mid]==target)
            return mid;
        else if(arr[mid]>target)
            r=mid-1;
        else 
            l=mid+1;
            
    }
    return "unsucessful";    
    
}


/**
 * using recursion
 */
let binaryTree = (arr,x,start,end)=>{
    if(start>=end) return;   

    let mid =  start+parseInt(end-start/2);

    if(arr[mid]==x) return mid;
    
    else if (arr[mid]>=x){
       return binaryTree(arr,x,start,mid-1);
    }
    
    else {
        return binaryTree(arr,x,mid+1,end);
    }

         
}



console.log(binarySearch(arr, 2));


console.log(binaryTree(arr, 5,0,arr.length-1));
