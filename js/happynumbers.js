// Happy Numbers
/*
 *	n is happy if sum of squares of digits (eventually) equals 1
 */
 
function happyNumber(n) {
	var pastValues = [];
	pastValues.push(n);
	
	function notInPastValues(n) {
		for(var ii = 0; ii < pastValues.length; ii ++) {
			if( n == pastValues[ii] ){ return false;}
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
		
		console.log(n + " =>" + sum);
		
		if (notInPastValues(sum)) {pastValues.push(sum)};
		
		return sum;
	}
	
	function hn_rec(integer) {
		if (integer === 1) { return true; }
		else if (!notInPastValues(integer)) { return false; }
		else { return hn_rec(sumDigitSquares(integer)); }	
	}

	n = sumDigitSquares(n);
	
	return hn_rec(n);
 }
 
for (var jj = 1; jj < 101; jj++) {
	console.log( jj + " => " + happyNumber(jj) );
}
 
