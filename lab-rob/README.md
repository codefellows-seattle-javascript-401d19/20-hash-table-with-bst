# Code Fellows: Code 401d19: Full-Stack JavaScript

## Lab 20: Binary Search Tree and Hash Table

12/27/19

The purpose of this lab is to implement hash table using a Binary Search Tree to handle collisions.

## Tech/frameworks/packages

- node 
- npm
- node packages
  - jest
  - eslint 

## How to use?
Clone this repo, `cd` into `lab-rob`, run `npm install`. 

Or, copy the modules in the `lib/` directory into your project.

## hash-table.js

### Constructor

#### `new HashTable(capacity)`

Create a new hash table with the given capacity.

```
let myHash = new HashTable(2048);
```

### Methods

#### `._hash(key)`

Compute the hash for a given key. Used internally.

#### `.set(key, value)`

Store a key-value pair in the hash table. Hashes the key and stores it in the given bucket. Key-Value pairs are stored in a BinarySearchTree. When there is a collision, the k-v pair gets inserted into the appropriate spot in that bucket's BST. If the key already exists in the hash map, the value is updated. If the key is not a string, an error is thrown.

```
myHash.set('puppies', 128);
```

#### `.get(key)`

get the value associated with the given key. If there is no node with the given key in the bucket, null is returned. If the key is not a string, an error is thrown.

```
myHash.get('puppies');
// returns 128

myHash.get('wuh-oh!');
// returns null
```

#### `.remove(key)`

removes the key-value pair for the requested key and returns the associated value or null if it doesn't exist.

```
myHash.remove('schmoop');
// returns null

myHash.remove('puppies');
// removes and returns 128
```

## binary-search-tree.js

### Constructor

Create a new binary search tree with the given key, value combo. Key must be a string but value can be anything. Creates an object with properties of key, value, and null left and right.

```
let bst = new BinarySearchTree('fun', 1);
// returns the following object:
{
  key: 'fun',
  value: 1,
  left: null,
  right: null,
}
```

### Methods

#### `insert(key, value)`

Insert the key-value pair into the BST. Key must be a string, but value can be anything. Throws an error if key is not unique to the BST. Inserts into the appropriate open leaf based off of the key.

```
bst.insert('abba', 2);
// bst now has the following shape
{
  key: 'fun',
  value: 1,
  left: {
    key: 'abba',
    value: 2,
    left: null,
    right: null,
  },
  right: null,
}
```

#### `find(key)`

Returns the node with the given key. Returns null if no node contains the key. Throws an error if key is not a string.

```
bst.find('abba');
// returns the following object:
{
  key: 'abba',
  value: 2,
  left: null,
  right: null,
}
```

#### `findParentOf(key)`

Returns the parent of the node with the given key. Returns null if the calling node has the key. Throws an error if no node has that key, or if key is not a string.

```
bst.findParentOf('abba')
// returns bst

bst.findParentOf('fun');
// returns null
```

#### `getLefty()`

Returns the smallest node from a given root.

```
bst.getLefty();
// returns 
{
  key: 'abba',
  value: 2,
  left: null,
  right: null,
}
```

#### `remove(key)`

Remove a key-value pair from the Binary Search Tree. If the pair to be removed is not the root node, then the node is either pruned (if a leaf), bypassed (if one child node), or restructured (if two child nodes). If the pair is in the root node then the root is reassigned (key, value, and right).

## Tests

run `npm test` to check all tests.

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Project from Vinicio Vladimir Sanchez Trejo.

## License

MIT. Use it up!