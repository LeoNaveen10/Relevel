
var permute = function(nums){

    let arr = nums;             
    let map = new Array(arr.length+1);   //map is to map all the elements whether already addded or not

    let ans = [];         //to store the permanent answers

    function printPermutation(arr,map,ds,ans){      //ds is used to find the all possible permutations

        //base case
        if(ds.length==arr.length){
            ans.push(ds.slice());
            return;
        }

        for(let i=0;i<arr.length;i++){

            if(map[arr[i]]!=1){     //check if the no is not checked already
                ds.push(arr[i]);     //then push it
                map[arr[i]]=1;

                printPermutation(arr,map,ds,ans);

                ds.pop();
                map[arr[i]]=0;
            }
        }
    }
    printPermutation(arr,map,[],ans);
    return ans;
}


const ans = permute([1,2,3]);
console.table(ans);