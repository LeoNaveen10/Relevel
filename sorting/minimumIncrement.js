let minimumIncrement = (arr)=>{
    arr.sort((a,b)=> a-b);  // 1,1,2,2,3,4,5
    let count =0;
    
    /**
     *  1) choose temp
     *  2) increase the present value of arr[i]
     *  3) update the value of count value by subtracting the incremented value with previous value of the same no
     *             (only to find the no of increments/jump it needed)   
     */
    
    for(let i=1;i<arr.length;i++){  
        
        if(arr[i]<=arr[i-1]){
           const temp = arr[i];
           arr[i]=arr[i-1]+1;
           count += arr[i]-temp;
        }
    }

    console.log(arr);
    console.log(count);
}

let arr = [2,3,4,1,5,1,2];
minimumIncrement(arr);