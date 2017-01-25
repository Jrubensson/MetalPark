/*jslint node: true */

var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
sass = require("gulp-sass"),
rename = require("rename"),
importCss = require('gulp-import-css');

var config = require('../config')();

gulp.task('styles', function () {
    return gulp
        .src(config.paths.css)
        .pipe(sass({style: 'compressed'}))
        .pipe(importCss())
        .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});
