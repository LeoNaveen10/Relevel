let arr = [1,2,3,2,2,4,5,3,1,2,5,3];

function findRepeatedOnce(arr){
        let map=new Map();
        
        for(let i=0;i<arr.length;i++){
            if(map.has(arr[i]))
            {  
                let count=map.get(arr[i]);
                map.set(arr[i],count+1);
                
            }
            else
            {
                map.set(arr[i],1);
            }
        }
        
        //method 1
        for(let [key,value] of map){
            if(value==1){
                console.log(`the ${key} is appearng only ${value}`);
            }
        }

        //method 2
        map.forEach((value,key)=>{
            if(value==1)
            console.log(`key apprating once is ${key}`);
        })
       
}
findRepeatedOnce(arr);
