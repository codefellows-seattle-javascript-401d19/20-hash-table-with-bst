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
```

#### `.remove(key)`

removes the key-value pair for the requested key and returns the associated value or null if it doesn't exist.

```
myHash.remove('schmoop');
// returns null

myHash.remove('puppies');
// removes and returns 128
```

#### `.remove(value)`

## Tests

run `npm test` to check all tests.

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Project from Vinicio Vladimir Sanchez Trejo.

## License

MIT. Use it up!