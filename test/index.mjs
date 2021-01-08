import imul, * as imulModule from 'math.imul';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(imul, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(imulModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = imulModule;
	t.equal(await import('math.imul/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.imul/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.imul/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
