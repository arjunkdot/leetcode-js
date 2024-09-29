/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  return nums
    .filter((num) => nums.indexOf(num) === nums.lastIndexOf(num))
    .reduce((acc, i) => (acc += i), 0);
};
