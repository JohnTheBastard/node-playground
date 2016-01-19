const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserify = require('browserify');
const browserSync = require('browser-sync');
const buffer = require('vinyl-buffer');
const cache = require('gulp-cache');
const concat = require('gulp-concat');
const del = require('del');
const gutil = require('gulp-util');
const imagemin = require('gulp-imagemin');
const jshint = require('gulp-jshint');
const lazypipe = require('lazypipe');
const livereload = require('tiny-lr')();            //preferred to gulp-livereload
const mocha = require('gulp-mocha');
const minifycss = require('gulp-cssnano');          //gulp-minify-css is depricated
const nodemon = require('gulp-nodemon');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const sass = require('gulp-ruby-sass');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const stylish = require('jshint-stylish');
const uglify = require('gulp-uglify');
    
var reload = browserSync.reload;

console.log(process.argv);
    
// Doesn't really transform much yet
var jsTransform = lazypipe()
	.pipe(jshint)
	.pipe(jshint.reporter, stylish)
	.pipe(babel)
	.pipe(uglify);    
    
gulp.task( 'validate', function() {
    return gulp.src( [ './*.js', './client/**/*.js',  './test/*.js'], {read: true} )
			   .pipe( jsTransform() );
});

gulp.task('serve', function() {
    browserSync({
		server: {
			baseDir: 'client/public'
		}
	});
	gulp.watch(['client/**'], reload);
});

gulp.task('bundle', function () {
	// set up the browserify instance on a task basis
	var b = browserify({
		entries: './client/my_modules/index.js',
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
		.pipe(gulp.dest('./client/public'));
});

gulp.task( 'watch-js', function() {
	gulp.watch(['./client/my_modules/**'], ['bundle']);
});

gulp.task( 'start', ['bundle', 'watch-js', 'serve']);

gulp.task( 'run-tests', function() {
    return gulp.src( [ './test/*.js'], {read: false} )
    .pipe( mocha( { reporter: 'spec',
					compilers: [ 'js:babel-core/register' ],
					//globals: { chai: require('chai') },  // this seems to do nothing
					ui: 'bdd' 
	} ) );
});

gulp.task('build', () => {
	return gulp.src('./**/*.js')
			   .pipe( jsTransform() )
			   .pipe(gulp.dest('dist'));
});

    
gulp.task( 'watch-test', function(){
	gulp.watch( [ './client/my_modules/*.js', './src/test/**' ], [ 'run-tests' ] );
});

    
gulp.task( 'default', ['run-tests', 'validate'] );
gulp.task( 'test', ['run-tests', 'validate', 'watch-test' ] );

gulp.task( 'test-arg', function() {
	return gulp.src( [ './client/test/' + process.argv[4] + 'Tests.js'], {read: false} )
	    .pipe( mocha( { reporter: 'spec',
		    			useColors: true,
						compilers: [ 'js:babel-core/register' ],
						//globals: { chai: require('chai') },  // this seems to do nothing
						ui: 'bdd' 
		} ) );
	});


gulp.task( 'express-start', function() {
	nodemon({
		script: './src/www/index.js',
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