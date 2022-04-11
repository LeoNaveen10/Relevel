// function interview(student,host){
//     console.log("");
//     var a =5;
// }
// //console.log(a);


// a=15;
// //var a;
// console.log(a);

// b=8;
// //let b;
// console.log(b);

// // let interview1 = ()=>{

// // }

// // interview3=()=>{
 
// // }


const arr = [1,2,5,2,5,3,7,1];
/**
 *   5-4-5  = 1
 *   5-3-2-5 = 2+3 = 5 
 *   sum
 */
function findWater (arr){
    let sum=0;

    let max=arr[0], tempArr=[];

    for(let i =1;i<arr.length;i++){

        if(arr[i]>=max){

            for(let j=0;j<tempArr.length;j++){
                sum+=(max-tempArr[j]);
                console.log(tempArr);
            }

            tempArr.length=0;
            max=arr[i];
        }
                                      
        else {
            tempArr.push(arr[i]); 
        }
    }
    return sum;
}

console.log("unit of water stored is ",findWater(arr));


