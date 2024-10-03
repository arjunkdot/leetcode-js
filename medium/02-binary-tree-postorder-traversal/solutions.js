/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = [];

  if (!root) return res;

  let s1 = [];
  let s2 = [];

  s1.push(root);

  while (s1.length) {
    let x = s1.pop();
    s2.push(x);

    if (x.left) {
      s1.push(x.left);
    }

    if (x.right) {
      s1.push(x.right);
    }
  }

  while (s2.length) {
    let item = s2.pop();
    res.push(item.val);
  }

  return res;
};
