//abacdabba => aba
function maxLengthPalindromePrefix(str){
    let P =  37; //prime no.
    let mod = 100000007; //modulo 10^9 + 7
    let maxlength = -1;
    let power = [];
    power[0] =1;
    for(let i=1; i<str.length; i++){ //power[P^0, P^1, P^2, P^3,..... P^str.length-1]
        power[i] = (power[i-1]*P) % mod;
    }

    let hash1 = 0; 
    let hashRev = 0; 
    for(let i=0; i<str.length; i++){
        hash1 = ((hash1 * P)%mod + str.charCodeAt(i))%mod; //just taking the string from start to end in one type
        hashRev = (hashRev + (str.charCodeAt(i) * power[i])%mod)%mod;// taking from end to start in another type
        if(hash1 == hashRev) {maxlength = i;}
    }
    return maxlength+1;
}

/**
 * reversing a string to find no of charcters to add in beginning of string to make it as palindrom
 */


//abacdabba => abba
function maxLengthPalindromeSuffix(str){
    str = str.split("").reverse().join(""); //abacdabba => abbadcaba
    let P =  37; //prime no.
    let mod = 100000007; //modulo 10^9 + 7
    let maxlength = -1;
    let power = [];
    power[0] =1;
    for(let i=1; i<str.length; i++){ //power[P^0, P^1, P^2, P^3,..... P^str.length-1]
        power[i] = (power[i-1]*P) % mod;
    }

    let hash1 = 0;  
    let hashRev = 0; 
    for(let i=0; i<str.length; i++){
        hash1 = ((hash1 * P)%mod + str.charCodeAt(i))%mod;
        hashRev = (hashRev + (str.charCodeAt(i) * power[i])%mod)%mod;    
        if(hash1 == hashRev) {maxlength = i;}
    }
    return maxlength+1;
}




let str = "kaba"; 
console.log("maximum length of palindrome: ",maxLengthPalindromePrefix(str));
console.log("no. of characters to add at front in string to make it palindrome: ", str.length-maxLengthPalindromePrefix(str));
console.log("maximum length of palindrome: ",maxLengthPalindromeSuffix(str));
console.log("no. of characters to add at end in string to make it palindrome: ", str.length-maxLengthPalindromeSuffix(str));




/**
 * from LPS, we can easily find no of charcters we need to add to make it a palindrome, 
 * 
 * by taking the reverse of it, and find the LPS array. The maximum number in the array denotes the digits we need to
 *      add to make it a palindrome.
 */