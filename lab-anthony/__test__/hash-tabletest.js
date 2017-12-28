'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');
const HashTable = require('../lib/hash-table');

describe('Hash Table Test', () => {

  let ht = new HashTable();
  ht.set('key', 'value');

  test('generate hash should return a number based on the characters passed in', () =>{
    expect(ht._generateHash('value')).toBe(541);
  });

  test('set, hash of key should be an instance of a binary search tree', () => {
    let hash = ht._generateHash('key');
    expect(ht._buckets[hash]).toBeInstanceOf(BinarySearchTree);
  });

  test('get should return value if key is passed in', () => {
    expect(ht.get('key')).toBe('value');
  });

  test('get should return undefined if a key is not found', () => {
    expect(ht.get('lock')).toBe(undefined);
  });

  test('delete, if successful should return true', () => {
    expect(ht.delete('key')).toBe(true);
  });

  test('delete, if unsuccessful in finding a key to delete should return false', () => {
    expect(ht.delete('lock')).toBe(false);
  });
});
