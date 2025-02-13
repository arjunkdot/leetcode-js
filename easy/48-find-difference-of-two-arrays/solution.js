/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (let i = 0; i < nums1.length; i++) {
    if (set2.has(nums1[i])) {
      set2.delete(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      set1.delete(nums2[i]);
    }
  }

  return [Array.from(set1), Array.from(set2)];
};
