/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if (s.length === 1) return s;
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
  }

  return s;
};
