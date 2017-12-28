'use strict';

const HashTable = require('../lib/hash-table');

describe('hash-table.js', () => {
  describe('constructor and _hash', () => {
    test('constructor should return a new object with the specified capacity and an array containing that many buckets.', () => {
      let myHash = new HashTable(2048);
      expect(myHash._capacity).toEqual(2048);
      expect(myHash._buckets.length).toEqual(2048);
      expect(Array.isArray(myHash._buckets)).toBeTruthy();
    });

    test('_hash(key) should return an integer based off of the given key\'s char codes and correlation to values of PI.', () => {
      let myHash = new HashTable(10);
      expect(myHash._hash('hi')).toEqual(7);
      expect(myHash._hash('you')).toEqual(2);
    });

    test('_hash(key) should throw an error if a non-string is given for key', () => {
      let myHash = new HashTable(15);
      expect(() => {
        myHash._hash(90);
      }).toThrow();
    });
  });

  
});