'use strict';

const BinarySearchTree = require(`../model/binary-search-tree`);

describe(`BST`, () => {
  test(`INSERT should add a value to the correct location in the BST`, () => {
    let tree = new BinarySearchTree();
    tree.insert(9);
    tree.insert(4);
    expect(tree.root.left.value).toEqual(4);

    tree.insert(17);
    expect(tree.root.right.value).toEqual(17);
  });
  test(`INSERT should throw an error if a node already exists with the specified value`, () => {
    let tree = new BinarySearchTree();
    tree.insert(4);
    
    expect(() => {
      tree.insert(4);
    }).toThrow();
  });

  test(`REMOVE should remove the specified value from the BST and restructure nodes as necessary to maintain the sorted order`, () => {
    let tree = new BinarySearchTree();
    tree.insert(9);
    tree.insert(4);
    tree.insert(17);
    tree.insert(3);
    tree.insert(8);
    tree.insert(13);
    tree.insert(21);
    tree.insert(19);
    tree.insert(6);
    tree.insert(23);
    tree.insert(27);

    tree.remove(3);
    expect(tree.root.left.left).toEqual(null);

    tree.remove(8);
    expect(tree.root.left.right.value).toEqual(6);

    tree.remove(21);
    expect(tree.root.right.value).toEqual(17);
    expect(tree.root.right.left.value).toEqual(13);
    expect(tree.root.right.right.value).toEqual(19);
    expect(tree.root.right.right.right.value).toEqual(23);
  });
});
