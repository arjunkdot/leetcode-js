/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sArr = s.trim().split(" ").filter(w => w !== "");
    let j = sArr.length - 1;
   
    for(let i = 0; i < Math.floor(sArr.length / 2); i++) {
        [sArr[i], sArr[j]] = [sArr[j], sArr[i]]
        j--
    }

    return sArr.join(" ")
};
