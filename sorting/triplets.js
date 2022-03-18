/**
 * findin the no of triplets which is less than sum
 */

function triplets(arr,n,sum){
    arr.sort((a,b)=> a-b);
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
    } return temp;
}

//let arr=[5,1,3,4,7];
//console.log(triplets(arr,arr.length,12));

/**
 * finding triplets in range
 * less than or equal to l-1 = left
 * less than or equal to r = right
 * 
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
    } return temp;
  
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


/** 
 *convert array to reduced form 

*/

function reducedForm(arr,n){
   
    let temp = new Map();

    let temparr=[...arr];   //original order is saved
    temparr.sort((a,b)=>a-b);   //3,5,8,34,40

    for(let i=0;i<n;i++){
        temp.set(temparr[i],i); //3-->0,5-->1,8-->2...
    }

    for(let i=0;i<n;i++)
      arr[i]=temp.get(arr[i]);  //temp.get(5) gives 1 ....

    console.log("reduced form is",arr);
}

let a=[5,40,3,8,34];
reducedForm(a,5);