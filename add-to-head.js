const Node = require('./updated-node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // Create your .addToHead() method below:
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      this.head.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!currentHead) {
      this.tail = newHead;
    }
  }
  
  
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;