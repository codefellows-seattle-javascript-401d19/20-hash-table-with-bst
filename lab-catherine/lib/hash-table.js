'use strict';

const LinkedList = require('./linked-list.js');

module.exports = class HashTable {
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
    let hash = this._generateHash(key);

    if(!this._buckets[hash]) {
      this._buckets[hash] = new LinkedList({key, hashTableValue});
      return this;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node) {
      node.value.hashTableValue = hashTableValue;
      return this;
    }
    this._buckets[hash].append(new LinkedList({key, hashTableValue}));
    return this;

  }

  get(key) {
    let hash = this._generateHash(key);
    if(!this._buckets[hash])
      return;

    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node)

      return node.value.hashTableValue;
  }
  
  remove(key) {
    let hash = this._generateHash(key);

    if(!this._buckets[hash])
      return false;

    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node) {
      this._buckets[hash] = this._buckets[hash].remove(node);
      return true;
    }
    return false;
  }
};