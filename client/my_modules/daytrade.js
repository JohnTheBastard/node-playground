var daytrade_module = {
	trade: function (str) {
		
		function compare(a,b) {
			return b[0] - a[0];
		}

		var ticks = str.split(" ").map( (cv, ii) => [ Number(cv), ii]).sort(compare);
		
		function Trade(buy, sell) {
			this.buy = buy;
			this.sell = sell;
			this.gain = buy - sell;
		}

		function fromTheTop() {
			for( var ii = 0; ii < ticks.length; ii++ ) {  
				for( var jj = ticks.length-1; jj >= 0; jj-- ) {
					if( ticks[ii][1] > ( ticks[jj][1] + 1) ) {
						return new Trade( ticks[ii][0], ticks[jj][0] );
					}
				}
			}
		}
		
		function fromTheBottom() {
			for( var jj = ticks.length-1; jj >= 0; jj-- ) {  
				for( var ii = 0; ii < ticks.length; ii++ ) {
					if( ticks[ii][1] > ( ticks[jj][1] + 1) ) {
						return new Trade( ticks[ii][0], ticks[jj][0] );
					}
				}
			}
		}
		
		var maxima1 = fromTheTop();
		var maxima2 = fromTheBottom();
		
		return ( maxima1.gain > maxima2.gain ) ? maxima1.sell + " " + maxima1.buy : maxima2.sell + " " + maxima2.buy;

	}
};

module.exports = daytrade_module;