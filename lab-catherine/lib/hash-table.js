'use strict';

const BinarySearchTree = require('./binary-search-tree');

class HashTable {
  constructor(capacity = 1024) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _hash(key) {
    if(typeof key !== 'string')
      throw new TypeError('__HASHTABLE_ERROR__ key should be a string');
      
    let rawHash = 0;

    for(let i in key) {
      rawHash += key.charCodeAt(i);
    }
    return rawHash % this._capacity;
  }

  set(key, hashTableValue) {
    let hash = this._hash(key);

    if(!this._buckets[hash]) {
      this._buckets[hash] = new BinarySearchTree({key, hashTableValue});
      return this;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node) {
      node.value.hashTableValue = hashTableValue;
      return this;
    }
    this._buckets[hash].insert(key, hashTableValue);
    return this;

  }

  get(key) {
    let hash = this._hash(key);
    if(!this._buckets[hash])
      return;

    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node)
      return node.value.hashTableValue;
  }
  
  remove(key) {
    let hash = this._hash(key);

    if(!this._buckets[hash])
      return undefined;

    let node = this._buckets[hash].find(key);

    if(!node) {
      return undefined;
    }

    this._buckets[hash] = this._buckets[hash].remove(node.value.key);
    return this._buckets[hash];
  }
    
}


module.exports = HashTable;