/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let ins  = 0
    let i = 0

    while(i < chars.length) {
        let group = 1

        while((group + i) < chars.length && chars[i] === chars[group + i]) {
            group += 1
        }
        chars[ins] = chars[i]
        ins += 1 

        if(group > 1) {
            const str = group.toString()
            chars.splice(ins, str.length, ...str.split(''));
            ins += str.length
        }
        i += group
    }
    return ins
};

