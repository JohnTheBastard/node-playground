var fizzbuzz_module = {
	fizzbuzz: function (n) {
		var f = 'fizz';
		var b = 'buzz';

		function divisibleBy(divisor) { 
			return function(dividend) { 
				return ( (dividend % divisor) === 0 );
			}; 
		}
	
		return [...Array(n)].map((x, ii) => {
			ii++;
			var value = '';
			if ( divisibleBy(3)(ii) ) value = f;
			if ( divisibleBy(5)(ii) ) value += b;
			return value || ii;
		});	
	}
}

module.exports = fizzbuzz_module;