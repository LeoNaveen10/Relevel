/**
 *  in a array any of the element shape is like mountain
 * 
 *    / \
 *   /   \ 
 *  /     \
 * 
 * 
 *  take 2 pointers as start and end
 *  start pointer should not decrease before reaching peak
 *  end pointer should not also decrease before reaching peak
 */


function mountain(arr){
    if(arr.length<3){
        return false;
    }
    let left=0,right=arr.length-1;

    while(arr[left+1]>arr[left] && left<arr.length-1){ //it should not reach the end
        left++;
    }
    while(arr[right]<arr[right-1] && right>0){
        right--
    }
    if(right==left){
        return true;
    } 
    return false;
      
}

console.log(mountain([0,3,2,1]));
console.log(mountain([0,3,2,3,2,1]));

/**
 * TC - O(n)
 * SC -O(1)
 */