'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimMathImul() {
	var orig = Math.imul;
	var polyfill;

	if (orig && orig.length !== 2) {
		// Safari 8.0.4 has a length of 1 (fixed in https://bugs.webkit.org/show_bug.cgi?id=143658)
		polyfill = function imul(x, y) {
			return orig(x, y);
		};
	} else {
		polyfill = getPolyfill();
	}

	define(
		Math,
		{ imul: polyfill },
		{ imul: function () { return orig !== polyfill; } }
	);
	return polyfill;
};
