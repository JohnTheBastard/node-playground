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

var fs = require('fs');
var enable1 = require('path').join( __dirname, 'text/enable1.txt' );
var dictionary = fs.readFileSync( enable1, 'utf-8' ).toString().split('\r\n');

var snond = function ( secret, bad ) {
	var secretArray = secret.split("");
	var problemLetters = bad.split("").unique();
	var subSecret = secretArray.filter( (c) => ( problemLetters.indexOf(c) > -1 ) ).join("");
	return ( subSecret === bad );
};

var probCount = function (bad) { return dictionary.filter( (w) => snond(w, bad) ).length; };

var snond_module = {
	snond: snond,
	problemCount: probCount
};

module.exports = snond_module;