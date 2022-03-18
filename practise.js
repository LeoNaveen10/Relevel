/*const num=89;

switch(num)
{
    case 'arr' : console.log("hello world");
                break;
    case 2   :  console. log("answer is 2");
                break;
    default:
        console.log("none is there");
}*/



/*
var readline=require("readline");
var r= readline.createInterface(process.stdin,process.stdout);

r.question("enter your name ",(name)=>
{
    name= "hello "+name;
    console.log(name);
    r.close();
});

var readline=require("readline");
var rl=readline.createInterface({input:process.stdin,output:process.stdout});

rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
  });
  */




/* str= "messi".split(" ").reverse().join(" ");
 console.log(str);




 /////npm install readline-syncdline-sync


const readline = require("readline-sync")
// Find the maximum number out of three user given numbers
function findMax() {
   let num1 = Number(readline.question("Please enter the first number: "))
   let num2 = Number(readline.question("Please enter the second number: "))
   console.log(num1, num2, num1 + num2)
}

findMax()

str= "messi lionel".split(" ").reverse().join(" ");  //split --> string to array
 console.log(str);

var arr="Naveen Sundar"                              // reverse --> array reverse
                                                   //join --> array to string joining
console.log(["ray","bean"].join(" "));


var arr=[1414123,434534,1344,4534634,12314,-352352];
let small=-9999999,big=999;

for(let i=0;i<arr.length;i++){
   if(arr[i]<small)
   small=arr[i];
   if(arr[i]>big)
    big=arr[i];      
}

console.log("smallest no is ", small);
console.log("biggest no is ", big);

*/

function toFind3rdBiggestUniqueNumber(arr) {

    arr.sort(function (a, b) { return b - a; });
    let temp = []; temp[0] = arr[0];
    let k = 1;
    for (let i = 1; i < arr.length; i++) {
        let flag = 0;
        for (j = 0; j < temp.length; j++) {
            if (arr[i] == temp[j]) {
                flag = 1; break;
            }
        }
        if (flag == 0) temp[k++] = arr[i];
    }
    switch (temp.length) {
        case 1: return temp[0];
            break;
        case 2: return temp[1];
            break;
        default: return temp[2];
    }
}
const arry = [1, 2, 3, 1];
console.log(toFind3rdBiggestUniqueNumber(arry));
a = [1, 1, 4, 4, 6, 7, 8, 9, 5, 5, 3];
console.log(toFind3rdBiggestUniqueNumber(a));




