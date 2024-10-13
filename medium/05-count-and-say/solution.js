/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  const str = countAndSay(n - 1);
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }

    res += `${count}${str[i]}`;
  }

  return res;
};
