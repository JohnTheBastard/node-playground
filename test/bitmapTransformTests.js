var assert = require( 'chai' ).assert;
var BitmapTransformer = require( '../www/js/bitmapTransformer' ).BitmapTransformer;

// It annoys me that the file path is relative to the script file not the test file...

/*
var pathToFile = '../img/bitmap.bmp';
var bmt = new BitmapTransformer( pathToFile );
var buffer = bmt.getBufferData( pathToFile );
*/

var filePath = process.cwd() + '/www/img/';
var fileName = 'bitmap.bmp';

var bmt = new BitmapTransformer( filePath, fileName, 0.5 );

describe( 'tests BitmapTransformer object methods', function() {
    it( 'should read a file', function(){
		assert( bmt.buffer );
		assert( bmt.buffer instanceof Buffer );
    });
    it( 'should parse the header corectly', function(){
		assert( bmt.bitmapData.fileType === "4d42" );
		assert( bmt.bitmapData.fileLength === "2b46" );
		assert( bmt.bitmapData.dataOffset === "436" );
		assert( bmt.bitmapData.headerLength === "28" );
		assert( bmt.bitmapData.bmwidth === "64" );
		assert( bmt.bitmapData.bmheight === "64" );
		assert( bmt.bitmapData.colorPlanes === "1" );
		assert( bmt.bitmapData.pixelDepth === "8" );
		assert( bmt.bitmapData.compression === "0" );
		assert( bmt.bitmapData.imageSize === "2710" );
		assert( bmt.bitmapData.horizontalRes === "b12" );
		assert( bmt.bitmapData.verticalRes === "b12" );
		assert( bmt.bitmapData.paletteDepth === "100" );
		assert( bmt.bitmapData.colorsUsed ===  "100" );
    });
});
