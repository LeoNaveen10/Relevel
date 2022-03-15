function subset(arr, index, tempArr, sum) {
    if (index==arr.length) {
        if(tempArr.length!=0){
            findSumEqual(tempArr,sum);
        }
        return;
    }

    subset(arr,index+1,tempArr,sum);
    tempArr.push(arr[index]);
    subset(arr,index+1,tempArr,sum);
    tempArr.pop();
}
let findSumEqual=(tempArr,sum)=>{
    let temp=0;
    for(let i=0;i<tempArr.length;i++){
        temp+=tempArr[i];
    }
    if(temp==sum){
        console.log(tempArr);
    }
}

let arr = [1, 2, 3,4,5];
let tempArr = [];
subset(arr, 0, tempArr, 5);