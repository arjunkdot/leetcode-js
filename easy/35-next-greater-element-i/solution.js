/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const ans = new Array(nums1.length).fill(-1);
  const stack = [];
  let i = 0;

  while (i < nums2.length) {
    while (stack && nums1[stack[stack.length - 1]] <= nums2[i]) {
      const idx = stack.pop();
      ans[idx] = nums2[i];
    }

    if (nums1.includes(nums2[i])) {
      stack.push(nums1.findIndex((num) => num === nums2[i]));
    }

    i++;
  }

  return ans;
};
