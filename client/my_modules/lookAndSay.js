'use strict';
//const assert = require('chai').assert;

let lookAndSay_module = {
	lookAndSay( s, n ) {
		const regex = /(1+|2+|3+|4+|5+|6+|7+|8+|9+|0+)/g;
		for(let ii = 0; ii < n; ii++) {
			console.log(s);
			s = s.replace(regex, (c) => (c.length.toString() + c[0]) );
		}
		return s;
	}
};
module.exports = lookAndSay_module;