

function chunked(arr,size){
    
    let chunk = [];

    for(let element of arr){

        const last = chunk[chunk.length-1];

        if(!last || last.length===size){
            chunk.push([element]);
        }
        else{
            last.push(element);
        }
    }
    console.log(chunk);
}

// chunked([1,2,3,4,5],2);



//method2

function chunckSplice(arr,size){
    const chunck=[];
    let index=0;

    while(index<arr.length){
        chunck.push(arr.slice(index,index+size));
        index+=size;
    }
    console.log(chunck);
}

chunckSplice([1,2,3,4,5],2);