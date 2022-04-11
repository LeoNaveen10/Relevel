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