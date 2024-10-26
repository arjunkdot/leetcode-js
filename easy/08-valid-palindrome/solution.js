/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const validString = s
    .trim()
    .toLowerCase()
    .replace(/[^0-9a-z]/g, "");
  let left = 0;
  let right = validString.length - 1;

  while (left < right) {
    if (validString[left] !== validString[right]) return false;

    left++;
    right--;
  }

  return true;
};
