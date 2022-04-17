/**
 *  program statement : 
 *   1) find all permutations first
 *   2) then count the no of peaks in permutations
 *  
 *   peaks -- 1) element-1< element >element+1
 *            2) element-1> element < element+1
 *   ## So only the permutations with atleast 3 
 *      elements can have peaks
 */



function countPeaks(n){
    let ds = [];
    let res = [];

    function generatePermutation(index,n,ds,res){
        if(index==n){    //base case
            res.push([...ds]);
            return;
        }
        //trying all slots in array
        for(let i=0;i<n;i++){
            ds.push(0);
            generatePermutation(index+1,n,ds,res);
            ds.pop();

            ds.push(1);
            generatePermutation(index+1,n,ds,res);
            ds.pop();

            ds.push(2);
            generatePermutation(index+1,n,ds,res);
            ds.pop();
        }
    }

    generatePermutation(0,n,ds,res);
    // below helps us to find the total peaks
    // rising peak or decreasing peak
    let totalpeaks=0;
    for(let i=0;i<res.length;i++){
        for(let j=1;j<res[i].length;j++){
         
            if(res[i][j-1]<res[i][j] && res[i][j+1]<res[i][j])
                totalpeaks++;
         
                if(res[i][j]<res[i][j-1] && res[i][j]<res[i][j+1])
                totalpeaks++;
        }
    }
   // return res; for permutaions
    return totalpeaks;
}

const ans = countPeaks(2);
console.log(ans);