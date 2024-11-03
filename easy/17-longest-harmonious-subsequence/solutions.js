/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const lhsMap = new Map();
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    lhsMap.set(nums[i], (lhsMap.get(nums[i]) || 0) + 1);
  }

  for (let j = 0; j < nums.length; j++) {
    if (lhsMap.get(nums[j] + 1))
      result = Math.max(
        result,
        (lhsMap.get(nums[j]) || 0) + (lhsMap.get(nums[j] + 1) || 0)
      );
  }

  return result;
};
