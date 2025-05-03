/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  if (!nums.includes(0)) return nums.length - 1;

  let l = 0;
  let maxLength = 0;
  let zeroes = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) zeroes++;

    while (zeroes > 1) {
      if (nums[l] === 0) zeroes--;
      l++;
    }

    maxLength = Math.max(maxLength, r - l);
  }

  return maxLength;
};
