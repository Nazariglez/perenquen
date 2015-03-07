var gulp = require('gulp'),
    watchify = require('watchify'),
    getBundler = require('./build.js').getBundler,
    createBundle = require('./build.js').createBundle;

function watch(){
    var bundler = watchify(getBundler(watchify.args));

    bundler.on('update', function(){
        console.log('Building...');
        var bundle = createBundle(bundler);
    });

    bundler.on('time', function(time){
        console.log('Done in ' + (time/1000) + ' seconds.');
    });

    return createBundle(bundler);
}

gulp.task('watch', function(){
    return watch();
});