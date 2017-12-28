'use strict';

const BinarySearchTree = require('./binary-search-tree');

class HashTable {
  constructor(capacity = 1024) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  set(key, value) {
    let bstID = this._getBstID(key);
    let hashIndex = this._getHash(key);

    if (!this._buckets[hashIndex]) {
      this._buckets[hashIndex] = new BinarySearchTree(bstID, key, value);
      return this;
    }
    
    this._buckets[hashIndex].insert(bstID, key, value);
    return;
  }

  get(key) {
    let hashIndex = this._getHash(key);
    let bstID = this._getBstID(key);

    if (!this._buckets[hashIndex]) {
      return undefined;
    }

    let node = this._buckets[hashIndex];
    return node.find(bstID);
  }

  remove(key) {
    let hashIndex = this._getHash(key);
    let bstID = this._getBstID(key);

    if (!this._buckets[hashIndex]) {
      return 'No Bucket Found';
    }

    let node = this._buckets[hashIndex];

    if (node) {
      return node.remove(bstID);
    }

    return 'No Key Found';
  }

  // ================= _Helpers =================
  _getHash(key) {
    if (typeof key !== 'string') {
      throw new Error('__ERROR__ key must be a string');
    }

    let rawHash = 0;
    for (let i in key) {
      rawHash = rawHash + key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  _getBstID(key) {
    if (typeof key !== 'string') {
      throw new Error('__ERROR__ key must be a string');
    }

    let rawHash = '';
    for (let i in key) {
      rawHash = rawHash + key.charCodeAt(i);
    }

    return parseInt(rawHash);
  }
}

module.exports = HashTable;