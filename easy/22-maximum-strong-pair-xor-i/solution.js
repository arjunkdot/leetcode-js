/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let result = 0;

  for (let x = 0; x < nums.length; x++) {
    for (let y = x; y < nums.length; y++) {
      if (Math.abs(nums[x] - nums[y]) <= Math.min(nums[x], nums[y])) {
        result = Math.max(result, nums[x] ^ nums[y]);
      }
    }
  }

  return result;
};
