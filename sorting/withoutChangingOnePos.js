/**
 * Sort the array without changing the index of the particular element
 */

let arr=[2,3,4,1,5];


const func=(arr,k)=>{
        
      let temp= arr.splice(k,1);
        // console.log(temp,"     ",arr);
        temp=temp[0];
        arr.sort((a,b)=>a-b);
        
        arr.splice(k,0,temp);

        console.log(arr);
}

func(arr,2);