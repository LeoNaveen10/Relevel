let GenerateSubsequence =(arr,index,tempArr)=>{
    let length = arr.length;

    if( index==length){   
        if(tempArr.length>0){
            printSubsequence(tempArr);
        }
        return;
    }
    
    //include number
    GenerateSubsequence(arr,index+1,tempArr);
    tempArr.push(arr[index]); 

    //if does not includes
    GenerateSubsequence(arr,index+1,tempArr);
    tempArr.pop();                             //remove the recentlly added
}


let printSubsequence =(arr)=>{
    let str = " ";
    for(let i=0;i<arr.length;i++){
        str+=arr[i]+" ";
    }
    console.log(str);
}


const arr=[1,2,3];
const tempArr = [];
GenerateSubsequence(arr,0,tempArr);
