'use strict';

module.exports = function (imul, t) {
	var str = 'str';
	var obj = {};
	var arr = [];

	t.test('should be correct for non-numbers', function (st) {
		st.equal(imul(false, 7), 0, 'imul(false, 7)');
		st.equal(imul(7, false), 0, 'imul(7, false)');
		st.equal(imul(false, false), 0, 'imul(false, false)');
		st.equal(imul(true, 7), 7, 'imul(true, 7)');
		st.equal(imul(7, true), 7, 'imul(7, true)');
		st.equal(imul(true, true), 1, 'imul(true, true)');
		st.equal(imul(undefined, 7), 0, 'imul(undefined, 7)');
		st.equal(imul(7, undefined), 0, 'imul(7, undefined)');
		st.equal(imul(undefined, undefined), 0, 'imul(undefined, undefined)');
		st.equal(imul(str, 7), 0, 'imul(str, 7)');
		st.equal(imul(7, str), 0, 'imul(7, str)');
		st.equal(imul(obj, 7), 0, 'imul(obj, 7)');
		st.equal(imul(7, obj), 0, 'imul(7, obj)');
		st.equal(imul(arr, 7), 0, 'imul(arr, 7)');
		st.equal(imul(7, arr), 0, 'imul(7, arr)');
		st.end();
	});

	t.test('should be correct for hex values', function (st) {
		st.equal(imul(0xffffffff, 5), -5, 'imul(0xffffffff, 5)');
		st.equal(imul(0xfffffffe, 5), -10, 'imul(0xfffffffe, 5)');
		st.end();
	});

	t.test('should be correct', function (st) {
		st.equal(imul(2, 4), 8, 'imul(2, 4)');
		st.equal(imul(-1, 8), -8, 'imul(-1, 8)');
		st.equal(imul(-2, -2), 4, 'imul(-2, -2)');
		st.equal(imul(-0, 7), 0, 'imul(-0, 7)');
		st.equal(imul(7, -0), 0, 'imul(7, -0)');
		st.equal(imul(0.1, 7), 0, 'imul(0.1, 7)');
		st.equal(imul(7, 0.1), 0, 'imul(7, 0.1)');
		st.equal(imul(0.9, 7), 0, 'imul(0.9, 7)');
		st.equal(imul(7, 0.9), 0, 'imul(7, 0.9)');
		st.equal(imul(1.1, 7), 7, 'imul(1.1, 7)');
		st.equal(imul(7, 1.1), 7, 'imul(7, 1.1)');
		st.equal(imul(1.9, 7), 7, 'imul(1.9, 7)');
		st.equal(imul(7, 1.9), 7, 'imul(7, 1.9)');
		st.end();
	});

	t.test('should be correct for objects with valueOf', function (st) {
		var x = {
			x: 0,
			valueOf: function () { this.x += 1; return this.x; }
		};
		st.equal(imul(x, 1), 1, 'imul(x, 1) - 1');
		st.equal(imul(1, x), 2, 'imul(1, x) - 2');
		st.equal(imul(x, 1), 3, 'imul(x, 1) - 3');
		st.equal(imul(1, x), 4, 'imul(1, x) - 4');
		st.equal(imul(x, 1), 5, 'imul(x, 1) - 5');
		st.end();
	});
};
