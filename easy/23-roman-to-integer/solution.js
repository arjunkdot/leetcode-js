/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanMap.get(s[i]) < romanMap.get(s[i + 1]))
      result -= romanMap.get(s[i]);
    else result += romanMap.get(s[i]);
  }

  return result;
};
