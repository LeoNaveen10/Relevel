/**
 * 
 *  Number of Valid Words for Each Puzzle
 * 
 * 
 * With respect to a given puzzle string, a word is valid if both the following conditions are satisfied:

    word contains the first letter of puzzle.
    For each letter in word, that letter is in puzzle.
        For example, if the puzzle is "abcdefg", then valid words are "faced", "cabbage", and "baggage", while
        invalid words are "beefed" (does not include 'a') and "based" (includes 's' which is not in the puzzle).

Return an array answer, where answer[i] is the number of words in the given word list words that is valid with respect to the puzzle puzzles[i]. 
 * 
 * 
 * 
 * words = ["aaaa","asas","able","ability","actt","actor","access", "sag"]
 * puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
 * Output: [1,1,3,2,4,0]
 * 
 * 
 * 
 * 
 *  Brute force/Naive
 * 
 * iterate through the puzzles one by one.
 * maintain an output array
 * for each puzzle iterate over words:
 * 
 * let output = new Array(puzzles.length).fill(0);
 * for i in puzzles:
 *      for j in words:
 *          // check the two rules
 *          // includesAll will check if words[i] contains all characters from puzzles[i]
 *          if words[j].includes(puzzles[i][0]) && includesAll(){
 *              output[i]++;
 *          }
 * }
 * 
 * 
 * 
 * 
 * mask = binary representation
 * 8 -> 1000
 * 13 -> 1101
 * 
 *          
 * OR:
 * 1 | 1 = 1
 * 0 | 0 = 0
 * 1 | 0 = 1
 * 0 | 1 = 1
 * 
 * LEFT SHIFT:
 * move the bits to left
 * 
 * 1 -> 000001 
 * 1 << 3 -> 001000 (1 * 2^3) = 8
 * left shifting k times is equaivalent to multiplying by 2^k
 * 
 *  
 * 
 * 
 * 
 * 
 * words = ["aaaa","asas","able","ability","actt","actor","access", "sag"]
 * puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
 * Output: [1,1,3,2,4,0]
 * 
 * 
 * word = "asas"
 * 
 * 
 * i = 1
 * word.charCodeAt(1)
 * aCharCodeAt = 97
 * 
 * 1 << (115 - 97) 
 * 1 << 19
 * 000000000000000010000000000000000000000000000000
 * 
 * wordmap = {
 *      1: 1
 *      000000000000000010000000000000000000000000000001 :1
 * }
 * 
 * mask =       000000000000000000000000000000000000000000000001
 * 1 << 19 =    000000000000000010000000000000000000000000000000
 *       ---------
 * mask = 000000000000000010000000000000000000000000000001 = 2^19 + 1
 * 
 * 
 * &, |, -> O(1)
 * freq -> O(N), ++, --
 * 
 * 
 * 1. create the wordmap using masks of the words
 * 2. create the mask for each puzzle and check how many words it matches 
 *  
 */
var findNumOfValidWords = function (words, puzzles) {
    // a map for each word
    const wordMap = new Map();
    // get the ASCII code for 'a'
    const aCharCode = 'a'.charCodeAt(0); // 97
    // store the mask for each word
    words.forEach(word => {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            mask = mask | (1 << (word.charCodeAt(i) - aCharCode));
        }
        if (wordMap.has(mask)) {
            // if mask is present, increment the value
            wordMap.set(mask, wordMap.get(mask) + 1);
        } else {
            // else add it to the map and set value to 1
            wordMap.set(mask, 1);
        }
    });

    // final result
    const result = [];
    // iterate over each puzzle
    for (let i = 0; i < puzzles.length; i++) {
        // add a zero and update it later
        // 
        result.push(0);
        let curMask = 0;
        // create a mask for the puzzle
        for (let j = 0; j < puzzles[i].length; j++) {
            curMask |= (1 << (puzzles[i].charCodeAt(j) - aCharCode));
        }
        // the mask of the first letter
        const firstLetter = 1 << (puzzles[i].charCodeAt(0) - aCharCode);

        // puzzle[i] = "bag"
        // "b" -> 98
        // "a" -> 97
        // "b" - "a" = 1
        // 1 << 1
        // 000000000000000000000000001 << 1 = 000000000000000000000000010
        // 0000010 & 00000010 = non zero, bit is set
        // 0000000 & 00000010 = zero, bit is not set

        // start is the mask for puzzle[i]
        let start = curMask;
        while (start > 0) {
            // start & firstLetter == firstLetter means words[i] will contain it
            if ((start & firstLetter) === firstLetter && wordMap.has(start)) {
                // if the word is conatined in map
                // update the result count
                result[i] += wordMap.get(start);
            }
            // set it to check for next character
            start = (start - 1) & curMask
        }
    }
    console.log(wordMap);
    return result;
};


console.log(findNumOfValidWords(["aaaa", "asas", "able", "ability", "actt", "actor", "access"], ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"]));