'use strict';

class BSTNode {
  constructor(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  find(value){
    if (typeof value !== 'number'){
      throw new TypeError('value must be a number');
    }
    return this._find(this.root, value);
  }

  _find(node, value){
    if (!node){
      return -1;
    }
    if (value === node.value){
      return node;
    }
    if (value < node.value){
      return this._find(node.left, value);
    }
    return this._find(node.right, value);
  }

  insert(value){
    if (typeof value !== 'number'){
      throw new TypeError('value must be a number');
    }
    if (!this.root){
      this.root = new BSTNode(value);
    }
    return this._insert(this.root, value);
  }

  _insert(node, value){
    if (node.value === value){
      return -1;
    }
    if (value < node.value){
      if (!node.left){
        node.left = new BSTNode(value);
        return;
      }
      return this._insert(node.left, value);
    }
    if (!node.right){
      node.right = new BSTNode(value);
      return;
    }
    return this._insert(node.right, value);
  }

  remove(value){
    let node = this.find(value);
    if (node === -1){
      return -1;
    }
    if (node.left && node.right){
      node.value = this._findMinValue(node.right);
      if (node.value === node.right.value){
        node.right = null;
        return;
      }
      return this._remove(node.right, node.value);
    }
    if ((node.left && !node.right) || (!node.left && node.right)){
      if (node === this.root){
        if (this.root.left){
          this.root = this.root.left;
          return;
        }
        this.root = this.root.right;
        return;
      }
      return this._remove(this.root, value);
    }
    if (node === this.root){
      this.root = null;
      return;
    }
    return this._remove(this.root, value);
  }

  _findMinValue(node){
    if (node.left){
      return this._findMinValue(node.left);
    }
    return node.value;
  }

  _remove(node, value){
    if (value > node.value) {
      if (node.right.value === value) {
        if (!node.right.left && node.right.right) {
          node.right = node.right.right;
          return;
        }
        if (node.right.left && !node.right.right) {
          node.right = node.right.left;
          return;
        }
        node.right = null;
        return;
      }
      return this._remove(node.right, value);
    }

    if (node.left.value === value) {
      if (!node.left.left && node.left.right) {
        node.left = node.left.right;
        return;
      }
      if (node.left.left && !node.left.right) {
        node.left = node.left.left;
        return;
      }
      node.left = null;
      return;
    }
    return this._remove(node.left, value);
  }
}

module.exports = {BSTNode, BST};