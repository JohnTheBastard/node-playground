(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var longestPalindrome_module = {
	findLongestPalindrome: function (str) {
		var reversed = function(str){
			return str.split('').reverse().join('');
		};

		var isPalindrome = function (str){
			return str === reversed(str);
		};
	
		var allPalindromes = function (str){
			var palindromes = [];
			for (var ii = 0; ii < str.length; ii++) {
				for(var jj = ii + 2; jj < str.length; jj++){
					var sub = str.slice(ii, jj);
					if ( isPalindrome( sub ) ) {
						palindromes.push(sub);
					}
				}
			}
			return palindromes;
		};
	
		var returnLongestOf = function(arrayOfStrings) {
			var watermark = 0;
			for( var ii = 0; ii < arrayOfStrings.length; ii++) {
				if (arrayOfStrings[ii].length > arrayOfStrings[watermark]) {
					watermark = ii;
				}
			}
			return arrayOfStrings[watermark];
		}
		
		return returnLongestOf( allPalindromes(str) ) || str.charAt(0);
	}
}

module.exports = longestPalindrome_module;
},{}],2:[function(require,module,exports){
var someStrings = ["aabbaa", "xabacd", "abbaxcd", "dacxcabbbad",
				   "able was i ere i saw elba aaaabbbaaaaa", "dabxcbad"];

var findpal = require( './findLongestPalindrome' ).findLongestPalindrome;

console.log( findpal( someStrings[4] ) );

//alert("foo");

},{"./findLongestPalindrome":1}]},{},[2])


//# sourceMappingURL=bundle.js.map
