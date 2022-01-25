
//npm install readline-sync


const readline = require("readline-sync")
// Find the maximum number out of three user given numbers
function findMax() {
    let num1 = Number(readline.question("Please enter the first number: "))
    let num2 = Number(readline.question("Please enter the second number: "))
    let num3 = Number(readline.question("Please enter the third number: "))
    if (num1 >= num2) {
        max = num1
    } else {
        max = num2
    }
    if (max >= num3)
        console.log("Maximum number is " + max)
    else
        console.log("Maximum number is " + num3)
}

findMax();
