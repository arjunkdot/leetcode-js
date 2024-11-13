/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let l = 0;
  let result = [];
  const sMap = new Map();
  const pMap = new Map();

  for (l = 0; l < p.length; l++) {
    pMap.set(p[l], (pMap.get(p[l]) || 0) + 1);
  }

  l = 0;

  for (let r = 0; r < s.length; r++) {
    sMap.set(s[r], (sMap.get(s[r]) || 0) + 1);

    while (r - l + 1 === p.length) {
      let flag = true;
      for (let [key, value] of pMap) {
        if (sMap.get(key) !== value) {
          flag = false;
          break;
        }
      }

      if (flag) result.push(l);

      sMap.set(s[l], sMap.get(s[l]) - 1);
      if (sMap.get(s[l]) === 0) sMap.delete(s[l]);
      l++;
    }
  }

  return result;
};

/** Initial naïve solution */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function(s, p) {
//     let l = 0
//     let result = []
//     const countArr = Array(26).fill(0)

//     for(let i = 0; i < p.length; i++) {
//         countArr[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
//     }

//     let compareP = countArr.join('')

//     for(let r = 0; r < s.length; r++) {
//         if(r - l + 1 === p.length) {
//             countArr.fill(0)
//             for(let i = l; i <= r; i++) {
//                 countArr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
//             }
//             if(countArr.join('') === compareP) result.push(l)

//             l++
//         }
//     }

//     return result
// };
