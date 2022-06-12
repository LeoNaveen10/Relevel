/**
 * polynomial hash function : 
 * arr[0]*p^0 + arr[1]*p^1 + arr[2]*p^2 (to avoid collision) and store in key value range.
 * prime number usuage is coz : prime number have less factors so taking prime number to avoid collision
 * 
 * 
 * the algorithm we are using here is Rabin karp algorithm
 * 
 */
 
function lps(str){
    let lps = [];
    lps[0] = 0;
    let len = 0;
    for(let i=1; i<str.length;){
        if(str[len] == str[i]){
            len++;
            lps[i] = len;
            i++;
        }
        else{
            if(len==0){
                lps[i] =0;
                i++;
            }else{
                len = lps[len-1];
            }
        }
    }
    return lps;
}
function createStringByRepeatingSubstring(str){
    let lpsArr = lps(str);
    let x = str.length - lpsArr[str.length-1];

    if(x <= lpsArr[str.length-1]){
        if(lpsArr[str.length-1] % x ==0){
            return true;
        }else{
            return false;
        }
    }
    else{
        return false;
    }
}

let str = "abcabeabc";
console.log(createStringByRepeatingSubstring(str));