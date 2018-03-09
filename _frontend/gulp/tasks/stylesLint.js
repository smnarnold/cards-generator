const gulp          = require('gulp');
const gulpif        = require('gulp-if');
const gulpStylelint = require('gulp-stylelint');
const path          = require('path');

let paths = {
  src: path.join(global.paths.assets.src, 'scss/!(bootstrap|vendors)/**/*.scss'),
  dest: path.join(global.paths.assets.src, 'scss'),
};

let stylesLintTask = function (fix) {
  return gulp.src(paths.src)
    .pipe(gulpStylelint({
      configFile: './.stylelintrc.js',
      failAfterError: false,
      fix: fix,
      reporters: [
        {formatter: 'string', console: true},
      ]
    }))
    .pipe(gulpif(fix, gulp.dest(paths.dest)));
};

gulp.task('stylesLint', () => stylesLintTask(true));
gulp.task('stylesLintWatch', () => stylesLintTask(false));
module.exports = stylesLintTask;
