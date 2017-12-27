'use strict';

const BinarySearchTree = require(`../model/binary-search-tree`);

describe(`BST`, () => {
  test(`INSERT should add a value to the correct location in the BST`, () => {
    let tree = new BinarySearchTree();
    tree.insert({key: 'king', HTvalue: 'caesar'});
    tree.insert({key: 'queen', HTvalue: 'cleopatra'});
    expect(tree.root.right).toBeTruthy();
    expect(tree.root.left).toBeFalsy();

    tree.insert({key: 'whale', HTvalue: 'moby'});
    expect(tree.root.right.right).toBeTruthy();
    expect(tree.root.right.left).toBeFalsy();
  });

  test(`INSERT should throw an error if a node already exists with the specified value`, () => {
    let tree = new BinarySearchTree();
    tree.insert({key: 'student', HTvalue: 'me'});

    expect(() => {
      tree.insert({key: 'student', HTvalue: 'me'});
    }).toThrow();
  });

  test(`FIND should return the node with a value matching the value argument provided`, () => {

  });

  test.only(`FIND should return null if no node is found with a matching value`, () => {
    let tree = new BinarySearchTree();
    expect(tree.find('musketeers')).toBeNull();
  });

  test(`REMOVE should remove the specified value from the BST and restructure nodes as necessary to maintain the sorted order`, () => {
    let tree = new BinarySearchTree();
    tree.insert({key: 'human', HTvalue: 'mowgli'});
    tree.insert({key: 'tiger', HTvalue: 'shere khan'});
    tree.insert({key: 'panther', HTvalue: 'bagheera'});
    tree.insert({key: 'bear', HTvalue: 'baloo'});
    tree.insert({key: 'elephant', HTvalue: 'hathi'});
    tree.insert({key: 'python', HTvalue: 'kaa'});

    tree.remove('tiger');
    expect(tree.root.left.value.key).toEqual('bear');
  });

  test(`REMOVE should return null if no entry is found with a matching key`, () => {
    let tree = new BinarySearchTree();
    expect(tree.remove('wolf')).toBeNull();
  });
});
