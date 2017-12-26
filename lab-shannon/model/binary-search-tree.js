'use strict';

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

  insert(value){
    if(this.root === null){
      this.root = new TreeNode(value);
    }
    else{
      this._insert(this.root, value);
    }
  }
  _insert(node, value){
    if(node.value === value){
      throw new TypeError(`That value is already present; You cannot create duplicate numbers`);
    }
    if(node.value > value){
      if(!node.left){
        node.left = new TreeNode(value);
        return;
      }
      this._insert(node.left, value);
      return;
    }
    if(node.value < value){
      if(!node.right){
        node.right = new TreeNode(value);
        return;
      }
      this._insert(node.right, value);
      return;
    }
  }

  _findBiggest(node){
    if(node.right){
      this._findBiggest(node.right);
    }
    else if(!node.right){
      return node.value;
    }
  }

  remove(value){
    return this._remove(this.root, value);
  }

  _remove(node, value, parent){
    if(!node){
      return null;
    }
    else if(node.value === value){
      if(node.left && node.right){
        node.value = this._findBiggest(node.left);  // this copies the value of the smallest node on the left branch and assigns it as the new value of the 'deleted' node
        this._remove(node.left, node.value, node);    // this finds the duplicate value and deletes it
        return;
      }
      else if(node.left){
        if(parent.right.value === value){
          parent.right = node.left;
        }
        else if(parent.left.value === value){
          parent.left = node.left;
        }
        return;
      }
      else if(node.right){
        if(parent.right.value === value){
          parent.right = node.right;
        }
        else if(parent.left.value === value){
          parent.left = node.right;
        }
        return;
      }
      else{
        if(parent.left.value === value){
          parent.left = null;
        }
        else if(parent.right.value === value){
          parent.right = null;
        }
      }
      return;
    }
    else if(node.value > value){
      if(node.left.value){
        this._remove(node.left, value, node);
      }
      return null;
    }
    else if(node.value < value){
      if(node.right.value){
        this._remove(node.right, value, node);
      }
      return null;
    }
  }
}

module.exports = BinarySearchTree;
