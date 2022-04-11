/**
 * maximum frequency in a string
 */


let str = "unacademy";

function maximum(str){

        let arr = str.split('').reverse();
        let res = {};

        for(let char of arr){
            if(res[char]){
                res[char]++;
            }else{
                res[char]=1;
            }
        }
         console.log(res);
        let max=1, temp;
        for(let keys in res){
            if(res[keys]>=max){
                temp=keys;
                max=res[keys];
            }
        }
        return temp;
}
console.log(maximum(str));