/**
 * merge sort
 * divide and conquer
 * start and end will be limit upto which it will sorted
 */
let arr = [2, 4, 1, 3, 5];

function conquer(arr, start, mid, end) {

    var tempArr = new Array(arr.length);
    var tempIndex = start; //used to track index in temp array

    var lstart = start; //left half start index
    var rstart = mid + 1; //right half start index

    while (lstart <= mid && rstart <= end) {

        if (arr[lstart] >= arr[rstart]) {

            tempArr[tempIndex++] = arr[rstart++];
            
        } else {
            tempArr[tempIndex++] = arr[lstart++];
        }
    }
    //remaining numbers to be sorted from left and right
    while (lstart <= mid) {
        tempArr[tempIndex++] = arr[lstart++];
        
    }
    while (rstart <= end) {
        tempArr[tempIndex++] = arr[rstart++];
        
    
    }
    for (i = start; i <= end; i++)
        arr[i] = tempArr[i];

}


function divide(arr, start, end) {
    //find midpoint
    //sort first half of array ; mS(arr,start,m);
    //sort second half of array  ; mergesort(arr,m+1,end)
    //finally merge it

    if (start >= end)
        return;

    let mid = start + parseInt((end - start) / 2); //to control limit exceeding
    divide(arr, start, mid);
    divide(arr, mid + 1, end);
    conquer(arr, start, mid, end);

}

divide(arr, 0, 4);

console.log(arr);



