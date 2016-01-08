// Happy Numbers
/*
 *	n is happy if sum of squares of digits (eventually) equals 1
 */


// I broke something. E.g., 7, 19 should return true. I should write some tests.

/*
The 143 happy numbers up to 1,000 are:

1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100, 103, 109, 129, 130, 133, 139, 167, 176, 188, 190, 192, 193, 203, 208, 219, 226, 230, 236, 239, 262, 263, 280, 291, 293, 301, 302, 310, 313, 319, 320, 326, 329, 331, 338, 356, 362, 365, 367, 368, 376, 379, 383, 386, 391, 392, 397, 404, 409, 440, 446, 464, 469, 478, 487, 490, 496, 536, 556, 563, 565, 566, 608, 617, 622, 623, 632, 635, 637, 638, 644, 649, 653, 655, 656, 665, 671, 673, 680, 683, 694, 700, 709, 716, 736, 739, 748, 761, 763, 784, 790, 793, 802, 806, 818, 820, 833, 836, 847, 860, 863, 874, 881, 888, 899, 901, 904, 907, 910, 912, 913, 921, 923, 931, 932, 937, 940, 946, 964, 970, 973, 989, 998, 1000

*/

var happyNumber_module = {
	happyNumber: function (n) {
		var pastValues = [];
		pastValues.push(n);
	
		function notInPastValues(n) {
			for(var ii = 0; ii < pastValues.length; ii ++) {
				if( n === pastValues[ii] ){ 
					return false;
				}
			}
			return true;
		}
	
		function sumDigitSquares(integer) {
			var str = integer.toString();
			var sum = 0;
			for( var ii = 0; ii < str.length; ii++) {
				var digit = Number( str.slice(ii,ii+1) );
				sum += digit * digit;
			}
		
			//console.log(n + " =>" + sum);
		
			if ( notInPastValues(sum) ) {
				pastValues.push(sum);
			}
		
			return sum;
		}
	
		function hn_rec(integer) {
			if (integer === 1) { return true; }
			else if (!notInPastValues(integer)) { return false; }
			else { return hn_rec(sumDigitSquares(integer)); }	
		}
	
	n = sumDigitSquares(n);
	
	return hn_rec( sumDigitSquares(n) );
	}
};

module.exports = happyNumber_module;