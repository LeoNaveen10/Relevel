/*

.....*
....***
...*****
..*******
.*********
***********
.*********
..*******
...*****
....***
.....*

*/
/*
let space=5,star=1;
for(i=0;i<=5;i++,space--,star+=2)
{   let mystr="";
   
    for(j=0;j<space;j++)
     mystr+=" ";

     for(k=0;k<star;k++)
     mystr+="*";
    
    console.log(mystr);
}

space=1;star=9;
for(k=0;k<5;k++)
{  
  var mystr=""
    for(j=0;j<k;j++)
    { mystr+=k;
    process.stdout.write(mystr);
    }
    console.log("");
}  */

/*
let row=5;
for(i=1;i<row;i++){
  console.log(" ".repeat(row-i-1)+"*".repeat(4));
} */


for(row=1;row<=5;row++)
{
  if(row==1||row==5)
  console.log("*".repeat(4));
  else
    console.log("*".repeat(1)+" ".repeat(2)+"*".repeat(1));
}