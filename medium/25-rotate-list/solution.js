/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let length = 1;
  let l = head;

  if (head === null) return head;

  while (l.next !== null) {
    length += 1;
    l = l.next;
  }

  k = k % length;

  if (k === 0) return head;

  let i = 1;
  let curr = head;

  while (i <= length - k - 1) {
    curr = curr.next;
    i += 1;
  }

  l.next = head;
  head = curr.next;
  curr.next = null;

  return head;
};
