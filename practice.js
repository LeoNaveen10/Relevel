let map = new Map();

let obj = {}
for ( let i=0,j;i<10 ; i++){
    j=i*10;
    obj[i]=j;
}

for(key in obj){
    console.log(key, " ", obj[key]);
}