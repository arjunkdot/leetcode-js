/**
 * @param {string} str1
 * @return {string} str2
 */

var isPrefixAndSuffix = (str1, str2) =>
  str2.startsWith(str1) && str2.endsWith(str1) ? true : false;

/**
 * @param {string[]} words
 * @return {number}
 */

var countPrefixSuffixPairs = function (words) {
  let answer = 0;
  let i = 0;
  let j;
  while (i < words.length - 1) {
    j = i + 1;
    while (j < words.length) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        answer++;
      }
      j++;
    }
    i++;
  }

  return answer;
};
