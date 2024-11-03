/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let i = 0;
  const windowSet = new Set();

  for (let j = 0; j < nums.length; j++) {
    if (Math.abs(i - j) > k) {
      windowSet.delete(nums[i]);
      i++;
    }
    if (windowSet.has(nums[j])) return true;
    windowSet.add(nums[j]);
  }

  return false;
};
