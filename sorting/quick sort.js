let arr=[2,1,56,31,6];

function quickSort(arr, start, end) {

     if (start >= end) return;  //end condition

     //take pivot index from array 
     // everyting in left of pivot is lesser 
     //everything in right will be bigger

     var pi = findPivot(arr, start, end);
     quickSort(arr, start, pi - 1);
     quickSort(arr, pi + 1, end);

}

function findPivot(arr, start, end) {
     /**
      * find how many elements are smaller
      */
     let random = Math.floor((Math.random()*start)+end); //taking random number as pivot element
  
     swap(arr,random,end);

     let pivotValue = arr[end];
  
     let pi = start - 1;//final index,we don't know so we are using number outside range

     for(let j=start;j<=end-1;j++){

          if(arr[j]<pivotValue){
               pi++;               //finding out index of pivot along
               swap(arr,pi,j);
          }
     }
     //we are placing pivot in correct position
     swap(arr,pi+1,end);     
     return pi+1;

}

 swap = (arr,i,j)=>{
      [arr[i],arr[j]]=[arr[j],arr[i]];
}

//we are doing randomisation to get good time complexity in most cases

console.log("quick sort");
quickSort(arr, 0, 4);
console.log(arr);


