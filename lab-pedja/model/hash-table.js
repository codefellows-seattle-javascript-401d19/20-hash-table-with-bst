'use strict';

const BinarySearchTree = require('./binary-search-tree');


// Create a HashTable constructor using ES6 class syntax 
module.exports = class HashTable{
  constructor(capacity = 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key){
    if(typeof key !== 'string')
      throw new TypeError('__HASTABLE_ERROR_ key should be a string');
    let rawHash = 0;
    
    for(let i in key){
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  set(key, htValue){
    let hash = this._generateHash(key);
    if(!this._buckets[hash]){
      let BST = new BinarySearchTree();
      BST.add({key, htValue});
      this._buckets[hash] = BST;
      return this;
    }

    let node = this._buckets[hash].contains(key);
 
    if(node){
      node.value.htValue = htValue;
      return this;
    }
    this._buckets[hash].add({key, htValue});
    return this;
  }

  get(key){
    let hash = this._generateHash(key);

    if(!this._buckets[hash]){
      return null;
    }

    let node = this._buckets[hash].contains(key);

    if(node)
      return node.value.htValue;
  }
  

  // remove method that remvoves a key value pair from the HashTable
  delete(key){
    let hash = this._generateHash(key);

    if(!this._buckets[hash])
      return undefined;
    
    let node = this._buckets[hash].contains(key);

    if(node){
      this._buckets[hash] = this._buckets[hash].remove(key);
      return true;
    }

    return false;
  }

};
