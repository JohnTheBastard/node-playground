

"use strict";
var fleventy_module = {
	fleventy: function (hex) {
		let output = "";
		
		let tens = {
				"0": "",
				"1": "tenty",
				"2": "twenty",
				"3": "thirty",
				"4": "fourty",
				"5": "fifty",
				"6": "sixty",
				"7": "seventy",
				"8": "eighty",
				"9": "ninety",
				"A": "atta",
				"a": "atta",
				"B": "bibbity",
				"b": "bibbity",
				"C": "city",
				"c": "city",
				"D": "dickety",
				"d": "dickety",
				"E": "ebbity",
				"e": "ebbity",
				"F": "fleventy",
				"f": "fleventy"
			},
			ones = {
				"0": "",
				"1": "one",
				"2": "two",
				"3": "three",
				"4": "four",
				"5": "five",
				"6": "six",
				"7": "seven",
				"8": "eight",
				"9": "nine",
				"a": "ay",
				"b": "bee",
				"c": "cee",
				"d": "dee",
				"e": "eee",
				"f": "eff"
			};
			
		function flevify(chars) {
			chars[0] = tens[chars[0]];
			chars[1] = ones[chars[1]];
			if (chars[1] = "" ) {
				return chars[0];
			} else {
				return chars.join("-")
			}
		}
		
		let leastSig = hex.toString(16).split("").reverse().slice(0,2).reverse();
		let mostSig = hex.toString(16).split("").reverse().slice(2,4).reverse();
		if (mostSig.length > 0) {
			output = flevify(mostSig) + " bitey ";
		}
		
		output += flevify(leastSig);
		return output;
	}
};

module.exports = fleventy_module;