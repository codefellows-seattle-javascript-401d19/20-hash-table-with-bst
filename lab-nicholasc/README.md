# Lab 20 BSTs and Hash Tables

## BinarySearchTree
### Installation
This module contains a BinarySearchTree class. Its constructor can be accessed by calling `new BinarySearchTree()` which instantiates a tree with a null root.

### Methods
#### Insert
The insert method takes in a value and key and appends a node with that value and key to the appropriate place in the tree by comparing the keys. it can be called on an existing tree as follows: `BST.insert(<key>, <value>)`. The tree inserts lower keys to the left and larger keys to the right of a node. The O(n) of this operation is lg(n) where n is the amount of nodes in a tree.

#### Find
The find method takes in a key and locates a node with that key in the tree. it can be called on an existing tree as follows: `BST.find(<key>)`. The method traverses the tree in preOrder and returns the node with the key you are searching for. The O(n) of this operation is lg(n) where n is the amount of nodes in a tree.

#### findParent
The findParent method takes in a key and locates a node with a child that has that key in the tree. it can be called on an existing tree as follows: `BST.findParent(<key>)`. The method traverses the tree in preOrder and returns the node with a child that has the key you are searching for. The O(n) of this operation is lg(n) where n is the amount of nodes in a tree.

####  findMin
the findMin method finds the leftmost leaf of a node. it can be called as follows `Node.findMin()`. the O(n) of this operation is lg(n) where n is the amount of nodes in a tree.

#### toString
the toString method appends the node values together in a string. it can be called as follows `BST.toString()`. the O(n) of this operation is lg(n) where n is the amount of nodes in a tree.

#### remove
The remove method takes in a key and locates a node that has that key in the tree and removes it. it can be called on an existing tree as follows: `BST.remove(<key>)`. The method traverses the tree in preOrder using the find() function then removes the node found. If the node has a left or right, the function appropriately restructures the tree. The O(n) of this operation is lg(n) where n is the amount of nodes in a tree. It should be noted that the remove function calls itself in some cases which can increase the o(n) time.
### Memory O(n)
in all of these methods, the tree and the reference both have to be stored but none of the methods store copies of the full tree twice so the memory is n(log(n)) where n is the size of the tree and log(n) represents the size of the reference
### Testing
to test the functions, make sure you have jest installed by running in the CLI `npm install`. Then call `npm test` and the tests will run. The tests run the methods above on several cases.


## Hash table
The hash table exports a constructor for a table with a capacity of 144, and a \_buckets property that is an array of size capacity.
### methods
#### \_generateHash
the \_generateHash method takes in a key and creates a simple hash of the charChode value of the string modulo the \_capacity. it can be called as follows `HashTable._generateHash(<key>)`the O(n) of this operation is n where n is the length of the Array

#### set
set takes in a key and hashTable value, hashes the key and assigns a new BST with the htValue and key as its first node at that hash in the bucket. `HashTable.set(<key>)`the O(n) of this operation is 1.

#### get
set takes in a key, hashes the key and searches the bucket at index hash for a node with the same key. If the key exists it returns that node. it can be called as follows `HashTable.find(<key>)`the O(n) of this operation is 1.

#### remove
set takes in a key, hashes the key and searches the bucket at index hash for a node with the same key. If the key exists it deletes that node. it can be called as follows `HashTable.remove(<key>)`the O(n) of this operation is 1.
