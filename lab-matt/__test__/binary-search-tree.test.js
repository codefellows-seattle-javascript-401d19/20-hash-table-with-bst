'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('Binary Search Tree', () => {
  let bsTree = new BinarySearchTree(8, 'eight', 8.8);

  bsTree.insert(5, 'five', 5.5);
  bsTree.insert(1, 'one', 1.1);
  bsTree.insert(9, 'nine', 9.9);
  bsTree.insert(3, 'three', 3.3);
  bsTree.insert(4, 'four', 4.4);

  describe('.insert(id, key, value)', () => {
    test('should properly append a new child to a specific binarySearchTree', () => {
      expect(bsTree.key).toEqual('eight');
      expect(bsTree.left._id).toEqual(5);
      expect(bsTree.left.left.value).toEqual(1.1);
      expect(bsTree.right.key).toEqual('nine');
      expect(bsTree.left.left.right._id).toEqual(3);
      expect(bsTree.left.left.right.right.value).toEqual(4.4);
    });

    test('should throw an error if the key (or Id) is already present', () => {
      expect(() => {
        bsTree.insert(5, 'new five', 5.6);
      }).toThrow();
      expect(() => {
        bsTree.insert(3, 'three', 3.4);
      }).toThrow();
    });
  });

  describe('.find(id)', () => {
    test('finds the given key (or Id) in the tree and returns the value', () => {
      expect(bsTree.find(1)).toEqual(1.1);
      expect(bsTree.find(3)).toEqual(3.3);
      expect(bsTree.find(4)).toEqual(4.4);
      expect(bsTree.find(5)).toEqual(5.5);
      expect(bsTree.find(8)).toEqual(8.8);
      expect(bsTree.find(9)).toEqual(9.9);
    });
    
    test('should return undefined if the key (or Id) is not found', () => {
      expect(bsTree.find(1)).toEqual(1.1);
      expect(bsTree.find(0)).toEqual(undefined);
      expect(bsTree.find(20)).toEqual(undefined);
      expect(bsTree.find(100)).toEqual(undefined);
      expect(bsTree.find(200)).toEqual(undefined);
      expect(bsTree.find(300)).toEqual(undefined);
    });
  });

  describe('.remove(id)', () => {
    test('should remove the given value and replace the values appropriately', () => {
      expect(bsTree.key).toEqual('eight');
      expect(bsTree.left._id).toEqual(5);
      expect(bsTree.left.left.value).toEqual(1.1);
      expect(bsTree.right.key).toEqual('nine');
      expect(bsTree.left.left.right._id).toEqual(3);
      expect(bsTree.left.left.right.right.value).toEqual(4.4);

      bsTree.remove(8);
      expect(bsTree.key).toEqual('five');

      bsTree.remove(9);
      expect(bsTree.right).toBeNull();

      bsTree.remove(1);
      expect(bsTree.left.value).toEqual(3.3);

      bsTree.remove(5);
      expect(bsTree.value).toEqual(3.3);

      bsTree.remove(3);
      expect(bsTree._id).toEqual(4);

      bsTree.remove(4);
      expect(bsTree._id).toBeNull();
      expect(bsTree.key).toBeNull();
      expect(bsTree.value).toBeNull();
      expect(bsTree.left).toBeNull();
      expect(bsTree.right).toBeNull();

      let bsTree2 = new BinarySearchTree(9, 'nine', 9.9);
      bsTree2.insert(4, 'four', 4.4);
      bsTree2.insert(1, 'one', 1.1);
      bsTree2.insert(3, 'three', 3.3);
      bsTree2.insert(5, 'five', 5.5);

      bsTree2.remove(4);
      expect(bsTree2.left._id).toEqual(3);
      expect(bsTree2.left.right._id).toEqual(5);
      
      bsTree2.remove(5);
      bsTree2.remove(1);
      expect(bsTree2.left.left).toBeNull();
    });
  });
});