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
    let hash = null;

    for(let i in key){
      char = key.charCodeAt(i);
      // hash += char*Math.pow(31, keyLength - i)   // this seems like it's based on Java implementation
      hash = ((hash << 5) - hash) + char;    // this seems to be the JS way, but I don't understand the bit shifting well
      hash = hash & hash;   // from MDN: "Bitwise AND;	a & b	Returns a 1 in each bit position for which the corresponding bits of both operands are 1's." seems to make output 32bit integer
    }
    return hash % this._capacity;
  }
  
  set(key){}
  get(key){}
  remove(key){}
}

module.exports = HashTable;
