var normalize = require( './dateNormalizer' ).normalize;

var input = [ "2/13/15", "1-31-10", "5 10 2015",
			  "2012 3 17", "2001-01-01", "2008/01/07" ];


console.log(  normalize(input) );

//alert("foo");
