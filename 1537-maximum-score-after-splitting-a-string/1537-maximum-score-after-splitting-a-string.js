/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    // let score = 0;
    // for(let i=1; i<s.length; i++) {
    //     const left = s.slice(0, i).split(0).length - 1;
    //     const right = s.slice(i, s.length).split(1).length - 1;
    //     score = Math.max(score, left+right);
    // }
    // return score;

    // 개선
    let leftZeros = 0;
    let rightOnes = 0;
    let maxScore = 0;

    for (let char of s) {
        if (char === '1') rightOnes++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        } else {
            rightOnes--;
        }

        maxScore = Math.max(maxScore, leftZeros + rightOnes);
    }

    return maxScore;
};