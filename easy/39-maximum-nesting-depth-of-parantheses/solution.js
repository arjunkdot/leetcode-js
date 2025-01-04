/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  const stack = [];
  let maxDepth = 0;

  for (const ch of s) {
    if (ch === "(") {
      stack.push("(");
      maxDepth = Math.max(maxDepth, stack.length);
    } else if (ch === ")") {
      stack.pop();
    }
  }

  return maxDepth;
};
