/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0, head);
  let leftPrev = dummy;
  let prev = null;
  let curr = head;

  for (let i = 0; i < left - 1; i++) {
    leftPrev = curr;
    curr = curr.next;
  }

  for (i = 0; i < right - left + 1; i++) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummy.next;
};
