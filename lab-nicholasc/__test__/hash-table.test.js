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
    test('set should update an existing node if it has the same hash', () => {
      hashTable.set('six', 6);
      hashTable.set('six', 7);
      expect(hashTable._buckets[hashTable._generateHash('six')].root.value).toEqual(7);
    });
  });
  describe('get', () => {
    test('get should return the value of the node being searched for', () => {
      expect(hashTable.get('one')).toEqual(1);
      expect(hashTable.get('two')).toEqual(2);
      expect(hashTable.get('three')).toEqual(3);
      expect(hashTable.get('four')).toEqual(4);
      expect(hashTable.get('i')).toEqual(44);
      expect(hashTable.get('declare')).toEqual(32);
      expect(hashTable.get('a')).toEqual(34);
      expect(hashTable.get('thumb')).toEqual(32);
      expect(hashTable.get('war')).toEqual(32);
    });
  });
  describe('remove', () => {
    test('remove should remove the node with the key input', () =>{
      hashTable.set('saasdf', 10);
      expect(hashTable.get('saasdf')).toEqual(10);
      hashTable.remove('saasdf');
      expect(hashTable.get('saasdf')).toEqual(null);

    });
  });
});
