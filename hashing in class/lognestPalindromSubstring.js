/**
 * check with hashing from starting to ending point of the key value.
 * 
 * then comapre with the between keys in between them, if present then update the count value
 * 
 * after comparing everything, check for the before and after values of the palindrom to check whether any more values are present 
 *      to make it as a palindrom.
 * 
 */
function isPalindrome(str, start, end){
    let palindrome = true;
    while(start <=  end){
        if(str[start] != str[end]){
            palindrome = false;
            return false;
        }
        start++;
        end--;
    }

    return true;
}

function longestPalindromicSubstring(str){

    let mp = new Map();

    for(let i=0; i<str.length; i++){ //storing last positions of each value
        mp.set(str[i], i);
    }
    let maxLength = 1;
    let ans = "";
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        let lastOccIdx = mp.get(currChar);
        let isSubstrPalindrome = isPalindrome(str, i, lastOccIdx); //this checks with first occ and last occ of the number
                                                        //coz only within those range it can be a palindrome
        if(isSubstrPalindrome){
            //expand the palindrome
            let currLength = lastOccIdx-i+1;
            let localAns = str.substr(i, currLength);
            let start = i-1; 
            let end = lastOccIdx+1;
            //this is to check whether front and back of the last palindrome can be a palindrome
            while(i>=0 && end<str.length){
                if(str[start] == str[end]){
                    currLength += 2; //increase by 2 each time,coz it is matching both front and back
                    localAns = str.substr(start, end-start+1); //find the substring
                    start--;
                    end++;
                }else{
                    break;
                }
            }
            if(maxLength < currLength){
                  maxLength = currLength;
                  ans = localAns;
            }
        }
    }
    console.log(ans);
    return maxLength;

}

let str = "abacabadac";
let result = longestPalindromicSubstring(str);
console.log(result);