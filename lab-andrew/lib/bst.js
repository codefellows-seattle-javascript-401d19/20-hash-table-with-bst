'use strict';

class BSTNode {
  constructor(key, value, left, right){
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(){
    this.root = null;
  }

  find(key){
    if (typeof key !== 'number'){
      throw new TypeError('key must be a number');
    }
    return this._find(this.root, key);
  }

  _find(node, key){
    if (!node){
      return undefined;
    }
    if (key === node.key){
      return node;
    }
    if (key < node.key){
      return this._find(node.left, key);
    }
    return this._find(node.right, key);
  }

  insert(key, value){
    if (typeof key !== 'number'){
      throw new TypeError('key must be a number');
    }
    if (!this.root){
      this.root = new BSTNode(key, value);
    }
    return this._insert(this.root, key, value);
  }

  _insert(node, key, value){
    if (node.key === key){
      return -1;
    }
    if (key < node.key){
      if (!node.left){
        node.left = new BSTNode(key, value);
        return;
      }
      return this._insert(node.left, key);
    }
    if (!node.right){
      node.right = new BSTNode(key, value);
      return;
    }
    return this._insert(node.right, key);
  }

  remove(key){
    let node = this.find(key);
    if (!node){
      return -1;
    }
    if (node.left && node.right){
      node.key = this._findMinKey(node.right);
      if (node.key === node.right.key){
        if (!node.right.right){
          node.right = null;
          return;
        }
        node.right = node.right.right;
        return;
      }
      return this._remove(node.right, node.key);
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
      return this._remove(this.root, key);
    }
    if (node === this.root){
      this.root = null;
      return;
    }
    return this._remove(this.root, key);
  }

  _findMinKey(node){
    if (node.left){
      return this._findMinKey(node.left);
    }
    return node.key;
  }

  _remove(node, key){
    if (key > node.key) {
      if (node.right.key === key) {
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
      return this._remove(node.right, key);
    }

    if (node.left.key === key) {
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
    return this._remove(node.left, key);
  }
}

module.exports = BST;