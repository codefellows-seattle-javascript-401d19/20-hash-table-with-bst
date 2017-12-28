'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');
const HashTable = require('../lib/hash-table');

describe('Hash Table constructor', () => {
  test('hash table can be constructed with default bucket size', () => {
    let hashTable = new HashTable;

    expect(hashTable._capacity).toEqual(1024);
  });

});

describe('_generateHash', () => {
  test('generates a valid hash when passed a key', () => {
    let hashTable = new HashTable;

    expect(hashTable._generateHash('test')).toEqual(448);
  });

  test('throws an error if the key is not a string', () => {
    let hashTable = new HashTable;

    expect( () => hashTable._generateHash(0)).toThrow();
  });
});

describe('set', () => {
  test('set a key:value pair to a bucket', () => {
    let hashTable = new HashTable;
    hashTable.set('test', 100);
    let hash = hashTable._generateHash('test');
    expect(hashTable._buckets[hash]).toBeInstanceOf(BinarySearchTree);
    expect(hashTable._buckets[hash].key).toEqual('test');
    expect(hashTable._buckets[hash].value).toEqual(100);

  });

  test('update an existing value', () => {
    let hashTable = new HashTable;
    hashTable.set('test', 100);
    let hash = hashTable._generateHash('test');
    expect(hashTable._buckets[hash].value).toEqual(100);

    hashTable.set('test', 200);
    expect(hashTable._buckets[hash].value).toEqual(200);
  });

  test('if collision, key:value pairs should be stored in a bst', () => {
    let hashTable = new HashTable;
    hashTable.set('test', 100);
    hashTable.set('tset', 200);
    let hash = hashTable._generateHash('test');

    expect(hashTable._buckets[hash].value).toEqual(100);
    expect(hashTable._buckets[hash].right.value).toEqual(200);
  });

  describe('get', () => {
    test('returns a value when a valid key is passed in', () => {
      let hashTable = new HashTable;
      hashTable.set('test', 100);

      expect(hashTable.get('test')).toEqual(100);
    });
    test('returns undefined if the key is not found', () => {
      let hashTable = new HashTable;
      hashTable.set('test', 100);

      expect(hashTable.get('junk')).toBeUndefined();
    });
  });

  describe('delete', () => {
    test('removes a key:value pair from the bst if called on a valid key', () => {
      let hashTable = new HashTable;
      hashTable.set('test', 100);

      hashTable.delete('test');
      expect(hashTable.get('test')).toBeUndefined();
    });

    test('deleting a non-existant key should return false', () => {
      let hashTable = new HashTable;
      hashTable.set('test', 100);

      expect(hashTable.delete('wrong')).toBeFalsy();

    });
  });
});
