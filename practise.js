// /*const num=89;

// switch(num)
// {
//     case 'arr' : console.log("hello world");
//                 break;
//     case 2   :  console. log("answer is 2");
//                 break;
//     default:
//         console.log("none is there");
// }*/




// str= "messi lionel".split(" ").reverse().join(" ");  //split --> string to array
//  console.log(str);

// var arr="Naveen Sundar"                              // reverse --> array reverse
//                                                    //join --> array to string joining
// console.log(["ray","bean"].join(" "));


// var arr=[1414123,434534,1344,4534634,12314,-352352];
// let small=-9999999,big=999;

// for(let i=0;i<arr.length;i++){
//    if(arr[i]<small)
//    small=arr[i];
//    if(arr[i]>big)
//     big=arr[i];      
// }

// console.log("smallest no is ", small);
// console.log("biggest no is ", big);


// function toFind3rdBiggestUniqueNumber(arr) {

//     arr.sort(function (a, b) { return b - a; });

//     let temp = []; temp[0] = arr[0];
//     let k = 1;
//     for (let i = 1; i < arr.length; i++) {
//         let flag = 0;
//         for (j = 0; j < temp.length; j++) {
//             if (arr[i] == temp[j]) {
//                 flag = 1; break;
//             }
//         }
//         if (flag == 0) temp[k++] = arr[i];
//     }
//     switch (temp.length) {
//         case 1: return temp[0];
//             break;
//         case 2: return temp[1];
//             break;
//         default: return temp[2];
//     }
// }
// const arry = [1, 2, 3, 1];
// console.log(toFind3rdBiggestUniqueNumber(arry));
// a = [1, 1, 4, 4, 6, 7, 8, 9, 5, 5, 3];
// console.log(toFind3rdBiggestUniqueNumber(a));



// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];

// arr1.push(...arr2);

// arr1.sort((a,b)=> a-b);
// console.log(arr1);

let nums = [1,1,2]
let temp=[];
    


