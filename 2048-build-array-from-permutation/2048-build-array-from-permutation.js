/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let result = [];
    for(let i=0; i<nums.length; i++) {
        const a = nums[i];
        const b = nums[a];
        result.push(b);
    }
    return result;
};