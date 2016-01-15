var snond = require( './snond' ).snond;
var problemCount = require( './snond' ).problemCount;

var secretWords = [ "synchronized", "misfunctioned", "mispronounced", "shotgunned", "snond" ] ;
var badWord = "snond";


secretWords.map( (w) => console.log(  snond( w, badWord ) ) );
console.log(  "snond: ", problemCount( "snond" ) );
console.log(  "rrizi: ", problemCount( "rrizi" ) );



