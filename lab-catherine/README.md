# Code Fellows: Seattle 401 JavaScript - 401d19

##  Lab 20: Binary Search Tree and Hash Table

### Author:
 Catherine Looper

### Motivation

In this project, I built a Binary Search Tree with four methods: An `insert` method, a `find` method, a `findMinValue` method, and a `remove` method. 

In this project, I also built a K-ary-Tree with a constructor function and the following prototype methods: `KAryTree.prototype.appendChild`, `KAryTree.prototype.breadthFirstSearch`, `KAryTree.prototype.breadthFirstToString`, and `KAryTree.prototype.depthFirstToArray`. 

### Build

#### K Ary Tree

##### `KAryTree.prototype.appendChild`

This method inserts nodes into the K Ary Tree. It can be called on any node in the tree, as long as the node passed in is an instance of the KAryTree. The Big(O) of time and space should both be constant.

##### `KAryTree.prototype.breadthFirstSearch`

This method should be called on the root node and will traverse the KAryTree breadth first and will return the node that matches the passed in value or will return null if the value is not found. This will be O(n) for time where n is the size of the tree, and will be constant for space.

##### `KAryTree.prototype.breadthFirstToString` 

This method should be called on the root node and will traverse the KAryTree breadth first and will return the values in the tree in a string separated by new lines. This is Big O(n) for time complexity since it traverses the tree once. This is Big O(n) for space where n is the length of the string.

##### `KAryTree.prototype.depthFirstToArray`

This method should be called on the root node and will traverse the KAryTree depth first and will return the new array with all of the node values. This function also traverses the tree once so its time complexity is O(n). This is Big O(n) for space where n is the length of the array.


#### Binary Search Tree

##### `insert`

This method accepts a value to be inserted into the Binary Search Tree. The value must be a number. The method follows the proper set up of a BST where values larger than the root value will be inserted to the right, and values smaller than the root value will be inserted to the left. Big O of time is O(h) where h is the height of the tree. Big O of Space is constant.


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