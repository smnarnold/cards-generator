var gulp          = require('gulp');
var gulpStylelint = require('gulp-stylelint');
var path          = require('path');

var paths = {
    src: [
        path.join(global.paths.assets.src, 'scss/!(vendors)/**/*.scss'),
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