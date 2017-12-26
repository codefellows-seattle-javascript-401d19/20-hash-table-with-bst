'use strict';

const HashTable = require('../model/hash-table');

describe('hash-table.js', () => {
  describe('table._generateHash()', () => {
    test('_generateHash() should return a numerical hashcode if there are no errors', () => {
      const ht = new HashTable();

      const result = ht._generateHash('test');

      expect(typeof result).toBe('number');
    });

    test('_generateHash() should return a numerical hashcode bounded by the 1024 default capicity', () => {
      const ht = new HashTable();

      const result = ht._generateHash('test');

      expect(result).toBeLessThan(1024);
    });

    test('_generateHash() should throw an error if value passed is not of type string', () => {
      const ht = new HashTable();
      const notAString = 1234;

      expect(() => {
        ht._generateHash(notAString);
      }).toThrow();
    });
  });
});
