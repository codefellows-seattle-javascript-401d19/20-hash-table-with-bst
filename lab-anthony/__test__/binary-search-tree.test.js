'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('Binary Seach Tree', () => {

  let bst = new BinarySearchTree(10);
  bst.insert(new BinarySearchTree({key: 'key', htValue: 'value'}));

  test('Binary Search Tree insert test', () => {
    console.log(bst);
    expect(bst.value).toBe(10);
    expect(bst.right).toBeInstanceOf(Object);
  });
});
