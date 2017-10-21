// This file is not transpiled. So must use CommonJS and ES5

// Require babel to transpile before out test run
require('babel-register')();

// Disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};