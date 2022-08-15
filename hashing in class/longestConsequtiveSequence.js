function longestConsecutiveSequence(arr){
    let mp = new Map();
    for(let i=0; i<arr.length; i++){
        mp.set(arr[i], 1);
    }
// console.log(mp);
    let maxLength =0;
    for(let i=0; i<arr.length; i++){
        let currNo = arr[i];
        if(!mp.has(currNo-1)){ //number before the no is not present means it goes  in the condition
            let x = currNo+1;
            let currSequenceLength = 1;
            while(mp.has(x)){
                currSequenceLength++;
                x++;
            }
            maxLength = Math.max(maxLength, currSequenceLength);
        } 
    }
    return maxLength;
}


let arr = [50,49,48];
console.log(longestConsecutiveSequence(arr));