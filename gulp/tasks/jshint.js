var gulp = require('gulp'),
    cached = require('gulp-cached'),
    jshint = require('gulp-jshint'),
    config = require('../config.json');

gulp.task('jshint', function(){
    return gulp.src(config.scripts)
        .pipe(cached('linting', {optimizeMemory:true}))
        .pipe(jshint())
        .pipe(jshint.reporter());
});

