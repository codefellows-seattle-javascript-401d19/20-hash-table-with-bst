
'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('testing binary-search-tree.js', () => {
  let bst = new BinarySearchTree(10);
  bst.insert(1);
  bst.insert(3);
  bst.insert(8);
  bst.insert(11);
  bst.insert(18);

  describe('testing that insert method functions properly', () => {

    test('testing that insert method is returning expected value', () => {
      expect(bst.right.value).toEqual(11);
      expect(bst.left.value).toEqual(1);
      expect(bst.left.right.value).toEqual(3);
    });

    test('testing that insert method will throw an error with invalid input', () => {
      expect(() => bst.insert(11)).toThrow();
      expect(() => bst.insert('invalid')).toThrow();
    });
  });

  describe('testing that find method functions properly', () => {
    test('testing that find method will return the requested value of the node', () => {
      expect(bst.find(10).value).toEqual(10);
      expect(bst.find(11).value).toEqual(11);
    });

    test('testing that find method will return false if value is not in bst', () => {
      expect(bst.find(2)).toEqual(null);
      expect(bst.find(4)).toEqual(null);
    });
  });

  describe('testing that remove method functions properly', () => {
    test('testing that remove method will remove the node with the passed in value', () => {
      bst.remove(1);
      expect(bst.left.left).toEqual(null);
      expect(bst.left.value).toEqual(3);
      expect(bst.right.right.value).toEqual(18);
    });

    test('testing that remove method will remove the root node', () => {
      bst.remove(10);
      expect(bst.value).toEqual(11);
      expect(bst.right.value).toEqual(18);
    });

    test('testing that remove method will throw an error with invalid input', () => {
      bst.remove(10);
      expect(() => bst.remove('invalid')).toThrow();
    });
  });
});