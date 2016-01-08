var happyNumber = require( './happynumbers' ).happyNumber;

for (var jj = 1; jj < 101; jj++) {
	if( happyNumber(jj) )
	console.log( jj + " is happy ");
}

//alert("foo");
