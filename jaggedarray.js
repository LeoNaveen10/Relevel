let arraysum = (arr) => {
    let sum = 0;
  
    for (let elements of arr) {     //iterate over the array elements

        if (Array.isArray(elements)){
            elements = arraysum(elements); //gets the total sum of the array passed
        }
        sum+=elements;
    }
    return sum;    //returns sum for every function call in recursion
}

let arr = [1, 2, [3, 4, 5, [6, 7]], [100]];
console.log(arraysum(arr));