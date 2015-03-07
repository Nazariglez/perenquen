var gulp = require('gulp'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream');

var entryPoint = './src/index.js',
    debugMode = true,
    namespace = 'PQ';

var args = watchify.args || {};
args.debug = debugMode;
args.fullPaths = false;
args.standalone = namespace;

var bundle = browserify(entryPoint, args);
var bundler = watchify(bundle);

function createBundle(){
    console.log('Now building...');
    return bundler.bundle()
        .pipe(source('perenquen.js'))
        .pipe(gulp.dest('./build'));
}

gulp.task('dev', createBundle);
bundler.on('update', createBundle);

bundler.on('time', function(time){
    console.log('Done at ' + (time/1000));
});

gulp.task('default', ['dev']);