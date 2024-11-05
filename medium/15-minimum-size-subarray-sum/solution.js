/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let length = Infinity;
  let prefixSum = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    prefixSum += nums[r];

    while (prefixSum >= target) {
      if (prefixSum >= target) length = Math.min(length, r - l + 1);
      prefixSum -= nums[l];
      l++;
    }
  }

  return length === Infinity ? 0 : length;
};
