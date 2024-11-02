/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let l = 0;
  let maxOnes = 0;
  let count = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      maxOnes = Math.max(maxOnes, count);
      count = 0;
      l = r + 1;
    } else {
      count++;
    }
  }

  return Math.max(maxOnes, count);
};
