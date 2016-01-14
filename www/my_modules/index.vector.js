const Vector = require( './vector' ).Vector;
const utils = require( './arrayUtils' );

// Warn if overriding
if(Array.prototype.equals)  { console.warn( "Overriding existing Array.prototype.equals." );  }
if(Array.prototype.shuffle) { console.warn( "Overriding existing Array.prototype.shuffle." ); }
if(Array.prototype.unique)  { console.warn( "Overriding existing Array.prototype.unique." );  }

Array.prototype.equals = utils.equals;
Array.prototype.shuffle = utils.shuffle;
Array.prototype.unique = utils.unique;

// Hide from for-in loops
Object.defineProperty( Array.prototype, "equals",  { enumerable: false } );
Object.defineProperty( Array.prototype, "shuffle", { enumerable: false } );
Object.defineProperty( Array.prototype, "unique",  { enumerable: false } );



var alphabet = ["a", "b", "c", "d", "e", "f",
				"g", "h", "i", "j", "k", "l",
				"m", "n", "o", "p", "q", "r",
				"s", "t", "u", "v", "w", "x", 
				"y", "z"];
				
var randomized = alphabet.shuffle();
console.log( randomized.join(" ") );



var v = new Vector();


v.push(3);
v.push(2);
v.unshift(1);
v.unshift(0);

var popped = v.pop();
console.log("popped: ", popped );
console.log( "pop 2: ", v );

var shifted = v.shift();
console.log( "shifted: ", shifted );
console.log( "shift 0: ", v );


var dupes = [ 'John', 'John', 'Jeff', 'Geoff', 'John', 'George', 
			  'Joshua', 'Jonathan', 'John', 'Josh', 'Jeff' ];

var noDupes = dupes.unique();
console.log( dupes.sort().join(" ") );
