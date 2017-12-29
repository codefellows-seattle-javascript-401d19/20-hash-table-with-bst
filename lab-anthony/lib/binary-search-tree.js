'use strict';

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node){
    if(!(node instanceof BinarySearchTree))
      throw new Error('Node should be a binary search tree');

    if(this.value === node.value)
      throw new Error('Binary Search Tree - node is already present');

    if(node.value < this.value){
      if(!this.left){
        this.left = node;
        return;
      }
      this.left.insert(node);
      return;
    }
    if(!this.right){
      this.right = node;
      return;
    }
    this.right.insert(node);
    return;
  }

  find(predicate) {
    if (typeof predicate !== 'function') {
      throw new TypeError('__BINARY_TREE_ERROR__ predicate should be a function');
    }
    if (predicate(this) === true) {
      return this;
    } else if (this.next) {
      return this.next.find(predicate);
    } else {
      return null;
    }
  }

  findMin(){
    if(this.left){
      return this.left.findMin();
    } else {
      return this.value;
    }
  }

  remove(node){
    if(!(node instanceof BinarySearchTree))
      throw new TypeError('Node should be a binary search tree');

    if(!node)
      return null;

    if(node.value < this.value) { //go left until you find the node or it's larger than root.
      if(this.left)
        this.left = this.left.remove(node);
    } else if(node.value > this.value) { //go right until you find the node or it's smaller than root.
      if(this.right)
        this.right = this.right.remove(node);
    } else { //found the node.
      if(this.left === null && this.right === null)// if there are no children it's a leaf node.
        return null;
      if(this.left === null) { // if it is a parent and it only has a right node.
        return this.right;
      }
      else if(this.right === null) { // if it is a parent with only a left child.
        return this.left;
      }
      let rightMinValue = this.right.findMin();
      this.value = rightMinValue;
      this.right = this.right.remove(rightMinValue);
      return this;
    }

  }
}

module.exports = BinarySearchTree;
