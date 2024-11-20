/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = [];
  let i = 0;

  while (i < nums.length) {
    const to = nums[i] - 1;

    if (nums[i] !== nums[to]) [nums[i], nums[to]] = [nums[to], nums[i]];
    else i++;
  }

  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) result.push(i + 1);
  }

  return result;
};
