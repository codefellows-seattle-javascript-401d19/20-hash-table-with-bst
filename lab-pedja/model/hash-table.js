'use strict';

const BinarySearchTree = require('./binary-search-tree');


// Create a HashTable constructor using ES6 class syntax 
module.exports = class HashTable{
  constructor(capacity = 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }
  
  // _hash method that computes a keys hash
  _hash(key){
    if(typeof key !== 'string')
      throw new TypeError('__HASHTABLE_ERROR__ key is NOT a string');
    let rawHash = 0;
    
    for(let i in key){
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  // set method that stores a key value pair
  set(key,htValue){
    let hash = this._hash(key);

    if(!this._buckets[hash]){
      this._buckets[hash] = new BinarySearchTree({key,htValue});
      return this;
    }

    let node = this._buckets[hash].find(key);

    if(node){
      node.value.htValue = htValue;
      return this;
    }

    this._buckets[hash].insert({key,htValue});
    return this;
  }

  // get method that retrieves a a value for a given key
  get(key){
    let hash = this._hash(key);

    if(!this._buckets[hash])
      return;
    
    let node = this._buckets[hash].find(key);
    console.log(node);

    if(node)
      return node.value.htValue;
  }


  // remove method that remvoves a key value pair from the HashTable
  delete(key){
    let hash = this._hash(key);

    if(!this._buckets[hash])
      return false;
    
    let node = this._buckets[hash].find(node => node.value.key === key);
    console.log(node);

    if(node){
      this._buckets[hash] = this._buckets[hash].remove(node.value);
      return true;
    }

    // return false;
  }

};
