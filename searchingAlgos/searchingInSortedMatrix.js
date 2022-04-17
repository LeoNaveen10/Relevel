/**
 * [ 1,  4,  7,  12,  15
 *   2,  5,  19, 31,  32
 *   3,  8,  24  33   35
 *   40  41  43  44   45]
 * 
 *  Every element in the matrix are sorted both in row and column
   
    if 
      element is present print position
    else 
      print -1; 
*/


let divide = (arr,key)=>{

    return divideAndConquer(arr,0,arr.length-1,key);
    
}

let divideAndConquer=(arr,left,right,key)=>{

    let mid = Math.floor(left+(right-left)/2);
    
    if(left>right){
        return -1;
    }

    else if(arr[mid]==key){
        return mid;
    }

    else if(arr[mid]>key){
        return divideAndConquer(arr, left, mid-1,key);
    }

    else{
        return divideAndConquer(arr,mid+1,right,key);
    }

}
function callingFunc(matrix,key){
    let i;
    for( i=0;i<matrix.length;i++){
        let res =divide(matrix[i],key);
        if(res!=-1){
        console.log("position of the element is",[i,res]);
        break;  
        }
      }
      
      if(i==matrix.length){
          console.log("element not found");
      }
    }

const matrix = [
    [1,4,7,12,15,1000],
    [2,5,19,31,33,1001],
    [3,8,24,33,35,1002],
    [40,41,42,44,45,1003]
]
const key = 6;
//callingFunc(matrix,key);
/**
 * TC - O(n log n ) -- > logn for binary search and n for no of times loop runs
 * SC - O(n) --> it will have n calls everytime
 */



/**
 * method 2 :
 *  start from row - 0 and col - len-1;
 *  based upon the key value in matrix we can increment the row
 *              and decrement the column.
 *  untill we find the key value in matrix
    const matrix = [
    [1,4,7,12,15,1000],
    [2,5,19,31,33,1001],
    [3,8,24,33,35,1002],
    [40,41,42,44,45,1003]
 ]
const key = 44;
*/
console.log(method2(matrix,key));

function method2(matrix,key){
    let row=0,col= matrix[0].length-1;

while((row<matrix.length && col>= 0)){
    
    if(matrix[row][col]==key){
        return [row,col];
        
    }
    
   else if(matrix[row][col]>key){
        col--;
    }
    else {
        row++;
    }
 }

   return "not found";
}

/**
 * Tc - O(n+n)
 * SC - 
 */