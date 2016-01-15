var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
	browserSync = require('browser-sync'),
	buffer = require('vinyl-buffer'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    del = require('del'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    lazypipe = require('lazypipe'),
    livereload = require('tiny-lr')(),            //preferred to gulp-livereload
    mocha = require('gulp-mocha'),
    minifycss = require('gulp-cssnano'),          //gulp-minify-css is depricated
    nodemon = require('gulp-nodemon'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    stylish = require('jshint-stylish');
    uglify = require('gulp-uglify');
    
var reload = browserSync.reload;
    
// Doesn't really transform much yet
var jsTransform = lazypipe()
	.pipe(jshint)
	.pipe(jshint.reporter, stylish);
	//.pipe(uglify);    
    
gulp.task( 'validate', function() {
    return gulp.src( [ './*.js', './www/**/*.js',  './test/*.js'], {read: true} )
			   .pipe( jsTransform() );
});

gulp.task('serve', function() {
    browserSync({
		server: {
			baseDir: 'www/public'
		}
	});
	gulp.watch(['www/**'], reload);
});

gulp.task('bundle', function () {
	// set up the browserify instance on a task basis
	var b = browserify({
		entries: './www/my_modules/index.js',
		debug: true
	});
	
	return b.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		// Add transformation tasks to the pipeline here.
		// .pipe(uglify())
		.on('error', gutil.log)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./www/public'));
});

gulp.task( 'watch-js', function() {
	gulp.watch(['./www/my_modules/**'], ['bundle']);
});

gulp.task( 'start', ['bundle', 'watch-js', 'serve']);

gulp.task( 'run-tests', function() {
    return gulp.src( [ './test/*.js'], {read: false} )
    .pipe( mocha( { reporter: 'spec',
	    //globals: { chai: require('chai') },  // this seems to do nothing
		ui: 'bdd' 
	} ) );
});
    
gulp.task( 'watch-test', function(){
	gulp.watch( [ './www/my_modules/*.js', './test/**' ], [ 'run-tests' ] );
});
    
gulp.task( 'default', ['run-tests', 'validate'] );
gulp.task( 'test', ['run-tests', 'validate', 'watch-test' ] );

gulp.task( 'express-start', function() {
	nodemon({
		script: './www/index.js',
    })
	.on('restart', function () {
		console.log('restarted!');
		livereload.changed( {body: { files: __dirname }} );
	});
	
	livereload.listen(35729);
	
	gulp.watch(['./views/**/*.jade' ], function(event){
		var fileName = require('path').relative('3000', event.path);
		livereload.changed({
			body: { files: [fileName] }
		});
	});

	
});