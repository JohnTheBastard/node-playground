var vector_module = {
    Vector: function(length) {
		if( typeof length === "undefined" ) {
			length = 0;
		} else if( isNaN( length ) ||
				   ( length < 0 )  ||
				   ( length % 1 !== 0 ) ) {
			console.error( "Vector size is not a nonnegative integer." );
			return null;
		}
		
		var self = this;
				
		self.length = length;
		
		self.push = function(value) {
			self[ self.length ] = value;
			self.length++;
		    return true;
	    };
	    
	    self.pop = function() {
		    var value;
		    if( self.length > 0 ){
			    self.length--;
			    value = self[ self.length ];
			    delete self[ self.length ];
		    } else {
			    value = undefined;
		    }
		    return value;
	    };
	    
	    self.shift = function() {
		    var value;
		    if( self.length > 0 ){
			    value = self[ "0" ];
			    for(var ii = 1; ii < self.length; ii++) {
				    self[ ( ii - 1 ) ] = self[ ii ];
			    }
			    self.length--;
			    delete self[ (self.length) ];
		    } else {
			    value = undefined;
		    }
		    return value;
	    };
	    
	    self.unshift = function(value) {
		    for( var ii = self.length; ii > 0 ; ii-- ) {
				    self[ ii ] = self[ ( ii - 1 ) ];
			}
			self.length++;
			self["0"] = value;
		    return true;
	    };
	    
	return self;
    }    
};

module.exports = vector_module;