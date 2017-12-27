'use strict';

const BST = require('./bst');

class HashTable {
  constructor(capacity = 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _hash(key){
    if (typeof key !== 'string'){
      throw new TypeError('_ERROR_ key should be a string');
    }
    if (key.length < 1){
      throw new TypeError('_ERROR_ string must contain characters');
    }
    let rawHash = 0;
    for (let i in key){
      rawHash += key.charCodeAt(i);
    }
    return rawHash % this._capacity;
  }

  set(key, htValue){
    const hash = this._hash(key);
    const keyArr = key.split('');
    const uniqueKeyInt = keyArr.reduce((acc, val, index) => {
      return acc + (val.charCodeAt() * (index + 1));
    }, 0);
    if (!this._buckets[hash]){
      this._buckets[hash] = new BST();
      this._buckets[hash].insert(uniqueKeyInt, htValue);
      return this;
    }
    const node = this._buckets[hash].find(uniqueKeyInt);
    if (node){
      node.value = htValue;
      return this;
    }
    return this._buckets[hash].insert(uniqueKeyInt, htValue);
  }

  get(key){
    const hash = this._hash(key);
    if (!this._buckets[hash]){
      return undefined;
    }
    const keyArr = key.split('');
    const uniqueKeyInt = keyArr.reduce((acc, val, index) => {
      return acc + (val.charCodeAt() * (index + 1));
    }, 0);
    const node = this._buckets[hash].find(uniqueKeyInt);
    if (!node){
      return undefined;
    }
    return node.value;
  }
}

module.exports = HashTable;