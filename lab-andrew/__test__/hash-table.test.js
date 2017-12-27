'use strict';

const HashTable = require('../lib/hash-table');

describe('tests for hash-table.js', () => {
  let table = new HashTable();
  test('hash table should be able to set valid key-value pairs', () => {
    table.set('address', 123);

  });
});