/**
 * [17,21,1,2,3,7,8]
 * 
 * o/p - 2 
 */

 const arr=[17,21,1,2,3,7,8];

 console.log(findRotations(arr));

 function findRotations(arr){
     for(let i=1;i<arr.length;i++){
         
        if(arr[i]<arr[i-1]){
             return i;
         }
     }
 }
