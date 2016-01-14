var threes = require( './threes' ).threes;

var input = Math.floor( 10000000000000000 * Math.random() );

threes(input).forEach( (step) => ( console.log( step.join(" -> ") ) ) );

