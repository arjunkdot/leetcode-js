/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const stack = new Array();
  const answer = [...prices];
  let i = 0;
  while (i < prices.length) {
    while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
      const idx = stack.pop();
      answer[idx] -= prices[i];
    }
    stack.push(i);
    i++;
  }

  return answer;
};
