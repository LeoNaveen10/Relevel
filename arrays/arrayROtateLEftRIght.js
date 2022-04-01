/**
 *  [1,2,3,4,5,6,7]
 * 
 * left rotation for 2 times : 
 *  [ 3,4,5,6,7,1,2]
 * 
 * right rotation for 2 times : 
 *  [6,7,1,2,3,4,5]
 * 
 */



function leftRotate(arr,rotate){

    if(rotate>=arr.length){
        rotate %=arr.length;
    }
    let temp=[],j=0;

    for(let i=rotate;i<arr.length;i++){
        temp[j++]=arr[i]
    }
    for(let i=0;i<rotate;i++){
        temp[j++]=arr[i];
    }
    printarr(temp);
}

function printarr(arr){
    let str=" ";
    for(let i=0;i<arr.length;i++){
        str+= arr[i]+ " ";
    }
    console.log(str);
}

function rightRotate(arr,rotate){

    if(rotate>=arr.length)
        rotate%=arr.length;

    let j=0,temp=[];

    for(let i=arr.length-rotate;i<arr.length;i++){
        temp[j++]=arr[i];
    }
    for(let i=0;i<arr.length-rotate;i++){
        temp[j++]=arr[i];
    }
    printarr(temp);
    
}

let arr = [1,2,3,4,5,6,7];

console.log("leftRotate");
leftRotate(arr,2);

console.log("RightRotate");
rightRotate(arr,2);