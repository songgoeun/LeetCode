/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const result = [];
    for(let i=0; i<dist.length; i++) {
        result.push(dist[i] / speed[i]);
    }

    result.sort((a, b) => a > b ? 1 : -1);
    
    let count = 0;
    for(let a = 0; a < result.length; a++) {
        if(a > 0 && (result[a] <= a)) {
            break;
        }

        count++;
    }

    return count;
};