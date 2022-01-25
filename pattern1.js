/*

***********
.*********
..*******
...*****
....***
.....*

*/

var star=11,space=0;

for(i=0;i<5;i++,space++, star-=2)
{   let mystr=""; 
    for(k=0;k<space;k++)
        mystr+=" ";

    for(j=0;j<star;j++)
        mystr+='*';

    console.log(mystr);
   
}



for(i=0;i<5;i++)
{    
     for(j=0;j<star;j++)
        process.stdout.write(j);
}