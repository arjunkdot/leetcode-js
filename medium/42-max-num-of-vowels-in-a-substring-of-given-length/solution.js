/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let v = new Set(['a', 'e', 'i', 'o', 'u'])
    let i = 0
    let j = 0
    let res = 0
    let c = 0

    while(j < k && j <= s.length) {
        if(v.has(s[j])) c++
        j++
    }

    res = c

    while(j < s.length) {
           if(v.has(s[j])) c++    
           if(v.has(s[i])) c--
           res = Math.max(res, c)
           i++
           j++
    }

    return res
};


