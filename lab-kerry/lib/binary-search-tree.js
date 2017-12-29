'use strict';

class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Refactored insert method in order to use separate node class
  insert(key, value) {

    let node = new TreeNode(key, value);

    if (typeof key !== 'string')
      throw new TypeError('Value must be a string');

    if (key === null)
      throw new TypeError('Must pass a valid object');

    if (!this.root) {
      // console.log(this.root);
      this.root = node;
    } else {
      let currentNode = this.root;
      

      while (currentNode) {
        if (node.key < currentNode.key) {
          if (!currentNode.left) {
            return currentNode.left = node;

          }
          currentNode = currentNode.left;

        } else if (node.key > currentNode.key) {
          if (!currentNode.right) {
            return currentNode.right = node;

          }
          currentNode = currentNode.right;

        } else {
          return null;
        }
      }
    }
  }
  //Find method that returns helper function given a key and establishes a root at that key for which to execute its functionality.
  find(key) {
    return this._find(this.root, key);
  }

  
  //Remove method that returns helper function given a key and establishes a root at that key for which to execute its functionality.
  remove(key) {
    return this._removeNode(this.root, key);
  }

  //----------------------------
  //Helper functions
  //----------------------------

  // Heavy lifting of find method which is defined above
  _find(node, key) {

    if (key === '')
      throw new TypeError('Must input value');

    if (typeof key !== 'string')
      throw new TypeError('Value must be a string');

    if (!node) {
      return null;
    }
    if (key === node.key) {
      return node;
    }
    if (key < node.key) {
      return this._find(node.left, key);
    } else {
      return this._find(node.right, key);
    }
  }

  //Finds smallest key on right side of BST.
  _findMinNodeKey(node) {
    if (!node) {
      node = this.root;
    }
    while (node.left) {
      node = node.left;
    }
    return node.key;
  }
	
	 //Finds companion value of key on right side of BST.
  _findMinNodeValue(node) {
    if (!node) {
      node = this.root;
    }
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }
	

  //Heavy lifting of comparing input value with node values on tree to determine where it lives on the tree and where the value needs to be reassigned in order to safely delete just one node.
  _removeNode(node, key) {
    if (!key || !node)
      throw new TypeError('Must input valid strings');

    if (!node) {
      return null;
    }

    if (key < node.key) {
      node.left = this._removeNode(node.left, key);
      return node;

    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key);
      return node;

    } else {
      if (!node.left && !node.right) {
        this.root = this.root.left;
        return node;
      }

      if (!node.left) { 
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      //Assign temporary node value when there are 2 children.
      let tempKey = this._findMinNodeKey(node.right);
      let tempValue = this._findMinNodeValue(node.right);
      node.key = tempKey.key;
      node.value = tempValue.value;

      node.right = this._removeNode(node.right, tempKey, tempValue);
      return node;

    }
  } 
}


module.exports = TreeNode;
module.exports = BinarySearchTree;
