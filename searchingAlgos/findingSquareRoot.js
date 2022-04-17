/**
 *  using binary search
 *  set start =1 to end = number;
 *  use divide and conquer algo to land in the number
 */


function findRoot(number){
   let start =1 , end = number;

   

    let num = Math.sqrt(number);
   

   while(start<end){
   let mid = Math.floor((end+start/2));
   console.log(mid);
         if(mid==num){
            return mid;
           }  

        else if(mid>num){
            end= mid-1;
           } 

        else {
            start = mid+1;
           }
    }

}

console.log(findRoot(64));