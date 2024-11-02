/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  const strSet = new Set();
  let l = 0;
  let length = 0;

  for (let r = 0; r < s.length; r++) {
    while (strSet.has(s[r])) {
      strSet.delete(s[l]);
      l++;
    }

    strSet.add(s[r]);
    length = Math.max(length, r - l + 1);
  }

  return length;
};
