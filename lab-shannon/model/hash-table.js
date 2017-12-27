'use strict';

const BinarySearchTree = require(`./binary-search-tree`);

class HashTable{
  constructor(capacity = 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _hash(key){
    if(typeof key !== 'string'){
      throw new TypeError(`Key value must be a string`);
    }
    // let keyLength = key.length;
    let hash = null;

    for(let i in key){
      let char = key.charCodeAt(i);
      // hash += char*Math.pow(31, keyLength - i)   // this seems like it's based on Java implementation
      hash = ((hash << 5) - hash) + char;    // this seems to be the JS way, but I don't understand the bit shifting well
      hash = hash & hash;   // from MDN: "Bitwise AND:	a & b	Returns a 1 in each bit position for which the corresponding bits of both operands are 1's." seems to make output 32bit integer
    }
    return hash % this._capacity;
  }

  set(key, HTvalue){
    let hash = this._hash(key);
    if(!this._buckets[hash]){
      let BST = new BinarySearchTree();
      BST.insert({key, HTvalue});
      this._buckets[hash] = BST;

      return this;
    }

    let node = this._buckets[hash].find(node => node.key.value === key);
    if(node){
      node.value.HTvalue = HTvalue;
      return this;
    }
    this._buckets[hash].insert({key, HTvalue});
    return this;
  }

  get(key){
    let hash = this._hash(key);

    if(!this._buckets[hash]){
      return null;
    }

    let node = this._buckets[hash].find(key);
    if(node !== null){
      return node.value.HTvalue;
    }
  }

  remove(key){
    let hash = this._hash(key);

    if(!this._buckets[hash]){
      return undefined;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);
    if(!node){
      return undefined;
    }

    this._buckets[hash] = this._buckets[hash].remove(node);
    return;
  }
}

module.exports = HashTable;
