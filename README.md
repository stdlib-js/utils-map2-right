<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# map2Right

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a function to elements in two input arrays while iterating from right to left and assign the results to an output array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-map2-right
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var map2Right = require( '@stdlib/utils-map2-right' );
```

<a name="fcn-map2-right"></a>

#### map2Right( x, y, fcn\[, thisArg] )

Applies a function to elements in two input arrays while iterating from right to left and assigns the results to a new array.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];

var out = map2Right( x, y, naryFunction( add, 2 ) );
// returns [ 2, 3, 4, 5, 6, 7 ]
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );
var array = require( '@stdlib/ndarray-array' );

var opts = {
    'dtype': 'generic'
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );

var out = map2Right( x, y, naryFunction( add, 2 ) );
// returns <ndarray>

var v = out.get( 1, 1 );
// returns 6
```

The applied function is provided the following arguments:

-   **v1**: element from first input array.
-   **v2**: element from second input array.
-   **idx**: element index.
-   **arrays**: input arrays.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var add = require( '@stdlib/math-base-ops-add' );

function fcn( v1, v2 ) {
    this.count += 1;
    return add( v1, v2 );
}

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];

var ctx = {
    'count': 0
};

var out = map2Right( x, y, fcn, ctx );
// returns [ 2, 3, 4, 5, 6, 7 ]

var cnt = ctx.count;
// returns 6
```

<a name="method-map2-right-assign"></a>

#### map2Right.assign( x, y, out, fcn\[, thisArg] )

Applies a function to elements in two input arrays while iterating from right to left and assigns the results to an output array `out`.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];
var out = [ 0, 0, 0, 0, 0, 0 ];

map2Right.assign( x, y, out, naryFunction( add, 2 ) );

console.log( out );
// => [ 2, 3, 4, 5, 6, 7 ]
```

The method accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );
var array = require( '@stdlib/ndarray-array' );

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
var out = array( opts );

map2Right.assign( x, y, out, naryFunction( add, 2 ) );

var v = out.get( 1, 1 );
// returns 6
```

Input and output arrays must be either all array-like objects or all [`ndarray`][@stdlib/ndarray/ctor]-like objects. If input and output arrays are array-like objects, all arrays **must** have the same number of elements.

If input and output arrays are [`ndarray`][@stdlib/ndarray/ctor]-like objects, the arrays **must** be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes]. To map from one or more input [`ndarrays`][@stdlib/ndarray/ctor] to an output [`ndarray`][@stdlib/ndarray/ctor] which has the same rank (i.e., dimensionality) and the same number of elements, but which is not [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes], reshape the arrays prior to invocation.

```javascript
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );
var array = require( '@stdlib/ndarray-array' );

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );

opts = {
    'dtype': 'generic',
    'shape': [ 2, 2, 3 ]  // broadcast compatible shape
};
var out = array( opts );

map2Right.assign( x, y, out, naryFunction( add, 2 ) );

var v = out.get( 0, 1, 1 );
// returns 6

v = out.get( 1, 1, 1 );
// returns 6
```

In general, avoid providing output [`ndarray`][@stdlib/ndarray/ctor]-like objects which are [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] views containing one or more elements referring to the **same** memory location. Writing to an overlapping [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] view is likely to simultaneously affect multiple elements and yield unexpected results.

The applied function is provided the same arguments as with [`map2Right`](#fcn-map2-right).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [`map2Right`](#fcn-map2-right) function **always** returns an output value having a "generic" data type. For example, if provided array-like objects, the function returns a generic `array`. If provided [`ndarrays`][@stdlib/ndarray/ctor], the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a "generic" data type.

    Accordingly, when provided a typed array, the [`map2Right`](#fcn-map2-right) function does **not** return a typed array of the same type. To assign results to a typed array, use the [`map2Right.assign`](#method-map2-right-assign) method.

-   Both [`map2Right`](#fcn-map2-right) and [`map2Right.assign`](#method-map2-right-assign) accept array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    var naryFunction = require( '@stdlib/utils-nary-function' );
    var Complex64Array = require( '@stdlib/array-complex64' );
    var Complex64 = require( '@stdlib/complex-float32' );
    var realf = require( '@stdlib/complex-realf' );
    var imagf = require( '@stdlib/complex-imagf' );
    var add = require( '@stdlib/math-base-ops-caddf' );

    var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
    var y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
    var z = new Complex64Array( 4 );

    map2Right.assign( x, y, z, naryFunction( add, 2 ) );

    var v = z.get( 0 );

    var re = realf( v );
    // returns 2.0

    var im = imagf( v );
    // returns 3.0
    ```

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous. For non-contiguous arrays, see [`@stdlib/ndarray-base/binary`][@stdlib/ndarray/base/binary].

-   Both [`map2Right`](#fcn-map2-right) and [`map2Right.assign`](#method-map2-right-assign) do **not** skip `undefined` elements.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array-filled-by' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );
var array = require( '@stdlib/ndarray-array' );
var map2Right = require( '@stdlib/utils-map2-right' );

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'generic', rand );
}

// Create two-dimensional ndarrays (i.e., matrices):
var opts = {
    'dtype': 'generic',
    'flatten': true
};
var x = array( filledarrayBy( 10, opts.dtype, fill ), opts );
var y = array( filledarrayBy( 10, opts.dtype, fill ), opts );

// Create an explicit binary function:
var f = naryFunction( add, 2 );

// Compute element-wise sums...
var z = map2Right( x, y, f );

console.log( 'x:' );
console.log( x.data );

console.log( 'y:' );
console.log( y.data );

console.log( 'z:' );
console.log( z.data );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-map-right`][@stdlib/utils/map-right]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-map2`][@stdlib/utils/map2]</span><span class="delimiter">: </span><span class="description">apply a function to elements in two input arrays and assign the results to an output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map2-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map2-right

[test-image]: https://github.com/stdlib-js/utils-map2-right/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-map2-right/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map2-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map2-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map2-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map2-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-map2-right/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-map2-right/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-map2-right/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-map2-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map2-right/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/base/binary]: https://github.com/stdlib-js/ndarray-base-binary

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

[@stdlib/ndarray/base/assert/is-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-contiguous

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

<!-- <related-links> -->

[@stdlib/utils/map-right]: https://github.com/stdlib-js/utils-map-right

[@stdlib/utils/map2]: https://github.com/stdlib-js/utils-map2

<!-- </related-links> -->

</section>

<!-- /.links -->
