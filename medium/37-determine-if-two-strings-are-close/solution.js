/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  let c;
  const m1 = new Map();
  const m2 = new Map();
  const c1 = new Map();
  const c2 = new Map();

  for (c of word1) {
    m1.set(c, (m1.get(c) || 0) + 1);
  }

  for (c of word2) {
    m2.set(c, (m2.get(c) || 0) + 1);
  }

  for (c of word1) {
    if (m1.get(c) === undefined || m2.get(c) === undefined) return false;
  }

  for (c of m1.values()) {
    c1.set(c, (c1.get(c) || 0) + 1);
  }

  for (c of m2.values()) {
    c2.set(c, (c2.get(c) || 0) + 1);
  }

  for (c of c1.keys()) {
    if (c1.get(c) !== c2.get(c)) return false;
  }

  return true;
};
