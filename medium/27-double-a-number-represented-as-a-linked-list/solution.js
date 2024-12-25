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
var doubleIt = function (head) {
  // reverse the linked list
  let prev = null;
  let curr = head;

  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  head = prev;

  let carry = 0;
  let dummy = new ListNode();
  let newCurr = dummy;
  curr = head;

  while (curr || carry !== 0) {
    let val = (curr ? curr.val * 2 : 0) + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    newCurr.next = new ListNode(val, null);
    newCurr = newCurr.next;

    if (curr) {
      curr = curr.next;
    }
  }

  // reverse the result

  prev = null;
  newCurr = dummy.next;

  while (newCurr) {
    let nextNode = newCurr.next;
    newCurr.next = prev;
    prev = newCurr;
    newCurr = nextNode;
  }

  return prev;
};
