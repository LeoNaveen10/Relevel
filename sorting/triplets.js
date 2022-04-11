/**
 * findin the no of triplets which is less than sum
 */

function triplets(arr,n,sum){
    arr.sort((a,b)=> a-b);  //in ascending order
    let temp=0;
    
    for(let i=0;i<n-2;i++){
        let current = arr[i];
        let l=i+1,r=n-1;
        
        while(r>l){
            if(current+arr[l]+arr[r]<sum){
                temp+= (r-l);
                l++;
            }
            else r--;
        }
    }
     return temp;
}

let arr=[5,1,3,4,7];
console.log(triplets(arr,arr.length,12));

/**
 * finding triplets in range
 * less than or equal to l-1 = left
 * less than or equal to r = right
 * right-left gives answer
 */

function tripletsInbetweenRange(arr,n,l,r){
    arr.sort((a,b)=>a-b);

        let right=count(arr,n,r);
        let left = count(arr,n,l-1);
        return right-left;
    
}

function count(arr,n,sum){

    let temp=0;
    
    for(let i=0;i<n-2;i++){

        let current = arr[i];
        let l=i+1,r=n-1;
        
        while(r>l){
            if(current+arr[l]+arr[r]<=sum){
                temp+= (r-l);   
                l++;
            }else r--;
        }
    }
     return temp;
  
}
arr=[5,1,4,3,2];

console.log("triplets in between range is",tripletsInbetweenRange(arr,5,2,7));


/**
 * merging the sorted array
 * 
 */

function mergeArray(arr1,arr2){
   /*let temp=[];
   let i=0,j=0;
   while(i<arr1.length&&j<arr2.length){
       if(arr1[i]<=arr2[j])
           temp.push(arr1[i++]);
       else temp.push(arr2[j++]);
    }
    while(i<arr1.length)
    temp.push(arr1[i++]);
    while(j<arr2.length)
    temp.push(arr2[j++]);
console.log(temp);*/

        arr1.push(...arr2);
    
    arr1.sort((a,b)=>a-b);
   console.log("merged array is",arr1);
}

arr1=[2,6,8];
arr2=[3,7,45];

mergeArray(arr1,arr2);


/*
*  find triplets of numbers from array
 */

function threeNumberSum(array, target){
    array.sort((a,b)=> a-b); // nlogn
    let result=[];
    
    for(let i=0; i<array.length-2; i++){
        let j=i+1;
        let k = array.length-1;
        while(j<=k){
            if(array[i]+array[j]+array[k]==target){
                result.push([array[i], array[j], array[k]]);
                j++;//k--;
            }else if(array[i]+array[j]+array[k]>target){
                    k--;
            }else{
               j++;
             }
        }
    }
    console.table(result);
}

// T(n) => nlogn + n^2 => n^2
// S(n) => O(n)


const array = [2,7,3,4,-1,12,9,5]
const target = 15
threeNumberSum(array, target);
// output