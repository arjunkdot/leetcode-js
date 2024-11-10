/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let l = 0;
  let length = 0;
  let result = 0;
  const basket = new Map();

  for (let r = 0; r < fruits.length; r++) {
    basket.set(fruits[r], (basket.get(fruits[r]) || 0) + 1);
    length++;

    if (basket.size > 2) {
      while (basket.size > 2) {
        basket.set(fruits[l], basket.get(fruits[l]) - 1);

        if (basket.get(fruits[l]) === 0) {
          basket.delete(fruits[l]);
        }
        length--;
        l++;
      }
    }

    result = Math.max(result, length);
  }

  return result;
};
