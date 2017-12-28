'use strict';

class BinarySearchTree {
  constructor(id, key, value) {
    this._id = id;
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(id, key, value) {
    if (this._id === id) {
      throw new Error('Binary Search Tree - \'key\' is already present');
    }

    if (this._id > id) {
      if (this.left) {
        this.left.insert(id, key, value);
        return;
      } else {
        this.left = new BinarySearchTree(id, key, value);
        return;
      }
    }

    if (this.right) {
      this.right.insert(id, key, value);
      return;
    } else {
      this.right = new BinarySearchTree(id, key, value);
      return;
    }
  }

  find(id) {
    if (this._id === id) {
      return this.value;
    }

    if (this._id > id) {
      if (this.left) {
        return this.left.find(id);
      } else {
        return undefined;
      } 
    }

    if (this.right) {
      return this.right.find(id);
    } else {
      return undefined;
    }
  }

  remove(id) {
    let foundID;
    let parent;
    let current = this;

    while (!foundID && current !== null) {
      if (current._id > id) {
        parent = current;
        current = current.left;

      } else if (current._id < id) {
        parent = current;
        current = current.right;

      } else {
        foundID = current._id;
      }
    }

    if (foundID) {
      if (current.left && current.right) {
        return this._removeWithTwoChildren(parent, current);
      }

      else {
        return this._removeWithOneChildOrLess(parent, current);
      }

    } else {
      return null;
    }
  }

  _removeWithOneChildOrLess(parent, current) {
    let leftNode = current.left;
    let rightNode = current.right;
    
    if (!parent) { // if the id is at the root
      if (current.right) {
        current._id = current.right._id;
        current.key = current.right.key;
        current.value = rightNode.value;
        current.right = rightNode.right;
        current.left = rightNode.left;
        return 'Removal Successful';

      } else if (current.left) {
        current._id = current.left._id;
        current.key = current.left.key;
        current.value = leftNode.value;
        current.left = leftNode.left;
        current.right = leftNode.right;
        return 'Removal Successful';

      } else {
        this._id = null;
        this.key = null;
        this.value = null;
      }
    }

    else {
      if (parent._id > current._id) {
        parent.left = current.right;
        return 'Removal Successful';
        
      } else {
        parent.right = current.left;
        return 'Removal Successful';
      }
    }
  }

  _removeWithTwoChildren(parent, current) {
    let replacement = current.left;
    let replacementParent;

    while (replacement.right) {
      replacementParent = replacement;
      replacement = replacement.right;
    }

    if (!replacementParent) {
      current._id = replacement._id;
      current.key = replacement.key;
      current.value = replacement.value;
      current.left = replacement.left;
      return 'Removal Successful';
      
    } else {
      current._id = replacement._id;
      current.key = replacement.key;
      current.value = replacement.value;
      replacementParent.right = replacement.left;
      return 'Removal Successful';
    }
  }
}

module.exports = BinarySearchTree;