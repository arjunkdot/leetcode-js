/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = []

    for(const c of s) {
        if(stack && c === '*') stack.pop()
        else stack.push(c)
    }

    return stack.join("")
};