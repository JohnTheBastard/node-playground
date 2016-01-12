const utils = require( './shuffle' );

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
console.log(randomized);

var dupes = [ 'John', 'John', 'Jeff', 'Geoff', 'John', 'George', 
			  'Joshua', 'Jonathan', 'John', 'Josh', 'Jeff' ];

var noDupes = dupes.unique();

console.log (noDupes);

