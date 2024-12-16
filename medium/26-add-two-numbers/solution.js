/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carryOver = 0;

  while (l1 || l2 || carryOver) {
    // calculate sum, add caryy over, if any
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carryOver;
    // add carry over
    carryOver = Math.floor(sum / 10);
    // add to resulting linked list
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    // move to next node
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};
