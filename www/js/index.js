Array.prototype.shuffle = require( './shuffle' ).shuffle;

var alphabet = ["a", "b", "c", "d", "e", "f",
				"g", "h", "i", "j", "k", "l",
				"m", "n", "o", "p", "q", "r",
				"s", "t", "u", "v", "w", "x", 
				"y", "z"];

console.log(  alphabet.shuffle().join(" ") );

//alert("foo");
