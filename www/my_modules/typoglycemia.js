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

var scramble = function(str) {
	// not worrying about intra-word punctuation (e.g. hyphens) or numbers.
	var regEx = /^([A-Za-z]){1}(.*)([A-Za-z]){1}([^A-Za-z])?$/;
	if (regEx.test(str) ) {
		subStringArray = regEx.exec(str);
		//console.log( subStringArray);
		subStringArray[2] = subStringArray[2].split("").shuffle().join("");
		var returnValue = subStringArray[1] + subStringArray[2] + subStringArray[3];
		if(subStringArray[4]) {
			returnValue += subStringArray[4];
		}
		return returnValue;
	} else {
		return str;
	}
	
};

var typoglycemia_module = {
	typoglycemia: function (str) {
		var space = " ";
		var comma = ",";
		var period = ".";

		return str.split(space)
				  .map((str) => scramble(str))
				  .join(space);
		
	}
};

module.exports = typoglycemia_module;