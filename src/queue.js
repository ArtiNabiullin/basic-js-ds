const { NotImplementedError } = require("../lib");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    if (this.head === null) {
      return null;
    }

    const result = { value: this.head.value, next: null };
    let outputNode = result;
    let currentNode = this.head.next;

    while (currentNode !== null) {
      outputNode.next = { value: currentNode.value, next: null };
      outputNode = outputNode.next;
      currentNode = currentNode.next;
    }

    return result;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }

    const outputValue = this.head.value;

    this.head = this.head.next;

    return outputValue;
  }
}

module.exports = {
  Queue,
};
