var shuffle_module = {
	shuffle: function (deck) {
		Array.prototype.shuffle = function() {
			return this.map( function(n) { return [ Math.random(), n ]; } )
				.sort().map( function(n) { return n[1]; } );
		};
		
		return deck.shuffle(deck);
	}
};

module.exports = shuffle_module;