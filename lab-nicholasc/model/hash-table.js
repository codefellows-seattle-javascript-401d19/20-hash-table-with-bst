'use strict';


const BST = require('./search-tree');

class HashTable{
  constructor(capacity=144){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key) {
    if(typeof key !== 'string')
      throw new TypeError('__ERROR__ key should be a stirng');

    let rawHash = 0;

    for(let i in key){
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  set(key, htValue){
    let hash = this._generateHash(key);

    if(!this._buckets[hash]){
      this._buckets[hash]= new BST();
      this._buckets[hash].insert(key, htValue);
      return this;
    }

    let node = this._buckets[hash].find(key);

    if(node){
      node.value = htValue;
      return this;
    }

    this._buckets[hash].insert(key, htValue);

    return this;
  }

  get(key){
    let hash = this._generateHash(key);

    if(!this._buckets[hash]){
      return null;
    }

    let node = this._buckets[hash].find(key);
    if(node)
      return node.value;
    return null;
  }

  remove(key) {
    let hash = this._generateHash(key);

    if(!this._buckets[hash])
      return null;

    let root = this._buckets[hash];
    let node = root.find(key);

    if(!node)
      return null;
    console.log('removing from', node);
    root.remove(key);

    if(!root.key)
      this._buckets[hash] = null;
    return;

  }
}

module.exports = HashTable;
