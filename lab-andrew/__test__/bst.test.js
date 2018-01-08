'use strict';

const BST = require('../lib/bst');

describe('tests for bst.js', () => {
  let testTree = new BST();
  testTree.insert(10);
  testTree.insert(15);
  testTree.insert(5);
  testTree.insert(3);
  testTree.insert(13);

  describe('testing insert function', () => {

    test('insert function should return expected values when used properly', () => {
      expect(testTree.root.right.key).toEqual(15);
      expect(testTree.root.left.key).toEqual(5);
      expect(testTree.root.left.left.key).toEqual(3);
      expect(testTree.root.right.left.key).toEqual(13);
    });

    test('insert function should correctly handle invalid input', () => {
      expect(testTree.insert(15)).toEqual(-1);
      expect(() => testTree.insert(true)).toThrow();
    });
  });

  describe('testing find function', () => {

    test('find should return an error if number is not passed', () => {
      expect(() => testTree.find(false)).toThrow();
    });

    test('find should find the correct number of an existing node', () => {
      expect(testTree.find(10)).toEqual(testTree.root);
      expect(testTree.find(13)).toEqual(testTree.root.right.left);
      expect(testTree.find(3)).toEqual(testTree.root.left.left);
    });

    test('find should return undefined if number does not exist in tree', () => {
      expect(testTree.find(11)).toBeUndefined();
      expect(testTree.find(2)).toBeUndefined();
    });
  });

  describe('testing remove function', () => {

    test('remove should return an error if number is not passed', () => {
      expect(() => testTree.remove(false)).toThrow();
    });

    test('remove should return negative 1 if node with key does not exist', () => {
      expect(testTree.remove(999)).toEqual(-1);

    });
    test('remove should be able to remove a leaf', () => {
      testTree.remove(3);
      expect(testTree.find(3)).toBeUndefined();
    });
    
    test('remove should be able to remove a node with one child', () => {
      testTree.remove(15);
      expect(testTree.find(15)).toBeUndefined();
      expect(testTree.root.right.key).toEqual(13);

    });

    test('remove should be able to remove a node with two children', () => {
      testTree.insert(8);
      testTree.insert(2);
      testTree.remove(5);
      expect(testTree.find(5)).toBeUndefined();
      expect(testTree.root.left.key).toEqual(8);
      expect(testTree.root.left.right).toBeNull();
      expect(testTree.root.left.left.key).toEqual(2);

    });

    test('remove should maintain sort after node removal', () =>{
      testTree.insert(15);
      testTree.insert(14);
      testTree.insert(17);
      testTree.insert(16);
      testTree.remove(15);
      expect(testTree.root.right.right.key).toEqual(16);
      testTree.remove(14);
      testTree.remove(16);
      testTree.remove(17);
    });

    test('remove should be able to remove test, with 2, 1 and 0 children', () => {
      testTree.remove(10);
      expect(testTree.root.key).toEqual(13);
      testTree.remove(13);
      expect(testTree.root.key).toEqual(8);
      testTree.remove(8);
      testTree.remove(2);
      expect(testTree.root).toBeNull();
      testTree.insert(11);
      testTree.remove(10);
      expect(testTree.root.key).toEqual(11);
    });

    test('remove should account for removing nodes in all scenarios', () => {
      testTree.insert(6);
      testTree.insert(4);
      testTree.insert(5);
      testTree.remove(6);
      expect(testTree.root.left.key).toEqual(4);
      testTree.remove(4);
      expect(testTree.root.left.key).toEqual(5);
      testTree.remove(5);
      testTree.remove(11);
      expect(testTree.root).toBeNull();
      testTree.insert(5);
      testTree.insert(10);
      testTree.remove(5);
      expect(testTree.root.key).toEqual(10);
    });

    test('remove should not be destructive', () => {
      const testTree2 = new BST();
      testTree2.insert(10);
      testTree2.insert(8);
      testTree2.insert(12);
      testTree2.insert(19);
      testTree2.remove(10);
      expect(testTree2.root.key).toEqual(12);
      expect(testTree2.root.right.key).toEqual(19);
    });
  });

});