/***
 * [2,1,3,4] 
 * [2,1] and [3,4] = 1+3=4
 * 
 */

function maxPair(arr){
    arr.sort((a,b)=> (a-b));  // [ 1,2,3,4]

  let sum=0;

    for(let i =0;i<arr.length;i=i+2){   //adding only odd indexes after sorting
        sum+=arr[i];
    }
    return sum;
}


console.log(maxPair([2,1,4,3]));


function triplets(arr){
    arr.sort((a,b)=> a-b);

    for(let i =0;i<arr.length;i++){

        if(arr[i]+arr[i+1]+arr[i+2]==0){
            console.log(arr[i],arr[i+1],arr[i+2]);
        }

    }

}

triplets([1,-6,5,3,2,4])