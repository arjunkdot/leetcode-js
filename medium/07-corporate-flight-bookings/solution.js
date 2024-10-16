/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const arr = new Array(n + 1).fill(0);
  const result = [];
  let total = 0;

  for (let booking of bookings) {
    const first = booking[0];
    const last = booking[1];
    const seats = booking[2];

    arr[first] += seats;
    arr[last + 1] -= seats;
  }

  for (let i = 1; i <= n; i++) {
    total += arr[i];
    result.push(total);
  }

  return result;
};
