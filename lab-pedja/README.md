![cf](http://i.imgur.com/7v5ASc8.png) Lab 20 Binary Search Tree and Hash Table
====

* Purpose of this lab is to practice implementation of hash tables and collisions that might occur when storing data. If collision occurs in buckets - data will be stored in Binary Search Tree.

## Code Style
* Vanilla Javascript and Jest for testing


## Tech / framework used

* [npm package jest](http://facebook.github.io/jest/) used for TDD



## Installation and How To Use

  * Fork || clone this repo to you computer.

  * Run `npm install`

  * To run tests run `npm test` command.


## Hash table

* Hash table constructor has one argument `capacity`. If no capacity is passed in, default value is 1024. Capacity of hash table is providing the number of `buckets` that our hash table will have.

`_generateHash method`
* This method expects a parameter of `key` that must be a string. This method takes the key returns a hash. Hash will determined in which hash table bucket data will be stored.

`set method`
* This method takes two parameters: key and htValue. Calling `_generateHash` on key value, we're hashing that key. After that we can check if this hash will result in a bucket has is empty. If so - we will call `add` BST method and store key:value pair. If the key already exists, then it will be updated with the new value.

`get method`
* This method expects key parameter. As two previous methods, this method also hashes the key string and allocates the bucket in our hash table. If the key exists in that bucket, we will run `contains` BST method and return htValue of that node.

`delete method`
* This method expects a parameter of key. As previous methods, this method also hashes the key string and allocates the bucket in our hash table. If the key exists in that bucket, we will run `remove` BST method and if node exist node will be removed and `true` will be returned.

## BinarySearchTree

* `.add(value)` -> adds value to new node in Binary Search Tree
* `.contains(value)` -> checks if node with specified value exist in Binary Search Tree
* `.remove(value)` -> removes node from Binary Search Tree

Methods that are used in previous labs. 


## Licence
MIT © Pedja Josifovic
