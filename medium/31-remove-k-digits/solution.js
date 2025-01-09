/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];

  for (const d of num) {
    while (k > 0 && stack && parseInt(stack[stack.length - 1]) > d) {
      stack.pop();
      k--;
    }
    stack.push(d);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  const result = stack.join("")?.replace(/^0+/, "");

  return result || "0";
};
