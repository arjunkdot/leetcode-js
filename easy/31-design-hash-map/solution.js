// Linked list implementation
function ListNode(key, val, next) {
  this.key = key === undefined ? -1 : key;
  this.val = val === undefined ? -1 : val;
  this.next = next === undefined ? null : next;
}

var MyHashMap = function () {
  this.map = new Array(1000).fill(0).map((item) => new ListNode());
};

MyHashMap.prototype.hash = function (key) {
  return key % this.map.length;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  let curr = this.map[this.hash(key)];

  while (curr.next) {
    if (curr.next.key === key) {
      curr.next.val = value;
      return;
    }
    curr = curr.next;
  }
  curr.next = new ListNode(key, value, null);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let curr = this.map[this.hash(key)].next;

  while (curr) {
    if (curr.key === key) return curr.val;
    curr = curr.next;
  }

  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let curr = this.map[this.hash(key)];

  while (curr && curr.next) {
    if (curr.next.key === key) {
      curr.next = curr.next.next;
      return;
    }
    curr = curr.next;
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
