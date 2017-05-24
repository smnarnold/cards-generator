var gulp          = require('gulp');
var handleErrors  = require('../lib/handleErrors');
var path          = require('path');
var gulpStylelint = require('gulp-stylelint');

var paths = {
    src: path.join(global.paths.src, 'scss/**/*.scss'),
    abstracts: path.join(global.paths.src, 'scss/abstracts/**/*.scss'),
    vendors: path.join(global.paths.src, 'scss/vendors/**/*.scss'),
};

var stylesLintTask = function () {
    return gulp.src([paths.src, '!' + paths.abstracts, '!' + paths.vendors])
        .pipe(gulpStylelint({
            failAfterError: true,
            reporters: [
                {formatter: 'string', console: true},
            ]
        }));
};

gulp.task('stylesLint', stylesLintTask);
module.exports = stylesLintTask;