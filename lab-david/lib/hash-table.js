'use strict';

const LinkedList = require('./linked-list');

class HashTable{
  constructor(capacity = 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  // this function is very collision happy - not for prod
  _generateHash(key) {
    if(typeof key !== 'string')
      throw new TypeError('__ERROR__ key should be a string');

    let rawHash = 0;

    for(let i in key){
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  // 'gregor', 'cat'
  // 'boject.gregor = 'cat'
  set(key, htValue){
    let hash = this._generateHash(key);

    if(!this._buckets[hash]){
      this._buckets[hash] = new LinkedList({key, htValue});
      return this;
    }

    let node = this._buckets[hash].find(node => node.value.key === key); 

    if(node){
      node.value.htValue = htValue; // updating the value
      return this;
    }
    // if we are not updating a key, we create a new element in the LL
    this._buckets[hash].append(new LinkedList({key, htValue}));


  }

  get(key){
    let hash = this._generateHash(key);

    if(!this._buckets[hash]){
      return undefined;
    }

    let node = this._buckets[hash].find(node => node.value.key === key); 

    if(node)
      return node.value.htValue;
    else  return undefined;



  }

}