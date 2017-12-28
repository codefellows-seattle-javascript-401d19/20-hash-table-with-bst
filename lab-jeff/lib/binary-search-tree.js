'use strict';

class BinarySearchTree{
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(node){
    if(!(node instanceof BinarySearchTree))
      throw new TypeError('node must be an instance of BinarySearchTree');

    if(node.key === this.key) //if the key already exists, reassign the value
      this.value = node.value;



    if(node.key < this.key){
      if(!this.left){
        this.left = node;
        return;
      }
      this.left.insert(node); // vinicio - recursive call
      return;
    }
    if(!this.right){
      this.right = node;
      return;
    }
    this.right.insert(node);
    return;
  }

  find(key){
    if(key === this.key)
      return this;

    // vinicio - checking right sub-tre
    if(key > this.key){
      if(this.right !== null)
        return this.right.find(key);
      else
        return null;
    }
    if(this.left !== null)
      return this.left.find(key);
    else
      return null;
  }

  findMin(node){
    while(node.left)
      node = node.left;
    return node;
  }

  findParent(key, root){

    console.log('root: ', root);

    if(key === root.key){
      return 'root';
    }
    if(key < this.key){
      if(this.left.key === key){
        return this;
      }
      return this.left.findParent(key, root);
    }
    if(this.right.key === key){
      return this;
    }
    return this.right.findParent(key, root);

  }

  remove(key, root = null){
    let parent;
    if(root === null) {
      root = this;
    }
    if(!this.find(key)){
      return null;
    }

    if(this.key === key){ //value is found

      if(this === root){ //node to be removed is the root
        console.log('node to remove is root');
        if(this.right && this.left){//root to be removed and has 2 children
          let minRight = this.findMin(this.right);
          this.value = minRight.value;
          this.key = minRight.key;
          root = this;
          if(this.right === minRight){
            this.right = null;
            return;
          }
          return minRight.remove(minRight.key, root);
        } else if(this.right || this.left){//root to be removed and has 1 child
          if(this.right){
            this.value = this.right.value;
            this.key = this.right.key;
            this.right.remove(this.right.key);
            return;
          } else {
            this.value = this.left.value;
            this.key = this.left.key;
            this.left.remove(this.left.key);
            return;
          }
        } else{//root to be removed and has no children
          root = null;
          this.value = null;
          this.key = null;
          return;
        }
      } else { //if the node to be removed is not the root


        console.log('value found.  node = ', this);
        parent = root.findParent(key, root);
        console.log('parent: ', parent);
        if(this.right && this.left){ //node to remove has 2 children
          let minRight = this.findMin(this.right);
          this.value = minRight.value;
          this.key = minRight.key;
          return minRight.remove(minRight.key, root);
        } else if (this.right || this.left){ // node to remove has 1 child
          if(parent.left === this){
            if(this.left){
              parent.left = this.left;
              return;
            } else {
              parent.left = this.right;
              return;
            }
          } else {
            if(this.left){
              parent.right = this.left;
              return;
            } else {
              parent.right = this.right;
              return;
            }
          }
        } else {//node to remove has no children
          if(parent.left === this){
            parent.left = null;
            this.value = null;
            this.key = null;
            return;

          } else {
            parent.right = null;
            this.value = null;
            this.key = null;
            return;
          }

        }

      }

    }
    if(key < this.key)
      return this.left.remove(key, root);

    return this.right.remove(key, root);


  }
}
module.exports = BinarySearchTree;
