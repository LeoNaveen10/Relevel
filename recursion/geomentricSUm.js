let geomenticSum = (num,sum)=>{

    if(num>=0){
        sum=(1/(2**num));
       // console.log("num is ", num," sum is ", sum);
        sum+= geomenticSum(--num,sum);
        return sum;
    }
    return 0;
}

let answer=geomenticSum(5,0);
console.log(answer);


//geomentric sum 
//megha's method
function sum(n) {
    if (n == 0)
        return 1;
    else
        return ((1/(Math.pow(2, n)) + sum(n - 1)));
}
console.log(sum(5));