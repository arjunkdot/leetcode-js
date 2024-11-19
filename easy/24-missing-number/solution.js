/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const totalSum = (nums.length * (nums.length + 1)) / 2; // Gauss's formula for sum
  const givenSum = nums.reduce((acc, i) => (acc += i), 0);

  return totalSum - givenSum;
};

// Using cyclic sort

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var missingNumber = function(nums) {
//     let i = 0

//     while(i < nums.length) {
//         let toSort = nums[i]
//         let newSpot = toSort - 1

//         if(toSort !== nums[newSpot]) {
//             let temp = nums[newSpot]
//             nums[newSpot] = toSort
//             nums[i] = temp
//         }else {
//             i++
//         }
//     }

//     return nums.findIndex(num => num === undefined) + 1
// };
