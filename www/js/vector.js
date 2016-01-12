var vector_module = {
	unique: function() {
		var self = this;
		var noDupes = [];
		self.sort().map( function( value, index, collection ){
			if (value !== collection[index - 1]) { noDupes.push(value); }
			return value; 
		});
		return noDupes;
	},

    Vector: function(length) {
		if( typeof length === "undefined" ) {
			length = 0;
		} else if( isNaN( length ) ||
				   ( length < 0 )  ||
				   ( length % 1 === 0 ) ) {
			console.error( "Vector size is not a nonnegative integer." );
			return null;
		}
		
		var my = {};
				
		my.length = length;
		
		my.push = function(value) {
			my[ my.length.toString() ] = value;
			my.length++;
		    return true;
	    };
	    
	    my.pop = function() {
		    var value;
		    if( my.length > 0 ){
			    value = my[ my.length.toString() ];
			    delete my[ my.length.toString() ];
			    my.length--;
		    } else {
			    value = undefined;
		    }
		    return value;
	    };
	    
	    my.shift = function() {
		    var value;
		    if( my.length > 0 ){
			    value = my[ "0" ];
			    for(var ii = 1; ii < my.length; ii++) {
				    my[ ( ii - 1 ).toString() ] = my[ ii.toString() ];
			    }
			    delete my[ my.length.toString() ];
		    } else {
			    value = undefined;
		    }
		    return value;
	    };
	    
	    my.unshift = function(value) {
		    for( var ii = my.length; ii > 0 ; ii-- ) {
				    my[ ii.toString() ] = my[ ( ii - 1 ).toString() ];
			}
			my["0"] = value;
		    return true;
	    };
	    
	return my;
    }    
};

module.exports = vector_module;