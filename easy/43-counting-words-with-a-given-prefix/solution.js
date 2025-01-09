/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  const result = [];

  for (const word of words) {
    if (word.startsWith(pref)) {
      result.push(word);
    }
  }

  return result.length;
};
