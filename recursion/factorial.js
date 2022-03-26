/**
 * 
 */


function fact(n){
    //method1
    if(n>1){
        return n*fact(n-1);
    }
     return 1;
     
     /**
      * method 2
      * 
      * if(n==1) 
      *     return 1;
      * return n*fact(n-1);
      */
}

//console.log(fact(5));


/**
 * fibonnaci series
 * 0 1 1 2 3 5 8 13
 */


function fibonnaci(no){
  /*
    normal method to find fibonnaci

  let ans = "0" + " " + "1";
    let i=0;
    let a=0, b=1

    while(i<no-2){
        sum =a+b;
        a=b;b=sum;
        i++;
        ans+=" " + sum;
    }
     return ans;*/


     //with recursion,,, finding particular no in fibonnaci index
        if(no<=1){
            return no;
        }
        return fibonnaci(no-1)+fibonnaci(no-2);
}

console.log(fibonnaci(7)); 

let series=(no)=>{
    if(no<=1){
        return no;
    }
    return series(no-1)+series(no-2);
}
//method 1
for(let i =0;i<7;i++){
    console.log(series(i));
}

