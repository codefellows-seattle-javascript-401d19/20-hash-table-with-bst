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
      this._buckets[hash].insert(key, htValue);//TODO: make this BST;
      return this;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);
    //set a rootnode
    //then find if there is a collision by seeing if the key already exists by searching for key
    if(node){
      node.value.htValue = htValue;
      return this;
    }
    // insert a new tree here rootNode.insert(key,value);
    //return this;
    this._buckets[hash].append(new LinkedList({key, htValue})); //NOTE: if not updating, creating new element- there is a collision
    return this;
  }

  get(key){
    let hash = this._generateHash(key);

    if(!this._buckets[hash]){
      return null;
    }

    let node = this._buckets[hash].find(node => node.value.key === key);
    //let node = this._buckets[hash].find(key);
    if(node)
      return node.value.htValue;
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

    root.remove(key);

    if(!root.key)
      this._buckets[hash] = null; //this here removes the hash if remove empties the Tree

    return;

  }
}

module.exports = HashTable;
