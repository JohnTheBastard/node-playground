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
		console.log( "file type:        ", self.fileType, " at ", offset.value-2 );
		
		self.fileLength = read( buffer, offset, 32, 1 );
		console.log( "file length:      ", self.fileLength, " at ", offset.value-4  );
		
		offset.incrementBy(4);
		self.dataOffset = read( buffer, offset, 32, 1 );
		console.log( "data begins:      ", self.dataOffset, " at ", offset.value-4 );
		
		self.headerLength = read( buffer, offset, 32, 1 );
		console.log( "length of header: ", self.headerLength, " at ", offset.value-4 );
		
		self.bmwidth = read( buffer, offset, 32, 1 );
		console.log( "width:            ", self.bmwidth, " at ", offset.value-4 );
		
		self.bmheight = read( buffer, offset, 32, 1 );
		console.log( "height:           ", self.bmheight, " at ", offset.value-4 );
		
		self.colorPlanes = read( buffer, offset, 16, 1 );
		console.log( "color planes:     ", self.colorPlanes, " at ", offset.value-2 );
		
		self.pixelDepth = read( buffer, offset, 16, 1 );
		console.log( "depth:            ", self.pixelDepth, " at ", offset.value-2 );
		
		self.compression = read( buffer, offset, 32, 1 );
		console.log( "compression:      ", self.compression, " at ", offset.value-4 );
		
		self.imageSize = read( buffer, offset, 32, 1 );
		console.log( "image size:       ", self.imageSize, " at ", offset.value-4 );
		
		self.horizontalRes = read( buffer, offset, 32, 1, "signed" );
		console.log( "horizontal res:   ", self.horizontalRes, " at ", offset.value-4 );

		self.verticalRes = read( buffer, offset, 32, 1, "signed" );
		console.log( "vertical res:     ", self.verticalRes, " at ", offset.value-4 );
		
		self.paletteDepth = read( buffer, offset, 32, 1 );
		console.log( "palette depth:    ", self.paletteDepth, " at ", offset.value-4 );
		
		self.colorsUsed = read( buffer, offset, 32, 1 );
		console.log( "colors used:      ", self.colorsUsed, " at ", offset.value-4 );
		
		self.paletteOffset = offset.value;
		self.paletteLength = 128;
		console.log( "palette offset:   ", self.paletteOffset ); //, "\npalette length:   ", self.paletteLength );
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
			if( async_option == 'async' ) {
				fs.readFile( file, ( error, data ) => {
					if (error) throw error;
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
			}
	    };
	    
	    var putBufferData = function ( filePath, buffer, async_option ) {
		    var file = filePath + 'transform.bmp';
			if( async_option == 'async' ) {
				/*
				fs.write(file, buffer, 0, 0, ( error, data ) => {
					if (error) throw error;
					return data;
				});
				*/
			} else {
				fs.writeFileSync(file, buffer);
		    }			
	    };
	    
	    var buffer = getBufferData( file );
		//console.log( buffer instanceof Buffer);
		var offset = new Offset(0);
	    var bitmapData = new BitmapData(buffer, offset);
	    var color = new ColorTable( buffer, bitmapData, offset);
		
		color.transform( scalar );
	    
	    writeNewColorMap(color, buffer, bitmapData, offset);
	    
	    putBufferData( filePath, buffer );
    }
};

module.exports = bitmapTransformer_module;







