/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) return false;
  if (s.length === k) return true;

  const freqMap = new Map();

  // Create a frequency map
  for (const c of s) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1);
  }

  // Filter the ones with even frequncy
  freqMap.forEach((value, key) => {
    if (value % 2 === 0) freqMap.delete(key);
  });

  return freqMap.size > k ? false : true;
};
