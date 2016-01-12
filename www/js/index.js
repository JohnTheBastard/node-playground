const utils = require( './shuffle' );

Array.prototype.shuffle = utils.shuffle;
Array.prototype.unique = utils.unique;


var alphabet = ["a", "b", "c", "d", "e", "f",
				"g", "h", "i", "j", "k", "l",
				"m", "n", "o", "p", "q", "r",
				"s", "t", "u", "v", "w", "x", 
				"y", "z"];
				
var dupes = [ 'John', 'John', 'Jeff', 'Geoff', 'John', 'George', 
			  'Joshua', 'Jonathan', 'John', 'Josh', 'Jeff' ];

console.log( alphabet.shuffle().join(" ") );

console.log( dupes.unique().join(" ") );

//alert("foo");
