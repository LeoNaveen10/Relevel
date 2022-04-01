/**
 * array multiplication in 2d
 */


let a =[[1,2,3],[4,5,6],[7,8,9]];
let b =[[1,0,0],[0,1,0],[0,0,1]];

let result = [[],[],[]];
let m1=a.length;
let n1=a[0].length;
let m2=b.length;
let n2=b[0].length;

for(let i=0;i<m1;i++){
    for(let j=0;j<n2;j++){
        result[i][j]=0;
        for(let k=0;k<m2;k++){
            result[i][j]+=a[i][k]+b[k][j];
        }
    }
}

console.table(result);

/**
 * Tc - three loops - o(n^3)
 * Sc - O(n^2) - beacuse of new 2D matrix
 */


// initilize array through constructors


const m=3,n=4;
let val=1;
let arr=Array(m);

for(let i=0;i<m;i++){
    arr[i]=Array(n).fill(val);
}
//console.table(arr);

/**
 * get only even elements from array
 */
let arr1 =[1,2,3,4,5,6];

/*console.log(arr1.filter( (val)=>{
    if(val%2==0)
        return val;
})); */

/**
 * remove duplicates from array
 * 
 */

const arr2 =[1,2,1,3,2,4,1,5,1,6,2,1,1,1];

let removeDuplicates =(arr)=>{
    return arr.filter((a,index)=>{
        console.log(index);
       return(arr.indexOf(a) == index)
    })
}

//console.log(removeDuplicates(arr2));



/**
 * rotate array in anti clock wise
 * 
 * [ 1 2 3
 *   4 5 6
 *   7 8 9
 * ]
 * 
 * ans : 
 *    [
 *      3 6 9
 *      2 5 8 
 *      1 4 7
 *     ]
 */

let rotate=[[1,2,3],[4,5,6],[7,8,9]];
let temp =[[],[],[]];

for(let i=0;i<3;i++){
    let k=0;
    for(let j=2;j>=0;j--){

        temp[k++][i]=rotate[i][j];
    }
}
console.table(temp);
 