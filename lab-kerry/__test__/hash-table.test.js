'use strict';

const HashTable = require('../lib/hash-table');

let ht = new HashTable();
ht.set('foo', 5);
ht.set('bar', 2);
ht.set('baz', 1);
ht.set('bolt', 3);
ht.set('bath', 7);
ht.set('barth', 8);
ht.set('finch', 11);
ht.set('mensch', 9);
ht.set('narrator', 16);
ht.set('xylophone', 12);
ht.set('car', 13);
ht.set('crash', 17);
ht.set('harold', 4);

describe('Testing hash table for set, get, and delete functionality', () => {

  describe('Testing set method.', () => {
    test('Set should throw error if key or value left empty.', () => {
      expect(() => {
        ht.set();
      }).toThrow();
    });
    test('Set should add nodes with key and value to hash table.', () => {
      expect(ht.set('baphomet', 22)).toBeTruthy();
      expect(ht._buckets[ht._makeHash('baphomet')].root.value).toEqual(22);
      expect(ht.set('grinch', 10)).toBeTruthy();
      expect(ht._buckets[ht._makeHash('grinch')].root.value).toEqual(10);
    });
    test('Set should update value given an existing key.', () => {
      expect(ht._buckets[ht._makeHash('barth')].root.value).toEqual(8);
      ht.set('barth', 10);
      expect(ht._buckets[ht._makeHash('barth')].root.value).toEqual(10);
    });
    test('Set should add node as child of parent of bucket if collision should occur.', () => {
      expect(ht.set('barth', 8)).toBeTruthy();
      expect(ht._buckets[ht._makeHash('barth')].root.value).toEqual(8);
      expect(ht.set('abrth', 28)).toBeTruthy();
      expect(ht._buckets[ht._makeHash('barth')].root.left.key).toEqual('abrth');
      expect(ht.set('crash', 17)).toBeTruthy();
      expect(ht._buckets[ht._makeHash('barth')].root.right.key).toEqual('crash');
    });
  });

  describe('Testing get method', () => {
    test('Find should locate and return individual node\'s value.', () => {
      expect(ht.get('barth')).toEqual(8);
      expect(ht.get('bolt')).toEqual (3);
      expect(ht.get('bath')).toEqual (7);
    });
    test('Find should throw type error if argument is null.', () => {
      expect(() => {
        ht.get(null);
      }).toThrow();
    });
    test('Find should throw type error if argument left empty.', () => {
      expect(() => {
        ht.get();
      }).toThrow();
    });
    test('Find should throw type error if argument not string.', () => {
      expect(() => {
        ht.get(123456);
      }).toThrow();
    });
  });

  describe('Testing delete method', () => {
    test('Delete should locate and remove individual node from hash table.', () => {
      ht.delete('xylophone');
      expect(ht.get('xylophone')).toBeNull();
    });
    test('Delete should be undefined if no value passed to method.', () => {
      expect(() => {
        ht.delete();
      }).toThrow();
    });
    test('Remove should be undefined if empty string passed to method.', () => {
      expect(() => {
        ht.delete(123456);
      }).toThrow();
    });
  });
});
