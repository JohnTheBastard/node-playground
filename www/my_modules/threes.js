var threes_module = {
	threes: ( current ) => {
		var steps = [];
		var modulus;
		while ( current > 1 ) {
			modulus = current % 3;
			if ( modulus === 2) { modulus = -1; }
			steps.push( [current, -modulus] );
			current -= modulus;
			current /= 3;
		} 
		return steps;
	}
};

module.exports = threes_module;