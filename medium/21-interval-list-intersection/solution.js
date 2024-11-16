/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let result = []
    let i = 0
    let j = 0

    // Return empty array if any of the list is empty, as there won't be any intersection between them.
    if(firstList.length === 0 || secondList.length === 0) return []
    
    while(i < firstList.length && j < secondList.length) {
        if(Math.max(firstList[i][0], secondList[j][0]) <= Math.min(firstList[i][1], secondList[j][1])){
            result.push([Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])])
         }

         // Decide which pointer to increase based on which list is spanning the longest.
         if(firstList[i][1] < secondList[j][1]) i++
         else if(firstList[i][1] > secondList[j][1]) j++
         else {
            i++
            j++
         }
    }

    return result
};