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


/**
 * example of lps array : 
 * 
 * 
 *  string = a b c a d e e a b c a 
 *  lps    = 0 0 0 1 0 0 0 1 2 3 4        -- 2 pointer approach to find the lps array
 */
function kmp(str, pattern){
    let n = str.length;
    let p = pattern.length;
    let i = 0, j=0;
    let lpsArray = lps(pattern);

    while(i<n && j<p){  //if pattern matching with string, then increment both i and j
        if(str[i] == pattern[j]){
            i++;
            j++;
        }
        else{
            if(j==0) i++;//if pattern doesn't match, then increment i
            else j = lpsArray[j-1]; // if pattern not matching and also j is more than 0, then we can start comaring  from only the
                                    // number present in LPS array.
        }
    }
    if( j == p) return true;
    else return false;
}



let str = "acabacace";
let pattern = "acbca";
console.log(kmp(str, pattern));