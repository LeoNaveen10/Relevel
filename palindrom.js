
//var num=121,sum=0;
//var a=num; 


//var x=0;
/*do{
    ++x;
    num=(num/10)>>0;
}while(num!=0)

console.log("the no of digits is ", x);
num=a;*/



var palindrom= num=>{
var a =num;
sum=0;    
while(num!=0)
{
    temp=num%10;
    sum=(sum*10)+temp;
    num=(num/10)>>0;
    console.log(num);
}
//console.log(sum);

if(a==sum)
console.log("given", a ,"no is a palindrome no");
else
console.log(a," is not a palindrom number");
}

palindrom(121);
palindrom(345);
palindrom(454);
palindrom(1111);