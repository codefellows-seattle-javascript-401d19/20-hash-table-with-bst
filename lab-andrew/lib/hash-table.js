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

  _treeHash(key){
    const keyArr = key.split('');
    return keyArr.reduce((acc, val, index) => {
      return acc + (val.charCodeAt() * (index + 1));
    }, 0);
  }

  set(key, htValue){
    const hash = this._hash(key);
    const uniqueKeyInt = this._treeHash(key);
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
    this._buckets[hash].insert(uniqueKeyInt, htValue);
    return this;
  }

  get(key){
    const hash = this._hash(key);
    if (!this._buckets[hash]){
      return undefined;
    }
    const uniqueKeyInt = this._treeHash(key);
    const node = this._buckets[hash].find(uniqueKeyInt);
    if (!node){
      return undefined;
    }
    return node.value;
  }

  remove(key){
    const hash = this._hash(key);
    if (!this._buckets[hash]){
      return -1;
    }
    const uniqueKeyInt = this._treeHash(key);
    if (!this._buckets[hash].find(uniqueKeyInt)){
      return -1;
    }
    this._buckets[hash].remove(uniqueKeyInt);
    return this;
  }
}

module.exports = HashTable;