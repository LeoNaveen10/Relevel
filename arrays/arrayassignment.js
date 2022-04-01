/* find no of index in which the number gets added to get the target
  arr=[1,2,3525,462,35,56]; target= 36   o/p=[0,4] == 1+2+33
*/

function checktarget(arr,target){
    let result=[];  let sum=0;
    for(let i=0;i<arr.length;i++,sum=0){
        sum+=arr[i];
        if(sum!=target){
            for(let j=i;j<arr.length;j++){
                sum+=arr[j];
                if(sum==target) {
                    result=[i,j];
                    return result;
                }
               sum-=arr[j];    
            }
        }
      if(sum==target){
             result=[i];
             return result;
        } 
        if(i==arr.length-1)
          return "not found";
    }
}
let arr=[1,3,3525,462,35,56];
console.log(checktarget(arr,36));