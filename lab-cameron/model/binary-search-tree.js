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
    if (typeof value !== 'number') {
      throw new TypeError('value should be a number');
    }

    const newNode = new Node(value);

    const insertValue = (node, newNode) => {
      if (node.value >= newNode.value) {
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

  this.remove = value => {
    let result = null;
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
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
        node.right = removeNode(node.right, temp.value);
        return node;
      }
    };

    root = removeNode(root, value);

    // Return result as Node
    if (result) {
      result = new Node(result);
    }
    return result;
  };
};

module.exports = BinarySearchTree;
