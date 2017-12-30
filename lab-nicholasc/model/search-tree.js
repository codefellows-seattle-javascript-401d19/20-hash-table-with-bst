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

  find(value){
    return this._find(this.root, value);
  }

  _find(node, value){
    if(value=== node.value)
      return node;

    if(value > node.value) {
      if(node.right !==null)
        return this._find(node.right, value);
      else
        return false;
    }
    if(node.left!== null)
      return this._find(node.left, value);
    else
      return false;
  }

  findParent(value){
    if(this.root.value === value)
      return null;
    return this._findParent(this.root, value);
  }

  _findParent(node, value){
    if(node.left)
      if(node.left.value === value)
        return node;
    if(node.right)
      if(node.right.value === value)
        return node;
    if(value > node.value) {
      if(node.right !==null)
        return this._findParent(node.right, value);
      else
        return null;
    }
    if(node.left!== null)
      return this._findParent(node.left, value);
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


  remove(value){
    let node = this.find(value);
    // console.log(n);
    if(!node){
      return null;
    }
    //when removing the root node also reassign the key
    if(node.left && node.right){
      let min = this._findMin(node.right);
      console.log('min value', min.value);
      this.remove(min.value);
      return node.value = min.value;
    }

    if(node.left){
      let parentNode = this.findParent(value);
      if(parentNode.left.value === value)
        return parentNode.left = node.left;
      return parentNode.right = node.left;
    }
    if(node.right){
      let parentNode = this.findParent(value);
      if(parentNode.left.value === value)
        return parentNode.left = node.right;
      return parentNode.right = node.left;
    }
    if(!node.left && !node.right){
      let parent = this.findParent(value);
      if(parent.left.value === value)
        parent.left = null;
      if(parent.right.value === value)
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
