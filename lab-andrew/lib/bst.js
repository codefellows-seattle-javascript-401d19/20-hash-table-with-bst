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
    if (typeof value !== 'number') {
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
    // if (!node){
    //   node = new BSTNode(value);
    //   return;
    // }
    if (node.value === value){
      // console.log('hello');
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
    if (typeof value !== 'number') {
      throw new TypeError('value must be a number');
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
    if (!node){
      return -1;
    }
    if (node.value === value){
      if (node.left && node.right){
        node.value = this._findMinValue(node.right);
        return this._remove(node.right, node.value);
      }
      if (node.left && !node.right){
        node = node.left;
        return;
      }
      if (!node.left && node.right){
        node = node.right;
        return;
      }
      node = null;
      return;
    }
    if (value < node.value){
      return this._remove(node.left, value);
    }
    return this._remove(node.right, value);
  }
}

module.exports = {BSTNode, BST};