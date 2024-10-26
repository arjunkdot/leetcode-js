/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (target === sum) return [left + 1, right + 1];
    target > sum ? left++ : right--;
  }

  return false;
};
