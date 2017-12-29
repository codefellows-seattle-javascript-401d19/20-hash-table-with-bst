'use strict';


const BinarySearchTree = require('./binary-search-tree');

class HashTable {
  constructor(capacity = 100) { 
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _makeHash(key) {
    if (typeof key !== 'string')
      throw new TypeError('__ERROR__ key should be a string');

    let rawHash = 0;

    for (let i in key) {
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  set(key, htValue) {
    if (key === null || htValue === null) {
      throw new TypeError('Must include key and value to add to hash table');
    }

    let hash = this._makeHash(key);
  
    if (!this._buckets[hash]) {
      this._buckets[hash] = new BinarySearchTree();
      this._buckets[hash].insert(key, htValue);
      return this;
    }

    let node = this._buckets[hash].find(key);

    if (node) {
      node.value = htValue; 
      return this;
    }

    this._buckets[hash].insert(key, htValue);

    return this;
  }

  get(key) {
    if (key === null) {
      throw new TypeError('Must include key to query hash table');
    }

    if (typeof key !== 'string') {
      throw new TypeError('Key must be string');
    }

    let hash = this._makeHash(key);

    if (!this._buckets[hash]) {
      return null;
    }

    let node = this._buckets[hash].find(key);

    if (node)
      return node.value;
    else
      return null;

  }
	
  delete(key) {
    if (key === null) {
      throw new TypeError('Must include key to query hash table');
    }

    if (typeof key !== 'string') {
      throw new TypeError('Key must be string');
    }

    let hash = this._makeHash(key);

    if(!this._buckets[hash])
      return false;
		
    let node = this._buckets[hash].find(key);


    if(node) {
      this._buckets[hash].remove(key);
    }
  }
}

module.exports = HashTable;