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
var oddEvenList = function (head) {
  if (head === null) return head;

  const dummy = new ListNode();
  dummy.next = head;
  let l = head;
  let r = head?.next || null;
  let temp = dummy.next?.next;
  let count = 0;

  while (r !== null && r.next !== null) {
    l.next = r.next;
    l = r;
    r = l.next;
    count++;
  }

  if (count % 2 === 0) {
    l.next = temp;
  } else {
    // remove cycle in the ListNode
    l.next = null;
    r.next = temp;
  }

  return dummy.next;
};
