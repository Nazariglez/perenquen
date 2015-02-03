var gulp = require('gulp'),
    header = require('gulp-header'),
    uglify = require('gulp-uglifyjs'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),

    config = require('./config.json');

var headerPattern = config.header.join('\n');
config.date = (new Date()).toString();

gulp.task('compile', function(){
    var scripts = (config.libs).concat(config.sources);

    return gulp.src(scripts)
        .pipe(uglify(config.filename.min + '.js'))
        .on("error", function() {
            this.emit('end');
        })
        .pipe(header(headerPattern, config))
        .pipe(gulp.dest('./build'));
});

//TODO: Los sourcemaps salen fatal si usas insert, no referencian nada.
gulp.task('compileDev', function(){
    var scripts = (config.libs).concat(config.sources);

    return gulp.src(scripts)
        .pipe(sourcemaps.init())
        .pipe(concat(config.filename.dev + '.js'))
        .on("error", function() {
            this.emit('end');
        })
        .pipe(sourcemaps.write('./'))
        //.pipe(header(headerPattern, config))
        .pipe(gulp.dest('./build'));
});

gulp.task('lint', function(){
     return gulp.src(config.sources)
         .pipe(jshint())
         .pipe(jshint.reporter('default'));
});


gulp.task('watch', function(){
    gulp.watch('./config.json', ['lint','compileDev']);

    gulp.watch('./src/**/*.js', ['lint','compileDev']);
    gulp.watch('./src/**/*.json', ['lint','compileDev']);
});

gulp.task('dev', ['lint', 'compileDev', 'watch']);
gulp.task('default', ['lint', 'compile']);
