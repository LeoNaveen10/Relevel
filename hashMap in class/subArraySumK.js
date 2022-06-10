/**
 * Finding sum of the array given first and storing it.
 * 
 * checking whether the sum upto the position we are in, with the previous value of sums, whether we can reach the required value.
 * if we can, we found out the subarray which is equal to given sum, then increment the count.
 * Differnce between 2 sums is equal to the given sum (Y-K), then we know that the particular subarray is valid. then increase the count.
 * 
 *   EG : k = 3 and y=6;
 *  if array has number 3 in key value of sums then we can increment the count. mp.has(y-k);
*/



function subarraysWithSumK(arr, k){
    let count = 0;
    let mp = new Map();
    for(let i = 1; i<arr.length; i++){ //tranfering original array to contiguous sum array
        arr[i] = arr[i] + arr[i-1];
    }

    for(let i = 0; i<arr.length; i++){ 
        let y = arr[i];
        if(y == k){             //if the sum itself the wanted number, then increase the count
            count++;
        }
        if(mp.has(y-k)){    // if arrray has the sub-array of y-k
            count = count + mp.get(y-k);
        }
        
        if(mp.has(y)){ //sum y already occurred
            mp.set(y, mp.get(y) + 1);
        }
        else{//sum y occurring for the first time
            mp.set(y,1);
        }
    }
    return count;
}

// let arr = [1, 2, 3, 2, 0, 1];
// let k = 3;

let arr = [6, -6, 1, 2, 3, 0, 1];
let k = 6;
let result = subarraysWithSumK(arr, k);
console.log(result);