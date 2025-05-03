/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let l = 0;
  let window = 0;
  let used_k = 0;
  let longest_arr = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] === 0) {
      used_k++;
    }

    while (used_k > k) {
      if (nums[l] === 0) {
        used_k--;
      }
      l++;
    }

    window = r - l + 1;
    longest_arr = Math.max(longest_arr, window);
  }

  return longest_arr;
};
