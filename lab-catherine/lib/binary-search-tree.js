'use strict';

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(this.value === value)
      throw new Error('Binary Search Tree - value is already present');

    if(value < this.value) {
      if(!this.left) {
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value);
      return;
    }
    if(!this.right) {
      this.right = new BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
    return;
  }

  find(value) {
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(value === this.value)
      return this;

    if(value > this.value) {
      if(this.right)
        return this.right.find(value);
      else
        return null;
    }
    if(this.left)
      return this.left.find(value);
    else
      return null;
  }

  findMinValue() {
    return this.left ? this.left.findMinValue() : this.value;
  }

  remove(value) {
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(value < this.value) {
      this.left = this.left && this.left.remove(value);

    } else if (value > this.value) {
      this.left = this.left && this.left.remove(value);

    } else if(this.left && this.right) {
      this.value = this.right.findMinValue();
      this.right = this.right.remove(this.value);

    } else {
      return this.left || this.right;
    }

    return this;
  }
}

module.exports = BinarySearchTree;