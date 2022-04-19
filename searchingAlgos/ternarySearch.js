/**
 *  split the arry into three parts
 *  find 2 mid points
 * 
 *  mid1 = left+(right-left)/3
 *  mid2 = right - (right-left)/3
 * 
 *  if mid1==key  return mid1;
 *  if mid2==key  return mid2;
 *  
 *   if(key<mid1) left,mid1-1
 *   if(key>mid1) mid1+1,right
 * 
 *  if(key<mid2)  left,mid2-1
 *  if(key>mid2)  mid+1,right
 * 
 */



function ternarySearch(arr,key){
   console.log(searchHelper(arr,0,arr.length-1,key)) 
}

function searchHelper(arr,left,right,key){
    let mid1= Math.floor(left+(right-left)/3);
    let mid2 = Math.floor(right-(right-left)/3);

    if(arr[mid1]==key) return mid1;
    if(arr[mid2]==key) return mid2;

    if(arr[mid1]<key){
         return  searchHelper(arr,mid1+1,right,key);
    } else if(arr[mid1]>key){
        return searchHelper(arr,left,mid1-1,key);
    } else if(arr[mid2]<key){
       return searchHelper(arr,mid2+1,right,key);
    } else {
        return searchHelper(arr,left,mid2-1,key);
    }
}



ternarySearch([2,4,8,11,19,25,34,68,91,104],91);