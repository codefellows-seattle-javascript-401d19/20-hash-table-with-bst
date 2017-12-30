'use strict';

const HashTable = require('../model/hash-table');

describe('/model/hash-table', () => {
  let hashTable = new HashTable();
  hashTable.set('one', 1);
  hashTable.set('two', 2);
  hashTable.set('three', 3);
  hashTable.set('four', 4);
  hashTable.set('i', 44);
  hashTable.set('declare', 32);
  hashTable.set('a', 34);
  hashTable.set('thumb', 32);
  hashTable.set('war', 32);

  describe('set', () => {
    test('set should add nodes to the Hash Table', () => {
      hashTable.set('five', 5);
      expect(hashTable._buckets[hashTable._generateHash('five')].root.value).toEqual(5);
    });
  });
});
