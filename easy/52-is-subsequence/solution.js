/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let l = 0;

  for (let r = 0; r < t.length && l < s.length; r++) {
    if (s[l] === t[r]) l++;
  }

  return l === s.length ? true : false;
};
