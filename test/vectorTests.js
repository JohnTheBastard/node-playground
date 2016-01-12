var assert = require( 'chai' ).assert;
var Vector = require( '../www/js/vector' ).Vector;
Array.prototype.unique = require( '../www/js/vector' ).unique;

var v = new Vector(0);
var a = [];

var dupes = [ "John", "John", "Jeff", "Geoff", "John", "George", "Joshua", "Jonathan", "John", "Josh", "Jeff" ];


describe( 'Vector object methods ', function() {
    it( 'should behave like Array.prototype methods', function(){
	    v.push("foo");
	    a.push("foo");
		assert( v.length === a.length );
		assert( v[0] === a[0] );
    });
    it( 'should also ...', function(){
		assert( true );
    });
});
