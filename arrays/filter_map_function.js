function oddCheck(num) {
    if (num % 2 == 1) return num
}
let mynumbers = [11, 22, 33, 44, 55, 66, 77]
let oddnumbers = mynumbers.filter(oddCheck)
console.log(mynumbers)
console.log(oddnumbers)

function isValidYear(year) {
    if (year < 1900)
        return year
}

let birthYear = [1850, 1630, 1790, 1900, 2021, 2020, 1899]
let resultYear = birthYear.filter(isValidYear)
console.log(birthYear)
console.log(resultYear)


let numbers = [1, 2, 3, 4, 5, 6]
let cubes = numbers.map((val) => {return val * val * val})
console.log(numbers)
console.log(cubes)

let numbers1 = [1, 8, 27, 64, 125]
let cubeRoot = numbers1.map((value) => Math.cbrt(value))
console.log(numbers1)
console.log(cubeRoot)



//from internet

var arr = [1, 2, 3, 4, 5, 6, 7];

var newArr = arr.map((el) => {
  return el * 2;
});

console.log(newArr); //2,4,3,8,10,12,14

// filter() return new Array
var newFilter = arr.filter((el) => {
   return (el * 2);
});
console.log(newFilter); // 1,2,3,4,5,6,7

