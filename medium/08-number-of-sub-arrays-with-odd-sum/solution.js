/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  let total = 0;
  let odd = 0;
  let even = 1;

  for (const num of arr) {
    if (num % 2 === 0) even++;
    else {
      let temp = odd;
      odd = even;
      even = temp + 1;
    }
    total += odd;
  }

  return total % (Math.pow(10, 9) + 7);
};
