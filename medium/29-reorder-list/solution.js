/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return;
  // Find the middle of the linked list
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;

  // Reverse the LL from the middle

  let prev = null;
  while (second) {
    let next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  // Merge the list
  let first = head;
  second = prev;

  while (second) {
    let temp1 = first?.next;
    let temp2 = second?.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};
