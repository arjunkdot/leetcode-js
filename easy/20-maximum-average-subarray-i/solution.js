/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let result = Number.NEGATIVE_INFINITY;
  let sum = 0;
  let avg = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    if (r - l + 1 === k) {
      avg = sum / k;
      result = Math.max(result, avg);
      sum -= nums[l];
      l++;
    }
  }

  return result;
};
