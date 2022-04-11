let countSort=(...arr)=>{

    let len = arr.length;
    const output = new Array(len);
   //  console.log(output);

    
    let max=0;
    for(let i=0;i<len;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }

    let count = new Array(max+1).fill(0);
    for(let i=0;i<len;i++){ 
         if(count[arr[i]]==0) 
            count[arr[i]]=1;
         else
            count[arr[i]]++;
    }
    console.log(count);
    
    
    // method 1
    // let k=0;
    // for(let i=0;i<count.length;i++){
    //     while(count[i]>0){
    //         output[k++]=i;
    //         count[i]--;
    //     }
    // }
    // console.log(output);

    //method 2
    //finding cumulative sum
    
    for(let i=1;i<count.length;i++){
            count[i]=count[i]+count[i-1];
    }
    console.log(count);
    
    //finding result
    for(let i=len-1;i>=0;i--){ // subtract original array from cumulative array-1
                            // to find position of each element in output array
                            //to avoid while loop in method 1
        output[count[arr[i]]-1]=arr[i];
        count[arr[i]]--;
    }
    console.log(output);
}

countSort(3,2,2,4,7);


// TC  -- O(n+k);