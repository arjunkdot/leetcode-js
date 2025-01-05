/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];

  for (const ch of s) {
    stack.push(ch);

    const lastEl = stack[stack.length - 1];
    const secLastEl = stack[stack.length - 2];

    if (
      (stack.length >= 2 && secLastEl === "A" && lastEl === "B") ||
      (secLastEl === "C" && lastEl === "D")
    ) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length;
};
