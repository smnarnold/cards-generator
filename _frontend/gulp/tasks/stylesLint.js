var gulp         = require('gulp');
var handleErrors = require('../lib/handleErrors');
var path         = require('path');
var sassLint     = require('gulp-sass-lint');

var paths = {
    src: path.join(global.paths.src, 'scss/**/*.scss'),
    abstracts: path.join(global.paths.src, 'scss/abstracts/**/*.scss'),
    vendors: path.join(global.paths.src, 'scss/vendors/**/*.scss'),
};

var stylesLintTask = function () {
    return gulp.src([paths.src, '!' + paths.abstracts, '!' + paths.vendors])
        .pipe(sassLint({configFile: './.sass-lint.yml'}))
        .pipe(sassLint.format())
        .on('error', handleErrors)
        .pipe(sassLint.failOnError())
};

gulp.task('stylesLint', stylesLintTask);
module.exports = stylesLintTask;