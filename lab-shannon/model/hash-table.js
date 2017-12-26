'use strict';

class HashTable{
  constructor(capacity = 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _hash(key){
    if(typeof key !== 'string'){
      throw new TypeError(`Key value must be a string`);
    }
    let keyLength = key.length;

    for(let i in key){
      char = key.charCodeAt(i);
      hash += char*Math.pow(31, keyLength - i)
    }
    return hash % this._capacity;
  }
  set(key){}
  get(key){}
  remove(key){}
}

module.exports = HashTable;
