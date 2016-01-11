var BitmapTransformer = require( './bitmapTransformer' ).BitmapTransformer;

// Why is this failing?
//var filePath = '../img/bitmap.bmp';

var filePath = process.cwd() + '/www/img/';
var fileName = 'bitmap.bmp';

var bmt = new BitmapTransformer( filePath, fileName, 0.5 );

console.log( bmt.bitmapData.fileType === "4d42" );

