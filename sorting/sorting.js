/**
 * BUBBLe sort
 * 1st iteration --> 1st largest to arrr.length-1
 * 2nd iteration --> 2nd largest to arrr.length-2
*/

let arr = [-45, 11, -90, 1, 45, -120];
const sortBubble = (arr) => {

     for (let i = 0; i < arr.length - 1; i++) {
          for (j = 0; j < arr.length - 1 - i; j++) {
               if (arr[j] > arr[j + 1])
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
     }
     return arr;
}


//console.log("bubble sort is :",sortBubble(arr));


/**
 * Selection sort
 *   no of swappring is less compared to bubble sort
 */


const sortSelection = function (arr) {
     for (i = 0; i < arr.length; i++) {
          index = i;
          for (j = i + 1; j < arr.length; j++) {

               //findig index minimum then outer index
               if (arr[j] < arr[index])
                    index = j;
          }
          //now the index will have the minmum value position,
          //so we are swapping it with i
          [arr[i], arr[index]] = [arr[index], arr[i]];
     }
     return arr;
}
//console.log("selection sort is :",sortSelection(arr));


/**
 * insertion sort
 * Assume that element at position 1 is sorted
 * now go through the left  side to find the place for number
 * 
 */



const insertionSort = function (arr) {
     for (let i = 1; i < arr.length; i++) {
          current = arr[i];

          for (j = i - 1; (j >= 0 && current < arr[j]); j--) {  //moving the element to the right
               arr[j + 1] = arr[j];
          }
          arr[j + 1] = current;
     }
     return arr;
}
console.log("insertion sort output is",insertionSort(arr));






function fact(n) {  

     if (n <= 1)   //base condition
          return 1;

     return n * fact(n - 1);  //recursive call

}





 