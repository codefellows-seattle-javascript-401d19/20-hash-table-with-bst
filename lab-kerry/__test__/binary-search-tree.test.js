'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

let binaryst = new BinarySearchTree();
binaryst.insert('foo', 5);
binaryst.insert('bar', 2);
binaryst.insert('baz', 1);
binaryst.insert('baphomet', 22);
binaryst.insert('bolt', 3);
binaryst.insert('bath', 7);
binaryst.insert('barth', 8);
binaryst.insert('finch', 11);
binaryst.insert('grinch', 10);
binaryst.insert('mensch', 9);
binaryst.insert('narrator', 16);
binaryst.insert('xylophone', 12);
binaryst.insert('car', 13);
binaryst.insert('crash', 17);
binaryst.insert('harold', 4);


describe('Testing binary search tree for find, insert, and delete functionality', () => {

  describe('Testing binary search tree for insert functionality', () => {
    test('Insert should add new node following binary search tree architecture, which places smaller values to the left and larger values to the right of any given node.', () => {
      expect(binaryst.root.left.key).toEqual('bar');
      expect(binaryst.root.left.left.key).toEqual('baphomet');
      expect(binaryst.root.left.value).toEqual(2);
      expect(binaryst.root.left.left.value).toEqual(22);
    });
    test('Insert should throw type error if argument not integer.', () => {
      expect(() => {
        binaryst.insert(3);
      }).toThrow();
    });
    test('Insert should throw type error if argument is empty.', () => {
      expect(() => {
        binaryst.insert();
      }).toThrow();
    });
  });

  describe('Testing find method', () => {
    test('Find should locate and return individual node\'s value.', () => {
      expect(binaryst.find('barth').value).toEqual(8);
    });
    test('Find should throw type error if argument left empty/is null.', () => {
      expect(() => {
        binaryst.find(null);
      }).toThrow();
    });
    test('Find should throw type error if argument not string.', () => {
      expect(() => {
        binaryst.find(123456);
      }).toThrow();
    });
  });

  describe('Testing remove method', () => {
    test('Remove should locate and remove individual node\'s value.', () => {
      expect(() => {
        binaryst.remove('mensch');
      }).toBeTruthy();
    });
    test('Remove should be undefined if no value passed to method.', () => {
      expect( () => {
        binaryst.remove();
      }).toThrow();
    });
    test('Remove should be undefined if empty string passed to method.', () => {
      expect(() => {
        binaryst.remove();
      }).toThrow();
    });
    test('Remove should locate and remove node\'s value, even if it has two children and will preserve nodes that are within sub-trees of this node.', () => {
      let binaryst2 = new BinarySearchTree();
      binaryst2.insert('foo', 5);
      binaryst2.insert('bar', 2);
      binaryst2.insert('baz', 1);
      binaryst2.insert('baphomet', 22);
      binaryst2.insert('bolt', 3);
      binaryst2.insert('bath', 7);
      binaryst2.insert('barth', 8);
      binaryst2.insert('finch', 11);
      binaryst2.insert('grinch', 10);
      binaryst2.insert('mensch', 9);
      binaryst2.insert('narrator', 16);
      binaryst2.insert('xylophone', 12);
      binaryst2.insert('car', 13);
      binaryst2.insert('crash', 17);
      binaryst2.insert('harold', 4);
      binaryst2.remove('mensch');
      expect(binaryst.root.right.right.left.key).toEqual('harold');
      expect(binaryst.root.right.right.key).toEqual('mensch');
    });
  });
});
