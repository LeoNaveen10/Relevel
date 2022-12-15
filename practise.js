// // /*const num=89;

// // switch(num)
// // {
// //     case 'arr' : console.log("hello world");
// //                 break;
// //     case 2   :  console. log("answer is 2");
// //                 break;
// //     default:
// //         console.log("none is there");
// // }*/




// // str= "messi lionel".split(" ").reverse().join(" ");  //split --> string to array
// //  console.log(str);

// // var arr="Naveen Sundar"                              // reverse --> array reverse
// //                                                    //join --> array to string joining
// // console.log(["ray","bean"].join(" "));


// // var arr=[1414123,434534,1344,4534634,12314,-352352];
// // let small=-9999999,big=999;

// // for(let i=0;i<arr.length;i++){
// //    if(arr[i]<small)
// //    small=arr[i];
// //    if(arr[i]>big)
// //     big=arr[i];      
// // }

// // console.log("smallest no is ", small);
// // console.log("biggest no is ", big);


// // function toFind3rdBiggestUniqueNumber(arr) {

// //     arr.sort(function (a, b) { return b - a; });

// //     let temp = []; temp[0] = arr[0];
// //     let k = 1;
// //     for (let i = 1; i < arr.length; i++) {
// //         let flag = 0;
// //         for (j = 0; j < temp.length; j++) {
// //             if (arr[i] == temp[j]) {
// //                 flag = 1; break;
// //             }
// //         }
// //         if (flag == 0) temp[k++] = arr[i];
// //     }
// //     switch (temp.length) {
// //         case 1: return temp[0];
// //             break;
// //         case 2: return temp[1];
// //             break;
// //         default: return temp[2];
// //     }
// // }
// // const arry = [1, 2, 3, 1];
// // console.log(toFind3rdBiggestUniqueNumber(arry));
// // a = [1, 1, 4, 4, 6, 7, 8, 9, 5, 5, 3];
// // console.log(toFind3rdBiggestUniqueNumber(a));



// // let arr1 = [1,2,3,4];
// // let arr2 = [5,6,7,8];

// // arr1.push(...arr2);

// // arr1.sort((a,b)=> a-b);
// // console.log(arr1);

// let nums = [1,1,2]
// let temp=[];
    
// isValidPassword('Naveen12#');
// function isValidPassword(password){
//     var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
//     console.log( passw.test(String(password)))
// }

// console.log(b);
// let a=9;
// var b =10;
// const c=8;
// let num =36;
// temp=num.toString();
// console.log(num);
// temp = temp.split('');
// console.log(temp);

//  let body= JSON.stringify({
//     message: "Access Denied. The user needs to be an Admin.",
//     success: false,
//   })
//   console.log(body);



// let obj = {
//   name : 'naveen',
//   age : '22',
//   sex : 'male'
// }
// Object.keys(obj).map(function(err,index){
//   console.log(index);
// })

// let tempObj  = {};

// tempObj['_id'] = {yes : 'no'};
// console.log(tempObj);


// console.log(Math.floor(Date.now()/1000));


// str = "hghfhyfjhfhjfjf";

// console.log(str+"zxvc");


const obj = {
    "message" : "yes_sir",
    "value" : 30
}

let {message,value} = obj;

console.log(message,"  ",value);

let number = 'nu89aag90'
number = number.toUpperCase();

const reg = /\(|\)|\d{3}/;
const reg2 = /[0-9]/
console.log(reg2.test(number));
string=" kajfa aga fag sfgaSFFF"
string = string.replace(/ /g,"").toLowerCase();
console.log(string);

let a = "akjgdlk    das87878**91?   ///''[]"
var b = a.replace(/[^a-z0-9]/gi,'').toUpperCase();
console.log(b);

// const strToCount1 = '2a3bc4kc';
//     const strToCount2 = '-----';
//     const strToCount3 = '56fgdd4#$#';
//     const strToCount4 = 'sdfdffd';
//     const strToCount5 = '356g f sdf 1';
//     const strToCount6 = 'gfd';
//     const re = /[0-9]/g;
//     console.log(((strToCount1 || '').match(re) || []).length);
//     console.log(((strToCount2 || '').match(re) || []).length);
//     console.log(((strToCount3 || '').match(re) || []).length);
//     console.log(((strToCount4 || '').match(re) || []).length);
//     console.log(((strToCount5 || '').match(re) || []).length);
//     console.log(((strToCount6 || '').match(re) || []).length);


console.log(new Date());

const vari = Math.random().toString(36).slice(-11)
console.log(vari);

const yes = "siva@freshdatalabs.com"
console.log(yes.slice(-11));


const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@freshdatalabs.com/;
    console.log(re.test(yes));

