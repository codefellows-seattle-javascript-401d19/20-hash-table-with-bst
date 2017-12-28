'use strict';

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(this.value === value)
      throw new Error('<value> must be unique');

    if(typeof value !== 'number')
      throw new TypeError('<value> must be a number');
    
    if (value > this.value) {
      if(this.right === null) {
        this.right = new BinarySearchTree(value);
        return;
      }

      this.right.insert(value);
      return;
    }

    if(this.left === null) {
      this.left = new BinarySearchTree(value);
      return;
    }

    this.left.insert(value);
    return;
  }

  find(value) {
    if(typeof value !== 'number')
      throw new TypeError('<value> must be a number');

    if(this.value === value)
      return this;
    
    if(value > this.value) {
      if(this.right)
        return this.right.find(value);
      return null;
    }

    if(this.left)
      return this.left.find(value);

    return null;
  }

  findParentOf(value) {
    if (typeof value !== 'number')
      throw new TypeError('<value> must be a number');

    if(!this.find(value))
      throw new Error(`<value> ${value} is not a child of calling node.`);

    if (value === this.value)
      return null; //calling node is the value we are looking for, so no relative parent node

    let keepSearching = true;
    let currentParent = this;
  
    while(keepSearching) {
      if(currentParent.left && currentParent.left.value === value ||
        currentParent.right && currentParent.right.value === value)
        return currentParent;

      if(value > currentParent.value)
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
      return null;
    }

    // Case 2: root has one child
    if(this.left && !this.right || this.right && !this.left) {
      if(this.left) {
        this.value = this.left.value;
        this.right = this.left.right;
        this.left = this.left.left;
      } else {
        this.value = this.right.value;
        this.left = this.right.left;
        this.right = this.right.right;
      }
      return this;
    }

    // Case 3: root has two children
    let successor = this.right.getLefty();
    let successorParent = this.findParentOf(successor.value);
    if(successorParent.value !== this.value) {
      successorParent.left = successor.right;
      this.value = successor.value;
      this.right = successorParent;
    } else {
      this.value = successor.value;
      this.right = successor.right;
    }

    return this;
  }

  remove(value) {
    if(typeof value !== 'number')
      throw new TypeError('<value> must be a number');

    if(this.value === value)
      return this._removeRoot();

    let valueNode = this.find(value);

    // Case 1: value is not in tree - return null
    if(valueNode === null) {
      return null;
    }

    let parent = this.findParentOf(value);

    // Case 2: value is a leaf - remove connection from parent
    if(valueNode.left === null && valueNode.right === null) {
      if(parent.left && parent.left.value === value) {
        parent.left = null;
        return this;
      }

      parent.right = null;
      return this;
    }

    // Case 3: value has one child - connect its parent to its child
    if(valueNode.left && !valueNode.right || valueNode.right && !valueNode.left) {
      let child = valueNode.left || valueNode.right;

      if(parent.left && parent.left.value === value)
        parent.left = child;
      else
        parent.right = child;
      
      return this;
    }

    // Case 4: value has two children, reconnect the things!
    let successor = valueNode.right.getLefty();
    let successorParent = this.findParentOf(successor.value);
    successor.left = valueNode.left;
    successorParent.left = null;
    if(parent.right && parent.right.value === value)
      parent.right = successor;
    else
      parent.left = successor;

    return this;
  }
}

module.exports = BinarySearchTree;