/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = []

    for(const a of asteroids) {
        if(a < 0) {
            while(stack && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(a)) {
                stack.pop()
            }
            if(stack && stack[stack.length - 1] === Math.abs(a)) {
                stack.pop()
            } else if (stack && stack[stack.length - 1] > 0) {
                continue
            } else {
                stack.push(a)
            }
        } else {
            stack.push(a)
        }    
    }

    return stack
};