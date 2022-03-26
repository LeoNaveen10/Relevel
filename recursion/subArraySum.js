let arr =[-2,1,-3,4,-1,2,1,-5,4];

// normal method to find subarrray 

var maxSubArray = function(arr) {

    let sum=-09999,temp=0;
    let n = arr.length;

    if(arr.length==1) 
        return arr[0];
    
    for(let i=0;i<n;i++){
        temp+=arr[i];

        for(let j=i+1;j<n;j++){
            temp+=arr[j];
               
            if(temp>sum)
                sum=temp;
        
        }
        temp=0;
    }

    return sum;
}

//console.log(maxSubArray(arr));

/**
 * easy method from leetcode
 * let arr =[-2,1,-3,4,-1,2,1,-5,4];
 *  left side values are more than right side,
 *  we are setting values on left side greater, so to compare with RHS values 
 */

 var maxSubArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    console.log( Math.max(...nums));
  };

  maxSubArray(arr);