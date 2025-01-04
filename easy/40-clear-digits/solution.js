/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const stack = [];

  for (const ch of s) {
    const code = ch.charCodeAt(0);
    if (code >= 48 && code < 58) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
};
