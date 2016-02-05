'use strict';
const deepcopy = require("deepcopy");
require('./ArrayUtils');

const pad = function (num, size) {
	var s = num+"";
	while (s.length < size) s = "0" + s;
	return s;
};


let stringifier_module = {
	stringifier: function(data) {
		let stringifiedLevels = [];
		
		data.easy.forEach(function(level, index) {
			let dimension = level.dimension;
			let floor = level.floor
			let levelObject = { "identifier": "easy01-level" + pad(index, 2), "difficulty": "easy", 
					"data": { "dimension": level.dimension, 
							  "floor": deepcopy( level.floor ), 
							  "start": deepcopy( level.start ),
							  "crate": deepcopy( level.crate ),
							  "dots":  deepcopy( level.dots  ) } };
			stringifiedLevels.push(levelObject);
		});
		
		data.hard.forEach(function(level, index) {
			let dimension = level.dimension;
			let floor = level.floor
			let levelObject = { "identifier": "hard01-level" + pad(index, 2), "difficulty": "hard", 
					"data": { "dimension": level.dimension, 
							  "floor": deepcopy( level.floor ), 
							  "start": deepcopy( level.start ),
							  "crate": deepcopy( level.crate ),
							  "dots":  deepcopy( level.dots  ) } };
			stringifiedLevels.push(levelObject);
		});
		
		
		return stringifiedLevels;
	}
};

module.exports = stringifier_module;
