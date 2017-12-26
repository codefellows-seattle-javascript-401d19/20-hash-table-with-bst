'use strict';

const BinarySearchTree = function() {
  const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  let root = null;
  let nodeCount = 0;

  this.insert = value => {
    const newNode = new Node(value);

    const insertValue = (node, newNode) => {
      if (node.value.key >= newNode.value.key) {
        if (!node.left) {
          node.left = newNode;
          nodeCount++;
          return;
        }
        insertValue(node.left, newNode);
        return;
      }
      if (!node.right) {
        node.right = newNode;
        nodeCount++;
        return;
      }
      insertValue(node.right, newNode);
      return;
    };

    if (!root) {
      root = newNode;
      nodeCount++;
      return;
    } else {
      insertValue(root, newNode);
      return;
    }
  };

  this.find = key => {
    const findNode = (node, key) => {
      if (node.value.key > key) {
        return findNode(node.left, key);
      } else if (node.value.key < key) {
        return findNode(node.right, key);
      } else {
        return node;
      }
    };

    if (!root) {
      return null;
    } else {
      findNode(root, key);
      return;
    }
  };

  this.getNodeCount = () => {
    return nodeCount;
  };

  this.getRoot = () => {
    return root;
  };

  this.findMin = node => {
    if (!root) {
      return null;
    }

    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };

  this.remove = key => {
    let result = null;

    const removeNode = (node, key) => {
      if (node === null) {
        return null;
      }
      if (key < node.value.key) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.value.key) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          result = node.value;
          node = null;
          nodeCount--;
          return node;
        }

        if (node.left === null) {
          result = node.value;
          node = node.right;
          nodeCount--;
          return node;
        } else if (node.right === null) {
          result = node;
          node = node.left;
          nodeCount--;
          return node;
        }

        const temp = this.findMin(node.right);
        node.value = temp.value;
        node.right = removeNode(node.right, temp.value.key);
        return node;
      }
    };

    root = removeNode(root, key);

    // Return result as Node
    if (result) {
      result = new Node(result);
    }
    return result;
  };
};

let BST = new BinarySearchTree();
BST.insert({key: 'one', htValue: 1});
BST.insert({key: 'two', htValue: 2});
BST.insert({key: 'three', htValue: 3});
BST.insert({key: 'four', htValue: 4});
BST.insert({key: 'five', htValue: 5});

console.log(BST.remove('five'));
console.log(BST.getRoot().left);

module.exports = BinarySearchTree;
