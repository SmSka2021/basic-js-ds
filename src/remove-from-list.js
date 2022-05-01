const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, item ) {
  if (!list) {
    return null
  }
  let head 
  if (list.value === item) {
    const head = list.next
    list = null  
    return removeKFromList(head, item )
  } else {
    head = list
  }
     let currentNode = list
  while (currentNode.next) {
    if (currentNode.next.value === item) {      
      const tmp = currentNode.next.next
      currentNode.next = null
      currentNode.next = tmp     
    }else{
      currentNode = currentNode.next
    }       
  }
  return head ? head : null
}


module.exports = {
  removeKFromList
};

// removes first node from list by provided value; method should be chainable;
/*delete(value) {
  if (!this.head) {
    return null
  }
  if (this.head.value === value) {
    const tmp = this.head.next
    this.head = null
    this.head = tmp
    this.head.prev = null
    return this
  }
  let currentNode = this.head
  while (currentNode.next) {
    if (currentNode.next.value === value) {
      const tmp = currentNode.next.next
      currentNode.next = null
      currentNode.next = tmp
      currentNode.next.prev = currentNode

      return this
    }
    currentNode = currentNode.next
  }
  return this
}*/
