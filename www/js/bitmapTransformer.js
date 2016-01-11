var fs = require('fs');

var Offset = function(n){
	var self = this;
	self.incrementBy = function(n) { self.value += n; };
	self.decrementBy = function(n) { self.value -= n; };
	self.set = function(n) { self.value = n; };
	self.init = function(){ self.value = n || 0; };
	self.init();
};
	
var read = function(buffer, offset, length, count, signed) {
	var returnValue = [];
	for (var ii = 0; ii < count; ii++) {
		if( !signed ) { 
			if( length === 8 ) {
				returnValue.push( buffer.readUInt8( offset.value ).toString( 16 ) );
				offset.incrementBy(1);
			} else if( length === 16 ) {
				returnValue.push( buffer.readUInt16LE( offset.value ).toString( 16 ) );
				offset.incrementBy(2);
			} else if( length === 32 ) {
				returnValue.push( buffer.readUInt32LE( offset.value ).toString( 16 ) );
				offset.incrementBy(4);
			}
		} else if( signed ) {
			if( length === 8 ) {
				returnValue.push( buffer.readInt8( offset.value ).toString( 16 ) );
				offset.incrementBy(1);
			} else if ( length === 16 ) {
				returnValue.push( buffer.readInt16LE( offset.value ).toString( 16 ) );
				offset.incrementBy(2);
			} else if( signed && length === 32 ) {
				returnValue.push( buffer.readInt32LE( offset.value ).toString( 16 ) );
				offset.incrementBy(4);
			}
		}
	}
	return returnValue.join("");
};

var write = function(value, buffer, offset, length, count, signed) {
	for (var ii = 0; ii < count; ii++) {
		if( !signed ) { 
			if( length === 8 ) {
				buffer.writeUInt8( parseInt(value, 16), offset.value );
				offset.incrementBy(1);
			} else if( length === 16 ) {
				buffer.writeUInt16LE( parseInt(value, 16), offset.value );
				offset.incrementBy(2);
			} else if( length === 32 ) {
				buffer.writeUInt32LE( parseInt(value, 16), offset.value );
				offset.incrementBy(4);
			}
		} else if( signed ) {
			if( length === 8 ) {
				buffer.writeInt8( parseInt( value, 16), offset.value );
				offset.incrementBy(1);
			} else if ( length === 16 ) {
				buffer.writeInt16LE( parseInt(value, 16), offset.value );
				offset.incrementBy(2);
			} else if( signed && length === 32 ) {
				buffer.writeInt32LE( parseInt(value, 16), offset.value );
				offset.incrementBy(4);
			}
		}
	}

};
	
var BitmapData = function(buffer, offset) {
	var self = this;
	self.parseHeader = function() {
		self.fileType = read( buffer, offset, 16, 1 );
		self.fileLength = read( buffer, offset, 32, 1 );
		offset.incrementBy(4);                // Skip unused bits
		self.dataOffset = read( buffer, offset, 32, 1 );
		self.headerLength = read( buffer, offset, 32, 1 );
		self.bmwidth = read( buffer, offset, 32, 1 );
		self.bmheight = read( buffer, offset, 32, 1 );
		self.colorPlanes = read( buffer, offset, 16, 1 );
		self.pixelDepth = read( buffer, offset, 16, 1 );
		self.compression = read( buffer, offset, 32, 1 );
		self.imageSize = read( buffer, offset, 32, 1 );
		self.horizontalRes = read( buffer, offset, 32, 1, "signed" );
		self.verticalRes = read( buffer, offset, 32, 1, "signed" );
		self.paletteDepth = read( buffer, offset, 32, 1 );
		self.colorsUsed = read( buffer, offset, 32, 1 );
		self.paletteOffset = offset.value;
		self.paletteLength = 128;
	};
	self.parseHeader();
};

var ColorTable = function( buffer, bitmapData, offset ) {
	var self = this;
	self.table = [];
	self.init = function() {
	    offset.set( bitmapData.paletteOffset );
		var colorDepth = bitmapData.paletteLength / 4;
	    for(var ii=0; ii < colorDepth; ii++) {
		    var pixel = { blue:  read(buffer, offset, 8, 1),
						  green: read(buffer, offset, 8, 1),
						  red:   read(buffer, offset, 8, 1),
						  alpha: read(buffer, offset, 8, 1) };
		    self.table.push( pixel );
	    }			
	};
	
	self.transform = function( scalar ) {
		    function scale(pixel) {
			    for(var channel in pixel) {
					pixel[channel] = Math.floor( parseInt( pixel[channel], 16 ) * scalar ).toString(16);
			    }
			    return pixel;
		    }
		    self.table = self.table.map( (pixel) => scale(pixel) );
	    };
	this.init();
};


var bitmapTransformer_module = {
    BitmapTransformer: function( filePath, fileName, scalar ) {
		var self = this;
	    //self.buffer = new Buffer( 0x2B46 );     // 0x2B46 is the size of our file
		
		var file = filePath + fileName;

		var getBufferData = function( file, async_option ) {
			if( async_option === 'async' ) {
				fs.readFile( file, ( error, data ) => {
					if (error) { throw error; }
					return data;
				});
			} else {
				return fs.readFileSync( file );     
			}
	    };	    
	    
	    var writeNewColorMap = function(color, buffer, bitmapData, offset) {
			offset.set(bitmapData.paletteOffset);
			var colorDepth = bitmapData.paletteLength / 4;
		    for(var ii=0; ii < colorDepth; ii++) {
				write( color.table[ii].blue, buffer, offset, 8, 1 );
				write( color.table[ii].green, buffer, offset, 8, 1 );
				write( color.table[ii].red, buffer, offset, 8, 1 );	
				write( color.table[ii].alpha, buffer, offset, 8, 1 );
			}
	    };
	    
	    var putBufferData = function ( filePath, buffer, async_option ) {
		    var file = filePath + 'transform.bmp';
			if( async_option === 'async' ) {
				// This code is untested, probably doesn't work
				fs.write(file, buffer, 0, 0, ( error, data ) => {
					if (error) { throw error; }
					return data;
				});
				
			} else {
				fs.writeFileSync(file, buffer);
		    }			
	    };
	    
	    self.buffer = getBufferData( file );
		//console.log( buffer instanceof Buffer);
		self.offset = new Offset(0);
	    self.bitmapData = new BitmapData( self.buffer, self.offset);
	    self.color = new ColorTable( self.buffer, self.bitmapData, self.offset);
		
		self.color.transform( scalar );
	    
	    writeNewColorMap( self.color, self.buffer, self.bitmapData, self.offset);
	    
	    putBufferData( filePath, self.buffer );
    }
};

module.exports = bitmapTransformer_module;







