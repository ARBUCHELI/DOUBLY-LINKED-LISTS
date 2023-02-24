const Node = require('./updated-node');

class DoublyLinkedList {
  // Create your constructor below:
  constructor() {
    this.head = null;
    this.tail = null;
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