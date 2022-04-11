
let arr = ["dog","tac","god","fool","loof","he","act","dog","eh"];


let printanagrams = (arr)=>{
    let ans = {};

    for(let words of arr){   // split = ['d','o','g']  .. sort = ['d','g','o']  ... join = "dgo";
        let sortedword = words.split('').sort().join();

        if(sortedword in ans){   //ans[sortedword]
            ans[sortedword].push(words);
        }else{
            ans[sortedword] = [words];
        }
    }

    console.log(ans);
    console.log(Object.values(ans));
}

printanagrams(arr);



/**
 * frequency of elements in array
 */

let a = [1,2,3,4,1,1,3,3,3,5,5];

let findFrequency=(arr)=>{

    let obj = {};
    
    for(let value of arr){
        if(obj[value]){
            obj[value]++;
        }else {
            obj[value]=1;
        }
    }
    console.log(obj);

}

//findFrequency(a);


/**
 * first non repeating character 
 * 
 * eg 1: mumbai --> o/p:u
 * eg 2 : relevel --> o/p: r
 */
let b = "mumbai";

function firstRepeating ( arr){

    let ans ={};
    for(let char of arr){
        if(char in ans){
            ans[char]++;
        }else { 
            ans[char]=1;
        }
    }
    

    // method1
    Object.keys(ans).forEach(keys=>{
        if(ans[keys]==1){
                console.log(keys);
                process.exit(0);
      }
    })
    

    //method 2 
    const key = Object.keys(ans);
    
    for(let i =0;i<key.length;i++){
        if(ans[key[i]]==1){
            console.log(key[i]);
            break;
        }
    }
}

firstRepeating(b);