
function mergesort(arr, start, end) {
    if (start >= end) return;

    let mid = start + parseInt((end - start) / 2);

    mergesort(arr, start, mid);
    mergesort(arr, mid + 1, end);
    conquer(arr, start, mid, end);
}

function conquer(arr, start, mid, end) {
    let tempArr = new Array(arr.length);
    let tempindex = start;
    let lstart = start; 
    let rstart = mid + 1;

    while (lstart <= mid && rstart <= end) {
        if (arr[lstart] >= arr[rstart])
            tempArr[tempindex++] = arr[rstart++];
        else
            tempArr[tempindex++] = arr[lstart++];
    }
    while (lstart <= mid)
        tempArr[tempindex++] = arr[lstart++];
    while (rstart <= end)
        tempArr[tempindex++] = arr[rstart++];

    for (let i = start; i <= end; i++) {
        arr[i] = tempArr[i];
    }
}

let arr = [5,4,3,2,1];
mergesort(arr,0,4);
