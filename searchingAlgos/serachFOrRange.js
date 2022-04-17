
/**
 * [2,4,5,6,7,7,7,7,9]
 * given sorted array
 * find the frequency of the number
 * 
 * o/p : [4,7]
 * 
 * first check the left side 
 * Then check the right side
 * above are the 2 calls in the searchFOrRange func.
 * 
 *  first if part will execute - only when checking the right side
 *  else if part is for checking only the right side
 * 
 *  in else part only when Key is equal to mid{
 *      inside this 2 parts are there to check right most and left most range         
 *  }
 */

const arr=[2,4,5,6,7,7,7,7,9],key=7;

function searchForRange(arr,key){
        rangeResult = [-1,-1];
        searchHelper(arr,0,arr.length-1,key,rangeResult,true);
        searchHelper(arr,0,arr.length-1,key,rangeResult,false);
        console.log(rangeResult);

    }

function searchHelper(arr,left,right,key,rangeResult,searchInLeft){
    if(left>right){
        return;
    }
    
    let mid =Math.floor((right+left)/2);

    if(arr[mid]<key){             //choosing the sides upto when key == mid
        searchHelper(arr,mid+1,right,key,rangeResult,searchInLeft);
    } else if(arr[mid]>key){
        searchHelper(arr,left,mid-1,key,rangeResult,searchInLeft);
    }
    
    else{     //if key==mid

        if(searchInLeft){   //to find left range
            if(mid==0||arr[mid-1]!=key){   //if mid reaches the first element
                rangeResult[0]=mid;
            } else{  //call recursively untill we find the left Most range
                searchHelper(arr,left,mid-1,key,rangeResult,searchInLeft);
            }
        } else{  //to find right range
            if(arr[mid+1]!=key|| mid==arr.length-1){ //if mid reaches the last element
                rangeResult[1]=mid;
            }else{ //call recursively untill we find the right most range
                searchHelper(arr,mid+1,right,key,rangeResult,searchInLeft);
            }
        }
    }

}

searchForRange(arr,key);