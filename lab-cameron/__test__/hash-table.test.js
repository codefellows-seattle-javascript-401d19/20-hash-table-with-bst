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
  });

  describe('table.getBucketArr()', () => {
    test.skip('getBucketArr() should return the hash tables internal bucket array', () => {
      const ht = new HashTable();
      const key = 'test';
      const value = 'this is a test value';
      const hashCode = ht._generateHash(key)
      // const ht.getBuc

      ht.set(key, value);
      console.log(ht.getBucketArr());
    });
  });
});
