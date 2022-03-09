/***
 * [2,1,3,4] 
 * [2,1] and [3,4] = 1+3=4
 * 
 */

function maxPair(arr){
    arr.sort((a,b)=> (a-b));
 let sum=0;
    for(let i =0;i<arr.length;i=i+2){
        sum+=arr[i];
    }
    return sum;
}


console.log(maxPair([2,1,4,3]));


function triplets(arr){
    arr.sort((a,b)=> a-b);

    for(let i =0;i<ar.length;i++){
        if(arr[i]+arr[i+1]+arr[i+2]==0){
            console.log(arr[i],arr[i+1],arr[i+2]);
        }
    }


}