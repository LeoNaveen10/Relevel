/**
 *  [2,7, 13 , 24,37,59,72,91]  - -shift by 2 means
 *  
 * [72,91,2,7,13,24,37,59]  -- after shifting twice we have to do binary search
    
    1) find mid 
    2) observation - one side of the mid is already sorted
    3) if(arr[mid]== key)  print;
    4) check if left array is sorted, then ignore right side and proceed
    5) check if right array is sorted, then ignore left side and proceed
*/

function shiftedBinarySearch(arr,key){
    const res = binarySearch(arr,key,0,arr.length-1)
    console.log(res);
}

function binarySearch(arr,key,left,right){

    let mid = Math.floor(left+(right-left)/2);
    let midpoint = arr[mid];

    if(left>right) 
        return -1;

    if(key == arr[mid]){
        return mid;
    }
     // check if left is sorted(outer condition)
     // inner condition - (checking if the key is present in left )
     // inner else - (go with the right side)

     if(midpoint>arr[left]){
         if(key<midpoint && key>=arr[left]){
             return binarySearch(arr,key,left,mid-1)
         }else {
            return binarySearch(arr,key,mid+1,right)
         }
     }

     //check if right is sorted

     if(midpoint<arr[right]){
         if(key>midpoint && key<arr[right]){
             return binarySearch(arr,key,mid+1,right);
         }
         else{
             return binarySearch(arr,key,left,mid-1);
         }
     }

}
const arr = [72,91,2,7,13,24,37,59];
const key = 37;
shiftedBinarySearch(arr,key);


/**
 * TC - O(log n)
 * SC - O(log n)
 */
