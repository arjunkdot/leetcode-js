/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let result = 0;
  let numStr = num.toString();
  let preStr = "";
  let l = 0;

  for (let r = 0; r < numStr.length; r++) {
    preStr += numStr[r];

    if (r - l + 1 === k) {
      if (num % parseInt(preStr) === 0) {
        result++;
      }
      preStr = preStr.slice(1);
      l++;
    }
  }

  return result;
};
