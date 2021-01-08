'use strict';

var imul = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(imul, t);

	t.end();
});
