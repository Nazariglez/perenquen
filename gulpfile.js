var gulp = require('gulp'),
    config = require('./gulp/config.json'),
    requireDir = require('require-dir');

var tasks = requireDir('./gulp/tasks');

gulp.task('default', [config.defaultTask]);