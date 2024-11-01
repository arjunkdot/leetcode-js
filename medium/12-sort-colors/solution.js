/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (nums.length === 1) return nums;
  else if (new Set(nums).length < 2) return nums;

  let slot = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[slot];
      nums[slot] = 0;
      slot++;
    }
  }

  for (let j = slot; j < nums.length; j++) {
    if (nums[j] === 1) {
      nums[j] = nums[slot];
      nums[slot] = 1;
      slot++;
    }
  }
};
