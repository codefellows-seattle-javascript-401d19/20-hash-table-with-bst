'use strict';

const HashTable = require('../lib/hash-table');

describe('hash-table.js', () => {
  describe('constructor and _hash', () => {
    test('constructor should return a new object with the specified capacity and an array containing that many buckets.', () => {
      let myHash = new HashTable(2048);
      expect(myHash._capacity).toEqual(2048);
      expect(myHash._buckets.length).toEqual(2048);
      expect(Array.isArray(myHash._buckets)).toBeTruthy();
    });

    test('_hash(key) should return an integer based off of the given key\'s char codes and correlation to values of PI.', () => {
      let myHash = new HashTable(10);
      expect(myHash._hash('hi')).toEqual(7);
      expect(myHash._hash('you')).toEqual(2);
    });

    test('_hash(key) should throw an error if a non-string is given for key', () => {
      let myHash = new HashTable(15);
      expect(() => {
        myHash._hash(90);
      }).toThrow();
    });
  });

  describe('HashTable methods', () => {
    let myHash = null;
    beforeEach(() => {
      myHash = new HashTable(20);
    });

    describe('.set(key, value) should add the key-value pair to the hash table.', () => {
      test('should store an integer, string, or object in the bucket no problem.', () => {
        myHash.set('me', 123);
        expect(myHash._buckets[myHash._hash('me')].find('me').value).toEqual(123);

        myHash.set('you', 'whoopie');
        expect(myHash._buckets[myHash._hash('you')].find('you').value).toEqual('whoopie');

        myHash.set('them', {test: true});
        expect(myHash._buckets[myHash._hash('them')].find('them').value).toEqual({test: true});
      });

      test('should update a value if the same key is used.', () => {
        myHash.set('me', 123);
        expect(myHash._buckets[myHash._hash('me')].find('me').value).toEqual(123);

        myHash.set('me', 'whoopie');
        expect(myHash._buckets[myHash._hash('me')].find('me').value).toEqual('whoopie');

        myHash.set('me', {test: true});
        expect(myHash._buckets[myHash._hash('me')].find('me').value).toEqual({test: true});
      });

      test('should add the key-value pair to the binary search tree in the bucket if there is a collision', () => {
        let newHash = new HashTable(1);

        newHash.set('hey', [1, 2, 3]);
        newHash.set('there', false);
        newHash.set('bub', 'you got it!');

        let testTree = {
          key: 'hey',
          value: [1, 2, 3],
          left: {
            key: 'bub',
            value: 'you got it!',
            left: null,
            right: null,
          },
          right: {
            key: 'there',
            value: false,
            left: null,
            right: null,
          },
        };

        expect(newHash._buckets[0]).toEqual(testTree);
      });
    });

    describe('get(key)', () => {
      test('should return the value associated with the requested key', () => {
        myHash.set('pi', 3.14159);
        myHash.set('phi', 1.618);

        expect(myHash.get('pi')).toEqual(3.14159);
        expect(myHash.get('phi')).toEqual(1.618);
      });

      test('should return null if there is no BST in the bucket associated with the given key', () => {
        expect(myHash.get('nope')).toBeNull();
      });

      test('should return null if the bucket associated with the given key does not contain the key', () => {
        let newHash = new HashTable(1);
        newHash.set('yippee', 123);
        expect(newHash._buckets[0]).toBeTruthy();
        expect(newHash.get('nope')).toBeNull();
      });
    });

    describe('remove(key)', () => {
      beforeEach(() => {
        myHash = new HashTable(5);
        myHash.set('a', 1);
        myHash.set('b', 2);
        myHash.set('c', 3);
        myHash.set('e', 5);
        myHash.set('g', 6);
      });

      test('should return the removed value, remove the k-v pair from the hash table if there is no collision, and remove the BST from the bucket.', () => {
        expect(myHash.remove('a')).toEqual(1);
        expect(myHash._buckets[myHash._hash('a')]).toBeNull();
      });

      test('should return the removed value, remove the k-v pair from the binary tree, but leave the BST in the bucket if there are other nodes in the tree (remove leaf).', () => {
        expect(myHash.remove('b')).toEqual(2);
        expect(myHash._buckets[myHash._hash('b')]).toEqual({key: 'g', value: 6, left: null, right: null});
      });

      test('should return the removed value, remove the k-v pair from the binary tree, but leave the BST in the bucket if there are other nodes in the tree (remove root).', () => {
        expect(myHash.remove('g')).toEqual(6);
        expect(myHash._buckets[myHash._hash('g')]).toEqual({key: 'b', value: 2, left: null, right: null});
      });

      test('should return null if key maps to an empty bucket.', () => {
        expect(myHash.remove('d')).toBeNull();
      });

      test('should return null if requested key is not found in a nonempty bucket.', () => {
        myHash.set('d', 4);
        expect(myHash.remove('z')).toBeNull();
      });
    });
  });
});