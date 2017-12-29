## 16 - Binary Search Trees

### How to Use

To start this app, clone this repo from 

  `https://github.com/kerrynordstrom/20`

install all necessary packages with 

  `npm install`

And run any available tests with

  `npm run test`

### Binary Search Tree Structure

This program is built with a simple binary search tree which organizes nodes in that the left children are lesser than their parent and right children are greater than their parent.  In this program, it includes methods for finding, inserting (as a leaf), and removing a node.


                                5
                              /   \
                             2     7
                            / \     \
                           1   3     8
                                      \
                                       11
                                       / \
                                      10  12  
                                           \
                                            16
                                            / \
                                           13 15 
### Hash Table

The hash table is set up with an array with a capacity of 1000 buckets (addresses).  It handles any collisions as a result of its hash assignments by setting any conflicts as either the left or right child of the available parent most closely comparable to itself.


### Modules

This program exports two modules:

- Binary search tree class constructor and its methods: find, insert, and remove.
- Hash Table and its methods: get, set, and delete.

### Binary Search Tree Methods

#### Find Node

This method finds an individual node's key value pair which in the case of the above binary search tree will produce a result by halving the search each time.  


#### Big O

Time: O(H) of the side it searches
Space: O(logn)

#### Insert

This method will insert a single node's key value pair (as a leaf) and in the case of the above binary search tree will produce a result by following the number of connections necessary to insert itself where it is greater or less than an existing node value.  It will not store duplicates.

#### Big O

Time: O(H) where H is the number of connections it *may* need based on the height of the table
Space: O(nlogn)


#### Remove

This method will remove a node's key value pair and replace its current value and connections with the minimum value found on the right side of the tree.  It will search to the bottom of the tree and find this minimum value, store it in a temporary variable, then reassign the removed node's value and connections to maintain the original structure where possible.

#### Big O

Time: O(H) where H is the number of connections it *may* need based on the height of the table
Space: O(nlogn)


### Hash Table Methods

#### Set Node

This method will set a key value pair to any available bucket, and in the case of a collision with an occupant of that bucket, will be assigned as either a left or right child after a comparison with that bucket's key.


#### Big O

Time: O(1)
Space: O(n)

#### Get Node

This method will get a key value pair from any available bucket based on its exact address provided by a hashed key.


#### Big O

Time: O(1)
Space: O(n)


#### Delete Node

This method will delete a key value pair from any bucket provided the hashed key is found within the array.

#### Big O

Time: O(1)
Space: O(n)

### Binary Search Tree Tests

#### Insert

-Insert should add new node following binary search tree architecture, which places smaller values to the left and larger values to the right of any given node.
-Insert should throw type error if argument not integer.
-Insert should throw type error if argument is empty.

#### Find

-Find should locate and return individual node\'s value.
-Find should throw type error if argument left empty/is null.
-Find should throw type error if argument not integer.

#### Remove

-Remove should locate and remove individual node\'s value.
-Remove should be undefined if no value passed to method.
-Remove should be undefined if empty string passed to method.
-Remove should locate and remove node\'s value, even if it has two children and will preserve nodes that are within sub-trees of this node.

### Hash Table Tests

#### Set
-Set should throw error if key or value left empty.
-Set should add nodes with key and value to hash table.
-Set should update value given an existing key.
-Set should add node as child of parent of bucket if collision should occur.

#### Get
-Find should locate and return individual node\'s value.
-Find should throw type error if argument is null.
-Find should throw type error if argument left empty.
-Find should throw type error if argument not string.


#### Delete
-Delete should locate and remove individual node from hash table.
-Delete should be undefined if no value passed to method.
-Remove should be undefined if empty string passed to method.


