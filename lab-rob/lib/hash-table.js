'use strict';

const BinarySearchTree = require('./binary-search-tree');

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

  set(key, value) {
    let hash = this._hash(key);

    if(!this._buckets[hash]) {
      this._buckets[hash] = new BinarySearchTree(key, value);
      return this;
    }
    
    let rootNode = this._buckets[hash];
    let node = rootNode.find(key);

    if(node) {
      node.value = value;
      return this;
    }

    rootNode.insert(key, value);
    return this;
  }

  get(key) {
    let hash = this._hash(key);

    if(!this._buckets[hash])
      return null;

    let foundNode = this._buckets[hash].find(key);

    return foundNode ? foundNode.value : null;
  }
}

module.exports = HashTable;