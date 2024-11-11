/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = new Set();
  const repeated = new Set();

  for (let i = 0; i <= s.length - 10; i++) {
    let seq = s.substring(i, i + 10);

    if (seen.has(seq)) {
      repeated.add(seq);
    } else {
      seen.add(seq);
    }
  }

  return [...repeated];
};

/** Inidial naïve solution */
/**
 * @param {string} s
 * @return {string[]}
 */
/** 
var findRepeatedDnaSequences = function(s) {
    let l = 0
     let length = 0
     let tempStr = ''
     let result = []
     const nucleoMap = new Map()
     const countMap = new Map()
     for(let r = 0 ; r < s.length; r++) {
         nucleoMap.set(s[r], (nucleoMap.get(s[r]) || 0) + 1)
         tempStr += s[r]
         length++
 
         if(length === 10) {
             countMap.set(tempStr, (countMap.get(tempStr) || 0) + 1)
             l++
             length--
             tempStr = tempStr.slice(1)
         }
     }
     result = Array.from(countMap).filter(([k, v]) => v > 1).map(([k, v]) => k)
     return result;
 };
 */
