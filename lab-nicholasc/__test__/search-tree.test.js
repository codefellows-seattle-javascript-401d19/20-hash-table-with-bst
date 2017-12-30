'use strict';

const BST = require('../model/search-tree');


describe('/model/search-tree', () => {



  let notATree = new BST(10);
  notATree.value = null;

  describe('Binary Search Tree', () => {
    test('remove', () => {
      let mockBST = new BST();
      mockBST.insert('nine', 9);
      mockBST.insert('eight', 8);
      mockBST.insert('ten', 10);
      mockBST.insert('twelve', 12);
      mockBST.insert('eleven', 11);
      mockBST.insert('fifteen', 15);
      expect(mockBST.toString()).toEqual(' 8  11  15  9  10  12 ');
      mockBST.remove('fifteen');
      expect(mockBST.toString()).toEqual(' 8  11  9  10  12 ');
    });
    test('remove head', () => {
      let headTree = new BST();
      headTree.insert('ten', 10);
      headTree.insert('eight', 8);
      headTree.insert('twelve', 12);
      headTree.insert('eleven', 11);
      headTree.insert('fifteen', 15);
      headTree.remove('ten');
    });

    test('remove right leaf', () => {
      let rightTree = new BST();
      rightTree.insert('ten', 10);
      rightTree.insert('eight', 8);
      rightTree.insert('twelve', 12);
      expect(rightTree.root.right.value).toEqual(12);
      rightTree.remove('twelve');
      expect(rightTree.root.right).toEqual(null);
    });
  });
});
