/**
 * Implement a function named findWords that accepts two arguments: 1) an input string and 2) a dictionary. 
 * This function should return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. 
 * Each letter in the input string may be used up to once per word.
 * 
 * console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
 * // Expected output: ["ate", "eat", "tea"]
 * console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
 * // Expected output: ["dog", "do", "god", "goo", "go", "good"]
 */

export const findWords = (inputString: string, dictionary: string[]): string[] => {
    // store count of each letter in map
    const inputStringMap: {[key: string] : number} = {},
          res: string[] = [];

    for (const char of inputString) {
        inputStringMap[char] = (inputStringMap[char] || 0) + 1;
    }
    
    for (const word of dictionary) {
        // store count of each letter for each word in map
        const currWordMap: {[key: string] : number} = {};
        for (let i = 0; i < word.length; i++) {
            // if word is longer than inputString, we can skip this word
            if (word.length > inputString.length) {
                break;
            }
            const char: string = word[i];
            currWordMap[char] = (currWordMap[char] || 0) + 1;
            // if letter in word is not in inputStringMap or there are more counts of letter, we can skip this word
            if (!(char in inputStringMap) || currWordMap[char] > inputStringMap[char])  {
                break;
            }
            // once we reach the end of word and pass all checks, we can add word to res
            if (i === word.length - 1) {
                res.push(word);
            }
        }
    }
    return res;
}

// Added console.log statements to quickly show it's working as intended
console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
