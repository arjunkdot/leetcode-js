/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = []
    const answer = new Array(temperatures.length).fill(0)
    for(let i = 0; i < temperatures.length; i++) {
       while(stack && stack[stack.length - 1]?.[0] < temperatures[i]){
            const [temp, index] = stack.pop()
            answer[index] = i - index
       }
       stack.push([temperatures[i], i])
    }

    return answer
};