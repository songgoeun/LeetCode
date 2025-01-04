/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const result = [];
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    
    const isVowelString = (word) => {
        return vowels.has(word[0]) && vowels.has(word[word.length - 1]) ? 1 : 0;
    };
    
    const prefixSum = new Array(words.length + 1).fill(0);
    for(let i=0; i < words.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + isVowelString(words[i]);
    }

    for(let [start, end] of queries) {
        result.push(prefixSum[end + 1] - prefixSum[start]);
    }

    return result;
};