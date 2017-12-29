# Code Fellows: Seattle 401 JavaScript - 401d19

##  Lab 20: Binary Search Tree and Hash Table

### Author:
 Catherine Looper

### Motivation

In this project, I built a Binary Search Tree with a Node class, a Binary Search Tree class, and three external methods: An `insert` method, a `find` method and a `remove` method. 

In this project, I also built a Hash Table class with a constructor function and the following prototype methods: `_hash`, `set`, `get`, and `remove`.

### Build

#### Hash Table

##### `_hash` method

This method expects a parameter of key that must be a string. This method takes the key and hashes it. This is a helper function that is used in the other methods.

##### `set` method

This method expects two parameters: key and hashTableValue. The method first hashes the key, then determines whether the bucket already contains a key, if not it stores the key:value pair there. If the key already exists, then it will be updated with the new value.

##### `get` method

This method expects a parameter of key. This method first hashes the key. If the key exists, then the function will find the key and return key.value.hashTableValue. If it does not exist, then null will be returned.

##### `remove` method

This method expects a parameter of key. This method first hashes the key. If the key exists, then the remove function will be called and will remove the stored key:value pair. If the key is not found, then undefined will be returned.

#### Binary Search Tree

##### `insert`

This method accepts a value to be inserted into the Binary Search Tree. The method follows the proper set up of a BST where values larger than the root value will be inserted to the right, and values smaller than the root value will be inserted to the left. Big O of time is O(h) where h is the height of the tree. Big O of Space is constant.


##### `find`

This method accepts a value to be found in the Binary Search Tree. The value argument must be passed as a number or an error will be thrown. The method accepts a value and will find and return the first node containing that value. If the value is not found in the Binary Tree, then it will return null. Big O of time is O(h) where h is the height of the tree. Big O of Space is constant.

##### `findMinValue`

This is a helper function that locates the minimum value in the BST to be used in the remove function.

##### `remove`

This method accepts a value and uses that value to locate a node to be removed. In order to successfully remove a node, the BST must be restructured so that it maintains its order. If the root node is removed, then the tree must be reassigned to maintain proper structure. Big O of time is O(h) where h is the height of the tree. Big O of Space is constant.

### Limitations

To use this app - it is assumed that the user has familiarity with the tech and frameworks listed below. 

### Code Style

Standard JavaScript with ES6

### Tech/Framework used

* JavaScript / ES6
* Node.js
* Jest
* Eslint

### How to use?

* Step 1. Fork and Clone the Repository.
* Step 2. `npm install`.
* Step 3. to test the API, open a second terminal window and run the command `npm run test`.

### Credits

* Code Fellows / Vinicio Vladimir Sanchez Trejo for providing the demo code as reference.

### License

MIT © Catherine Looper