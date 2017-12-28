'use strict';

// class BinarySearchTree{
//   constructor(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value) {
//     if(typeof value !== 'number')
//       throw new TypeError('Binary Search Tree - value should be a number');

//     if(this.value.key === value.key)
//       throw new Error('Binary Search Tree - value is already present');

//     if(value.key < this.value.key){
//       if(!this.left){
//         this.left = new BinarySearchTree(value);
//         return;
//       }
//       this.left.insert(value);
//       return;
//     }
//     if(!this.right){
//       this.right = new BinarySearchTree(value);
//       return;
//     }
//     this.right.insert(value);
//     return;
//   }

//   find(value){
//     if(value.key === this.value.key)
//       return this;
//     if(value.key > this.value.key){
//       if(this.right !== null)
//         return this.right.find(value);
//       else 
//         return null;
//     }
//     if(this.left !== null) 
//       return this.left.find(value);
//     else 
//       return null;
//   }

//   findMinValue(){
//     return this.left ? this.left.findMinValue() : this.value;
//   }

//   remove(value){
//     if(value < this.value){
//       this.left = this.left && this.left.remove(value);
//     } else if (value > this.value){
//       this.right = this.right && this.right.remove(value);
//     } else if (this.left && this.right) {
//       this.value = this.right.findMinValue();
//       this.right = this.right.remove(this.value);
//     } else {
//       return this.left || this.right;
//     }
//     return this;
//   }
// }

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

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  add(value){
    if(this.root === null)
      this.root = new TreeNode(value);
    this._add(this.root, value);
  }

  _add(node, value) {
    if (value.key < node.value.key) {
      if (!node.left) {
        node.left = new TreeNode(value);
        return;
      } else {
        this._add(node.left, value);
        return;
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(value);
        return;
      } else {
        this._add(node.right, value);
        return;
      }
    }
  }
  
  contains(key) {
    return this._contains(this.root, key);
  }
  
  _contains(node, key) {
    if (!node) {
      return null;
    } else if (node.value.key === key) {
      return node;
    } else if (key < node.value.key) {
      return this._contains(node.left, key);
    } else {
      return this._contains(node.right, key);
    }
  }

  findMinValue(){
    return this.left ? this.left.findMinValue() : this.value;
  }

  remove(node, key){
    if(key < node.value.key){
      node.left = node.left && node.left.remove(key);
    } else if (key > node.value){
      node.right = node.right && node.right.remove(key);
    } else if (node.left && node.right) {
      node.value = node.right.findMinValue();
      node.right = node.right.remove(key);
    } else {
      return node.left || node.right;
    }
    return node;
  }

}

module.exports = BinarySearchTree;