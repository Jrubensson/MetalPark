/*jslint node: true */

var gulp = require('gulp');
var config = require('../config')();
var utils = require('../gulp.utils')();

var browserSync = require('browser-sync');

//Our lite server
gulp.task('browser-sync', function() {
    browserSync({
        proxy: config.url,
        "notify": false
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Watch scss AND php files, doing different things with each.
gulp.task('serve', ['browser-sync'], function () {
    gulp.watch(config.paths.css, ['styles']);
    gulp.watch("**/*.html", ['bs-reload']);
});
