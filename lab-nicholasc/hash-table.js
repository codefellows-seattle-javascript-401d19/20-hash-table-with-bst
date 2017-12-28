'use strict';


const LinkedList = require('./linked-list');

class HashTable{
  constructor(capacity=1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key) {//TODO: remove this NOTE: this function is prone to collisions/isnt suited for production
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
      this._buckets[hash]= new LinkedList({key, htValue});
      return this;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);
    if(node){
      node.value.htValue = htValue;
      return this;
    }
    this._buckets[hash].append(new LinkedList({key, htValue})); //NOTE: if not updating, creating new element- there is a collision
    return this;
  }

  get(key){
    let hash = this._generateHash(key);

    if(!this._buckets[hash]){
      return null;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);
    if(node)
      return node.value.htValue;
    return undefined;
  }
}
