/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = []

    intervals.sort((a, b) => a[0] - b[0])
    
    for(let interval of intervals) {
        if(result.length === 0 || result[result.length - 1][1] < interval[0]) {
            result.push(interval)
        }else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1])
        }
    }

    return result
};