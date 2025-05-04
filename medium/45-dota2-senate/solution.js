/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const radiant = []
    const dire = []
    const l = senate.length 

    for(let i = 0; i < senate.length; i++) {
        if(senate[i] === 'R') radiant.push(i)
        else dire.push(i)
    }

    while (radiant.length > 0 && dire.length > 0) {
        const r = radiant.shift()
        const d = dire.shift()

        if(r < d) {
            radiant.push(r + l)
        } else {
            dire.push(d + l)
        }
    }

    return radiant.length === 0  ? "Dire" : "Radiant"
};
