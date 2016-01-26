"use strict";

let fleventy = require( './fleventy' ).fleventy;

let input = [ 0xF5, 0xB3, 0xE4, 0xBBBB, 0xA0C9 ]; 

for (let ii=0; ii < input.length; ii++) {
	console.log(  fleventy( input[ii] ) );
}
