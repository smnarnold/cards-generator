var gulp          = require('gulp');
var handleErrors  = require('../lib/handleErrors');
var path          = require('path');
var gulpStylelint = require('gulp-stylelint');

var paths = {
    src: [
        path.join(global.paths.assets.src, 'scss/**/*.scss'),
        '!' + path.join(global.paths.assets.src, 'scss/abstracts/**'),
        '!' + path.join(global.paths.assets.src, 'scss/vendors/**'),
    ]
};

var stylesLintTask = function () {
    return gulp.src(paths.src)
        .pipe(gulpStylelint({
            failAfterError: true,
            reporters: [
                {formatter: 'string', console: true},
            ]
        }));
};

gulp.task('stylesLint', stylesLintTask);
module.exports = stylesLintTask;