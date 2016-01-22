"use strict";
const magicFruit_module = {
	magicFruit: function(population, fruit) {
		let cur = new Array(fruit).fill(0),
			ii = 1,
			sum = (pv,cv)=>pv+cv,
			inc = (cv) => ++cv;

		let fruitIter = { 
			[ Symbol.iterator ]: function*() {
				for(;;) {
					cur = cur.map(inc);
					cur = cur.concat( new Array( cur.reduce(sum) ).fill(0) );
					++ii;
					yield cur;
				} 
			}
		}; 
	
		console.log("Week " + ii + " | " + cur.slice(0, 80).join(" "));
		for ( let a of fruitIter) {
			console.log("Week " + ii + " | " + a.slice(0, 80).join(" "));
			if ( ( cur.reduce(sum) ) >= population ) break;
		}
		return ii;
	}
};
module.exports = magicFruit_module;