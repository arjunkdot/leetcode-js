/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const freqMap = new Map();

  for (const c of s) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freqMap.get(s[i]) === 1) return i;
  }

  return -1;
};
