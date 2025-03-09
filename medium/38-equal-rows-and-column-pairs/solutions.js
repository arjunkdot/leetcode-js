/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid[0].length;
  const rMap = new Map();
  let result = 0;

  for (const g of grid) {
    rMap.set(g.toString(), (rMap.get(g.toString()) || 0) + 1);
  }

  for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(grid[j][i]);
    }

    const count = rMap.get(temp.toString());

    if (count) result += count;
  }

  return result;
};
