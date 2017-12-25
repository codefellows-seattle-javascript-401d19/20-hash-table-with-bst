'use strict';

class HashTable{
  constructor(capacity = 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }
}

module.exports = HashTable;
