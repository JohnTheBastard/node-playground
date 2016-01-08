var FS = require('fs');

var bitmapTransformer_module = {
    BitmapTransformer: function( pathToFile ) {
		var self = this;
	    //self.buffer = new Buffer( 0x2B46 );     // 0x2B46 is the size of our file

		self.getBufferData = function( file, async_option ) {
			if( async_option == 'async' ) {
				FS.readFile( file, ( error, data ) => {
					if (error) throw error;
				return data;
				});
			} else {
				return FS.readFileSync( file );     
			}
	    };
	    
	    self.buffer = self.getBufferData( pathToFile );
	    
	    

console.log( self.buffer instanceof Buffer);

console.log("Int8: ",  self.buffer.readInt8( 0x0 ).toString(16) );
console.log("LE16: ",  self.buffer.readUInt16LE( 0x0 ).toString(16) );
console.log("BE16: ",  self.buffer.readUInt16BE( 0x0 ).toString(16) );












    }
};

module.exports = bitmapTransformer_module;







