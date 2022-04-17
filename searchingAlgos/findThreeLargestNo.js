

let findThreeLargest=(arr)=>{

    let max1,max2,max3= Number.NEGATIVE_INFINITY;

    for(let i=0;i<arr.length;i++){

        if(arr[i]>max3){
            max1=max2;
            max2=max3;
            max3=arr[i];
        }
        else if(arr[i]>max2){
            max1=max2;
            max2=arr[i];
        }
        else if(arr[i]>max1){
            max1=arr[i];
        }
    }
    return [max3,max2,max1];
}

const arr = [2,3,4,10,5,21,25,56,43];
console.log(findThreeLargest(arr));

/**
 * TC - O(n)
 *  SCe - O(1)
 */