var assert = require( 'chai' ).assert;
var greet = require( '../greet' ).greet;

describe( 'tests for the greet object', function() {
    it( 'should return a string', function(){
	//console.log( typeof hello.greet('John') );
	assert( typeof greet('John') === 'string' );
	assert( greet('John') === 'Hello, John.' );
    });
    it( 'should return the correct greeting for the parameter that is passed', function(){
	assert( greet('John') === 'Hello, John.' );
    });
});
