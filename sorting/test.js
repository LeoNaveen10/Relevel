

// let temparr= new Map();
// arr.sort((a,b)=>a-b);

// for(let i=0;i<arr.length;i++){
//     temparr.set(arr[i],)
// }
// console.log(arr);

/**
 * remove duplicates
 */
 let arr=[1,2,2,3,3,3,4];
 
let duplicates = (arr)=>{
    let index=0;
    let temp=arr[0];

   for(let i=1;i<arr.length;i++){

            if(temp!=arr[i]){
               temp=arr[i];
               arr[++index]=arr[i];
            }
    }

  for(let i=0;i<=index;i++){
      console.log(arr[i]);
  }

}


duplicates(arr);