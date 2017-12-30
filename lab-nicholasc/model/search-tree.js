'use strict';

class Node{
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(key, value){
    let nodeToInsert = new Node(key, value);
    if(!this.root)
      return this.root = nodeToInsert;
    return this._insert(this.root, nodeToInsert, key);
  }

  _insert(node, nodeToInsert, key){
    if(key < node.key){
      if(!node.left)
        return node.left = nodeToInsert;
      return this._insert(node.left, nodeToInsert, key);
    }
    if(!node.right)
      return node.right = nodeToInsert;
    return this._insert(node.right, nodeToInsert, key);
  }

  find(key){
    return this._find(this.root, key);
  }

  _find(node, key){
    if(key=== node.key)
      return node;

    if(key > node.key) {
      if(node.right !==null)
        return this._find(node.right, key);
      else
        return false;
    }
    if(node.left!== null)
      return this._find(node.left, key);
    else
      return false;
  }

  findParent(key){
    if(this.root.key === key)
      return null;
    return this._findParent(this.root, key);
  }

  _findParent(node, key){
    if(node.left)
      if(node.left.key === key)
        return node;
    if(node.right)
      if(node.right.key === key)
        return node;
    if(key > node.key) {
      if(node.right !==null)
        return this._findParent(node.right, key);
      else
        return null;
    }
    if(node.left!== null)
      return this._findParent(node.left, key);
    return null;
  }

  findMin(){
    return this._findMin(this.root);
  }

  _findMin(node){
    if(node.left)
      return this._findMin(node.left);
    return node;
  }

  toString() {
    return this._toString(this.root);
  }

  _toString(node) {
    if(!node)
      return '';
    return `${this._toString(node.left)} ${node.value} ${this._toString(node.right)}`;
  }


  remove(key){
    if(!this.findParent(key))
      return this.root = null;
    return this._remove(this.root, key);
  }

  _remove(node, key){
    node = this.find(key);
    // console.log(n);
    if(!node){
      return null;
    }
    //when removing the root node also reassign the key
    if(node.left && node.right){
      let min = this._findMin(node.right);
      this.remove(min.key);
      node.value = min.value;
      return node.key = min.key;
    }

    if(node.left){
      let parentNode = this.findParent(key);
      if(parentNode.left.key === key)
        return parentNode.left = node.left;
      return parentNode.right = node.left;
    }
    if(node.right){
      let parentNode = this.findParent(key);
      if(parentNode.left.key === key)
        return parentNode.left = node.right;
      return parentNode.right = node.left;
    }
    if(!node.left && !node.right){
      let parent = this.findParent(key);
      console.log('node', node);
      console.log('parent', parent);
      if (parent.left)
        if(parent.left.key === key)
          parent.left = null;
      if(parent.right)
        if(parent.right.key === key)
          parent.right = null;
    }
  }

}

// class BSTNODE{
//   constructor(value){
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

module.exports = BinarySearchTree;
