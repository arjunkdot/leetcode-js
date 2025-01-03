/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];
  if (logs.length < 2) return logs.length;

  for (let i = 0; i < logs.length; i++) {
    if (stack && logs[i] === "../") {
      stack.pop();
    } else if (stack && logs[i] === "./") {
      continue;
    } else {
      stack.push(logs[i]);
    }
  }

  return stack.length;
};
