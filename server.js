var app = require( './app' );

app.use( function( req, res, next ) {
   res.send( '404: no page ' + req.url ); 
});

app.listen( 8080, () => {
    console.log('app running...');
});