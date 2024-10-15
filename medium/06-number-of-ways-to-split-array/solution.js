/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  const sumOfArray = nums.reduce((acc, i) => (acc += i), 0);
  let prefixSum = 0;
  let numOfWays = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    prefixSum += nums[i];
    if (prefixSum >= sumOfArray - prefixSum) numOfWays++;
  }

  return numOfWays;
};
