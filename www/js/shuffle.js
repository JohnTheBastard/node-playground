var shuffle_module = {
	shuffle: function () {
		return this.map( n => [ Math.random(), n ] )
				   .sort()
				   .map( n => n[1] );
	}
};

module.exports = shuffle_module;