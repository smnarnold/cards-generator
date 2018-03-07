const gulp          = require('gulp');
const gulpStylelint = require('gulp-stylelint');
const path          = require('path');

let paths = {
  src: path.join(global.paths.assets.src, 'scss/!(bootstrap|vendors)/**/*.scss'),
};

let stylesLintTask = function () {
  return gulp.src(paths.src)
    .pipe(gulpStylelint({
      configFile: './.stylelintrc.js',
      failAfterError: true,
      reporters: [
        {formatter: 'string', console: true},
      ]
    }));
};

gulp.task('stylesLint', stylesLintTask);
module.exports = stylesLintTask;
