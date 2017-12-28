'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe.only('insert', () => {
  test('Insert adds keys and values to the bst', () => {
    let bst = new BinarySearchTree('foo', 11);
    bst.insert(new BinarySearchTree('bar', 21));

    expect(bst.left.key).toEqual('bar');
    expect(bst.left.value).toEqual(21);
  });

  test('Insert with a more complicated tree', () => {
    let bst = new BinarySearchTree('j', 1);
    bst.insert(new BinarySearchTree('d', 2));
    bst.insert(new BinarySearchTree('r', 3));
    bst.insert(new BinarySearchTree('a', 4));
    bst.insert(new BinarySearchTree('f', 5));
    bst.insert(new BinarySearchTree('w', 6));

    expect(bst.left.left.key).toEqual('a');
    expect(bst.right.right.value).toEqual(6);
  });
  test('Remove a leaf', () => {
    let bst = new BinarySearchTree('j', 1);
    bst.insert(new BinarySearchTree('d', 2));
    bst.insert(new BinarySearchTree('r', 3));
    bst.insert(new BinarySearchTree('a', 4));
    bst.insert(new BinarySearchTree('f', 5));
    bst.insert(new BinarySearchTree('w', 6));
    bst.remove('w');

    expect(bst.right.right).toBeNull();
  });

  test('Remove a node with one child', () => {
    let bst = new BinarySearchTree('j', 1);
    bst.insert(new BinarySearchTree('d', 2));
    bst.insert(new BinarySearchTree('r', 3));
    bst.insert(new BinarySearchTree('a', 4));
    bst.insert(new BinarySearchTree('f', 5));
    bst.insert(new BinarySearchTree('w', 6));

    bst.remove('r');

    expect(bst.right.value).toEqual(6);
  });

  test('Remove a node with two children', () => {
    let bst = new BinarySearchTree('j', 1);
    bst.insert(new BinarySearchTree('d', 2));
    bst.insert(new BinarySearchTree('r', 3));
    bst.insert(new BinarySearchTree('a', 4));
    bst.insert(new BinarySearchTree('f', 5));
    bst.insert(new BinarySearchTree('w', 6));

    bst.remove('d');

    expect(bst.left.value).toEqual(5);
  });

  test('Remove the root node', () => {
    let bst = new BinarySearchTree('j', 1);
    bst.insert(new BinarySearchTree('d', 2));
    bst.insert(new BinarySearchTree('r', 3));
    bst.insert(new BinarySearchTree('a', 4));
    bst.insert(new BinarySearchTree('f', 5));
    bst.insert(new BinarySearchTree('w', 6));

    bst.remove('j');

    expect(bst.value).toEqual(3);
  });
});
