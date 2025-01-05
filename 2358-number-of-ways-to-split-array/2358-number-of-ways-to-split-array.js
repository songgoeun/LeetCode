/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let count = 0;
    const prefixSumArr = new Array(nums.length + 1).fill(0);

    for(let i=0; i<nums.length; i++) {
        prefixSumArr[i+1] = prefixSumArr[i] + nums[i];
    }

    const totalSum = prefixSumArr[prefixSumArr.length - 1];
    for(let j=1; j < nums.length; j++) {
        if(prefixSumArr[j] >= (totalSum - prefixSumArr[j])) {
            count++;
        }
    }
    return count;
};