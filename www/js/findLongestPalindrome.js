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
		};
		
		return returnLongestOf( allPalindromes(str) ) || str.charAt(0);
	}
};

module.exports = longestPalindrome_module;