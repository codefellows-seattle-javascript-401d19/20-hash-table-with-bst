# Code 401 lab 20
This lab was to practice with a hash table that stores collisions in Binary Search Trees.

## Code Style
Standard Javascript with ES6.

## Getting Started
Copy the contents of the lib folder into your project directory.  

To use the binary search tree methods, put ```const BinarySearchTree = require('../lib/binary-search-tree');``` into your javacript file.  You will then have access to the methods by using the constructor with the 'new' callout.  For example, ``` let one = new BinarySearchTree(1)``` creates a new instance of a binary search tree where the value is '1'.  To append a node to this tree with the value 2, ```one.insert(2)```.

Similarly for the hash table methods, put ```const HashTable = require('../lib/hash-table');```.  You will first need an instance of a hash table by doing something such as ```let hashTable = new HashTable```.  You can then use all the methods attached to the hashTable via ```hashTable.set()```, ```hashTable.get()``` and so on.

To run the tests, also copy the test folder.  You will also need to install jest via npm at the command line by typing ```npm install -D jest```.  Then, you can type ```npm run test``` to run the tests.

## Binary Search Tree methods
### insert(key, value)
This method has an arity of 2.  It expects a key and a value which it will store.  The method traverses the binary search tree, going left if the key is less than the key on the current node and right if it is bigger.  When it finds an open space, it attaches the node.

### remove(key, root)
This method has an arity of 2. Externally, only the first argument is passed in, which is the key.  Internally, the root is also passed through to itself when the function is called recursively.
This method has multiple forks.  The first fork is whether the node to be removed is the root or not.  Inside each of those forks are a set of if/else statements which depend on if the node to be removed has 0, 1, or 2 children.
If the key is not found, it returns undefined.

## Hash Table methods
### constructor(capacity)
The constructor has an arity of 1.  The argument is the capacity, aka, the number of buckets of the hash table.  If no capacity is passed in, the default is 1024.  

### _generateHash(key)
This method has an arity of 1.  It takes in a key which must be a string and returns a hash based on the key.  If something other than a string is passed in, it returns a TypeError.

### set(key, value)
This method has an arity of 2.  It takes a key(which must be a string) and a value which can be anything.  If the key is something other than a string, it returns a TypeError.  If successful, an instance of a BinarySearchTree node is returned.

### get(key)
This method has an arity of 1.  It takes a key which must be a string.  If they key is something other than a string, it returns a TypeError.  If the key is not found in the hashTable, it returns undefined.  If the key is found in the hashtable, it returns the value for that key.

### delete(key)
This method has an arity of 1.  It takes a key which must be a string.  If they key is something other than a string, it returns a TypeError.  If the key is not found in the hashTable, it returns false.  If it is found, the key and value are removed from the hashTable and it returns true.
