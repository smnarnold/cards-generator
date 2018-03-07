const gulp    = require('gulp');
const csscomb = require('gulp-csscomb');
const path    = require('path');

let paths = {
  src: path.join(global.paths.assets.src, 'scss/!(abstracts|bootstrap|vendors)/**/*.scss'),
  dest: path.join(global.paths.assets.src, 'scss'),
};

let stylesCombTask = function () {
  return gulp.src(paths.src, {base: paths.dest})
    .pipe(csscomb({
      config: './.csscomb.json',
      // verbose: true,
    }))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('stylesComb', stylesCombTask);
module.exports = stylesCombTask;
