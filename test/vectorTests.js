var assert = require( 'chai' ).assert;
var Vector = require( '../www/js/vector' ).Vector;
Array.prototype.unique = require( '../www/js/vector' ).unique;

var v = new Vector(0);
var a = [];

var dupes = [ "John", "John", "Jeff", "Geoff", "John", "George", "Joshua", "Jonathan", "John", "Josh", "Jeff" ];
var noDupes = [ 'Geoff', 'George', 'Jeff', 'John', 'Jonathan', 'Josh', 'Joshua' ];

function compare(v, a) {
	assert( v.length === a.length );
	for (var ii = 0; ii < a.length; ii++) {
		assert( v[0] === a[0] );
	}
}


describe( 'Vector object methods ', function() {
    it( 'should behave like Array.prototype methods', function(){
		v.push("foo");
		a.push("foo");
		v.push("bar");
		a.push("bar");
		v.unshift("bat");
		a.unshift("bat");
		v.unshift("baz");
		a.unshift("baz");	  
		compare(v, a);
		
		assert(v.pop() === a.pop());
		compare(v, a);
		assert(v.shift() === a.shift());
		compare(v, a);
		assert(v.pop() === a.pop());
		compare(v, a);
		assert(v.shift() === a.shift());
		compare(v, a);
		
	});
    it( 'Unique method', function(){
	    console.log( dupes.unique() );
	    console.log( noDupes );
		assert( dupes.unique().equals(noDupes) );
    });
});
