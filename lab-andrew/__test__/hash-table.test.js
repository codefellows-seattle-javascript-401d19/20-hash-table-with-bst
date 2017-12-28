'use strict';

const HashTable = require('../lib/hash-table');

describe('tests for hash-table.js', () => {
  const table = new HashTable();

  describe('tests for set method', () => {

    test('hash table should be able to set valid key-value pairs', () => {
      table.set('name', 'Andrew');
      table.set('address', 123);
      table.set('hasCat', true);
      expect(table._buckets[table._hash('name')].root.value).toEqual('Andrew');
      expect(table._buckets[table._hash('address')].root.value).toEqual(123);
      expect(table._buckets[table._hash('hasCat')].root.value).toEqual(true);
    });

    test('hash table should be able to update values of existing keys', () => {
      expect(table._buckets[table._hash('address')].root.value).toEqual(123);
      table.set('address', 456);
      expect(table._buckets[table._hash('address')].root.value).toEqual(456);
    });

    test('hash table should store collisions in a BST', () => {
      table.set('arddess', 777);
      expect(table._buckets[table._hash('address')].root.right.value).toEqual(777);
      table.set('aeddrss', 999);
      expect(table._buckets[table._hash('address')].root.left.value).toEqual(999);
    });

    test('hash table should throw error if invalid input is given', () => {
      expect(() => table.set(2112, 'number')).toThrow();
      expect(() => table.set('', 'empty string')).toThrow();
    });
  });

  describe('tests for get method', () => {
    
    test('get method should return correct values that were set', () => {
      expect(table.get('name')).toEqual('Andrew');
      expect(table.get('address')).toEqual(456);
    });

    test('get method should return undefined if the key is not found', () => {
      expect(table.get('foo')).toBeUndefined();
      expect(table.get('naem')).toBeUndefined();
    });
  });

  describe('tests for remove method', () => {

    test('remove method should remove a key value pair that exists', () => {
      table.remove('name');
      table.remove('hasCat');
      expect(table.get('name')).toBeUndefined();
      expect(table.get('hasCat')).toBeUndefined();
    });

    test('remove method should return a negative 1 if key does not exist', () => {
      expect(table.remove('foo')).toEqual(-1);
      expect(table.remove('adderss')).toEqual(-1);
    });
  });
});