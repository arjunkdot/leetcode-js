/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0;
  let r = l + 1;

  while (r < nums.length) {
    if (nums[l] === 0) [nums[l], nums[r]] = [nums[r], nums[l]];
    if (nums[l] !== 0) l++;

    r++;
  }

  return nums;
};
