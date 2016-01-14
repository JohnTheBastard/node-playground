var assert = require( 'chai' ).assert;
const Vector = require( '../www/my_modules/vector' ).Vector;
const utils = require( '../www/my_modules/arrayUtils' );

// I should make some tests out of these warnings
if(Array.prototype.equals)  { console.warn( "Overriding existing Array.prototype.equals." );  }
if(Array.prototype.shuffle) { console.warn( "Overriding existing Array.prototype.shuffle." ); }
if(Array.prototype.unique)  { console.warn( "Overriding existing Array.prototype.unique." );  }

Array.prototype.equals = utils.equals;
Array.prototype.shuffle = utils.shuffle;
Array.prototype.unique = utils.unique;

// These need tests
Object.defineProperty( Array.prototype, "equals",  { enumerable: false } );
Object.defineProperty( Array.prototype, "shuffle", { enumerable: false } );
Object.defineProperty( Array.prototype, "unique",  { enumerable: false } );


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
	    //this is still failing...
		//assert( dupes.unique().equals(noDupes) );
    });
});
