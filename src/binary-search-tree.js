const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data    
    this.left = null
    this.right = null
  }
}


class BinarySearchTree {
  constructor() {
    this.Root = null
  }
  // returns Root of the tree
  root() {
    if (!this.Root) {
      return null
    }
    return this.Root
  }

  add(data) {
    const newNode = new Node(data)
    if (!this.Root) {
      this.Root = newNode
      return this
    }
    let curNod = this.Root
    while (curNod) {
      if (newNode.data < curNod.data) {
        if (!curNod.left) {
          curNod.left = newNode
          return this
        }
        curNod = curNod.left
      } else {
        if (!curNod.right) {
          curNod.right = newNode
          return this
        }
        curNod = curNod.right
      }
    }
    return this
  }

 
    has(key, tree = this.Root) {   
      if (!tree) {
          return false;
      }  
      if (tree.data === key) {
          return true;
      }      
      if (key < tree.data) {
          return this.has(key, tree.left);
      } else {
          return this.has(key, tree.right);
      }
  }
  
  find(key, nod = this.Root) {
    if (!nod)  {
      return null
    }
    let curNod = nod
    if (key === curNod.data) {
      return curNod
    }
    if (key < curNod.data) {
      return this.find(key, curNod.left)
    }
    if (key > curNod.data) {
      return this.find(key, curNod.right)
    }
    return null
  }
  

  remove(data) {
    this.Root = this.removeNode(this.Root, data)
    return this
  }
  removeNode(current = this.Root, data) {
    if (data == null || data === undefined) {
      return null
    }
    if (data === current.data) {
      if (current.left == null && current.right == null) {
        return null
      }
      if (current.left == null) {
        return current.right
      }
      if (current.right == null) {
        return current.left
      }
      const tempNode = BinarySearchTree.minNode(current.right)
      current.data = tempNode.data     
      current.right = this.removeNode(current.right, current.data)
      return current
    }
    if (data < current.data) {
      current.left = this.removeNode(current.left, data)
      return current
    }
    current.right = this.removeNode(current.right, data)
    return current
  }
  static minNode(node) {
    while (node.left !== null) {
      node = node.left
    }
    return node
  }
  min(node = this.Root) {
    if (node === null) {
      return null
    }
    while (node.left !== null) {
      node = node.left
    }
    return node.data
  }

  max(node = this.Root) {
    if (node === null) {
      return null
    }
    while (node.right !== null) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};


