/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let op = 0
    let i = 0
    let j = nums.length - 1

    nums.sort((a, b) => a - b)

    while(i < j) {
        const sum  = nums[i] + nums[j]
        if(sum  < k) {
            i++
        } else if(sum  > k) {
            j--
        }else {
            op++ 
            i++
            j--
        }
    }

    return op
};

