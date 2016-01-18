var roman = require( './roman' ).roman;
var inputs = [ "III", "IV", "V", "XLIV", "XXXIV", "XIX" ];

inputs.forEach( (num) => console.log(  roman( num ) ) );