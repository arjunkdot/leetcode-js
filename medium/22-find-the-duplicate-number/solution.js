/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let i = 0;

  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    else i++;
  }

  return nums[nums.length - 1];
};
