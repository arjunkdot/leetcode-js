/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    const posArray = []
    const charArray = s.split('')

    for(const [i, v] of charArray.entries()) {
        if(vowels.has(v.toLowerCase())) posArray.push(i)
    }
    
    for(let i = 0; i < Math.floor(posArray.length / 2); i++) {
        [charArray[posArray[i]], charArray[posArray[posArray.length - i - 1]]] = [charArray[posArray[posArray.length - i - 1]], charArray[posArray[i]]]
    }

    return charArray.join('')
};
