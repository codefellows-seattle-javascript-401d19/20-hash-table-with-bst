'use strict';

const BST = require('./binary-search-tree');

class HashTable {
  constructor(capacity) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _hash(key) {
    if(typeof key !== 'string')
      throw new TypeError('<key> must be a string');

    let rawHash = 0;
    for(let i in key)
      rawHash += key.charCodeAt(i) * Math.PI.toString().replace('.', '').charAt(Number(i) % 15);
    
    return rawHash % this._capacity;
  }
}

module.exports = HashTable;