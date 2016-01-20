"use strict";
const magicFruit_module = {
	magicFruit(population, fruit) {
		let cur = new Array(fruit).fill(0),
			ii = 1,
			sum = (pv,cv)=>pv+cv,
			inc = (cv) => ++cv,
			fruitIter = { [ Symbol.iterator ]() {
				return { next() {
					cur = cur.map(inc);
					cur = cur.concat( new Array( cur.reduce(sum) ).fill(0) );
					++ii;
					return { done: false, value: cur };
				} };
		} };
		//console.log("Week " + ii + " | " + cur.slice(0, 80).join(" "));
		for ( let a of fruitIter) {
			//console.log("Week " + ii + " | " + a.slice(0, 80).join(" "));
			if ( ( cur.reduce(sum) ) >= population ) break;
		}
		return ii;
	}
}
module.exports = magicFruit_module;