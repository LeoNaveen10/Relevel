/**
 *   from array to heap -- most people think it is only possible in O(n log2n)
 *  coz while upheafying, leaf nodes(which are in maximum quanity) will get perfomed more, so higher TC.
 * 
 * but instead of upheapfying, when we downheapfy, we can make the heap from array in O(n) itself.
 *   coz while downheapify, leaf nodes will get executed less.
 */


function downheapify(arr, idx){
    let largestIdx = idx;
    while(idx < arr.length){
        let leftChild = 2*idx + 1;
        let rightChild = 2*idx+2;

        if(leftChild < arr.length && arr[leftChild] > arr[largestIdx]){
            largestIdx = leftChild;
        }
        if(rightChild < arr.length && arr[rightChild] > arr[largestIdx]){
            largestIdx = rightChild;
        }

        if(largestIdx == idx) break;

        let temp = arr[idx];
        arr[idx] = arr[largestIdx];
        arr[largestIdx] = temp;
        idx = largestIdx;
    }
}


function buildHeap(arr){
    for(let i=arr.length/2; i>=0;i--){
        downheapify(arr, i);
    }
}


let arr = [1, 5, 7, 2, 8, 9];
buildHeap(arr);
console.log(arr);

