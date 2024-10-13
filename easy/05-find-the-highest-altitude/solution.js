/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const altArr = [0, ...gain];

  for (let i = 1; i <= gain.length; i++) {
    altArr[i] += altArr[i - 1];
  }

  return Math.max(...altArr);
};
