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
        this.left.insert(id);
        return;
      } else {
        this.left = new BinarySearchTree(id, key, value);
        return;
      }
    }

    if (this.right) {
      this.right.insert(id);
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
        foundID = id;
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
      return 'No Key Found';
    }
  }

  _removeWithOneChildOrLess(parent, current) {
    if (!parent) { // if the id is at the root
      if (current.right) {
        current._id = current.right._id;
        current.key = current.right.key;
        current.value = current.right.value;
        current.right = current.right.right;
        try {
          current.left = current.right.left;
        } catch (e) {
          current.left = null;
        }
        return 'Removal Successful';

      } else if (current.left) {
        current._id = current.left._id;
        current.key = current.left.key;
        current.value = current.left.value;
        current.left = current.left.left;
        try {
          current.right = current.left.right;
        } catch(e) {
          current.right = null;
        }
        return 'Removal Successful';

      } else {
        this._id = null;
      }
    }

    else {
      if (parent._id > current._id) {
        parent.left = current.left;
        return 'Removal Successful';
        
      } else {
        parent.right = current.right;
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