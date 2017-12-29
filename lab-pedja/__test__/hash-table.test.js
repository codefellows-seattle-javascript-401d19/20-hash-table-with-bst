'use strict';

const HashTable = require(`../model/hash-table`);

describe(`hash-table`, () => {
  test(`SET should store a value with the given key`, () => {
    let hashTable = new HashTable();
    expect(hashTable.set('Fremont', '98101')).toBeTruthy();
  });

  test(`GET should get the value associated with the given key`, () => {
    let hashTable = new HashTable();
    hashTable.set('Downtown', '98100');
    hashTable.set('Fremont', '98103');
    hashTable.set('Ballard', '98107');
    expect(hashTable.get('Downtown')).toEqual('98100');
  });

  test(`GET should return null is value is not found with passed key`, () => {
    let hashTable = new HashTable();
    hashTable.set('Downtown', '98100');
    hashTable.set('Fremont', '98103');
    hashTable.set('Ballard', '98107');
    expect(hashTable.get('Greenwood')).toBe(null);
  });

  test(`REMOVE should remove value with the matching key`, () => {
    let hashTable = new HashTable();
    hashTable.set('Ballard', '98107');
    expect(hashTable.delete('Ballard')).toEqual(true);
  });
});