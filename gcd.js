/*
 *     
 */





let gcd = (a,b)=>{
    if(a==b){            
        return a;
    }
    if(a>b)
       return gcd(a-b,b);
    else
        return gcd(a,b-a);
}

console.log(gcd(15,20));



let gcd2 = (a,b)=>{

    if(a%b==0){
        return b;
    }
    else    
        return gcd2(b,a%b);
}

//console.log(gcd2(15,20));


