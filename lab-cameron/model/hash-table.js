'use strict';

const BinarySearchTree = require('./binary-search-tree');

const HashTable = (() => {
  // make capacity and buckets private
  const capacity = new WeakSet();
  const buckets = new WeakSet();

  class HashTable {
    constructor() {
      capacity.set(this, 1024);
      const bucketArr = new Array(capacity.get(this));
      buckets.set(this, bucketArr);
    }

    _generateHash(key) {
      if (typeof key !== 'string') {
        throw new TypeError('__HASHTABLE_ERROR__ key should be a string');
      }
      let rawHash = 0;

      for (let i in key) {
        rawHash += key.charCodeAt(i);
      }

      return rawHash % capacity.get(this);
    }

    set(key, htValue) {
      const hash = this._generateHash(key);
      const bucketArr = buckets.get(this);

      if (!bucketArr[hash]) {
        bucketArr[hash] = new BinarySearchTree().insert({key, htValue});
        return this;
      }

      const node = bucketArr[hash].find(node => node.value.key === key);
    }
  }

  return HashTable;
});

module.exports = HashTable;
