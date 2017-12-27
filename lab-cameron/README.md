# Hash Table With BST

JavaScript implementation of a hash table with BST's for collision handling

# Tech Used

- JavaScript
- Jest

# Features

This hash table has an internal Array with 1024 buckets by default. Each newly
added key-value pair runs the key through a hashing function which then places
the value at the corresponding bucket in the internal Array.

Allows you to `get`, `set`, and `delete` key-value pairs from the hash table.
Collisions are handled via a Binary Search Tree which chains together hash code
values that would otherwise end in overwriting a pre-existing key-value pair.

Lastly, the `getBucketArr` method allows you to see what's currently in the
internal bucket Array at any time.

The internal bucket Array and default capacity are private members of the
HashTable class by means of ES6 `WeakMap`'s.

# Installation

1. Clone the repo
2. Require in hash-table.js
3. Instantiate new hash-tables! (or just use objects like a normal person)

# Tests

All testing done using Facebook's jest

# How to Use

- Instantiate a new Hash Table: `const MyTable = new HashTable()`

- Insert new key-value pairs where the key must be a string: `myTable.set(<key>,<value>)`

- Get values associated with a provided key: `myTable.get(<key>)`

- Remove values from the hash table: `myTable.delete(<key>)`

- Inspect internal bucket Array: `myTable.getBucketArr()`

- Mock up hash-code values via: `myTable._generateHash(<key>)`

# Credits

Cameron Moorehead - https://github.com/CameronMoorehead

# License

GPL-3.0
