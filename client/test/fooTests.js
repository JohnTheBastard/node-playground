'use strict';
const assert = require( 'chai' ).assert;
const foo = require( '../my_modules/foo' ).foo;

let input = [];


describe( 'tests foo methods', function() {
    it( 'should return true', function(){
		assert( foo(input) );
    });
    it( 'should also...', function(){
		assert( foo(input) );
    });
    it( 'should also...', function(){
		assert( foo(input) === true );
    });
        it( 'should also', function(){
		assert( foo(input) === true );
    });
});
