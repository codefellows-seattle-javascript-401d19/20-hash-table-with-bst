'use strict';

const BinarySearchTree = require('../model/binary-search-tree');

describe('binary-search-tree.js', () => {
  describe('tree.getNodeCount()', () => {
    test('getNodeCount() should return 0 if there are no nodes in the tree', () => {
      const BST = new BinarySearchTree();

      expect(BST.getNodeCount()).toEqual(0);
    });

    test('getNodeCount() should return 5 if there are 5 nodes in the tree', () => {
      const BST = new BinarySearchTree();
      BST.insert({key: 'one', htValue: 1});
      BST.insert({key: 'two', htValue: 2});
      BST.insert({key: 'three', htValue: 3});
      BST.insert({key: 'four', htValue: 4});
      BST.insert({key: 'five', htValue: 5});

      expect(BST.getNodeCount()).toEqual(5);
    });
  });

  describe('tree.getRoot()', () => {
    test('getRoot() should return null if there is no root node', () => {
      const BST = new BinarySearchTree();

      expect(BST.getRoot()).toEqual(null);
    });

    test('getRoot() should return the root node of the tree', () => {
      const BST = new BinarySearchTree();
      BST.insert({key: 'one', htValue: 1});
      BST.insert({key: 'two', htValue: 2});
      BST.insert({key: 'three', htValue: 3});
      BST.insert({key: 'four', htValue: 4});
      BST.insert({key: 'five', htValue: 5});

      expect(BST.getRoot().value.htValue).toEqual(1);
    });
  });

  describe('tree.findMin()', () => {
    test('findMin() should return ', () => {
      const BST = new BinarySearchTree();

      expect(BST.findMin()).toEqual(null);
    });

    test('findMin() should return the left-most node in the tree', () => {
      const BST = new BinarySearchTree();
      BST.insert({key: 'one', htValue: 1});
      BST.insert({key: 'two', htValue: 2});
      BST.insert({key: 'three', htValue: 3});
      BST.insert({key: 'four', htValue: 4});
      BST.insert({key: 'five', htValue: 5});

      const root = BST.getRoot();

      expect(BST.findMin(root).value.htValue).toEqual(5);
    });
  });

  describe('tree.find()', () => {
    test('find() should return null if there is no such node in the tree', () => {
      const BST = new BinarySearchTree();
      BST.insert({key: 'one', htValue: 1});
      BST.insert({key: 'two', htValue: 2});
      BST.insert({key: 'three', htValue: 3});
      BST.insert({key: 'four', htValue: 4});
      BST.insert({key: 'five', htValue: 5});

      expect(BST.find('three').value.htValue).toEqual(3);
      expect(BST.find('five').value.htValue).toEqual(5);
    });
  });
});
