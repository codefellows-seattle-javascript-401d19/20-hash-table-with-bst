'use strict';

const HashTable = require('./lib/hash-table');

let hash = new HashTable(50);

// hash.set('octogon', 'eight');
hash.set('ocsp', 'new 8');
hash.set('opsc', 'new eight');
// hash.set('octop', 'eight');
// hash.set('b', 'bee');
// hash.set('d', 'dee');

// console.log(hash._buckets);
// console.log(hash.get('opcs'));

console.log(hash.remove('opsc'));
console.log(hash._buckets);
console.log(hash.remove('opsc'));
