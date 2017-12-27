'use strict';

const HashTable = require(`../model/hash-table`);
const BinarySearchTree = require(`../model/binary-search-tree`);

describe(`HASH TABLE`, () => {
  test(`SET should hash the key and store the key:value pair in the bucket with the index corresponding to the hash`, () => {
    let hashTable = new HashTable();
    hashTable.set('cat', 'tabby');
    // expect(hashTable._buckets).toEqual(expect.arrayContaining(['TreeNode']));
  });

  test(`GET should retrieve the entry with the matching key`, () => {
    let hashTable = new HashTable();
    hashTable.set('cake', 'chocolate');
    hashTable.get('cake');
    // expect()
  });

  test.only(`GET should return null if no entry was found with a matching key`, () => {
    let hashTable = new HashTable();

    expect(hashTable.get('unicorn')).toBeNull();
  });

  test(`REMOVE should `, () => {});
});
