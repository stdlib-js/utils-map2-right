/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );
var caddf = require( '@stdlib/math-base-ops-caddf' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex64Array = require( '@stdlib/array-complex64' );
var zeros = require( '@stdlib/array-base-zeros' );
var array = require( '@stdlib/ndarray-array' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var realf = require( '@stdlib/complex-realf' );
var imagf = require( '@stdlib/complex-imagf' );
var map2Right = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof map2Right, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a first argument which is either an array-like object or an ndarray', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map2Right( value, [ 1, 2, 3 ], naryFunction( add, 2 ) );
		};
	}
});

tape( 'the function throws an error if not provided a first argument which is either an array-like object or an ndarray', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map2Right( value, array( [ 1, 2, 3 ] ), naryFunction( add, 2 ) );
		};
	}
});

tape( 'the function throws an error if not provided a second argument which is not an array-like object (x: array-like object)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		array( [ 1, 2, 3 ] ),
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map2Right( [ 1, 2, 3 ], value, naryFunction( add, 2 ) );
		};
	}
});

tape( 'the function throws an error if not provided a second argument which is not an ndarray (x: ndarray)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[ 1, 2, 3 ],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map2Right( array( [ 1, 2, 3 ] ), value, naryFunction( add, 2 ) );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map2Right( [ 1, 2, 3, 4, 5, 6 ], [ 1, 1, 1, 1, 1, 1 ], value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a function (context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map2Right( [ 1, 2, 3, 4, 5, 6 ], [ 1, 1, 1, 1, 1, 1 ], value, {} );
		};
	}
});

tape( 'the function throws an error if provided array-like objects having different lengths', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 0 ],
		[ 0, 0 ],
		[ 0, 0, 0 ],
		[ 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map2Right( [ 1, 2, 3, 4, 5, 6 ], value, naryFunction( add, 2 ) );
		};
	}
});

tape( 'the function throws an error if provided ndarrays which are not broadcast compatible', function test( t ) {
	var values;
	var i;

	values = [
		array( [ 0, 0 ] ),
		array( [ 0, 0, 0 ] ),
		array( [ 0, 0, 0, 0 ] ),
		array( [ 0, 0, 0, 0, 0 ] ),
		array( [ 0, 0, 0, 0, 0, 0, 0 ] ),
		array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] ),
		array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ),
		array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			map2Right( array( [ 1, 2, 3, 4, 5, 6 ] ), value, naryFunction( add, 2 ) ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function throws an error if not provided either both array-like objects or both ndarrays for the input array arguments', function test( t ) {
	t.throws( fcn1, TypeError, 'throws an error' );
	t.throws( fcn2, TypeError, 'throws an error' );
	t.throws( fcn3, TypeError, 'throws an error' );
	t.throws( fcn4, TypeError, 'throws an error' );
	t.end();

	function fcn1() {
		var x = [ 1, 2, 3, 4, 5, 6 ];
		var y = array( zeros( x.length ), {
			'dtype': 'generic'
		});
		map2Right( x, y, naryFunction( add, 2 ) );
	}

	function fcn2() {
		var x = [ 1, 2, 3, 4, 5, 6 ];
		var y = array( zeros( x.length ), {
			'dtype': 'generic'
		});
		map2Right( x, y, naryFunction( add, 2 ), {} );
	}

	function fcn3() {
		var x = array( [ 1, 2, 3, 4, 5, 6 ], {
			'dtype': 'generic'
		});
		var y = zeros( x.length );
		map2Right( x, y, naryFunction( add, 2 ) );
	}

	function fcn4() {
		var x = array( [ 1, 2, 3, 4, 5, 6 ], {
			'dtype': 'generic'
		});
		var y = zeros( x.length );
		map2Right( x, y, naryFunction( add, 2 ), {} );
	}
});

