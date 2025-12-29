# Math.imul <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.imul` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.imul
```

## Usage/Examples

```js
console.log(Math.imul(2, 4)); // 8
console.log(Math.imul(-1, 8)); // -8
console.log(Math.imul(-2, -2)); // 4
console.log(Math.imul(0xffffffff, 5)); // -5
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.imul
[npm-version-svg]: https://versionbadg.es/es-shims/Math.imul.svg
[deps-svg]: https://david-dm.org/es-shims/Math.imul.svg
[deps-url]: https://david-dm.org/es-shims/Math.imul
[dev-deps-svg]: https://david-dm.org/es-shims/Math.imul/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.imul#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.imul.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.imul.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.imul.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.imul
[codecov-image]: https://codecov.io/gh/es-shims/Math.imul/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Math.imul/
[actions-image]: https://img.shields.io/github/check-runs/es-shims/Math.imul/main
[actions-url]: https://github.com/es-shims/Math.imul/actions
