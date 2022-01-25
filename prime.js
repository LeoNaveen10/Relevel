

var primeornot = num =>{
    let n=2; var a=1;
    while(n<num**0.5&&a==1){
        if(num%n==0)
           {
             console.log(num ," not a prime no");
             a=0;
           }
           n++;
    }
      if(a==1)
         console.log(num ," is a prime no");

  }

  primeornot(71);
  primeornot(78);
  primeornot(91);
  primeornot(1);