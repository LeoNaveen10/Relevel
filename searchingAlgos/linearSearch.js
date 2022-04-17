function linearSearch(arr, key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            console.log("position", i+1);
            return;
        }
    }
    console.log("element not found");
}

const arr = [89,32,45,66,23,79,09];
linearSearch(arr,9);