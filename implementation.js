'use strict';

var ToUint32 = require('es-abstract/2019/ToUint32');

module.exports = function imul(x, y) {
	// taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
	var a = ToUint32(x);
	var b = ToUint32(y);
	var ah = (a >>> 16) & 0xffff;
	var al = a & 0xffff;
	var bh = (b >>> 16) & 0xffff;
	var bl = b & 0xffff;
	/*
	 * the shift by 0 fixes the sign on the high part
	 * the final |0 converts the unsigned value into a signed value
	 */
	return (al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0) | 0;
};
