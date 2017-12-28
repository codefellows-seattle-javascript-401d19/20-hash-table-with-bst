'use strict';

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Binary Search Tree - value should be a number');
    }
    if (this.value === value) {
      throw new Error('Binary Search Tree - value is already present');
    }

    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
        return;
      } else {
        this.left = new BinarySearchTree(value);
        return;
      }
    }

    if (this.right) {
      this.right.insert(value);
      return;
    } else {
      this.right = new BinarySearchTree(value);
      return;
    }
  }

  find(value) {
    if (value === this.value) {
      return true;
    }

    if (this.value > value) {
      if (this.left) {
        return this.left.find(value);
      } else {
        return false;
      } 
    }

    if (this.right) {
      return this.right.find(value);
    } else {
      return false;
    }
  }

  remove(value) {
    let foundValue;
    let parent;
    let current = this;

    while (!foundValue && current !== null) {
      if (current.value > value) {
        parent = current;
        current = current.left;

      } else if (current.value < value) {
        parent = current;
        current = current.right;

      } else {
        foundValue = value;
      }
    }

    if (foundValue) {
      if (current.left && current.right) {
        return this._removeWithTwoChildren(parent, current);
      }

      else {
        return this._removeWithOneChildOrLess(parent, current);
      }

    } else {
      return 'No Node Found';
    }
  }

  _removeWithOneChildOrLess(parent, current) {
    if (!parent) { // if the value is at the root
      if (current.right) {
        current.value = current.right.value;
        current.right = current.right.right;
        try {
          current.left = current.right.left;
        } catch (e) {
          current.left = null;
        }
        return;

      } else if (current.left) {
        current.value = current.left.value;
        current.left = current.left.left;
        try {
          current.right = current.left.right;
        } catch(e) {
          current.right = null;
        }
        return;

      } else {
        this.value = null;
      }
    }

    else {
      if (parent.value > current.value) {
        return parent.left = current.left;
      } else {
        return parent.right = current.right;
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
      current.value = replacement.value;
      current.left = replacement.left;
    } else {
      current.value = replacement.value;
      replacementParent.right = replacement.left;
    }
  }
}

module.exports = BinarySearchTree;