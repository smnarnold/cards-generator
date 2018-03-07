var gulp    = require('gulp');
var csscomb = require('gulp-csscomb');
var path    = require('path');

var paths = {
  src: path.join(global.paths.assets.src, 'scss/!(abstracts|bootstrap|vendors)/**/*.scss'),
  dest: path.join(global.paths.assets.src, 'scss'),
};

var stylesCombTask = function () {
  return gulp.src(paths.src, {base: paths.dest})
    .pipe(csscomb({
      config: './.csscomb.json',
      // verbose: true,
    }))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('stylesComb', stylesCombTask);
module.exports = stylesCombTask;
