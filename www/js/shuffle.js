var array_utils_module = {
	unique: function() {
		var self = this;
		var noDupes = [];
		self.sort().map( function( value, index, collection ){
			if (value !== collection[index - 1]) { noDupes.push(value); }
			return value;
		});
		return noDupes;
	},
	shuffle: function () {
		return this.map( n => [ Math.random(), n ] )
				   .sort()
				   .map( n => n[1] );
	}
};

module.exports = array_utils_module;