var threes = function( current ) {
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
};

var input = Math.floor( 10000000000000000 * Math.random() );
threes(input).forEach( (step) => ( console.log( step.join(" -> ") ) ) );

