'use strict';

const HashTable = require('../model/hash-table');
const BinarySearchTree = require('../model/binary-search-tree');

describe('hash-table.js', () => {
  describe('table._generateHash()', () => {
    test('_generateHash() should return a numerical hashcode if there are no errors', () => {
      const ht = new HashTable();

      const result = ht._generateHash('test');

      expect(typeof result).toBe('number');
    });

    test('_generateHash() should return a numerical hashcode bounded by the 1024 default capicity', () => {
      const ht = new HashTable();

      const result = ht._generateHash('test');

      expect(result).toBeLessThan(1024);
    });

    test('_generateHash() should throw an error if value passed is not of type string', () => {
      const ht = new HashTable();
      const notAString = 1234;

      expect(() => {
        ht._generateHash(notAString);
      }).toThrow()  ;
    });
  });

  describe('table.getBucketArr()', () => {
    test('getBucketArr() should return the hash tables internal bucket array', () => {
      const ht = new HashTable();
      const key = 'test';
      const value = 'this is a test value';

      ht.set(key, value);
      expect(Array.isArray(ht.getBucketArr())).toEqual(true);
    });
  });

  describe('table.set()', () => {
    test('set() should should return true if there are no errors', () => {
      const ht = new HashTable();
      const key = 'test';
      const htValue = 'this is a test value';

      expect(ht.set(key, htValue)).toEqual(true);
      expect(ht.get(key)).toEqual(htValue);
    });

    test('set() should construct a BST and insert a new value into it if bucket at hashCode is empty', () => {
      const ht = new HashTable();
      const key = 'test';
      const htValue = 'this is a test value';
      const hashCode = ht._generateHash(key);
      const bucketArr = ht.getBucketArr();

      ht.set(key, htValue);

      expect(bucketArr[hashCode]).toBeInstanceOf(BinarySearchTree);
      expect(bucketArr[hashCode].getRoot().value.htValue).toEqual(htValue);
    });

    test('set() should update the htValue in the buckets internal BST if a matching key is already existing', () => {
      const ht = new HashTable();
      const key = 'test';
      const htValue1 = 'this is a test value';
      const htValue2 = 'this is a different value';
      const hashCode = ht._generateHash(key);
      const bucketArr = ht.getBucketArr();

      ht.set(key, htValue1);
      expect(bucketArr[hashCode].getRoot().value.htValue).toEqual(htValue1);

      ht.set(key, htValue2);
      expect(bucketArr[hashCode].getRoot().value.htValue).toEqual(htValue2);
    });

    test('set() should add to the hash tables internal BST via insertion if a collision occurs', () => {
      const ht = new HashTable();
      const key1 = 'test';
      const key2 = 'tset';
      const htValue1 = 'this is a test value';
      const htValue2 = 'this is a different value';
      const hashCode = ht._generateHash(key1);
      const bucketArr = ht.getBucketArr();

      ht.set(key1, htValue1);
      expect(bucketArr[hashCode].getRoot().value.htValue).toEqual(htValue1);

      ht.set(key2, htValue2);
      expect(bucketArr[hashCode].getRoot().right.value.htValue).toEqual(htValue2);
    });
  });

  describe('table.get()', () => {
    test('get() should return false if the hash table has no such key', () => {
      const ht = new HashTable();

      expect(ht.get('non-existing-key')).toEqual(false);
    });

    test('get() should return the hash table value associated with the passed in key', () => {
      const ht = new HashTable();
      const key1 = 'test';
      const key2 = 'tset';
      const htValue1 = 'this is a test value';
      const htValue2 = 'this is a test value';

      ht.set(key1, htValue1);
      ht.set(key2, htValue2);
      expect(ht.get(key1)).toEqual(htValue1);
      expect(ht.get(key2)).toEqual(htValue2);
    });
  });

  describe('table.delete()', () => {
    test('delete() should return false if there is no bucket associated with the key', () => {
      const ht = new HashTable();

      expect(ht.delete('fake-key')).toEqual(false);
    });

    test('delete() should remove the node from the buckets BST if there are no errors', () => {
      const ht = new HashTable();
      const key = 'test';
      const htValue = 'this is a test value';

      ht.set(key, htValue);
      expect(ht.get(key)).toEqual(htValue);

      ht.delete(key);
      expect(ht.get(key)).toEqual(false);
    });
  });
});
