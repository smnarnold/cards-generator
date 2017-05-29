var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var cssnano      = require('gulp-cssnano');
var gulpif       = require('gulp-if');
var handleErrors = require('../lib/handleErrors');
var path         = require('path');
var sass         = require('gulp-sass');
var sassGlob     = require('gulp-sass-glob');
var sizereport   = require('gulp-sizereport');
var sourcemaps   = require('gulp-sourcemaps');

var paths = {
    src: path.join(global.paths.assets.src, 'scss/**/*.scss'),
    dest: path.join(global.paths.assets.dest, 'css'),
};

var stylesTask = function () {
    return gulp.src(paths.src)
        .on('error', handleErrors)
        .pipe(gulpif(!global.production, sourcemaps.init()))
        .pipe(sassGlob())
        .pipe(sass({'indentedSyntax': false}))
        .pipe(autoprefixer({browsers: ['last 2 version']}))
        .pipe(cssnano({autoprefixer: false}))
        .pipe(gulpif(!global.production, sourcemaps.write()))
        .pipe(sizereport({gzip: true, total: false}))
        .pipe(gulp.dest(paths.dest))
        .pipe(gulpif(!global.production, browserSync.stream()));
};

gulp.task('styles', stylesTask);
module.exports = stylesTask;