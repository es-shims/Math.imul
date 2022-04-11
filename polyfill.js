'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var orig = Math.imul;
	if (!orig
		// Safari 6.1, at least, reports "0" for this value
		|| orig(0xffffffff, 5) !== -5
		// Safari 8.0.4 has a length of 1 (fixed in https://bugs.webkit.org/show_bug.cgi?id=143658)
		|| orig.length !== 2
	) {
		return implementation;
	}
	return orig;
};
