'use strict';
//const assert = require('chai').assert;

let lookAndSay_module = {
	lookAndSay( s, n ) {
		s = s.toString();
		const list = [s];          // save steps here incase we want them
		const look = /(\d)\1*/g    // effectively: /(1+|2+|3+|4+|5+|6+|7+|8+|9+|0+)/g;
		const say = c => String.raw`${c.length}${c[0]}`;
		while( n-- ) {
        	list.push( s = s.replace( look, say ) );
    	}
		return s;
	}
};
module.exports = lookAndSay_module;