/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const numSet = new Set();
  let prefixSum = 0;
  let maxSum = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    while (numSet.has(nums[r]) || numSet.size === k) {
      numSet.delete(nums[l]);
      prefixSum -= nums[l];
      l++;
    }

    if (!numSet.has(nums[r])) {
      numSet.add(nums[r]);
      prefixSum += nums[r];
    }

    if (numSet.size === k) {
      maxSum = Math.max(maxSum, prefixSum);
    }
  }

  return maxSum;
};
