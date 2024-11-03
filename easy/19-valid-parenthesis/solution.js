/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const braces = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stack = [];
  if (s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i++) {
    if (braces.has(s[i])) {
      if (stack.length > 0 && stack[stack.length - 1] === braces.get(s[i]))
        stack.pop();
      else return false;
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
