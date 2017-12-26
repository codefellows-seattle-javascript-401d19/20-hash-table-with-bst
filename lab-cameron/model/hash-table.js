'use strict';

const BinarySearchTree = require('./binary-search-tree');

const HashTable = (() => {
  // make capacity and buckets private
  const capacity = new WeakMap();
  const buckets = new WeakMap();

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
        const newBST = new BinarySearchTree();
        newBST.insert({key, htValue});

        bucketArr[hash] = newBST;
        return true;
      }

      const node = bucketArr[hash].find(key);

      if (node) {
        node.value.htValue = htValue;
        return true;
      }

      bucketArr[hash].insert({key, htValue});
      return true;
    }

    get(key) {
      const hash = this._generateHash(key);
      const bucketArr = buckets.get(this);

      if (!bucketArr[hash]) {
        return false;
      }

      const node = bucketArr[hash].find(key);

      if (node) {
        return node.value.htValue;
      }
    }

    delete(key) {
      const hash = this._generateHash(key);
      const bucketArr = buckets.get(this);

      if (!bucketArr[hash]) {
        return false;
      }

      const node = bucketArr[hash].find(key);

      if (node) {
        bucketArr[hash] = bucketArr[hash].remove(key);
      }
    }

    getBucketArr() {
      const bucketArr = buckets.get(this);
      
      return bucketArr;
    }
  }

  return HashTable;
})();

module.exports = HashTable;
