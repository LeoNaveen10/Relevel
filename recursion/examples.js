/**
 * recursion type 1 
 */

function print(n){
    if(n<=0)
       return;
    console.log("PSG vs madrid");
    print(--n);
}
//print(5);



/**
 * type 2
 */


function print2(n){
    if(n>0){
        console.log("city vs sporting");
        print2(--n);
    }
}

//print2(5);

/**
 * assignment to find sum of the elements in array
 */

let arr=[1,2,3,4,5];
//sum(arr,0,0);



function sum(arr,no,res){
    res+=arr[no];
    
    if(no>=4){
        console.log("sum of the array is",res);
        return;
    }
    sum(arr,++no,res);
    
}

/**
 * Tree Recursion
 * 
 */

function print3(n){
    if(n<=0)
        return;
    
        print3(n-1);
        console.log(n);
        print3(n-2);
}

//print3(3);


/**
 * Nested Recursion
 */

function print4(n){

    if(n>3){
        return n-1;
    }

   return print4(print4(n+2));
}

console.log(print4(1));