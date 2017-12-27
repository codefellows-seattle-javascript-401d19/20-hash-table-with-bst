'use strict';

const BinarySearchTree = require(`../model/binary-search-tree`);

describe(`BST`, () => {
  test.only(`INSERT should add a value to the correct location in the BST`, () => {
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
    tree.insert();

    expect(() => {
      tree.insert();
    }).toThrow();
  });

  test(`REMOVE should remove the specified value from the BST and restructure nodes as necessary to maintain the sorted order`, () => {
    let tree = new BinarySearchTree();
    tree.insert({cat: 'tabby'});
    // tree.insert();
    // tree.insert();
    // tree.insert();
    // tree.insert();
    // tree.insert();
    // tree.insert();
    // tree.insert();
    // tree.insert();
    // tree.insert();
    // tree.insert();

    // tree.remove();
    console.log(tree.root);
    // expect(tree.root.left.left).toEqual(null);

    // tree.remove();
    // expect(tree.root.left.right.value).toEqual();
    //
    // tree.remove();
    // expect(tree.root.right.value).toEqual();
    // expect(tree.root.right.left.value).toEqual();
    // expect(tree.root.right.right.value).toEqual();
    // expect(tree.root.right.right.right.value).toEqual();
  });
});
