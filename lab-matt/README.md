# 20: Hash Tables
Description: **Lab 20 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **12/27/17**

## Features
This lab implements the creation of a hash table with .set(key, value), .get(key), and .remove(key) methods.
And utilize a binary-search-tree to resolve collisions.

## Tech/Framework Used
- node.js
- javascript
- Visual Studio Code

## Requirements
- node.js

## Usage
1. `cd` into the lab-matt folder
2. `npm install` the required dev dependency packages
3. `npm run test` to use `jest` to run the test coverage
4. `-optional-` use the `hash-table.js` and/or `binary-search-tree.js` from the lib folder if wanting to import the hash-table and/or binary search tree.

## Dependencies
<u>DEV</u>
1. `eslint`
2. `jest`

## Hash Table Methods
- `.set(<key>, <value>)` - sets a key-value pair in the current hash-table
- `.get(<key>)` - retrieves a value from the given key in the current hash-table
- `.remove(<key>)` - removes the key-value pair from the current hash-table

## Binary Search Tree Methods
- `.insert(<id>, <key>, <value>)` - adds an `id`, `key`, and `value` to a current binarySearchTree </br>
throws an error if the id already exists

- `.find(<id>)` - returns with the `value` in the key-value pair if there is a matching id </br>
otherwise returns `undefined`

- `.remove(<id>)` - removes the key-value pair if there is a matching id and responds with `'Removal Successful'`</br>
otherwise responds with `'No Key Found'`