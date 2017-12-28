'use strict';

const HashTable = require(`../model/hash-table`);

describe(`HASH TABLE`, () => {
  test(`SET should hash the key and store the key:value pair in the bucket with the index corresponding to the hash`, () => {
    let hashTable = new HashTable();
    hashTable.set('cat', 'tabby');
    expect(hashTable.set('lobster', 'spiny')).toBeTruthy();
  });

  test(`GET should retrieve the entry with the matching key`, () => {
    let hashTable = new HashTable();
    hashTable.set('cake', 'chocolate');
    expect(hashTable.get('cake')).toBeTruthy();
  });

  test(`GET should return null if no entry is found with a matching key`, () => {
    let hashTable = new HashTable();
    expect(hashTable.get('llama')).toBeNull();
  });

  test(`REMOVE should remove the entry with the matching key from the hash table`, () => {
    let hashTable = new HashTable();
    hashTable.set('quintin', 'tarantula');
    expect(hashTable.remove('quintin')).toBeNull();
  });

  test(`REMOVE should return undefined if no entry is found with a matching key`, () => {
    let hashTable = new HashTable();
    expect(hashTable.remove('snow')).toEqual(undefined);
  });
});
