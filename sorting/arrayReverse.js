/**reversing first n given number
 *  reverse from 0 to n-1
 * reverser from n to arr.length-1
 * fully reverse it once both are completed
 */
function reverse(arr,no){

    if(no==arr.length) return;
   reverseNno(arr,0,no-1);
   reverseNno(arr,no,arr.length-1);
   reverseNno(arr,0,arr.length-1);
}

function reverseNno(arr,start,end){
   while(start<end){
       temp=arr[start];                
       arr[start]=arr[end];    
       arr[end]=temp;                  
       start++;end--;
   }

   
}
let arr=[1,2,3,4,5,6,7];
reverse(arr,2);
console.log(arr);








/*
 * Block Swap algorithm
 * 
 * 1) if A is shorter than B, divide B in to bl and br and finally swap with br and A 
 * 2) if B is shorter than A, divide A into al and ar and finally swap with al and b.
 * 3) finally when A and B of  equal size, swap final in the end
 */

function blockSwap(arr,d,n){
  
    if(d==n||d==0) return;

    if(d>n) d%=n; //if d is greater than n, we use this

    let i=d;  //2
    let j=n-d;  //5

    while(i!=j){

        if(i<j){                       
            swap(arr,d-i,d+j-i,i);   //(arr,0,5,2)
            j-=i;
        }
        else{
            swap(arr,d-i,d,j);   //(arr,0,2,5)
            i-=j;
        }
    }
    swap(arr,d-i,d,i);
}
function swap(arr,start,end,d){
    
    for(let i=0;i<d;i++){
        let temp=arr[start+1];
        arr[start+1]=arr[end+1];
        arr[end+1]=temp;
    }

} 

blockSwap(arr,2,7);
console.log("block swap",arr);