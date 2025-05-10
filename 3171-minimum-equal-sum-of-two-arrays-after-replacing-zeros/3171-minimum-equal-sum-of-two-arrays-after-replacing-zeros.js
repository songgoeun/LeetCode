/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    const aZero = nums1.filter((list) => list === 0).length * 1;
    const bZero = nums2.filter((list) => list === 0).length * 1;

    const sum1 = nums1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const sum2 = nums2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    if(!aZero && !bZero) {
        if(sum1 === sum2) {
            return sum1;
        }
        return -1;
    }

    if(!aZero || !bZero) {
        if(!bZero && aZero+sum1 <= sum2) {
            return sum2;
        }

        if(!aZero && sum1 >= bZero+sum2) {
            return sum1;
        }

        return -1;
    }

    return aZero+sum1 > bZero+sum2 ? aZero+sum1 : bZero+sum2;
};