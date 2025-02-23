/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;
  let i1 = 0;
  let i2 = 0;

  while (i <= word1.length + word2.length) {
    if (i % 2 === 0) {
      if (word1[i1]) {
        result += word1[i1];
        i1++;
      }
    } else {
      if (word2[i2]) {
        result += word2[i2];
        i2++;
      }
    }
    i++;
  }

  result += word1.length > word2.length ? word1.substr(i1) : word2.substr(i2);

  return result;
};
