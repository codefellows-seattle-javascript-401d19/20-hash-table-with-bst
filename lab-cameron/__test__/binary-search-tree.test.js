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

      expect(BST.find('seven')).toEqual(null);
    });

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

  describe('tree.insert()', () => {
    test('insert() should insert nodes into the BST according to keys string value', () => {
      const BST = new BinarySearchTree();
      const one = { key: 'one', htValue: 1 };
      const two = { key: 'two', htValue: 2 };
      const three = { key: 'three', htValue: 3 };
      const four = { key: 'four', htValue: 4 };
      const five = { key: 'five', htValue: 5 };

      expect(BST.getNodeCount()).toEqual(0);

      BST.insert(one);
      expect(BST.getNodeCount()).toEqual(1);


      BST.insert(two);
      expect(BST.getNodeCount()).toEqual(2);

      BST.insert(three);
      expect(BST.getNodeCount()).toEqual(3);

      BST.insert(four);
      expect(BST.getNodeCount()).toEqual(4);

      BST.insert(five);
      expect(BST.getNodeCount()).toEqual(5);

      const root = BST.getRoot();

      expect(root.left.value).toEqual(four);
      expect(root.left.left.value).toEqual(five) ;
      expect(root.right.value).toEqual(two);
      expect(root.right.left.value).toEqual(three);
    });
  });

  describe('tree.remove()', () => {
    test('remove() should remove the node with the provided key from the tree and return it', () => {
      const BST = new BinarySearchTree();
      const one = { key: 'one', htValue: 1 };
      const two = { key: 'two', htValue: 2 };
      const three = { key: 'three', htValue: 3 };
      const four = { key: 'four', htValue: 4 };
      const five = { key: 'five', htValue: 5 };

      BST.insert(one);
      BST.insert(two);
      BST.insert(three);
      BST.insert(four);
      BST.insert(five);

      const root = BST.getRoot();

      // check node counts, tree structure and removed node before and after
      expect(BST.getNodeCount()).toEqual(5);
      expect(root.right.left.value).toEqual(three);
      expect(BST.remove('three')).toEqual(three.key);
      expect(root.right.left).toEqual(null);
      expect(BST.getNodeCount()).toEqual(4);

      expect(BST.getNodeCount()).toEqual(4);
      expect(root.left.value).toEqual(four);
      expect(BST.remove('four')).toEqual(four.key);
      expect(root.left.value).toEqual(five);
      expect(BST.getNodeCount()).toEqual(3);

      expect(BST.getNodeCount()).toEqual(3);
      expect(root.left.value).toEqual(five);
      expect(BST.remove('one')).toEqual(one.key);
    });
  });
});
