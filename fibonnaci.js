const findfibo=(num)=>{  
   // var mystr = '0'+" "+'1';
    let a=0,b=1;i=0;
console.log(a);
console.log(b);
    do
    {   
        sum=a+b;
        console.log(sum);
        a=b;  b=sum;i++;

      //  mystr+=" "+sum;
    }while(i<=num-2)
    //console.log(mystr);
}
findfibo(10);


