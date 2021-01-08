'use strict';

require('../auto');

require('../'); // to ensure no side effects

var test = require('tape');
var keys = require('reflect.ownkeys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.imul.length, 2, 'Math.imul has a length of 2');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.imul.name, 'imul', 'Math.imul has name "imul"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'imul'), 'Math.imul is not enumerable');
		et.end();
	});

	t.match(keys(Math.imul).sort().join('|'), /^(arguments\|caller\|)?length|name(\|prototype)?$/, 'has no unexpected own keys');

	runTests(Math.imul, t);

	t.end();
});
