// // { Driver Code Starts
// //Initial Template for javascript
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function main() {
//     let t = parseInt(readLine());
//     let i = 0;
//     for(;i<t;i++)
//     {
//         let N = parseInt(readLine());
//         let arr = new Array(N);
//         let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
//         for(let i=0;i<N;i++)
//             arr[i] = input_ar1[i];
//         let obj = new Solution();
//         console.log(obj.inversionCount(arr, N));
        
//     }
// }// } Driver Code Ends
// class Solution {
//     // Function to count inversions in the array.
//     inversionCount(arr, N)
//     {
//         return sort(arr,0,N-1)
        
//     }
// }
// function sort(arr,start,end){
//     if(start>=end) return;
//     let mid = start+parseInt((end-start)/2);
    
//     let ic1=sort(arr,start,mid);
//     let ic2=sort(arr,mid+1,end);
//     let ic3=merge(arr,start,mid,end);
    
//     return ic1+ic2+ic3;
// }

// function merge(arr,start,mid,end){
//     let lstart = start;
//     let rstart = mid+1; let count = 0;
//     while(lstart<=mid && rstart<=end){
//         if(arr[lstart]>arr[rstart]){
//             count=count+mid-lstart+1;
//         }
//         else{
//             rstart++;
//         }
//     }
//     return count;
// }



// num = 100;
// var num;
// console.log(num);

// a =90;
// let a;
// console.log(a);


let arr = [];

temp=arr[arr.length-1];

temp.push([4]);

console.log(arr);
