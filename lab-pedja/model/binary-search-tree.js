'use strict';

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(this.value.key === value.key)
      throw new Error('Binary Search Tree - value is already present');

    if(value.key < this.value.key){
      if(!this.left){
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value);
      return;
    }
    if(!this.right){
      this.right = new BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
    return;
  }

  find(value){
    if(value.key === this.value.key)
      return this;
    if(value.key > this.value.key){
      if(this.right !== null)
        return this.right.find(value);
      else 
        return null;
    }
    if(this.left !== null) 
      return this.left.find(value);
    else 
      return null;
  }

  findMinValue(){
    return this.left ? this.left.findMinValue() : this.value;
  }

  remove(value){
    if(value < this.value){
      this.left = this.left && this.left.remove(value);
    } else if (value > this.value){
      this.right = this.right && this.right.remove(value);
    } else if (this.left && this.right) {
      this.value = this.right.findMinValue();
      this.right = this.right.remove(this.value);
    } else {
      return this.left || this.right;
    }
    return this;
  }
}

// ==========================================================
// OOP constructor
// ==========================================================

class TreeNode{
  constructor(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}





module.exports = BinarySearchTree;