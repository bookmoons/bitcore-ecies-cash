# ECIES
This module implements [Elliptic Curve Integrated Encryption Scheme (ECIES)](http://en.wikipedia.org/wiki/Integrated_Encryption_Scheme) around bitcore for Bitcoin Cash.

## Installation
ECIES is implemented as a separate module and you must add it to your dependencies:

For node projects:

```bash
npm install @bookmoons/bitcore-ecies-cash --save
```

For client-side projects:

```bash
bower install bookmoons.bitcore-ecies-cash --save
```

## Example

```javascript
var bitcore = require('bitcore-lib-cash');
var ECIES = require('@bookmoons/bitcore-ecies-cash');

var alicePrivateKey = new bitcore.PrivateKey();
var bobPrivateKey = new bitcore.PrivateKey();

var data = new Buffer('The is a raw data example');

// Encrypt data
var cypher1 = ECIES.privateKey(alicePrivateKey).publicKey(bobPrivateKey.publicKey);
var encrypted = cypher1.encrypt(data);

// Decrypt data
var cypher2 = ECIES.privateKey(bobPrivateKey).publicKey(alicePrivateKey.publicKey);
var decrypted = cypher2.decrypt(encrypted);

assert(data.toString(), decrypted.toString());
```
