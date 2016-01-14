var threes_module = {
	threes: ( current ) => {
		var steps = [];
		var upOrDown;
		
		while ( current > 1 ) {
			if ( (current % 3) === 0 ) { upOrDown = 0; } 
			else  if( ( (current + 1) % 3 ) === 0 ) { upOrDown = 1; }
			else { upOrDown = -1; }
			steps.push( [current, upOrDown] );
			current += upOrDown;
			current /= 3;
		} 
		return steps;
	}
};

module.exports = threes_module;