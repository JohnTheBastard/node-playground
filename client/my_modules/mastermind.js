'use strict';
require('./arrayUtils');


let output = [],
	correct, misplaced;


let mastermind_module = {
	mastermind(input) {
		let args, code, guessesRemaining, guesses;
		let parseInput = function(input) {
				args = input.split(" "),
				code = args[0].split(""),
				//guessesRemaining = args[1],
				guesses = args.slice(2,7).map( g => g.split("") );
		}
	
		parseInput(input);


		// I hate this code. O(n^3), unreadable, needs to be refactored into
		// method calls and leverage uniqueness of digits for effeciency.
		for( let gg = 0; gg < guesses.length; gg++) {
			correct = 0;
			misplaced = 0;
			for( let hh = 0; hh < guesses[gg].length; hh++) {
				let idx = code.findIndex( n => n === guesses[gg][hh]);
				if( idx > -1 ) {
					if( idx === hh ) correct++; 
					else misplaced++;
				}
			}
			output.push( correct + "-" + misplaced );
		}

		return output.join(" ");
	}
};

module.exports = mastermind_module;