/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((s, i) => s + i, 0);
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (prefixSum === total - prefixSum - nums[i]) return i;

    prefixSum += nums[i];
  }

  return -1;
};
