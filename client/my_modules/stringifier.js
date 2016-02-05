'use strict';

var pad = function (num, size) {
	var s = num+"";
	while (s.length < size) s = "0" + s;
	return s;
};


let stringifier_module = {
	stringifier: function(data) {
		let stringifiedData = {};
		
		data.easy.forEach(function(level, index) {
			let id = "easyPack001-level" + pad(index, 3);
			stringifiedData[id] = JSON.stringify(level);
		});
		
		data.hard.forEach(function(level, index) {
			let id = "hardPack001-level" + pad(index, 3);
			stringifiedData[id] = JSON.stringify(level);
		});
		
		
		return stringifiedData;
	}
};

module.exports = stringifier_module;
