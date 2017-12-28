'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _insert(node, value) {
    if(node.value.key === value.key) {
      throw new TypeError('Binary Search Tree - value already exists');
    }

    if(node.value.key < value.key) {
      if(!node.right) {
        node.right = new Node(value);
        return;
      }
      this._insert(node.right, value);
      return;
    }

    if(node.value.key > value.key) {
      if(!node.left) {
        node.left = new Node(value);
        return;
      }
      this._insert(node.left, value);
      return;
    }
  }

  insert(value) {
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(!this.root) {
      this.root = new Node(value);
    }
    return this._insert(this.root, value);
  }

  _find(node, key) {
    if(!node)
      return null;

    else if(node.value.key === key)
      return node;

    else if(node.value.key < key) 
      return this._find(node.right, key);
        
    else if(node.value.key > key)
      return this._find(node.left, key);

  }

  find(key) {
    if(typeof key !== 'number')
      throw new TypeError('Binary Search Tree - key must be a number');
  
    return this._find(this.root, key);
  }


  _findMinValue() {
    return this.left ? this.left.findMinValue() : this.value;
  }


  _remove(node, key, parentNode) {
    if(!node)
      return null;

    else if(node.value.key === key) {
      if(node.left && node.right) {
        node.value = this._findMinValue(node.right);
        this._remove(node.right, node.value.key, node);
        return;
      }

      else if(node.left) {
        if(parentNode) {
          if(parentNode.right.value.key === key) {
            parentNode.right = node.left;
          }
          else if(parentNode.left.value.key === key) {
            parentNode.left = node.left;
          }
        }
      }
      else if(node.right) {
        if(parentNode.right.value.key === key) {
          parentNode.right = node.right;
        }
        else if(parentNode.left.value.key === key) {
          parentNode.left = node.right;
        }
        return;
      }
      else {
        if(parentNode) {
          if(parentNode.left.value.key === key) {
            parentNode.left = null;
          }
          else if(parentNode.right.value.key === key) {
            parentNode.right = null;
          }
        } else {
          return null;
        }
      }
      return;
    }
    else if(node.value.key > key) {
      if(node.left) {
        this._remove(node.left, key, node);
      }
      return null;
    }

    else if(node.value.key < key) {
      if(node.right) {
        this._remove(node.right, key,node);
      }
      return null;
    }
  }

  remove(value) {
    return this._remove(this.root, value);
  }

}


module.exports = BinarySearchTree;