/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const sumOfNums = nums.reduce((acc, i) => (acc += i), 0);
  let prefixSum = 0;

  for (i = 0; i < nums.length; i++) {
    if (prefixSum === sumOfNums - prefixSum - nums[i]) {
      return i;
    }
    prefixSum += nums[i];
  }
  return -1;
};
