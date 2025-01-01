/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  const stack = [];
  let curr = head;

  while (curr) {
    while (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
      stack.pop();
    }
    stack.push(curr);
    curr = curr.next;
  }

  let dummy = new ListNode(0);
  let result = dummy;
  while (stack.length > 0) {
    result.next = stack.pop();
    result = result.next;
  }

  result.next = null;

  curr = dummy.next;
  let prev = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
