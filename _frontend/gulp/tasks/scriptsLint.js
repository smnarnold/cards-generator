const gulp         = require('gulp');
const eslint       = require('gulp-eslint');
const handleErrors = require('../lib/handleErrors');
const path         = require('path');

let paths = {
  src: [
    path.join(global.paths.assets.src, 'js/**/*.js'),
    '!node_modules/**'
  ],
};

let scriptsLintTask = function () {
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(paths.src)
    .on('error', handleErrors)
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint({
      configFile: './.eslintrc.js',
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
};

gulp.task('scriptsLint', scriptsLintTask);
module.exports = scriptsLintTask;
