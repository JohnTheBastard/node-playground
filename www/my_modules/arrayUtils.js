/*
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
*/

var array_utils_module = {
	unique: function() {
		var self = this;
		var noDupes = [];
		self.sort().map( function( value, index, collection ){
			if (value !== collection[index - 1]) { noDupes.push(value); }
			return value;
		});
		return noDupes;
	},
	
	shuffle: function () {
		return this.map( n => [ Math.random(), n ] )
				   .sort()
				   .map( n => n[1] );
	},
	
	equals: function (array) {
		// wait, I think I should be using !== not != ...
	    if (!array || (this.length != array.length) ) { return false; }
		for (var i = 0, l=this.length; i < l; i++) {
			if (this[i] instanceof Array && array[i] instanceof Array) {
				if ( !this[i].equals(array[i]) ) { return false; }      
	        } else if ( this[i] != array[i] ) { return false; }           
		}       
		return true;
	}	
};

module.exports = array_utils_module;