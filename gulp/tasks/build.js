var gulp = require('gulp'),
    config = require('../config.json'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream');

function getBundler(args){
    args = args || {};
    args.debug = true;
    args.standalone = config.namespace;
    args.fullPaths = false;

    return browserify(config.entryPoint, args);
}

function createBundle(bundler){
    bundler = bundler || getBundler();

    return bundler.bundle()
        .pipe(source(config.bundleName + config.devSuffix + '.js'))
        .pipe(gulp.dest(config.bundleDest))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename(config.bundleName + '.js'))
        .pipe(gulp.dest(config.bundleDest));
}

gulp.task('build', function(){
    return createBundle();
});

module.exports = {
    getBundler : getBundler,
    createBundle : createBundle
};