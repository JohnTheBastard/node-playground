var someStrings = ["aabbaa", "xabacd", "abbaxcd", "dacxcabbbad",
				   "able was i ere i saw elba aaaabbbaaaaa", "dabxcbad"];

var testStrings = ["xabacd", "xdabadcd", "xabbacd", "drracxcabbbcd", "dacabacax", "xabacab"]
var testAnswers = ["aba", "dabad", "abba", "acxca", "acabaca", "bacab"];

var findLongest = require( './findLongestPalindrome' ).findLongestPalindrome;

for(var ii = 0; ii < testStrings.length; ii++) {
	console.log( findLongest( testStrings[ii] ) + " == " + testAnswers[ii] + " ?" );
}
