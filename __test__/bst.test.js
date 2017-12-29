
'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('testing binary-search-tree.js', () => {
  
  describe('testing that insert method functions properly', () => {
    test('testing that insert method is returning expected value', () => {
      let bst = new BinarySearchTree();

      bst.insert({key: 'a', hashTableValue: 'dalton'});
      bst.insert({key: 'b', hashTableValue: 'carr'});
      bst.insert({key: 'c', hashTableValue: 'New york'});
      expect(bst.root.left).toBeFalsy();
      expect(bst.root.right).toBeTruthy();
      expect(bst.root.right.right).toBeTruthy();
      expect(bst.root.right.left).toBeFalsy();
    });

    test('testing that insert method will throw an error if value already exists', () => {
      let bst = new BinarySearchTree();
      
      bst.insert({key: 'coffee', hashTableValue: 'starbucks'});
      expect(() => bst.insert({key: 'coffee', hashTableValue: 'starbucks'})).toThrow();
    });
  });

  describe('testing that find method functions properly', () => {
    test('testing that find method will return the requested value of the node', () => {
      let bst = new BinarySearchTree();
      
      bst.insert({key: 'a', hashTableValue: 'small'});
      bst.insert({key: 'ab', hashTableValue: 'medium'});
      bst.insert({key: 'abc', hashTableValue: 'large'});
      expect(bst.find('ab')).toBeTruthy();
      expect(bst.find('abc').value.key).toEqual('abc');
      expect(bst.find('a')).toBeTruthy();
      expect(bst.find('a').value.key).toEqual('a');
    });

    test('testing that find method will return null if value is not in bst', () => {
      let bst = new BinarySearchTree();
      
      expect(bst.find('seattle')).toBeNull();
    });
  });

  describe('testing that remove method functions properly', () => {
    test('testing that remove method will remove the node with the passed in value', () => {
      let bst = new BinarySearchTree();
      
      bst.insert({key: 'LA', hashTableValue: 'firstCity'});
      bst.insert({key: 'Seattle', hashTableValue: 'secondCity'});
      bst.insert({key: 'Oakland', hashTableValue: 'thirdCity'});
      bst.remove('Seattle');
      expect(bst.root.value.key).toEqual('LA');
      expect(bst.root.right.value.key).toEqual('Oakland');
    });

    test('testing that remove  will return null if value is not found in bst', () => {
      let bst = new BinarySearchTree();
      
      expect(bst.remove('Seattle')).toBeNull();
    });
  });
});