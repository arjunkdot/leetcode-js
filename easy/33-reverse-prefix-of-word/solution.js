/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  if (!word.includes(ch)) return word;

  const stack = new Array();
  let i;
  let result = "";

  for (i = 0; i < word.length; i++) {
    stack.push(word[i]);
    if (word[i] === ch) break;
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  result += word.slice(i + 1);

  return result;
};
