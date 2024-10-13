/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const sums = new Map([[0, 1]]);
  let count = 0;
  let prefixSum = 0;

  for (i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const remove = prefixSum - k;
    if (sums.has(remove)) count += sums.get(remove);
    sums.set(prefixSum, (sums.get(prefixSum) || 0) + 1);
  }

  return count;
};
