
let arr = [9,8,10,8];
//nomral method
let findIndex = (arr,num)=>{
if(arr.includes(num)){
    console.log(arr.indexOf(num))
}
else{
    console.log("-1");
}
}

//findIndex(arr,10);


//recursive method
let findInRecursion = (arr,num,i)=>{
   
    if(i>arr.length-1){
        return -1;
    }
        if(arr[i]==num){
            return i;
        } 
        else
        return findInRecursion(arr,num,i+1);
        
        
}
console.log(findInRecursion(arr,10,0));