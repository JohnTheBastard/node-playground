'use strict';

console.log(__dirname);

let calcStats_module = {
	
	calcStats(sequence) {
		
		let stats = {min: "", max: "", count: "", mean: "" };
		
		sequence = sequence.sort((a,b)=> a-b );
		stats.count = sequence.length;
		stats.min = sequence[0];
		stats.max = sequence[stats.count -1];
		stats.mean = (sequence.reduce((pv,cv) => pv + cv))/stats.count;		
		return stats;
	}
};

module.exports = calcStats_module;