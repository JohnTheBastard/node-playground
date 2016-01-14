var threes_module = {
	threes: function (bigNumber) {
	
		var steps = [];
		var current = bigNumber;
		var upOrDown = 0;
		
		while ( current > 1 ) {
			if ( (current % 3) === 0 ) {
				upOrDown = 0;
			} else  if( ( (current + 1) % 3 ) === 0 ) {
				current++;
				upOrDown = 1;
			} else {
				current--;
				upOrDown = -1;
			}
			steps.push( [current - upOrDown, upOrDown] );
			current /= 3;
		} 
		return steps;
	}
};

module.exports = threes_module;