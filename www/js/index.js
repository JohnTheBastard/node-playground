var BitmapTransformer = require( './bitmapTransformer' ).BitmapTransformer;

/*
console.log( __dirname );
console.log( __filename );
console.log( process.cwd() );
*/


// Why is this failing?
//var filePath = '../img/bitmap.bmp';
var filePath = process.cwd() + '/www/img/';
var fileName = 'bitmap.bmp';

var bmt = new BitmapTransformer( filePath, fileName, 0.9 );
//var buffer = bmt.buffer;
//console.log(bmt.buffer);

//console.log(buffer);

