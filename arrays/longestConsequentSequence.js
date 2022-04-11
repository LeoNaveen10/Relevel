/**
 * 
 * sort the array
 * find the each subsequence and store it in object
 * find the object value with highest length and print it   
*/


let arr = [35,3,4,88,9,10,21,5,6];
let longestSequence = (arr)=>{
    let result = {};

    arr.sort((a,b)=> a-b);

    // [3,4,5,6,9,10,21,35,88]
    let key = 1,temp=arr[0];
    result[key] = [temp]; 

    for(let i=1;i<arr.length;i++){   //n
        
        if(arr[i]==temp+1){
            temp = arr[i];
            result[key].push(arr[i]);
        
        }else{
            key++;
            result[key] = [arr[i]];
            temp=arr[i]
        }
        
    }
  // console.log(result);

    let index,max=0;
    for(let key in result){             //n
        let temp=result[key].length;
        if(temp>max){
            max=temp;
            index=key;
        }

    }
   console.log(result[index]);
}

longestSequence(arr);

//0(n) =--> nlog n + n + n = nlog n 
//space is s(n);