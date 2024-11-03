/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let b = 0;

  for (let s = 1; s < prices.length; s++) {
    if (prices[b] > prices[s]) {
      b = s;
    }
    maxProfit = Math.max(maxProfit, prices[s] - prices[b]);
  }

  return maxProfit;
};
