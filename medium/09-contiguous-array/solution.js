/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let maxLength = 0;
  let zeroes = 0;
  let ones = 0;
  const diffMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) ones++;
    else zeroes++;

    if (!diffMap.has(ones - zeroes)) {
      diffMap.set(ones - zeroes, i);
    }

    if (ones === zeroes) maxLength = ones + zeroes;
    else {
      let index = diffMap.get(ones - zeroes);
      maxLength = Math.max(maxLength, i - index);
    }
  }

  return maxLength;
};
