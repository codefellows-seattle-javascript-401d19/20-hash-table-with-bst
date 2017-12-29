'use strict';

const HashTable = require('../lib/hash-map');

describe('hash-table.js', () => {
  let hashTable = new HashTable();

  describe('SET method', () => {
    test('SET should generate a hashed key and store the key:value pair', () => {
      hashTable.set('city', 'seattle');
      expect(hashTable.set('dog', 'goldenretriever')).toBeTruthy();
    });
  });

  describe('GET method', () => {
    test('GET should retrieve requested key', () => {
      hashTable.set('cat', 'nala');
      expect(hashTable.get('cat')).toBeTruthy();
    }); 

    test('GET should be null if a matching key is not found', () => {
      expect(hashTable.get('notThere')).toBeNull();
    });
  });

  describe('REMOVE method', () => {
    test('REMOVE should remove the designated key', () => {
      hashTable.set('game', 'hard-mode');
      expect(hashTable.remove('game')).toBeNull();
    });

    test('REMOVE should be undefined if key does not exist', () => {
      expect(hashTable.remove('dog')).toBeUndefined;
    });
  });
});