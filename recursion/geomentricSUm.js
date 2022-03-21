let geomenticSum = (num,sum)=>{

    if(num>=0){
        sum=(1/(2**num));
       // console.log("num is ", num," sum is ", sum);
        sum+= geomenticSum(--num,sum);
        return sum;
    }
    return 0;
}

let answer=geomenticSum(4,0);
console.log(answer);