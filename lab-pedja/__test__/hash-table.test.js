'use strict';

const HashTable = require(`../model/hash-table`);

describe(`hash-table`, () => {
  test(`SET should store a value with the given key`, () => {
    let hashTable = new HashTable();
    expect(hashTable.set('QueneAnne', '98109')).toBeTruthy();
  });

  test(`GET should get the value associated with the given key`, () => {
    let hashTable = new HashTable();
    hashTable.set('Greenwood', '98103');
    expect(hashTable.get('Greenwood')).toBeTruthy();
  });

  // test(`REMOVE should remove value with the matching key`, () => {
  //   let hashTable = new HashTable();
  //   hashTable.set('Ballard', '98107');
  //   expect(hashTable.delete('Ballard')).toEqual(true);
  // });
});