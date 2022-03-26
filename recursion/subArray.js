let arr = [1,2,3];
let start=0,end=0;

let findSubArray=(arr,start,end)=>{

    if(end==arr.length){
        return;
    }
    else if(start>end){
        findSubArray(arr,0,end+1);
    }
    else {
        let str = " ";
        for(let i=start;i<end;i++){
            str+=arr[i]+" ";
        } str+=arr[end]+" ";
        
        console.log(str);
        findSubArray(arr,start+1,end);
    }
    return;

}

findSubArray(arr,0,0);