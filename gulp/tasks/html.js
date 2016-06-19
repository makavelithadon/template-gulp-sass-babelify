var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    cached = require('gulp-cached'),
    config = require('../config/config');

module.exports = function (reload) {
    return function () {
        return gulp.src(config.paths.html)
            .pipe(plumber())
            .pipe(cached('html'))
            .pipe(reload(config.browsersync.options));
    };
};
