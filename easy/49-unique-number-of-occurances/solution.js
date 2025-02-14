/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const countMap = new Map();
  arr.forEach((item) => countMap.set(item, countMap.get(item) + 1 || 1));
  const countSet = new Set(countMap.values());
  return countSet.size === countMap.size;
};
