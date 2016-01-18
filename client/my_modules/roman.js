var numerals = {
	I: 1,    i: 1,
	V: 5,    v: 5,
	X: 10,   x: 10,
	L: 50,   l: 50,
	C: 100,  c: 100,
	D: 500,  d: 500,
	M: 1000, m: 1000
};

var roman_module = {
	roman: function (input) {
		var ii = 0;
		var total = 0;
		var r = input.split("");
		
		while( ii < r.length) {			
			if ( numerals[ r[ii] ] < numerals[ r[ii + 1] ]) {
				total += ( numerals[ r[ii + 1] ] - numerals[ r[ii] ] );
				ii += 2;
			} else {
				total += numerals[ r[ii] ];
				ii++;
			}
		}
		return total;
	}
};

module.exports = roman_module;