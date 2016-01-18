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
		var total = 0;
		return input.split("")
			.map( (cv, ii, arr) => {
				console.log( arr[ii + 1] + " -> " + numerals[ arr[ii + 1] ]);
				if ( numerals[ cv ] < numerals[ arr[ii + 1] ]) {
					total -= numerals[ cv ];
				} else {
					total += numerals[ cv ];
				}			
			})
			.reduce( (pv, cv) => pv +cv );
	}
};

module.exports = roman_module;