/**
 * it works only on sorted arrays
 * 
 * it works on divide and conquer algorithm
 * 
 */

/**
 *  Base Case : 
 *     if(left>right)
 *          return;
 * 
 * steps:
 *  1) find mid element [left+(right-left)/2];
 *  2) check if mid == key
 *  3) if mid is less than key, we have to ignore left part
 *  4) if mid is greater than key, we have to ignore right part
 *  5) same as divide and conquer algorithm
 */

function binarySearch(arr,key){
    arr.sort((a,b)=> a-b);
    console.log(divideAndConquer(arr,key,0,arr.length-1));

}

function divideAndConquer(arr,key,left,right){
    
    let mid = Math.floor(left +(right-left)/2);
    console.log(mid);

    if(left>right){
        return "not found";
    }
    else if(arr[mid]==key){
        return mid;
    }
    else if(arr[mid]>key){
       return divideAndConquer(arr,key,left,mid-1);
    }
    else if(arr[mid]<key){
        return divideAndConquer(arr,key,mid+1,right);
    }
}
binarySearch([4,15,32,2,78,56,90],90);


//T(n) - O(log n) 
// S(n) - O(n)