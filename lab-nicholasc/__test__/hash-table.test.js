'use strict';

const HashTable = require('../model/hash-table');

const BST = require('../model/search-tree');


describe('/lib/search-tree', () => {



  let notATree = new BST(10);
  notATree.value = null;

  describe('Binary Search Tree', () => {
    test.only('remove', () => {
      let mockBST = new BST();
      mockBST.insert(9, 9);
      mockBST.insert(8, 8);
      mockBST.insert(10, 10);
      mockBST.insert(12, 12);
      mockBST.insert(11, 11);
      mockBST.insert(15, 15);
      console.log(mockBST);
      console.log(mockBST.toString());
      expect(mockBST.toString()).toEqual(' 8  9  10  11  12  15 ');
      mockBST.remove(12);
      expect(mockBST.toString()).toEqual(' 8  9  10  11  15 ');
    });
    test('remove from null', () => {
      let nullBST = new BST();
      nullBST.value = null;
      expect(nullBST.remove(9)).toEqual(null);
    });
    //TODO: remove specific things
    test('remove head', () => {
      let headTree = new BST();
      headTree.insert(10);
      headTree.insert(8);
      headTree.insert(12);
      headTree.insert(11);
      headTree.insert(15);
    });

    test('remove right leaf', () => {
      let rightTree = new BST();
      rightTree.insert(10);
      rightTree.insert(8);
      rightTree.insert(12);
      expect(rightTree.right.value).toEqual(12);
      rightTree.remove(12);
      expect(rightTree.right).toEqual(null);
    });

    test('remove node with left and right', () => {
      let testTree = new BST(10);
      testTree.insert(8);
      testTree.insert(12);
      testTree.insert(11);
      testTree.insert(15);
      expect(testTree.right.value).toEqual(12);
      testTree.remove(12);
      expect(testTree.right.value).toEqual(15);
    });
  });
});
