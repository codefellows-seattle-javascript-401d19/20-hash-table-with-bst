'use strict';

const HashTable = require('../lib/hash-table');

describe('hash-table', () => {
  let table = new HashTable(2);

  table.set('c', 3);
  table.set('a', 1);
  table.set('e', 5);
  table.set('d', 4);
  table.set('b', 2);
  table.set('f', 6);

  describe('.set(key, value)', () => {
    test('should store a key value pair in a hash-table', () => {
      expect(table._buckets[0].value).toEqual(4);
      expect(table._buckets[0].left.value).toEqual(2);
      expect(table._buckets[0].right.value).toEqual(6);
      expect(table._buckets[1].value).toEqual(3);
      expect(table._buckets[1].left.value).toEqual(1);
      expect(table._buckets[1].right.value).toEqual(5);
    });

    test('should throw an error if key is not a string', () => {
      expect(() => {
        table.set(5, 3);
      }).toThrow();
      expect(() => {
        table.set([2, 5], 1);
      }).toThrow();
      expect(() => {
        table.set({'e': 5}, 5);
      }).toThrow();
    });

    test('should throw an error if trying to set a duplicate key', () => {
      expect(() => {
        table.set('c', 3.1);
      }).toThrow();
      expect(() => {
        table.set('a', 1.1);
      }).toThrow();
      expect(() => {
        table.set('e', 5.1);
      }).toThrow();
      expect(() => {
        table.set('d', 4.1);
      }).toThrow();
    });
  });

  describe('.get(key)', () => {
    test('should return a value that is connected to the given key', () => {
      expect(table.get('a')).toEqual(1);
      expect(table.get('b')).toEqual(2);
      expect(table.get('c')).toEqual(3);
      expect(table.get('d')).toEqual(4);
      expect(table.get('e')).toEqual(5);
      expect(table.get('f')).toEqual(6);
    });

    test('should return undefined if no key value pair is stored with the given key', () => {
      expect(table.get('ayy')).toEqual(undefined);
      expect(table.get('bee')).toEqual(undefined);
      expect(table.get('see')).toEqual(undefined);
      let table2 = new HashTable();
      expect(table2.get('d')).toEqual(undefined);
      expect(table2.get('e')).toEqual(undefined);
      expect(table2.get('f')).toEqual(undefined);
    });

    test('should throw an error the key is not a string', () => {
      expect(() => {
        table.get(5, 3);
      }).toThrow();
      expect(() => {
        table.get([2, 3], 4);
      }).toThrow();
      expect(() => {
        table.get({'e': 5}, 5);
      }).toThrow();
    });
  });

  describe('.remove(key)', () => {
    test.only('should remove the key value pair relative to the given key', () => {

      table.remove('d');
      expect(table._buckets[0].value).toEqual(2);
      expect(table._buckets[0].left).toBeNull();
      expect(table._buckets[0].right.value).toEqual(6);

      table.remove('f');
      expect(table._buckets[0].value).toEqual(2);
      expect(table._buckets[0].left).toBeNull();
      expect(table._buckets[0].right).toBeNull();

      table.remove('c');
      expect(table._buckets[1].value).toEqual(1);
      expect(table._buckets[1].left).toBeNull();
      expect(table._buckets[1].right.value).toEqual(5);

      table.remove('a');
      expect(table._buckets[1].value).toEqual(5);
      expect(table._buckets[1].left).toBeNull();
      expect(table._buckets[1].right).toBeNull();
      
    });

    test('should return undefined if no key value pair is stored with the given key', () => {
      expect(table.get('ayy')).toEqual(undefined);
      expect(table.get('bee')).toEqual(undefined);
      expect(table.get('see')).toEqual(undefined);
      let table2 = new HashTable();
      expect(table2.get('d')).toEqual(undefined);
      expect(table2.get('e')).toEqual(undefined);
      expect(table2.get('f')).toEqual(undefined);
    });

    test('should throw an error the key is not a string', () => {
      expect(() => {
        table.get(5, 3);
      }).toThrow();
      expect(() => {
        table.get([2, 3], 4);
      }).toThrow();
      expect(() => {
        table.get({'e': 5}, 5);
      }).toThrow();
    });
  });
});