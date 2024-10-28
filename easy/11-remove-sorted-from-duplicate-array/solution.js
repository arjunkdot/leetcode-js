/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = 1;
  let r = l;

  while (r < nums.length) {
    if (nums[r - 1] !== nums[r]) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }

  return l;
};
