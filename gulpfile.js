
// I don't need all these plugins for this assignment, 
// but I'm following along here:
// https://markgoodyear.com/2014/01/getting-started-with-gulp/

var gulp = require('gulp'),
    //sass = require('gulp-ruby-sass'),
    mocha = require('gulp-mocha'),
    //autoprefixer = require('gulp-autoprefixer'),
    //minifycss = require('gulp-cssnano'),          //gulp-minify-css is depricated
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    //uglify = require('gulp-uglify'),
    //imagemin = require('gulp-imagemin'),
    //rename = require('gulp-rename'),
    //concat = require('gulp-concat'),
    //notify = require('gulp-notify'),
    //cache = require('gulp-cache'),
    gutil = require('gulp-util'),
    lazypipe = require('lazypipe'),
    //livereload = require('gulp-livereload'),
    del = require('del');
    
	// Doesn't really transform much yet
    var jsTransform = lazypipe()
		.pipe(jshint)
		.pipe(jshint.reporter, stylish);
		//.pipe(uglify);
    
    
    gulp.task( 'validate', function() {
	    return gulp.src( [ '*.js', '*.json', 'test/*.js'], {read: true} )
	    	    .pipe( jsTransform() );
    });
    
    gulp.task( 'run-tests', function() {
	    return gulp.src( [ 'test/*.js'], {read: false} )
	    .pipe( mocha( { reporter: 'spec',
                        //globals: { chai: require('chai') },  // this seems to do nothing
	                    ui: 'bdd' 
	                  } ) );
    });
    
    gulp.task( 'watch-test', function(){
	    gulp.watch( [ '*.js', 'test/**' ], [ 'run-tests' ] );
    });
    
    gulp.task( 'default', ['run-tests', 'validate'] );
    gulp.task( 'test', ['run-tests', 'validate', 'watch-test' ] );