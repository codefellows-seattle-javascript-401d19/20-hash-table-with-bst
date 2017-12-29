
'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('testing binary-search-tree.js', () => {
  
  describe('testing that insert method functions properly', () => {
    test('testing that insert method is returning expected value', () => {
      let bst = new BinarySearchTree();

      bst.insert({key: 'city', hashTableValue: 'olympia'});
      bst.insert({key: 'weather', hashTableValue: 'snow'});
      bst.insert({key: 'zoo', hashTableValue: 'Seattle'});
      expect(bst.root.left).toBeFalsy();
      expect(bst.root.right).toBeTruthy();
      expect(bst.root.right.right).toBeTruthy();
      expect(bst.root.right.left).toBeFalsy();
    });

    test('testing that insert method will throw an error if value already exists', () => {
      let bst = new BinarySearchTree();
      
      bst.insert({key: 'coffee', hashTableValue: 'streetBean'});
      expect(() => bst.insert({key: 'coffee', hashTableValue: 'streetBean'})).toThrow();
    });
  });

  describe('testing that find method functions properly', () => {
    test('testing that find method will return the requested value of the node', () => {
      let bst = new BinarySearchTree();
      
      bst.insert({key: 'ants', hashTableValue: 'small'});
      bst.insert({key: 'dogs', hashTableValue: 'medium'});
      bst.insert({key: 'zebras', hashTableValue: 'large'});
      expect(bst.find('dogs')).toBeTruthy();
      expect(bst.find('zebras').value.key).toEqual('zebras');
      expect(bst.find('ants')).toBeTruthy();
      expect(bst.find('ants').value.key).toEqual('ants');
    });

    test('testing that find method will return null if value is not in bst', () => {
      let bst = new BinarySearchTree();
      
      expect(bst.find('cities')).toBeNull();
    });
  });

  describe('testing that remove method functions properly', () => {
    test('testing that remove method will remove the node with the passed in value', () => {
      let bst = new BinarySearchTree();
      
      bst.insert({key: 'Atlanta', hashTableValue: 'firstCity'});
      bst.insert({key: 'Boston', hashTableValue: 'secondCity'});
      bst.insert({key: 'Oakland', hashTableValue: 'thirdCity'});
      bst.remove('Boston');
      expect(bst.root.value.key).toEqual('Atlanta');
      expect(bst.root.right.value.key).toEqual('Oakland');
    });

    test('testing that remove  will return null if value is not found in bst', () => {
      let bst = new BinarySearchTree();
      
      expect(bst.remove('Seattle')).toBeNull();
    });
  });
});