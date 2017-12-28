'use strict';

class BinarySearchTree {
  constructor(key, value) {
    this.key = key,
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if(this.key === key)
      throw new Error('<key> must be unique');

    if(typeof key !== 'string')
      throw new TypeError('<key> must be a string');
    
    if (key > this.key) {
      if(this.right === null) {
        this.right = new BinarySearchTree(key, value);
        return;
      }

      this.right.insert(key, value);
      return;
    }

    if(this.left === null) {
      this.left = new BinarySearchTree(key, value);
      return;
    }

    this.left.insert(key, value);
    return;
  }

  find(key) {
    if(typeof key !== 'string')
      throw new TypeError('<key> must be a string');

    if(this.key === key)
      return this;
    
    if(key > this.key) {
      if(this.right)
        return this.right.find(key);
      return null;
    }

    if(this.left)
      return this.left.find(key);

    return null;
  }

  findParentOf(key) {
    if (typeof key !== 'string')
      throw new TypeError('<key> must be a string');

    if(!this.find(key))
      throw new Error(`<key> ${key} is not a child of calling node.`);

    if (key === this.key)
      return null; //calling node is the value we are looking for, so no relative parent node

    let keepSearching = true;
    let currentParent = this;
  
    while(keepSearching) {
      if(currentParent.left && currentParent.left.key === key ||
        currentParent.right && currentParent.right.key === key)
        return currentParent;

      if(key > currentParent.key)
        currentParent = currentParent.right;
      else
        currentParent = currentParent.left;
    }
  }

  getLefty() {
    let lastNode = this;

    while(lastNode.left)
      lastNode = lastNode.left;
    
    return lastNode;
  }

  _removeRoot() {
    // Case 1: root has no children
    if(this.left === null && this.right === null) {
      this.value = null;
      this.key = null;
      return null;
    }

    // Case 2: root has one child
    if(this.left && !this.right || this.right && !this.left) {
      if(this.left) {
        this.value = this.left.value;
        this.key = this.left.key;

        this.right = this.left.right;
        this.left = this.left.left;
      } else {
        this.value = this.right.value;
        this.key = this.right.key;
        this.left = this.right.left;
        this.right = this.right.right;
      }
      return this;
    }

    // Case 3: root has two children
    let successor = this.right.getLefty();
    let successorParent = this.findParentOf(successor.key);
    if(successorParent.key !== this.key) {
      successorParent.left = successor.right;
      this.value = successor.value;
      this.key = successor.key;

      this.right = successorParent;
    } else {
      this.value = successor.value;
      this.key = successor.key;
      this.right = successor.right;
    }

    return this;
  }

  remove(key) {
    if(typeof key !== 'string')
      throw new TypeError('<key> must be a string');

    if(this.key === key)
      return this._removeRoot();

    let keyNode = this.find(key);

    // Case 1: key is not in tree - return null
    if(keyNode === null) {
      return null;
    }

    let parent = this.findParentOf(key);

    // Case 2: key is a leaf - remove connection from parent
    if(keyNode.left === null && keyNode.right === null) {
      if(parent.left && parent.left.key === key) {
        parent.left = null;
        return this;
      }

      parent.right = null;
      return this;
    }

    // Case 3: key has one child - connect its parent to its child
    if(keyNode.left && !keyNode.right || keyNode.right && !keyNode.left) {
      let child = keyNode.left || keyNode.right;

      if(parent.left && parent.left.key === key)
        parent.left = child;
      else
        parent.right = child;
      
      return this;
    }

    // Case 4: key has two children, reconnect the things!
    let successor = keyNode.right.getLefty();
    let successorParent = this.findParentOf(successor.key);
    successor.left = keyNode.left;
    successorParent.left = null;
    if(parent.right && parent.right.key === key)
      parent.right = successor;
    else
      parent.left = successor;

    return this;
  }
}

module.exports = BinarySearchTree;