tape( 'the function applies a function to array elements (array-like object)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = [ 1, 2, 3, 4, 5, 6 ];
	y = [ 1, 1, 1, 1, 1, 1 ];
	expected = [ 2, 3, 4, 5, 6, 7 ];
	actual = map2Right( x, y, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to array elements (complex number array)', function test( t ) {
	var expected;
	var actual;
	var re;
	var im;
	var x;
	var y;
	var f;
	var v;
	var i;

	f = naryFunction( caddf, 2 );

	x = new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] );
	y = new Complex64Array( [ 1, 1, 1, 1, 1, 1 ] );
	expected = [ 2, 3, 4, 5, 6, 7 ];
	actual = map2Right( x, y, f );

	for ( i = 0; i < x.length; i++ ) {
		v = actual[ i ];
		re = realf( v );
		im = imagf( v );
		t.strictEqual( re, expected[ i*2 ], 'returns expected value' );
		t.strictEqual( im, expected[ (i*2)+1 ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function applies a function to array elements (ndarray)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic'
	});
	y = array( [ 1, 1, 1, 1, 1, 1 ], {
		'dtype': 'generic'
	});
	expected = [ 2, 3, 4, 5, 6, 7 ];
	actual = map2Right( x, y, f );

	t.deepEqual( actual.data, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to array elements (ndarray; broadcasting)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'row-major'
	});
	y = ndarray( 'generic', [ 1 ], [], [ 0 ], 0, 'row-major' );

	expected = [ 2, 3, 4, 5, 6, 7 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, x.shape, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	x = ndarray( 'generic', [ 1 ], [], [ 0 ], 0, 'row-major' );
	y = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'row-major'
	});

	expected = [ 2, 3, 4, 5, 6, 7 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, y.shape, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	x = array( [ 1, 1 ], {
		'dtype': 'generic',
		'shape': [ 2, 1 ],
		'order': 'row-major'
	});
	y = array( [ 1, 2, 3 ], {
		'dtype': 'generic',
		'shape': [ 1, 3 ],
		'order': 'row-major'
	});

	expected = [ 2, 3, 4, 2, 3, 4 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, [ 2, 3 ], 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'row-major'
	});
	y = array( zeros( x.length*2 ), {
		'dtype': 'generic',
		'shape': [ 2, 2, 3 ],
		'order': 'row-major'
	});

	expected = [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, y.shape, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	y = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'row-major'
	});
	x = array( zeros( y.length*2 ), {
		'dtype': 'generic',
		'shape': [ 2, 2, 3 ],
		'order': 'row-major'
	});

	expected = [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, x.shape, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'column-major'
	});
	y = array( zeros( x.length*2 ), {
		'dtype': 'generic',
		'shape': [ 2, 2, 3 ],
		'order': 'column-major'
	});

	expected = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, y.shape, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	y = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'column-major'
	});
	x = array( zeros( y.length*2 ), {
		'dtype': 'generic',
		'shape': [ 2, 2, 3 ],
		'order': 'column-major'
	});

	expected = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, x.shape, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'column-major'
	});
	y = array( zeros( x.length*2 ), {
		'dtype': 'generic',
		'shape': [ 2, 2, 3 ],
		'order': 'row-major'
	});

	expected = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, y.shape, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'row-major'
	});
	y = array( zeros( x.length*2 ), {
		'dtype': 'generic',
		'shape': [ 2, 2, 3 ],
		'order': 'column-major'
	});

	expected = [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6 ];
	actual = map2Right( x, y, f );

	t.strictEqual( actual.order, x.order, 'returns expected value' );
	t.deepEqual( actual.shape, y.shape, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	t.end();
});

tape( 'the function throws an error if provided ndarrays which are not broadcast compatible', function test( t ) {
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 6 ]
	});
	y = array( zeros( x.length ), {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'row-major'
	});

	t.throws( badValues( x, y ), Error, 'throws an error' );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 6 ]
	});
	y = array( zeros( x.length ), {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'column-major'
	});

	t.throws( badValues( x, y ), Error, 'throws an error' );

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic',
		'shape': [ 3, 2 ],
		'order': 'row-major'
	});
	y = array( zeros( x.length ), {
		'dtype': 'generic',
		'shape': [ 2, 3 ],
		'order': 'column-major'
	});

	t.throws( badValues( x, y ), Error, 'throws an error' );

	t.end();

	function badValues( x, y ) {
		return function fcn() {
			map2Right( x, y, f );
		};
	}
});

