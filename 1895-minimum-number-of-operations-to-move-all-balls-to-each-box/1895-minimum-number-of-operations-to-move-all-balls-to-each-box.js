/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const boxArr = [...boxes];
    let result = [];

    const moves = (arr) => {
        let count = 0;
        arr.map((ball, index) => {
            if(ball === '1') {
                count += index + 1;
            }
        });
        return count;
    }
    
    for(let i=0; i<boxArr.length; i++) {
        const left = boxArr.slice(0, i).reverse();
        const right = boxArr.slice(i + 1);
        let count = moves(left) + moves(right);
        result.push(count);
    }

    return result;
};