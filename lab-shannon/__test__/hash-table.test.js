'use strict';

const HashTable = require(`../model/hash-table`);

describe(`HASH TABLE`, () => {
  test(`SET should hash the key and store the key:value pair in the bucket with the index corresponding to the hash`, () => {
    let hashTable = new HashTable();
    hashTable.set('cat', 'tabby');
  });

  test(`GET should`, () => {});
  test(`REMOVE should`, () => {});
});
