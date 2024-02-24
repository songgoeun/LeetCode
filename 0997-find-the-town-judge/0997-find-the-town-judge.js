/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const giveTrustList = {};
    const reciveTrustList = {};

    for(let i=1; i<=n; i++) {
        giveTrustList[i] = 0;
        reciveTrustList[i] = 0;
    }

    for(let list of trust) {
        giveTrustList[list[0]] = giveTrustList[list[0]] + 1;
        reciveTrustList[list[1]] = reciveTrustList[list[1]] + 1;
    }

    let check = 0;
    for(let key in giveTrustList) {
        if(giveTrustList[key] === 0) {
            check = key;
        }
    }

    const result = reciveTrustList[check] === n - 1 ? check : -1;
    return result;
};