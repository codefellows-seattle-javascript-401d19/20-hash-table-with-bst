'use strict';

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    if(typeof !== 'number')
      throw new TypeError('BST value should be a number');
    
      if(this.value === value)
        throw new Error('BST - value is already present');

      if(value < this.value){
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
    if(value === this.value)
      return this;

    if(value > this.value){
      if(this.right !== null)
        return this.right.find(value);
      else 
        return null
    }
    if(this.left !== null)
      return this.left.find(value);
    else
      return null;
  }
}

let bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(16);