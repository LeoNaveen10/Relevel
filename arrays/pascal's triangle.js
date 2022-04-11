/**
 *              1
 *             1   1
 *          1    2   1
 *        1   3    3    1
 *      1   4    6    4     1
 */
let pascal = (n)=>{

    let arr = [];
    for(let i=0;i<n;i++){
        arr[i]= new Array(i+1);
    }

    for(let i=0;i<n;i++){    
        for(let j=0;j<i+1;j++){
            if(j==0||j==i){
                arr[i][j]=1;
                continue;
            }
            arr[i][j]=arr[i-1][j-1]+arr[i-1][j];
        }
    }
    console.table(arr);       
}

pascal(6);