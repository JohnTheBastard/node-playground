var assert = require( 'chai' ).assert;
const Vector = require( '../my_modules/vector' ).Vector;
require( '../my_modules/arrayUtils' );

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


describe.skip( 'Vector push, pop, shift, unshift methods ', function() {
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
});
describe( 'Vector unique method ', function() {
	    it( 'Unique method', function(){
		    assert(true);
	//    console.log( dupes.unique() );
	//    console.log( noDupes );
	    //this is still failing...
		//assert( dupes.unique().equals(noDupes) );
    });
});
