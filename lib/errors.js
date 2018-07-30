'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on bitcore-ecies-cash Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('bitcore-lib-cash').errors.extend(spec);

