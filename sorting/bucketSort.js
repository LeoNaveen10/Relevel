const { result } = require("lodash");

/**
 * Bucket Sort
 * 
 * 1) Crack buckets of range
 * 2) Scatter elements in different Range
 * 3) Sort individual Buckets
 * 4) store in resultant array
 * 
 */
let bucketSort=(arr)=>{
  const len = arr.length;
  let bucket = new Array(len);

  for(let i=0;i<len;i++){
      bucket[i]=[];
  }

  for(let i=0;i<len;i++){
      const index = Math.floor(arr[i]/len);  
        //we can use anything to store values in different buckets
      bucket[index].push(arr[i]);

      console.log(index, " ",bucket[index]);
    }

    for(let i=0;i<len;i++){
        bucket[i].sort((a,b)=> a-b);
    }

    let output=[],k=0;

    for(let i=0;i<len;i++){
        for(j=0;j<bucket[i].length;j++)
            output[k++]=bucket[i][j];
    }
    console.log(output);
}

bucketSort([4,3,8,7]);

/**
 * TC:
 *  best case = O(n+k)
 *  aveerage case = O(n+k)
 *  worst case = O(n);
 */
