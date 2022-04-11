/**
 * finding no of repeated values in string
 * 
 */


let str ="aaaabbbccc1122334440";

let obj = {};

for(let char of str){
    if(!obj[char]){
        obj[char]=1;
    } else{
        obj[char]++;
    }
}

for(let key in obj){
    console.log(key , obj[key]);
}