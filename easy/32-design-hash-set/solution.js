// Linked list impleentation
function ListNode(key, value, next) {
  this.key = key === undefined ? -1 : key;
  this.next = next === undefined ? null : next;
}

var MyHashSet = function () {
  this.map = new Array(1000).fill(0).map((item) => new ListNode());
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashSet.prototype.hash = function (key) {
  return key % this.map.length;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let curr = this.map[this.hash(key)];

  while (curr.next) {
    if (curr.next.key === key) {
      return;
    }
    curr = curr.next;
  }

  curr.next = new ListNode(key, null);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let curr = this.map[this.hash(key)];

  while (curr && curr.next) {
    if (curr.next.key === key) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let curr = this.map[this.hash(key)].next;

  while (curr) {
    if (curr.key === key) {
      return true;
    }
    curr = curr.next;
  }

  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
