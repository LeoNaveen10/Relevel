let arr = [1,2,3,4,5,6];

queries = [
    [1,3],[1,2],[2,4]
]

function findsumInRange(arr,queries){
    
    for(let i=1;i<arr.length;i++){
        arr[i]=arr[i]+arr[i-1];
    }
    // console.log(arr);
    let res=[],sum=0;

    for(let i=0;i<queries.length;i++){
         res.push(arr[queries[i][1]]-arr[queries[i][0]-1]);    
    }

    console.log(res);
}
findsumInRange(arr,queries)