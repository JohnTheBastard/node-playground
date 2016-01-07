var someStrings = ["aabbaa", "xabacd", "abbaxcd", "dacxcabbbad",
				   "able was i ere i saw elba aaaabbbaaaaa", "dabxcbad"];

var findpal = require( './js/findLongestPalindrome' ).findLongestPalindrome;
console.log( findpal( someStrings[5] ) );
