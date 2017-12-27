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
    if(node.value.key === value.key){
      throw new TypeError(`That value is already present; You cannot create duplicate numbers`);
    }
    if(node.value.key > value.key){
      if(!node.left){
        node.left = new TreeNode(value);
        return;
      }
      this._insert(node.left, value);
      return;
    }
    if(node.value.key < value.key){
      if(!node.right){
        node.right = new TreeNode(value);
        return;
      }
      this._insert(node.right, value);
      return;
    }
  }

  find(key){
    return this._find(this.root, key);
  }

  _find(node, key){
    if(!node){
      return null;
    }
    else if(node.value.key === key){
      return node;
    }
    else if(node.value.key > key){
      return this._find(node.left, key);
    }
    else if(node.value.key < key){
      return this._find(node.right, key);
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

  _remove(node, key, parent){
    if(!node){
      return null;
    }
    else if(node.value.key === key){
      if(node.left && node.right){
        node.value = this._findBiggest(node.left);  // this copies the value of the smallest node on the left branch and assigns it as the new value of the 'deleted' node
        this._remove(node.left, node.value.key, node);    // this finds the duplicate value and deletes it
        return;
      }
      else if(node.left){
        if(parent){
          if(parent.right.value.key === key){
            parent.right = node.left;
          }
          else if(parent.left.value.key === key){
            parent.left = node.left;
          }
        }
      }
      else if(node.right){
        if(parent.right.value.key === key){
          parent.right = node.right;
        }
        else if(parent.left.value.key === key){
          parent.left = node.right;
        }
        return;
      }
      else{
        if(parent){
          if(parent.left.value.key === key){
            parent.left = null;
          }
          else if(parent.right.value.key === key){
            parent.right = null;
          }
        }else{
          return null;
        }
      }
      return;
    }
    else if(node.value.key > key){
      if(node.left){
        this._remove(node.left, key, node);
      }
      return null;
    }
    else if(node.value.key < key){
      if(node.right){
        this._remove(node.right, key, node);
      }
      return null;
    }
  }
}

module.exports = BinarySearchTree;
