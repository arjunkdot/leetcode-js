/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let ch of s) {
    if (ch !== "]") {
      stack.push(ch);
    } else {
      let subStr = "";
      while (stack && stack[stack.length - 1] !== "[") {
        subStr = stack.pop() + subStr;
      }
      // Pop the remaining '['
      stack.pop();

      let k = "";
      while (stack && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      stack.push(subStr.repeat(parseInt(k)));
    }
  }

  return stack.join("");
};
