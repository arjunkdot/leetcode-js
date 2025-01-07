/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const result = new Set();

  for (let i = 0; i < words.length; i++) {
    let j = 0;
    while (j < words.length) {
      if (words[i] !== words[j] && words[j].includes(words[i]))
        result.add(words[i]);
      j++;
    }
  }

  return Array.from(result);
};
