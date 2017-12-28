
'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('testing binary-search-tree.js', () => {
  let bst = new BinarySearchTree();

  describe('testing that insert method functions properly', () => {
    test('testing that insert method is returning expected value', () => {
      bst.insert({key: 'city', hashTableValue: 'olympia'});
      bst.insert({key: 'weather', hashTableValue: 'snow'});
      bst.insert({key: 'zoo', hashTableValue: 'Seattle'});
      expect(bst.root.left).toBeFalsy();
      expect(bst.root.right).toBeTruthy();
      expect(bst.root.right.right).toBeTruthy();
      expect(bst.root.right.left).toBeFalsy();
    });

    test('testing that insert method will throw an error if value already exists', () => {
      bst.insert({key: 'city', hashTableValue: 'olympia'});
      expect(() => bst.insert({key: 'city', hashTableValue: 'olympia'})).toThrow();
    });
  });

  describe('testing that find method functions properly', () => {
    test('testing that find method will return the requested value of the node', () => {
      bst.insert({key: 'Asheville', hashTableValue: 'firstCity'});
      bst.insert({key: 'Boston', hashTableValue: 'secondCity'});
      bst.insert({key: 'Oakland', hashTableValue: 'thirdCity'});
      expect(bst.find('Boston')).toBeTruthy();
      expect(bst.find('Oakland').value.key).toEqual('Oakland');
    });

    test('testing that find method will return null if value is not in bst', () => {
      expect(bst.find('cities')).toBeNull();
    });
  });

  describe('testing that remove method functions properly', () => {
    test('testing that remove method will remove the node with the passed in value', () => {
      bst.insert({key: 'Asheville', hashTableValue: 'firstCity'});
      bst.insert({key: 'Boston', hashTableValue: 'secondCity'});
      bst.insert({key: 'Oakland', hashTableValue: 'thirdCity'});
      bst.remove('Boston');
      expect(bst.root.value.key).toEqual('Asheville');
      expect(bst.root.right.value.key).toEqual('Oakland');
    });

    test('testing that remove  will return null if value is not found in bst', () => {
      expect(bst.remove('Seattle')).toBeNull();
    });
  });
});