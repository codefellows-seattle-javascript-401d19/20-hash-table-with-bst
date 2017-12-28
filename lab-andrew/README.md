# Lab 20 Hash Table with BST

## Overview

This is a model of a hash table which uses a BST to store collisions.
***
## Getting Started

If you wish to use these constructors, simply copy the desired constructor's file into your project and require it into the script in which you would like to use it. For example:

```const HashTable = require('./lib/hash-table')```

To run tests to check functionality, do an

```npm i -D jest```

and then:

```npm run test```

A new hash table can be instatiated with `new HashTable(`[<`capacity`>]`)`. 
***
## Modules

The modules being exported are: Hash-Table and BST. 
***
### Hash-Table:

The Hash Table has three methods: set, get and remove. when a new Hash Table is instantiated, it takes an optional capacity parameter, which will set the length of the internal array being used to store key-value pairs. This capacity parameter must be a number or an error will be thrown. The default capacity is 1024.

#### Hash-Table.set:

The set method takes a key and a value. The key must be a string, and the value can be anything. The key will be hashed into a number using the _hash helper function. If there is not an existing BST there already, a new one will be instantiated and the key value pair will be added to that tree. The key is stored as a different hash using the _treeHash helper function. This is so that collisions are not stored with identical keys, which would throw an error within the BST. Also, the BST only takes numbers as its key argument, which is how the internal sorting happens. If the tree at the hash index already exists, the set will search for the node which has the same key. If that is found, it will update it with the new value. Otherwise, it means that it is a collision, and it will store the new key-value pair in a new node on the existing tree. The set method will have a big O of constant time. The time complexity will increase if there are many collisions on a given bucket. It is in your best interest to instantiate the hash table with a capacity that is large enough for your needs so as to avoid too many collisions.

#### Hash-Table.get:

The get method takes a key as input. The key must be a string. It hashes the key in the same way as the set method. It then uses the BST find method to search for the key. If the key is found, the value will be returned, otherwise undefined will be returned. This will have a big O of constant time. The big O will be the height of the BST if there are any collisions in the bucket where the hashed key and value are stored.

#### Hash-Table.remove:

The remove method takes a key as input. It then hashes the key the same as the set and get methods. The key must be a string. The key then uses the BST remove method to remove the key from the BST found in the bucket at the hashed index. If there is no BST found or the node with the key value is not found, a -1 is returned. The big O in time will be constant, unless removing a node from a bucket which contains multiple collisions, in which case, the big O in time will be the height of the tree.

***
### BST:

BinarySearchTree has three methods: insert, find and remove.


#### BST.insert:

The insert method takes a key (number) and a value to be inseted into the binary search tree, and it will place it in the proper order based off of the standard function of binary search trees. If a duplicate number is passed in, or if a non-number is passed in, an error will be thrown. The insert method uses a helper function to recursively search through the nodes to find the correct spot to insert the key to be inserted. The time complexity of this function will be equal to the height of the tree. The space complexity will be constant, one node will be created with each function call.

#### BST.find:

The find method takes a key (number) as a parameter. The find uses a helper function to recursively search the tree. If a node with that key is found, it will return that node. If the key does not exist in the tree, undefined will be returned. The big O of this function in time will be the height of the tree. The complexity in space is constant: nothing is added.

#### BST.remove:

The remove method takes in a key (number) as a parameter. It has two helper functions, a findMinKey function and a _remove function. The findMinKey will find the minimum key in relation to the node upon which it is called. The _remove function extends the remove method and executes the remove conditionally based on mitigating factors. It then searches the tree for that key, and stores the node found. If no node is found, a -1 is returned. Depending on how many children the node has, the remove function proceeds differently. If the node to be removed is a leaf, the parent of that node simply sets its that relation to null, and consequently that leaf is removed from the tree. If the node has one child, that child is set to be the child of the node to be removed's parent node. If the node has two children, the key of the node is set to the minimum key of the right child tree, and then that node is found and deleted. If the root node is deleted, the root is set to null. This function has a big O of three times the height of the tree (the tree is traversed in the worst case three times to find and delete a node), which corresponds to a big O of O(n). The big O of space is constant; one variable is created during the execution of the function, and afterward, one element is removed from the tree.
***
## Code Examples:

```
const HashTable = require('./lib/hash-table');

const table = new HashTable();

table.set('address', 123);

table.get('address'); // 123

table.remove('address');

table.get('address'); // undefined
```
***
## Technology/Credits

By Andrew Bloom. Using jest to test functionality.