(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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

},{"./arrayUtils":1,"./vector":3}],3:[function(require,module,exports){
var vector_module = {
    Vector: function(length) {
		if( typeof length === "undefined" ) {
			length = 0;
		} else if( isNaN( length ) ||
				   ( length < 0 )  ||
				   ( length % 1 === 0 ) ) {
			console.error( "Vector size is not a nonnegative integer." );
			return null;
		}
		
		var my = {};
				
		my.length = length;
		
		my.push = function(value) {
			my[ my.length.toString() ] = value;
			my.length++;
		    return true;
	    };
	    
	    my.pop = function() {
		    var value;
		    if( my.length > 0 ){
			    value = my[ my.length.toString() ];
			    delete my[ my.length.toString() ];
			    my.length--;
		    } else {
			    value = undefined;
		    }
		    return value;
	    };
	    
	    my.shift = function() {
		    var value;
		    if( my.length > 0 ){
			    value = my[ "0" ];
			    for(var ii = 1; ii < my.length; ii++) {
				    my[ ( ii - 1 ).toString() ] = my[ ii.toString() ];
			    }
			    delete my[ my.length.toString() ];
		    } else {
			    value = undefined;
		    }
		    return value;
	    };
	    
	    my.unshift = function(value) {
		    for( var ii = my.length; ii > 0 ; ii-- ) {
				    my[ ii.toString() ] = my[ ( ii - 1 ).toString() ];
			}
			my["0"] = value;
		    return true;
	    };
	    
	    my.unique = function() {
		    return null;
	    };
	    
	return my;
    }
};

module.exports = vector_module;







},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