tape( 'the function applies a function to array elements (typed arrays)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = new Float64Array( [ 1, 2, 3, 4, 5, 6 ] );
	y = new Float64Array( [ 1, 1, 1, 1, 1, 1 ] );
	expected = [ 2, 3, 4, 5, 6, 7 ];
	actual = map2Right( x, y, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to array elements (empty array)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = [];
	y = [];
	expected = [];
	actual = map2Right( x, y, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to array elements (zero-dimensional ndarray)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = ndarray( 'generic', [ 1 ], [], [ 0 ], 0, 'row-major' );
	y = ndarray( 'generic', [ 1 ], [], [ 0 ], 0, 'row-major' );
	expected = [ 2 ];
	actual = map2Right( x, y, f );

	t.deepEqual( actual.data, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to array elements (empty ndarray)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = ndarray( 'generic', [], [ 2, 0, 2 ], [ 0, 2, 1 ], 0, 'row-major' );
	y = ndarray( 'generic', [], [ 2, 0, 2 ], [ 0, 2, 1 ], 0, 'row-major' );
	expected = [];
	actual = map2Right( x, y, f );

	t.deepEqual( actual.data, expected, 'returns expected value' );
	t.end();
});

tape( 'the function applies a function to array elements (empty typed array)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var f;

	f = naryFunction( add, 2 );

	x = new Float64Array( [] );
	y = new Float64Array( [] );
	expected = [];
	actual = map2Right( x, y, f );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function invokes an applied function with five arguments (array-like object)', function test( t ) {
	var expected;
	var actual;
	var xarrs;
	var yarrs;
	var xvals;
	var yvals;
	var nargs;
	var idx;
	var x;
	var y;

	x = [ 1, 2, 3, 4, 5, 6 ];
	y = [ 1, 1, 1, 1, 1, 1 ];

	nargs = [];
	xvals = [];
	yvals = [];
	idx = [];
	xarrs = [];
	yarrs = [];

	actual = map2Right( x, y, fcn );

	expected = [ 2, 3, 4, 5, 6, 7 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = [ 6, 5, 4, 3, 2, 1 ];
	t.deepEqual( xvals, expected, 'returns expected value' );

	expected = [ 1, 1, 1, 1, 1, 1 ];
	t.deepEqual( yvals, expected, 'returns expected value' );

	expected = [ 5, 4, 3, 2, 1, 0 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	expected = [ x, x, x, x, x, x ];
	t.deepEqual( xarrs, expected, 'returns expected value' );

	expected = [ y, y, y, y, y, y ];
	t.deepEqual( yarrs, expected, 'returns expected value' );

	expected = [ 5, 5, 5, 5, 5, 5 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( v1, v2, i, x, y ) {
		nargs.push( arguments.length );
		xvals.push( v1 );
		yvals.push( v2 );
		idx.push( i );
		xarrs.push( x );
		yarrs.push( y );
		return add( v1, v2 );
	}
});

tape( 'the function invokes an applied function with three arguments (ndarray)', function test( t ) {
	var expected;
	var actual;
	var xarrs;
	var yarrs;
	var xvals;
	var yvals;
	var nargs;
	var idx;
	var x;
	var y;

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic'
	});
	y = array( [ 1, 1, 1, 1, 1, 1 ], {
		'dtype': 'generic'
	});

	nargs = [];
	nargs = [];
	xvals = [];
	yvals = [];
	idx = [];
	xarrs = [];
	yarrs = [];

	actual = map2Right( x, y, fcn );

	expected = [ 2, 3, 4, 5, 6, 7 ];
	t.deepEqual( actual.data, expected, 'returns expected value' );

	expected = [ 6, 5, 4, 3, 2, 1 ];
	t.deepEqual( xvals, expected, 'returns expected value' );

	expected = [ 1, 1, 1, 1, 1, 1 ];
	t.deepEqual( yvals, expected, 'returns expected value' );

	expected = [ 5, 4, 3, 2, 1, 0 ];
	t.deepEqual( idx, expected, 'returns expected value' );

	expected = [ x, x, x, x, x, x ];
	t.deepEqual( xarrs, expected, 'returns expected value' );

	expected = [ y, y, y, y, y, y ];
	t.deepEqual( yarrs, expected, 'returns expected value' );

	expected = [ 5, 5, 5, 5, 5, 5 ];
	t.deepEqual( nargs, expected, 'returns expected value' );

	t.end();

	function fcn( v1, v2, i, x, y ) {
		nargs.push( arguments.length );
		xvals.push( v1 );
		yvals.push( v2 );
		idx.push( i );
		xarrs.push( x );
		yarrs.push( y );
		return add( v1, v2 );
	}
});

tape( 'the function supports providing a `this` context (array-like object)', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var x;
	var y;

	x = [ 1, 2, 3, 4, 5, 6 ];
	y = [ 1, 1, 1, 1, 1, 1 ];

	ctx = {
		'count': 0
	};

	expected = [ 2, 3, 4, 5, 6, 7 ];
	actual = map2Right( x, y, fcn, ctx );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 6, 'returns expected value' );

	t.end();

	function fcn( v1, v2 ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return add( v1, v2 );
	}
});

tape( 'the function supports providing a `this` context (ndarray)', function test( t ) {
	var expected;
	var actual;
	var ctx;
	var x;
	var y;

	x = array( [ 1, 2, 3, 4, 5, 6 ], {
		'dtype': 'generic'
	});
	y = array( [ 1, 1, 1, 1, 1, 1 ], {
		'dtype': 'generic'
	});

	ctx = {
		'count': 0
	};

	expected = [ 2, 3, 4, 5, 6, 7 ];
	actual = map2Right( x, y, fcn, ctx );

	t.deepEqual( actual.data, expected, 'returns expected value' );
	t.strictEqual( ctx.count, 6, 'returns expected value' );

	t.end();

	function fcn( v1, v2 ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return add( v1, v2 );
	}
});
