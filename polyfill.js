'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var native = Math.imul;
	if (!native
		// Safari 6.1, at least, reports "0" for this value
		|| native(0xffffffff, 5) !== -5
		// Safari 8.0.4 has a length of 1 (fixed in https://bugs.webkit.org/show_bug.cgi?id=143658)
		|| native.length !== 2
	) {
		return implementation;
	}
	return native;
};
